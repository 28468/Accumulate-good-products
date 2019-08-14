<template>
   <form class='phone'>
      <p>
        <label>手机号</label>
        <input placeholder='请输入新手机号'/>
      </p>
      <p>
        <label>验证码</label>
        <input placeholder='请输入验证码'/>
        <span>获取验证码</span>
      </p>

      <button>验证后绑定新手机</button>
   </form>
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
.phone{
  width:100%;
  height:100%;
 
}
.phone p{
  width:100%;
  height:100rpx;
  display:flex;
  align-items:center;
  padding:0 40rpx;
  box-sizing:border-box;
}
.phone p input{
  padding-left:20rpx;
  box-sizing:border-box;
}
span{
  padding:5px 10px;
  box-sizing:border-box;
  border:1px solid red;
  color:red;
  border-radius:15px;
}
button{
  width:90%;
  color:#fff;
  background:#56d2bf;
  margin-top:40rpx;
}
</style>