import type { Meta, StoryObj } from "@storybook/react-vite";

import Text from "./Text";

const meta = {
  title: "Atoms/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div
        style={{
          width: "600px",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading: Story = {
  args: {
    content: "Lorem Ipsum Dolor Sit",
    type: "h1",
  },
};

export const Copy: Story = {
  args: {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    type: "p",
  },
};
