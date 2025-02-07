import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './alert';
import { XCircle } from 'lucide-react';

const meta: Meta<typeof Alert> = {
  title: 'Components/ui/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['solid', 'subtle'],
    },
    title: { control: 'text' },
    description: { control: 'text' },
    icon: { control: 'boolean' },
  },
} satisfies Meta<typeof Alert>;

export default meta;

const Template: StoryObj<typeof Alert> = {
  render: (args) => <Alert {...args} />,
};

export const SuccessSolid = {
  ...Template,
  args: {
    type: 'success',
    variant: 'solid',
    title: 'Operation Successful',
    description: 'Your changes have been saved successfully',
  },
};

export const ErrorSubtle = {
  ...Template,
  args: {
    type: 'error',
    variant: 'subtle',
    title: 'Critical Error',
    description: 'Failed to save changes - please try again',
  },
};

export const TitleOnly = {
  args: {
    type: 'warning',
    title: 'Storage Warning',
    description: undefined,
  },
};

export const DescriptionOnly = {
  args: {
    type: 'info',
    title: undefined,
    description: 'System maintenance scheduled for tonight at 10 PM',
  },
};

export const CustomIcon = {
  args: {
    type: 'error',
    icon: <XCircle className="h-5 w-5" />,
    title: 'Custom Icon Alert',
  },
};

export const ClosableAlert = {
  args: {
    type: 'info',
    title: 'Dismissable Alert',
    onClose: () => console.log('Closed alert'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates close button functionality with callback',
      },
    },
  },
};