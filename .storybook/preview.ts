import { setup, Preview, StoryObj } from '@storybook/vue3';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

setup((app) => {
  //👇 Adds the icon to the library so you can use it in your story.
  library.add(far, fas);
  app.component('font-awesome-icon', FontAwesomeIcon);
});

export const parameters = {
  controls: { expanded: true },
  decorators: [
    (story: StoryObj) => ({
      components: { story },
      template: '<div style="margin: 3em;"><story /></div>',
    }),
  ],
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
