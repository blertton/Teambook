import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./card";

const meta: Meta<typeof Card> = {
  title: "Components/ui/Card",
  component: Card,
  tags: ["card", "autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="bg-gray-100 p-4 rounded-2xl shadow-md w-64 h-64">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card className="bg-white p-4 rounded-2xl shadow-md w-64 h-80">
      <img
        src="https://via.placeholder.com/150"
        alt="Card image"
        className="w-full h-32 object-cover rounded-t-2xl"
      />
      <CardHeader>
        <CardTitle>Card with Image</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This card includes an image at the top.</p>
      </CardContent>
    </Card>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Card className="bg-white p-4 rounded-2xl shadow-md w-64 h-80">
      <CardHeader>
        <CardTitle>Card with Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Actions like buttons can be placed in the footer.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Accept
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded">
          Decline
        </button>
      </CardFooter>
    </Card>
  ),
};
