import type { Meta, StoryObj } from '@storybook/vue3';
import DefaultButton from '@/components/atoms/DefaultButton.vue';

const meta = {
  title: 'Atoms/DefaultButton',
  component: DefaultButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      options: ['primary', 'secondary'],
    },
  },
} satisfies Meta<typeof DefaultButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Add task',
    type: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Cancel',
    type: 'secondary',
  },
};
