import './assets/main.scss';

import { createApp } from 'vue';
import App from './App.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
library.add(faSquare, faSquareCheck);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
