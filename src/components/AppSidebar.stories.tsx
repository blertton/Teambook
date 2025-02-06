import { Meta, StoryObj } from "@storybook/react";
import { AppSidebar } from "./AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar/sidebar";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/AppSidebar",
  component: AppSidebar,
  decorators: [
    (Story) => (
      <SidebarProvider>
        <Story />
      </SidebarProvider>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    user: { name: "Jane Doe" }, // Default username
  },
  argTypes: {
    user: {
      control: "object", // Enables object control in Storybook
    },
  },
} satisfies Meta<typeof AppSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: { name: "Jane Doe" },
  },
};

export const LoggedOut: Story = {
  args: {
    user: null,
  },
};
