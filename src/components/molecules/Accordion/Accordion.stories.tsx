import type { Meta, StoryObj } from "@storybook/react-vite";

import Accordion from "./Accordion";

const meta = {
  title: "Molecules/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: 800 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { value: "one", header: "Section One", content: "Lorem ipsum dolor." },
      { value: "two", header: "Section Two", content: "Sit amet consectetur." },
      { value: "three", header: "Section Three", content: "Adipiscing elit." },
    ],
  },
};
