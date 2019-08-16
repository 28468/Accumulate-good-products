import { topicInfo, toShare} from '@/service';
// 模块所有的状态
const state = {
  list: {},
  topicList: []

}

// 模块内的同步改变
const mutations = {
  getAll(state, payload) {
    state.list = payload;
  }
}

// 模块内的异步改变
const actions = {
  async getTopicList({ commit }, payload) {
    const res = await topicInfo({ siid: payload });
    commit("getAll", res.result);
    console.log('result',res)
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
