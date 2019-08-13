import Vue from 'vue';
import Vuex from 'vuex';
import CreateLogger from 'vuex/dist/logger';
// 引入store子模块
 import shouTab from './modules/shouTab.js';
import home from './modules/home';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
     shouTab,
    home,
  },
  plugins: [CreateLogger()]
})
