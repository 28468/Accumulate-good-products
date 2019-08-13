<template>
  <div class="mine">
     <div class="topimg">
       <img src='/static/images/logBg.png'/>
     </div>
     <div class="middle">
        <div class="order">
          <h1>我的订单</h1>
          <ul class="orderList">
            <li>
              <img src='/static/images/fukuan.png'/>
              <em>待付款</em>
            </li>
            <li>
              <img src='/static/images/daifahuo.png'/>
              <em>待发货</em>
            </li>
            <li>
              <img src='/static/images/daishouhuo.png'/>
              <em>待收货</em>
            </li>
          </ul>
        </div>
        <ol class="list">
            <li>
              <span><img src='/static/images/quan.png'/>我的优惠券</span>
              <em>></em>
            </li>
            <li>
              <span><img src='/static/images/share.png'/>收货地址</span>
               <em>></em>
            </li>
            <li>
              <span><img src='/static/images/kefu.png'/>联系客服</span>
               <em>></em>
            </li>
             <li>
              <span><img src='/static/images/shezhi.png'/>实名认证</span>
               <em>></em>
            </li>
        </ol>
     </div>
  
  </div>
</template>
<script>
export default {
  components:{

  },
  data(){
    return {

    }
  }
 
}
</script>
<style scoped lang="">
.mine{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.topimg img{
  width: 100%;
  height: 200rpx;
}
.middle {
  flex:1;
    padding: 20rpx;
  box-sizing: border-box;
  background: #f3f7f7;
}

.middle .order {
  width: 100%;
  padding: 20rpx;
  box-sizing: border-box;
  background: #fff;
  border-radius: 10px;
  margin-top: -50rpx;
}
.order h1{
  height: 100rpx;
  line-height: 100rpx;
}
.orderList{
  width: 100%;
  display: flex;

}
.orderList li {
  flex:1;
  text-align: center;
}
.orderList li img{
  width: 70rpx;
  height:70rpx;
}
.list{
  width: 100%;
  background: #fff;
  margin-top: 20rpx;
}
.list li{
  width: 100%;
  height: 100rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20rpx;
  box-sizing: border-box;
  vertical-align: middle;

}
.list li img{
  width: 40rpx;
  height: 40rpx;
  margin-right: 20rpx;
}
</style>