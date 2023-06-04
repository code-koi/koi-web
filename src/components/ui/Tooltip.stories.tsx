import type { Meta, StoryObj } from '@storybook/react';

import Tooltip from './ToolTip';
import Button from './Button';

const meta = {
  title: 'Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TooltipExampleButton: Story = {
  args: {
    labelElement: <Button>button</Button>,
    tooltipElement: 'tooltip',
  },
};

export const TooltipExampleText: Story = {
  args: {
    labelElement: 'Text',
    tooltipElement: 'tooltip',
  },
};
