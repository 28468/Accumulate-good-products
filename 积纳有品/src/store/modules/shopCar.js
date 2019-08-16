import { topicInfo } from '@/service';
// 模块所有的状态
const state = {
  list: [],
  topicList: []

}

// 模块内的同步改变
const mutations = {
 getAll(state,payload){
    state.list = payload;
 }
}

// 模块内的异步改变
const actions = {
   async getTopicList({ commit }, payload) {
    const res = await topicInfo(payload);
    console.log(res,'专题数据res')
    commit("getAll", res.result);
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
