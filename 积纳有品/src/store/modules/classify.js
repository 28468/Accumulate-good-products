import { classifyList, classifyTopList } from '@/service';
// 模块所有的状态
const state = {
  list: [],
  tui:[{cname:"今日推荐"}],
  topList: []

}

// 模块内的同步改变
const mutations = {
  updaClassifyList(state, payload) {
    console.log("payload...",payload)

    state.list = payload;
  },
  updaClassifyTopList(state, payload) {
    let arr = state.tui.concat(payload)
    state.topList = arr
  }
}

// 模块内的异步改变
const actions = {
  //获取分类页数据
  async getClassifyList({ commit }, payload) {
    const res = await classifyList(payload);
    commit("updaClassifyList", res.result);
  },
  //获取分类页头部数据
  async getClassifyTopList({ commit }, payload) {
    const res = await classifyTopList();
    commit("updaClassifyTopList", res.result);
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
