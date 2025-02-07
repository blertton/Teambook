import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "Components/ui/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Badge",
    className: "bg-gray-800 text-white rounded-3xl p-4 hover:bg-gray-700",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Badge",
    className: "shadow-lg rounded-3xl p-4",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive Badge",
    className: "shadow-lg rounded-3xl p-4",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Badge",
    className: "shadow-lg rounded-3xl p-4",
  },
};
