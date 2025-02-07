"use client";
import { useState, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover/popover";
import {
  Command,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command/command";
import { Button } from "@/components/ui/button/button";
import { Badge } from "@/components/ui/badge/badge";
import { X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area/scroll-area";

interface CountryOption {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: () => Promise<CountryOption[]>; 
  placeholder?: string;
  loading?: boolean;
  onChange: (selected: string[]) => void;
  defaultValue?: string[];
  disabled?: boolean;
}

export function MultiSelect({
  options,
  placeholder = "Select items...",
  loading = false,
  onChange,
  defaultValue = [],
  disabled = false,
}: MultiSelectProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const [optionList, setOptionList] = useState<CountryOption[]>([]);
  const [isLoading, setIsLoading] = useState(loading);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchOptions = async () => {
      setIsLoading(true);
      try {
        const data = await options();
        setOptionList(data);
      } catch (error) {
        console.error("Fetching options failed:", error);
        setOptionList([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOptions();
  }, [options]);

  useEffect(() => {
    if (optionList.length > 0 && defaultValue.length > 0) {
      const validDefaults = defaultValue.filter((defaultValue) =>
        optionList.some((option) => option.value === defaultValue)
      );
      setSelected(validDefaults);
    }
  }, [optionList, defaultValue]);

  const filteredOptions = optionList.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (value: string) => {
    setSelected((prev) => {
      const newSelected = prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value];
      onChange(newSelected);
      return newSelected;
    });
  };

  return (
    <Popover>
      <div className="relative">
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="w-full justify-between"
            disabled={disabled || isLoading}
          >
            <div className="flex flex-wrap gap-1 truncate">
              {selected.length > 0 ? (
                optionList
                  .filter((option) => selected.includes(option.value))
                  .map((option) => (
                    <Badge
                      key={option.value}
                      variant="secondary"
                      className="rounded-sm px-1 font-normal pr-1"
                    >
                      {option.label}
                      <button
                        type="button"
                        className="ml-1 inline-flex items-center rounded-full hover:bg-accent"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleSelect(option.value);
                        }}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))
              ) : (
                <span className="text-muted-foreground">
                  {isLoading ? "Loading..." : placeholder}
                </span>
              )}
            </div>
          </Button>
        </PopoverTrigger>
      </div>

      <PopoverContent className="w-full p-0" align="start">
        <Command shouldFilter={false}>
          <CommandInput
            placeholder="Search items..."
            value={searchTerm}
            onValueChange={setSearchTerm}
          />
          <CommandList>
            <CommandEmpty>No items found.</CommandEmpty>
            <CommandGroup>
              <ScrollArea className="h-48">
                {isLoading ? (
                  <div className="p-2 text-sm text-muted-foreground">
                    Loading options...
                  </div>
                ) : (
                  filteredOptions.map((option) => (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={() => handleSelect(option.value)}
                    >
                      <input
                        type="checkbox"
                        className="mr-2 h-4 w-4 accent-primary"
                        checked={selected.includes(option.value)}
                        readOnly
                      />
                      {option.label}
                    </CommandItem>
                  ))
                )}
              </ScrollArea>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
