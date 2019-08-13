import Vue from 'vue';
import Vuex from 'vuex';
import CreateLogger from 'vuex/dist/logger';
// 引入store子模块
 import shouTab from './modules/shouTab.js';
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
     shouTab,
  },
  plugins: [CreateLogger()]
})
