import type { Meta, StoryObj } from '@storybook/vue3';
import CheckButton from '@/components/atoms/CheckButton.vue';

const meta = {
  title: 'Atoms/CheckButton',
  component: CheckButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CheckButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
