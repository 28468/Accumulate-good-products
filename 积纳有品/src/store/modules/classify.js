import { classifyList, classifyTopList } from '@/service';
// 模块所有的状态
const state = {
  list: [],
  topList: []

}

// 模块内的同步改变
const mutations = {
  updaClassifyList(state, payload) {
    payload.sort((a, b) => {//从小到大排序
      return a.productVo.salesPrice - b.productVo.salesPrice
    })
    state.list = payload;
  },
  updaClassifyTopList(state, payload) {
    state.topList = payload;
    console.log(state.topList)
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
    console.log(res)
    commit("updaClassifyTopList", res.result);
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
