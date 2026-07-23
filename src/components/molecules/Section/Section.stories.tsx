import type { Meta, StoryObj } from "@storybook/react-vite";

import Section from "./Section";

const meta = {
  title: "Molecules/Section",
  component: Section,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: "Lorem ipsum dolor sit amet consectetur?",
    subheader:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    children: <div>Hello World</div>,
  },
};
