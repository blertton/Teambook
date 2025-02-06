import "../../../styles/globals.css";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
  title: "Components/ui/Button",
  component: Button,
  tags: ["button", "autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "sm",
    onClick: action("clicked"),
    children: "Button",
    className: "bg-gray-800 text-white rounded-3xl hover:bg-gray-700 p-4 w-40",
  },
};
