import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./alert";

const meta: Meta<typeof Alert> = {
  title: "Components/ui/Alert",
  component: Alert,
  tags: ["alert", "autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["success", "error", "warning", "info"],
    },
    variant: {
      control: "select",
      options: ["solid", "subtle"],
    },
    icon: {
      control: "select",
      options: [true, false, "custom"],
    },
    onClose: {
      action: "closed",
    },
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    type: "success",
    title: "Success",
    description: "Operation completed successfully.",
    icon: true,
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    title: "Update Available",
    description: "A new version is ready to install.",
    icon: true,
  },
};

export const DescriptionOnly: Story = {
  args: {
    type: "info",
    description: "This alert has no title, only a description.",
    icon: true,
  },
};

export const WithoutIcon: Story = {
  args: {
    type: "warning",
    description: "This alert has no icon.",
    icon: false,
  },
};

export const Closable: Story = {
  args: {
    type: "error",
    title: "Error",
    description: "Something went wrong.",
    onClose: () => console.log("Alert closed"),
  },
};
