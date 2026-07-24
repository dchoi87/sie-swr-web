import type { Meta, StoryObj } from "@storybook/react-vite";

import Grid from "./Grid";

const meta = {
  title: "Molecules/Grid",
  component: Grid,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
      </>
    ),
  },
};
