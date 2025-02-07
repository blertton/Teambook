import { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverTrigger, PopoverContent } from "./popover";
import { useState } from "react";

const meta: Meta<typeof Popover> = {
  title: "Components/ui/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default: StoryObj<typeof Popover> = {
  render: () => (
    <Popover>
      <PopoverTrigger className="px-4 py-2 bg-cyan-500 text-white rounded">
        Open Popover
      </PopoverTrigger>
      <PopoverContent className="bg-white p-4 rounded shadow-md">
        This is the default popover content.
      </PopoverContent>
    </Popover>
  ),
};

export const CustomContent: StoryObj<typeof Popover> = {
  render: () => (
    <Popover>
      <PopoverTrigger className="px-4 py-2 bg-emerald-500 text-white rounded">
        Custom Content Trigger
      </PopoverTrigger>
      <PopoverContent className="bg-gray-200 p-4 rounded shadow-md">
        This is custom content inside the popover.
      </PopoverContent>
    </Popover>
  ),
};

export const HoverPopover: StoryObj<typeof Popover> = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          className="px-4 py-2 bg-rose-500 text-white rounded"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          Hover Me
        </PopoverTrigger>
        <PopoverContent
          className="bg-white p-4 rounded shadow-md"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          Custom popover content appears on hover!
        </PopoverContent>
      </Popover>
    );
  },
};
