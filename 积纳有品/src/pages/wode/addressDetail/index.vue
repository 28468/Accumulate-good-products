<template>
   <form>
     <p>
        <input placeholder="收货人"/>
        <em>></em>
     </p>
     <p>
        <input placeholder="手机号"/>
        <em>></em>
     </p>
     <p>
        <input placeholder="所在地区"/>
        <em>></em>
     </p>
     <textarea rows="5" cols="20"
      placeholder='详细地址：如道路、门牌号、小区、楼栋号、单元室等'> 
     </textarea>
     <h3>标签</h3>
     <div class='label'>
       <span>家</span>
       <span>公司</span>
       <span>学校</span>
       <span>其它</span>
     </div>
     <div class="default">
       设为默认地址
     </div>
     <button>
       保存
     </button>
   </form>
</template>
<script>
export default {

  data(){
    return {

    }
  }
 
}
</script>
<style scoped lang="">
 p{
   width:100%;
   height:100rpx;
   display:flex;
   justify-content:space-between;
   padding:0 20rpx;
   box-sizing:border-box;
   border-bottom:1px solid #eee;
   align-items:center;
 }
 textarea{
   padding-left:10px;
   box-sizing:border-box;
 }
 h3{
   border-top:20rpx solid  #f3f7f7;
   padding-left:20px;
   padding-top:20px;
   box-sizing:border-box;
 }
 .label {
   width:100%;
   padding:0 40rpx 70rpx 40rpx;
   box-sizing:border-box;
   margin-top:20px;
 }
 .label span{
   padding:5px 20px;
   box-sizing:border-box;
   border:1px solid #ccc;
   border-radius:10px;
   margin-left:20rpx;

 }
 .default{
  
   width: 100%;
   height: 100rpx;
   display: flex;
   justify-content: space-between;
   padding: 0 20rpx;
   box-sizing: border-box;
 }
 button{
   width: 90%;
   color:#fff;
   background: #33d6c5;
 }
</style>