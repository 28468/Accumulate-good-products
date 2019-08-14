<template>
  <div class="wrap">
    <div class="header">
      <p v-for='(item,index) in topList' :key='index' :class="[index===number?'active':'null']" @click="topTab(index,item)">{{item.cname}}</p>
    </div>
    <div class="top">
      <dl v-for="(item,index) in topList[number].childs" :key="index">
        <dt>
          <img class="img" :src="item.imgUrl" />
        </dt>
        <dd>{{item.cname}}</dd>
      </dl>
    </div>
    <div class="section">
      <div class="section-top">
        <div @click="zonghe">
          <p>综合</p>
        </div>
        <div @click="news">
          <p>最新</p>
        </div>
        <div @click="sort" class="sorts">
          <p>综合</p>
          <span :class="[flag===true?'shangs':'shang']">△</span>
          <span :class="[flag===false?'xias':'xia']">▽</span>
        </div>
      </div>
      <div class="section-main">
        <dl class="list" v-for="(item,index) in list" :key="index" @click='godetails'>
          <dt>
            <img class="list-img" :src="item.mainImgUrl" alt />
          </dt>
          <dd>
            <p class="title">{{item.title}}</p>
            <span class="main-box">包邮</span>
            <div class="main-price">
              <p class="price">
                ￥
                <span>{{item.salesPrice}}</span>
              </p>
              <p class="price-vip">
                ￥
                <span>{{item.vipPrice}}</span>
              </p>
              <img class="vip" src="/static/images/vip.svg" alt />
            </div>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      flag: true,
      newCid:'',
      sortid:3,
    };
  },
  computed: {
    ...mapState({
      list: state => state.classify.list,
      number:state => state.home.ind,
      classItem:state => state.home.classItem
    }),
     ...mapState({
      topList: state => state.classify.topList
    })
  },
  methods: {
    ...mapActions({
      getInd:'home/getInd'
    }),
    godetails(){
      
    },
    topTab(index,item){
      this.getInd({index,item})
      this.getClassifyList({ pageIndex: 1, cid: item.cid, sortType: 1 });
      this.newCid = item.cid
    },
    zonghe(){
   this.getClassifyList({ pageIndex: 1, cid: this.newCid, sortType:1  });
    },
    news(){
      this.getClassifyList({ pageIndex: 1, cid: this.newCid, sortType: 2 });
    },
    sort() {
      this.flag = !this.flag;
      if(this.flag){
        this.sortid=3
      }else{
      this.sortid = 4
      }
      this.getClassifyList({ pageIndex: 1, cid: this.newCid, sortType: this.sortid });
    },
    ...mapActions({
      getClassifyList: "classify/getClassifyList",
      getClassifyTopList: "classify/getClassifyTopList"
    })
  },
  onShow(){
    this.getClassifyList({ pageIndex: 1, cid: this.classItem.cid, sortType: 1 });
     this.newCid = this.classItem.cid
  },
  created() {
    this.getClassifyList({ pageIndex: 1, cid: 1, sortType: this.sortid });
    this.getClassifyTopList()
  },
  mounted() {}
};
</script>
<style scoped lang="">
.wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.header {
  height: 100rpx;
  overflow-x: auto;
  display: flex;
  align-items: center;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
.header p {
  width: auto;
  height: 100%;
  line-height: 100rpx;
  flex-shrink: 0;
  font-size: 32rpx;
  padding: 0 20rpx;
}
.active {
  color: #56d2bf;
  border-bottom: 3px solid #56d2bf;
}
.top {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
}
.top dl {
  width: 25%;
  height: 204rpx;
}
.top dl dt {
  width: 100rpx;
  height: 100rpx;
  margin: 20rpx auto;
}
.img {
  width: 100%;
  height: 100%;
}
.top dl dd {
  width: 100%;
  text-align: center;
  font-size: 24rpx;
}
.section {
  width: 100%;
  flex: 1;
  background: #eeeeee;
}
.section-top {
  width: 100%;
  height: 80rpx;
  display: flex;
  align-items: center;
  margin-top: 10rpx;
  background: #ffffff;
}
.section-top div {
  width: 33%;
  height: 100%;
  line-height: 80rpx;
  text-align: center;
  position: relative;
}
.sorts .shang {
  position: absolute;
  left: 160rpx;
  font-size: 40rpx;
  top: -5rpx;
}
.sorts .xia {
  position: absolute;
  left: 160rpx;
  font-size: 40rpx;
  top: 15rpx;
}
.sorts .shangs {
  position: absolute;
  left: 160rpx;
  font-size: 40rpx;
  top: -3rpx;
  color: red;
}
.sorts .xias {
 position: absolute;
  left: 160rpx;
  font-size: 40rpx;
  top: 15rpx;
  color: red;
}
.section {
  width: 100%;
  flex: 1;
}
.section-main {
  width: 100%;
  height: auto;
  margin-top: 30rpx;
  display: flex;
  flex-wrap: wrap;
}
.list {
  width: 350rpx;
  height: 460rpx;
  background: #ffffff;
  margin-left: 20rpx;
  margin-top: 20rpx;
}
.list dt {
  width: 294rpx;
  height: 276rpx;
  margin: 0 auto;
  padding: 20rpx;
  box-sizing: border-box;
}
.list dt img {
  width: 100%;
  height: 100%;
}
.list dd .title {
  font-size: 24rpx;
  padding-left: 20rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.main-box {
  padding: 0 10rpx;
  box-sizing: border-box;
  display: inline-block;
  border: 2rpx solid #fc5d7b;
  border-radius: 6rpx;
  font-size: 20rpx;
  color: #fc5d7b;
  margin: 20rpx 0 0 20rpx;
}
.main-price {
  width: 100%;
  display: flex;
  margin-top: 20rpx;
  align-items: center;
}
.price {
  font-size: 36rpx;
  color: #fc5d7b;
  margin: 0 0 0 10rpx;
}
.price-vip {
  margin: 0 0 0 20rpx;
  font-size: 22rpx;
  color: #a87831;
  padding: 5rpx;
  display: inline-block;
}
.vip {
  width: 60rpx;
  height: 26rpx;
}
</style>