<template>
   <div class='personMessage'>
        <img/>
        <span>默默许愿00</span>
        <p><em>性别</em><em>未设置></em></p>
        <p @click='goPhone'><em>我的手机号</em><em>未绑定></em></p>
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
    goPhone(){
       wx.navigateTo({
         url:'/pages/wode/phone/main'
       })
    }
  },
 
}
</script>
<style scoped lang="">
.personMessage{
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  padding:40rpx;
  box-sizing:border-box;
}
img{
  width:80rpx;
  height:80rpx;
  border-radius:50%;
  background:skyblue;
  display:flex;
  margin:20px auto;
}
span{
  margin : 0 auto;
  margin-bottom:40px ;
}
p{
  width:100%;
  height:100rpx;
  display:flex;
  justify-content:space-between;
  padding:0 20rpx;
  box-sizing:border-box;
}
</style>