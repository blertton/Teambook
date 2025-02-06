import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar/sidebar";
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  User2,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
];

type AppSidebarProps = {
  user?: { name: string } | null;
};

export function AppSidebar({ user }: AppSidebarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Sidebar>
      <SidebarHeader className="text-2xl font-semibold">
        TeamBooks
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="relative">
        {isDropdownOpen && (
          <div className="mb-2 bg-black rounded-xl shadow-lg absolute bottom-full w-[93%] hover:cursor-pointer ">
            <Link
              href="/login"
              className="block px-4 py-2 text-white hover:bg-gray-900 rounded-full"
            >
              Sign up
            </Link>
            <Link
              href="/login"
              className="block px-4 py-2 text-white hover:bg-gray-900 rounded-full"
            >
              Log out
            </Link>
          </div>
        )}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild onClick={toggleDropdown}>
              <div className="flex items-center justify-between w-full">
                <User2 />
                <span>{user?.name || "Guest"}</span>
                {isDropdownOpen ? (
                  <ChevronUp className="ml-auto" />
                ) : (
                  <ChevronDown className="ml-auto" />
                )}
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
