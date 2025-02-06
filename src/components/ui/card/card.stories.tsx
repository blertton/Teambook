import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";

const meta: Meta<typeof Card> = {
  title: "Components/ui/Card",
  component: Card,
  tags: ["card", "autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
    },
    children: {
      control: "text",
    },
    className: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Card Title",
    children: "Card content",
    className: "bg-gray-100 p-4 rounded-2xl shadow-md w-64 h-64",
  },
};
