import type { Meta, StoryObj } from '@storybook/vue3';
import H1 from '@/components/atoms/H1.vue';

const meta = {
  title: 'Atoms/H1',
  component: H1,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof H1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    text: 'Title',
  },
};
