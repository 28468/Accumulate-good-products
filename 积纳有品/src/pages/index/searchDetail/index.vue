<template>
  <div class="searchDetail">
    <swiper class="u-wrp-bnr" autoplay="true">
      <swiper-item class="u-item">
        <image :src='detail.mainImgUrl'></image>
      </swiper-item>
    </swiper>
    <div class="detMoney">
      <span>￥{{detail.salesPrice}}</span>
      <span>{{detail.vipPrice}}</span>
      <img src="../../../../static/images/黑卡.svg"/>
      <p>
        分享赚
        <span>{{detail.earnMoney}}</span>
      </p>
    </div>
    <div class="detTit">
      <P>{{detail.title}}</P>
      <b>快递包邮</b>
    </div>
    <div class="detChoose">
      <div class="chooseLeft">
        <label class="_span">选择</label>
        <div class="_div">
          <label class="_span">数量</label>
          <label class="_span">
            <label class="_spans">1件</label>
            <label>></label>
          </label>
        </div>
      </div>
      <div class="ts">
        <label class="_span">提示</label>
        <div class="dq">
          <label class="_span">{{dq}}</label>
        </div>
      </div>
      <div class="chooseRight"></div>
    </div>
    <div class="images">
      <img v-for="(item,index) in img" 
      :key="index"
      :src="item.imgUrl"
      class="img"
      />
    </div>
    <div class="btns">
      <p>
        分享赚
        <span>{{detail.earnMoney}}</span>
      </p>
      <p>立即购买</p>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      detail:state => state.home.detail,
      num:state => state.home.num,
      img:state => state.home.img,
      dq:state => state.home.dq
    })
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.searchDetail {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.u-wrp-bnr {
  width: 100%;
  height: 750rpx;
  display: block;
}
.u-item {
  display: block;
  width: 100%;
  height: 100%;
}
.u-item > image {
  display: block;
  width: 100%;
  height: 100%;
}
.detMoney {
  position: relative;
  width: 100%;
  height: 100rpx;
  display: flex;
  img{
    width: 40rpx;
    height: 20rpx;
    margin-top: 44rpx;
    margin-left: 10rpx;
    display: inline-block;
    overflow: hidden;
  }
}
.detMoney > span:nth-child(1) {
  height: 100%;
  line-height: 100rpx;
  color: rgb(243, 117, 138);
  font-size: 40rpx;
  text-indent: 30rpx;
}
.detMoney > span:nth-child(2) {
  line-height: 100rpx;
  color: rgb(125, 125, 10);
  font-size: 25rpx;
  display: inline-block;
  margin-left: 20rpx;
}
.detMoney > p {
  width: 20%;
  height: 50rpx;
  line-height: 50rpx;
  text-align: center;
  position: absolute;
  right: 0;
  top: 25rpx;
  border: 1rpx solid rgb(243, 117, 138);
  font-size: 20rpx;
  color: rgb(243, 117, 138);
  border-bottom-left-radius: 20rpx;
  border-top-left-radius: 20rpx;
}
.detTit {
  width: 100%;
  flex: 1;
  margin-top: 10rpx;
}
.detTit > p {
  font-size: 38rpx;
  color: #333;
  margin-left: 2%;
}
.detTit > b {
  display: block;
  color: #999;
  font-size: 28rpx;
  margin-top: 10rpx;
  margin-left: 2%;
}
.detChoose {
  width: 100%;
  padding: 0 2%;
  box-sizing: border-box;
  .ts{
    display: flex;
    font-size: 26rpx;
    height: 80rpx;
    line-height: 80rpx;
    >._span{
      color: #676767;
    }
    .dq{
      flex: 1;
      color: #323a45;
      display: flex;
      padding: 0 10rpx;
      box-sizing: border-box;
      justify-content: space-between;
      >._span{
        color: #fc5d7b;
      }
    }
  }
}
.chooseLeft {
  display: flex;
  font-size: 26rpx;
  height: 80rpx;
  line-height: 80rpx;
  >._span{
    color: #676767;
  }
  ._div{
    flex: 1;
    color: #323a45;
    display: flex;
    padding: 0 10rpx;
    box-sizing: border-box;
    justify-content: space-between;
    >._span{
      color: #676767;
      margin-right: 5px;
      ._spans{
        color: #676767;
      }
      .img{
        width: 20rpx;
        height: 20rpx;
        margin-top: 20rpx;
        display: inline-block;
        overflow: hidden;
      }
    }
  }
}
.images{
  width: 100%;
  margin-bottom: 120rpx;
  .img{
    width: 100%;
    display: block;
    height: 240px;
    overflow: hidden;
  }
  :last-child{
    height: 1280.64px;
  }
}
.btns {
  position: fixed;
  bottom: 0;
  z-index: 999;
  width: 100%;
  height: 100rpx;
  display: flex;
}
.btns > p {
  width: 50%;
  height: 100rpx;
  line-height: 100rpx;
  text-align: center;
  color: white;
  background: linear-gradient(217deg, #f86367, #fb2579);
}
</style>