<template>
   <div class='address'>
      <button @click="goAddress">新增收货地址</button>
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
    goAddress(){
      wx.navigateTo({
         url:'/pages/wode/addressDetail/main'
       })
    }
  },
 
}
</script>
<style scoped lang="">
  .address{
    width:100%;
    height:100%;
    background:#f3f7f7;
    padding:100rpx 20rpx;
    box-sizing:border-box;
  }
  button{
    background:#33d6c5;
    color:#fff;
  }
</style>