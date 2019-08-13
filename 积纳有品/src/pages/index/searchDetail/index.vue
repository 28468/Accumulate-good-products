<template>
  <div class="searchDetail">
    <swiper class="u-wrp-bnr" autoplay="true">
      <swiper-item class="u-item">
        <image src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=416883042,2446087554&fm=26&gp=0.jpg' class='u-img-slide' mode='aspectFill'></image>
      </swiper-item>
      <swiper-item class="u-item">
        <image src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2328966754,873353896&fm=26&gp=0.jpg' class='u-img-slide' mode='aspectFill'></image>
      </swiper-item>
      <swiper-item class="u-item">
        <image src='https://f11.baidu.com/it/u=1328175307,1706219131&fm=72' class='u-img-slide' mode='aspectFill'></image>
      </swiper-item>
    </swiper>
    <div class="detMoney">
      <span>￥85</span>
      <span>83.02</span>
      <p>
        分享赚
        <span>1.98</span>
      </p>
    </div>
    <div class="detTit">
      <P>Carters's女童长袖印花+短袖T恤+裤子套装6个月</P>
      <b>快递包邮</b>
    </div>
    <div class="detChoose">
      <div class="chooseLeft">
        <p>选择</p>
        <p>颜色</p>
        <p>尺码</p>
      </div>
      <div class="chooseRight">></div>
    </div>
    <div class="btns">
      <p>
        分享赚
        <span>1.98</span>
      </p>
      <p>立即购买</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
.searchDetail {
  width: 100%;
  height: 100%;
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
  margin-left: 2%;
  width: 96%;
  height: 50rpx;
  line-height: 50rpx;
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 25rpx;
  margin-top: 40rpx;
}
.chooseLeft {
  display: flex;
}
.chooseLeft > p {
  margin-right: 15rpx;
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