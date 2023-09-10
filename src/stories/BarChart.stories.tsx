import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { BarChart } from '..';

export default {
  title: 'BarChart',
  component: BarChart,
  argTypes: {},
} as Meta<typeof BarChart>;

const Template: StoryFn<typeof BarChart> = (args) => <BarChart {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  data: [0, 1, 2, 3],
};
