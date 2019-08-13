<template>
  <div class='card'>
    <div class='tab'>
     <li>未使用</li>
     <li>已使用</li>
     <li>已过期</li>
   </div>
   <div class='contentCard'>

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
.card{
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
.contentCard{
  flex:1;
}
</style>