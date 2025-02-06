import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/components/ui/input/input";

const meta: Meta<typeof Input> = {
  title: "Components/UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "number"],
    },
    disabled: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};


export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};


export const WithPlaceholder: Story = {
  args: {
    placeholder: "Type something here...",
  },
};


export const ErrorState: Story = {
  args: {
    placeholder: "Invalid input",
    className: "border-destructive focus-visible:ring-destructive",
  },
};


export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password...",
  },
};
