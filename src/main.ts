import { createApp } from 'vue';
import App from './App.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faSquare, faSquareCheck, faXmark, faCaretRight);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
