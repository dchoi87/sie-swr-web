import type { Meta, StoryObj } from "@storybook/react-vite";

import { Radio } from "@/components/atoms";
import { Grid } from "@/components/molecules";
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
    children: (
      <Grid>
        <Radio
          label="Lorem Ipsum Dolor"
          subtext="Consectetur adipiscing elit"
        />
        <Radio label="Sed Do Eiusmod" subtext="Tempor incididunt ut labore " />
        <Radio label="Dolore Magna Aliqua" subtext="Ut enim ad minim veniam" />
        <Radio
          label="Quis Nostrud"
          subtext="Exercitation ullamco laboris nisi"
        />
        <Radio label="Ut Aliquip Ex" subtext="Ea commodo consequat" />
        <Radio
          label="Duis Aute Irure Dolor"
          subtext="In reprehenderit in voluptate velit"
        />
        <Radio label="Esse Cillum" subtext="Dolore eu fugiat nulla pariatur" />
      </Grid>
    ),
  },
};
