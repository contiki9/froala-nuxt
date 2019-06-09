import { configure } from '@storybook/vue';

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import Decorator from './Decorator.vue';

// addDecorator((story) => ({
//   components: { Decorator },
//   template: `
//     <decorator>
//       <story slot="story"></story>
//     </decorator>
//   `
// }))


//automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
