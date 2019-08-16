<template>
  <div class='order'>
    <div class='tab'>
      <li >全部</li>
      <li>待付款</li>
      <li>待发货</li>
      <li>待收货</li>
    </div>
    <div class="storePay" v-if="tab===1">
      <div class="storeCon">
        <p class="tit">2019-02-89 17:28:30
          <label>待付款</label>
        </p>
        <div class="storeList">
          <img src="../../../../static/images/niaobushi.png" alt="">
          <div class="block">
            <span class="produce">帮宝适你爱不是的啥的会的还是看好多对对对但是宿舍多多多</span>
            <small>规格: XL</small>
            <p class="priceList">
              <span class="price">￥79</span>
              <span>X1</span>
            </p>
          </div>
        </div>
        <div class="priceNum">
          共
          <span class="sum">2</span>件商品 合计：￥
          <span class="sumPrice">43.90</span>
        </div>
        <div class="priceNum">
          <button class="refuse">取消订单</button>
          <button class="goPay">去付款
            <span class="pay">13.09</span>元</button>
        </div>

      </div>

    </div>
    <div class="storePay" v-if="tab===2">
      <div class="storeCon">
        <p class="tit">2019-02-89 17:28:30
          <label>待付款</label>
        </p>
        <div class="storeList">
          <img src="../../../../static/images/niaobushi.png" alt="">
          <div class="block">
            <span class="produce">帮宝适你爱不是的啥的会的还是看好多对对对但是宿舍多多多</span>
            <small>规格: XL</small>
            <p class="priceList">
              <span class="price">￥79</span>
              <span>X1</span>
            </p>
          </div>
        </div>
        <div class="priceNum">
          共
          <span class="sum">2</span>件商品 合计：￥
          <span class="sumPrice">43.90</span>
        </div>
        <div class="priceNum">
          <button class="refuse">取消订单</button>
          <button class="goPay">去付款
            <span class="pay">13.09</span>元</button>
        </div>

      </div>
      <div class="storeCon">
        <p class="tit">2019-02-89 17:28:30
          <label>待收货</label>
        </p>
        <div class="storeList">
          <img src="../../../../static/images/niaobushi.png" alt="">
          <div class="block">
            <span class="produce">帮宝适你爱不是的啥的会的还是看好多对对对但是宿舍多多多</span>
            <small>规格: XL</small>
            <p class="priceList">
              <span class="price">￥79</span>
              <span>X1</span>
            </p>
          </div>
        </div>
        <div class="priceNum">
          共
          <span class="sum">2</span>件商品 合计：￥
          <span class="sumPrice">43.90</span>
        </div>
        <div class="priceNum">
          <button class="refuse">取消订单</button>
          <button class="goPay">去付款
            <span class="pay">13.09</span>元</button>
        </div>

      </div>
    </div>
    <div class="storeSend" v-if="tab===3">
      <div class="storeCon">
        <p class="tit">2019-02-89 17:28:30
          <label>待发货</label>
        </p>
        <div class="storeList">
          <img src="../../../../static/images/niaobushi.png" alt="">
          <div class="block">
            <span class="produce">帮宝适你爱不是的啥的会的还是看好多对对对但是宿舍多多多</span>
            <small>规格: XL</small>
            <p class="priceList">
              <span class="price">￥79</span>
              <span>X1</span>
            </p>
            <div class="priceNum">
              共
              <span class="sum">2</span>件商品 合计：￥
              <span class="sumPrice">43.90</span>
            </div>
          </div>
        </div>
        <div class="look">
          查看物流
        </div>
        <div class="comfirm">
          确认收货
        </div>

      </div>

    </div>
    <div class="storeReceive" v-if="tab===4">
      <div class="storeCon">
        <p class="tit">2019-02-89 17:28:30
          <label>待收货</label>
        </p>
        <div class="storeList">
          <img src="../../../../static/images/niaobushi.png" alt="">
          <div class="block">
            <span class="produce">帮宝适你爱不是的啥的会的还是看好多对对对但是宿舍多多多</span>
            <small>规格: XL</small>
            <p class="priceList">
              <span class="price">￥79</span>
              <span>X1</span>
            </p>
          </div>
        </div>
        <div class="look">
          查看物流
        </div>
        <div class="comfirm">
          确认收货
        </div>

      </div>

    </div>

  </div>
</template>
<script>
export default {
  components: {

  },
  data() {
    return {
      tab: 1
    }
  },
  methods: {
    changTab(index) {
      this.tab = index;
    }
  }

}
</script>
<style scoped lang="scss">
.order {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f3f7f7;
  .tab {
    width: 100%;
    height: 100rpx;
    display: flex;
    background: #fff;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
  }

  .tab li {
    flex: 1;
    height: 100%;
    text-align: center;
  }
  .selected {
    color: #87caee;
    border-bottom: 1px solid #87caee;
  }

  .storePay {
    width: 100%;
    height: auto;
    margin-top: 100rpx;
  }
  .storeSend {
    width: 100%;
    height: auto;
    margin-top: 100rpx;
  }
  .storeReceive {
    width: 100%;
    height: auto;
    margin-top: 100rpx;
  }

  .storeCon {
    width: 95%;
    background: white;
    margin: 0 auto;
    margin-top: 20rpx;
  }

  .storeCon img {
    display: inline-block;
    width: 50rpx;
    height: 120rpx;
    margin-left: 20rpx;
  }

  .tit {
    width: 100%;
    height: 60rpx;
    line-height: 60rpx;
    display: flex;
    justify-content: space-between;
    font-size: 23rpx;
    color: #969696
  }

  .storeCon .tit label {
    padding-right: 30rpx;
    font-weight: 530;
    color: black;
    font-size: 32rpx;
  }

  .storeList {
    width: 100%;
    display: flex;
    margin-top: 20rpx;
    font-size: 32rpx;
    margin-top: 10rpx;
  }

  .storeList img {
    display: flex;
    align-items: center;
    width: 20%;
    margin-top: 30rpx;
  }

  .storeCon .block {
    width: 70%;
    display: flex;
    flex-direction: column;
    margin-left: 30rpx;
  }

  .storeCon .block small {
    display: block;
    color: #969696;
    margin-top: 30rpx;
  }

  .storeCon .block .priceList {
    margin-top: 15rpx;
    display: flex;
    justify-content: space-between;
  }

  .priceNum {
    display: inline-block;
    width: 100%;
    height: 60rpx;
    line-height: 60rpx;
    text-align: right;
    margin-top: 20rpx;
  }
  .refuse {
    font-size: 25rpx;
    display: inline-block;
    width: 170rpx;
    height: 50rpx;
    line-height: 50rpx;
    text-align: center;
    border: solid 2rpx #C0C0C0;
    border-radius: 10rpx;
    margin-right: 30rpx;
  }

  .goPay {
    font-size: 25rpx;
    display: inline-block;
    width: 220rpx;
    height: 50rpx;
    text-align: center;
    background: #F08080;
    border-radius: 10rpx;
    color: white;
    padding-bottom: 50rpx;
  }
}
</style>