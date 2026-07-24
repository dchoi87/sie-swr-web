import type { Meta, StoryObj } from "@storybook/react-vite";

import Radio from "./Radio";

const meta = {
  title: "Atoms/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Lorem ipsum dolor",
    subtext: "sed do eiusmod tempor incididunt",
  },
};
