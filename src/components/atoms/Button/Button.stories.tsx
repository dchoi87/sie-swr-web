import type { Meta, StoryObj } from "@storybook/react-vite";
import * as icons from "react-bootstrap-icons";

import Button from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    iconName: {
      control: "select",
      options: Object.keys(icons),
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Lorem Ipsum",
    iconName: "ArrowRight",
    type: "primary",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    type: "secondary",
  },
};
