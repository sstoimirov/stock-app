import type { Meta, StoryObj } from '@storybook/react-vite';
import { StockAppUi } from './ui';
import { expect } from 'storybook/test';

const meta = {
  component: StockAppUi,
  title: 'StockAppUi',
} satisfies Meta<typeof StockAppUi>;
export default meta;

type Story = StoryObj<typeof StockAppUi>;

export const Primary = {
  args: {},
} satisfies Story;

export const Heading = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/StockAppUi/gi)).toBeTruthy();
  },
} satisfies Story;
