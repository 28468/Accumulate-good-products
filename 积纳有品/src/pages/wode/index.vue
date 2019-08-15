<template>
  <div class="mine">
     <div class="topimg">
       <img src='/static/images/logBg.png'/>
     </div>
     <div class="middle">
        <div class="order">
          <h1 >我的订单</h1>
          <ul class="orderList">
            <li @click='goOrder'>
              <img src='/static/images/fukuan.png'/>
              <em>待付款</em>
            </li>
            <li @click='goOrder'>
              <img src='/static/images/daifahuo.png'/>
              <em>待发货</em>
            </li>
            <li @click='goOrder'>
              <img src='/static/images/daishouhuo.png'/>
              <em>待收货</em>
            </li>
            <li @click='goOrder'>
              <img src='../../../static/images/Group 4(3).svg'/>
              <em>退款退货</em>
            </li>
          </ul>
        </div>
        <ol class="list">
            <li @click="goCard">
              <span><img src='/static/images/quan.png'/>我的优惠券</span>
              <em>></em>
            </li>
            <li>
              <span><img src='/static/images/mine.png'/>关于我们</span>
               <em>></em>
            </li>
            <li>
              <span><img src='/static/images/share.png'/>我的分享</span>
               <em>></em>
            </li>
             <li @click="goConect">
              <span><img src='/static/images/kefu.png'/>联系客服</span>
               <em>></em>
             </li>
              <li @click="goSetting">
                <span><img src='/static/images/shezhi.png'/>设置</span>
                <em>></em>
              </li>
        </ol>
     </div>
  
  </div>
</template>
<script>
export default {
 
  methods:{
       goOrder(){
          wx.navigateTo({
              url:'/pages/wode/person/main'
       })
       },
       goCard(){
         wx.navigateTo({
              url:'/pages/wode/card/main'
       })
       },
       goSetting(){
          wx.navigateTo({
              url:'/pages/wode/setting/main'
       })
       },
       goConect(){
          wx.navigateTo({
            url:'/pages/wode/conect/main'
      })
       }
  },

}
</script>
<style scoped lang="scss">
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

.list li img{
  width: 40rpx;
  height: 40rpx;
  margin: 30rpx 20rpx 0 0;
}
.list li{
  width: 100%;
  height: 100rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20rpx;
  box-sizing: border-box;
  /* vertical-align: middle; */
  border-bottom: 1px solid #eee;
  span{
    line-height:  100rpx;
  }
}
</style>
