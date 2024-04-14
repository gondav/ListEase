import type { Meta, StoryObj } from '@storybook/vue3';
import IconButton from '@/components/atoms/IconButton.vue';

const meta = {
  title: 'Atoms/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: (args) => ({
    components: { IconButton },
    setup() {
      return { args };
    },
    template: `
      <IconButton v-bind="args">
        <template v-if="args.type === 'primary'">
          <font-awesome-icon :icon="['fas', 'caret-right']" />
        </template>
        <template v-if="args.type === 'secondary'">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </template>
      </IconButton>
    `,
  }),
  argTypes: {
    type: {
      options: ['primary', 'secondary'],
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
  },
};
