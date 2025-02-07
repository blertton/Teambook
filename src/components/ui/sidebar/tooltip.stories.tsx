import { Meta, StoryObj } from "@storybook/react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/ui/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <button className="p-2 bg-blue-500 text-white rounded">
            Hover me
          </button>
        </TooltipTrigger>
        <TooltipContent>Default Tooltip</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const WithCustomText: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <button className="p-2 bg-green-500 text-white rounded">
            Hover me
          </button>
        </TooltipTrigger>
        <TooltipContent>Custom Tooltip Text</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip delayDuration={500}>
        <TooltipTrigger>
          <button className="p-2 bg-red-500 text-white rounded">
            Hover me
          </button>
        </TooltipTrigger>
        <TooltipContent>Delayed Tooltip</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
