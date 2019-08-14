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
  props:{

  },
  components:{
  },
  data(){
    return {
    }
  },
  computed:{

  },
  methods:{

  },
  created(){

  },
  mounted(){

  }
}
</script>
<style scoped lang="">
</style>