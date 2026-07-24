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
      {
        value: "one",
        header: "Medications",
        content: "Lorem ipsum dolor.",
        icon: "Prescription",
      },
      {
        value: "two",
        header: "Reasons for Visit",
        content: "Sit amet consectetur.",
        icon: "ClipboardPulse",
      },
      {
        value: "three",
        header: "Medical History",
        content: "Adipiscing elit.",
        icon: "HeartPulse",
      },
    ],
  },
};
