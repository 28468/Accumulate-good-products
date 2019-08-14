import { getHomeData,getNav,getListData,getDetail,getDetailNum,getDetailImg,getDetailDq } from '../../service/index';
// 模块所有的状态
const state = {
    swiper : {},
    nav : {},
    // homeData:[]
    tu:'',
    tu1:'',
    dl:[],
    tu2:'',
    dl1:[],
    tu3:'',
    dl2:[],
    tu4:'',
    dl3:[],
    tu5:'',
    dl4:[],
    parentId: 0,
    tui:[{cname:"今日推荐"}],//tab
    tab:[],
    classItem:{},
    ind:0,
    listData:[],
    pid:200,
    detail:{},
    num:[],//数量
    img:[],//图片
    dq:''//地区
}

// 模块内的同步改变
const mutations = {
    gethData(state,payload){
        // state.homeData = payload
        state.swiper = payload[0].items
        state.nav = payload[1].items
        state.tu = payload[2].pictUrl
        state.tu1 = payload[4].pictUrl
        state.dl = payload[5].items
        state.tu2 = payload[6].pictUrl
        state.dl1 = payload[7].items
        state.tu3 = payload[8].pictUrl
        state.dl2 = payload[9].items
        state.tu4 = payload[10].pictUrl
        state.dl3 = payload[11].items
        state.tu5 = payload[12].pictUrl
        state.dl4 = payload[13].items
    },
    getnData(state,payload){
        let arr = state.tui.concat(payload)
        state.tab = arr
    },
    upInd(state,payload){
        state.ind = payload.index
        state.classItem = payload.item
    },
    getlData(state,payload){
        state.listData = payload
    },
    getdData(state,payload){
        // console.log("aaaaaa",payload)
        state.detail = payload
    },
    getNum(state,payload){
        // console.log('num...',payload)
        state.num = payload
    },
    getImg(state,payload){
        state.img = payload
    },
    getDq(state,payload){
        state.dq = payload
    }
}

// 模块内的异步改变
const actions = {
    async getData({commit},payload) {
        let data = await getHomeData()
        // console.log("data...",data)
        commit('gethData',data.result)
    },
    //nav
    async getNavData({commit},payload) {
        let data = await getNav({ parentId: state.parentId })
        commit('getnData',data.result)
    },
    //获取下标
    getInd({commit},payload){
        commit('upInd',payload)
    },

    async getLData({commit},payload) {
        let data = await getListData()
        commit('getlData',data.result)
    },
    async getDetailData({commit,state},payload) {
        let data = await getDetail('pid=200')
        commit('getdData',data.result)
    },

    async getDetailNum({commit,state},payload) {
        // console.log("11111",payload)
        let data = await getDetailNum('pid=200')
        commit('getNum',data.result)
    },
    async getDetailImg({commit,state},payload) {
        let data = await getDetailImg('pid=200')
        commit('getImg',data.result)
    },
    async getDetailDq({commit,state},payload) {
        let data = await getDetailDq('sstid: 80')
        // console.log("1111111",data)
        commit('getDq',data.result)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}