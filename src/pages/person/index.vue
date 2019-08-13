<template>
  <div class='order'>
    <div class='tab'>
     <li>全部</li>
     <li>待付款</li>
     <li>待发货</li>
     <li>待收货</li>
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
.order{
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  background:#f3f7f7;
}
.tab{
  width:100%;
  height:100rpx;
  display:flex;
  background:#fff;
  align-items:center;
}
.tab li{
  flex:1;
  text-align:center;
  
}
</style>