<template>
  <div class='setting'>
     <p><navigator url="/pages/wode/personMessage/main" hover-class='none'>个人信息</navigator><em>></em></p>
     <p><navigator url="/pages/wode/prove/main" hover-class='none'>实名认证</navigator><em>></em></p>
     <p><navigator url="/pages/wode/address/main" hover-class='none'>收货地址</navigator><em>></em></p>
     <p><span>清除缓存</span><em>></em></p>
  </div>
   
</template>
<script>
export default {
  components:{

  },
  data(){
    return {

    }
  },
  methods: {
  
  },
 
}
</script>
<style scoped lang="">
.setting{
  width:100%;
}
p{
  width:100%;
  height:100rpx;
  display:flex;
  justify-content:space-between;
  padding:0 30rpx;
  box-sizing:border-box;
}

</style>