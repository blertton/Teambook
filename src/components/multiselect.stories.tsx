import type { Meta, StoryObj } from "@storybook/react";
import { MultiSelect } from "./multiselect";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof MultiSelect> = {
  title: "Components/ui/MultiSelect",
  component: MultiSelect,
  tags: ["multiselect", "autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const Default: Story = {
  args: {
    onChange: action("selected"),
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    onChange: action("selected"),
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Pick your countries...",
    onChange: action("selected"),
  },
};

export const PreSelectedOptions: Story = {
  args: {
    defaultValue: ["USA", "CAN"],
    onChange: action("selected"),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    onChange: action("selected"),
  },
};
