<template>
  <div class="wrap">
    <div class="main">
      <div class="main-list">
         <div class="list-check">
           <img src="/static/images/yes.png" alt="">
         </div>
         <div class="list-img">
            <img
            class="img"
            src="https://jnup.oss-cn-beijing.aliyuncs.com/product/31ded989e831caeaca75e157ecff4031.png"
            alt
          />
         </div>
         <div class="list-con">
           <h4>这是一个纸尿裤这是一个纸尿裤这是一个纸尿裤</h4>
           <p class='list-size'>规格：<span>XL</span></p>
           <p class="list-price">￥<span>52.50</span></p>
         </div>
         <div class="list-box">
           <span>-</span>
           <p>1</p>
           <span>+</span>
           <span>+</span>
         </div>
      </div>
    </div>
    <div class="foot">
     <div class="img">
       <img src="/static/images/noCheck.png" alt="">
       <p>全选</p>
     </div>
     <div class="num">
       <p>总价：<span>￥198.8</span></p>
     </div>
     <div class="btn">
       <p>编辑</p>
       <p>去结算</p>
     </div>
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
.wrap{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.main{
  flex: 1;
  width: 100%;
  overflow-y: auto;
  background: #eeeeee;
}
.main-list{
  width: 95%;
  height: 300rpx;
  background: #ffffff;
  margin: 20rpx auto;
  display: flex;
  justify-content: space-between;
  position: relative;
  border-radius: 20rpx;
}
.list-check img{
    width: 60rpx;
    height: 60rpx;
    margin-left: 20rpx;
}
.list-check{
   width: 80rpx;
   height: 100%;
  display: flex;
  align-items: center;
}

.list-img{
  width: 200rpx;
  height: 100%;
  display: flex;
  align-items: center;
}
.list-img img{
  width: 100%;
  height: 200rpx;
}
.list-con{
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20rpx 0;
  box-sizing: border-box;
}
.list h4{
  width: 600rpx;
  font-size: 32rpx;
}
.list-size{
 color:#666;
 font-size: 28rpx;
 margin: 30rpx 0;
}
.list-price{
color: red;
}
.list-box{
  width: 200rpx;
  height: 50rpx;
  display: flex;
  align-items: center;
  position: absolute;
  right:40rpx;
  bottom: 50rpx;
  text-align: center;
}
.list-box span{
  width: 60rpx;
  height: 100%;
  border: 1px solid #cccccc;
}
.list-box p{
  flex: 1;
  width: 80rpx;
  height: 100%;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
}
.foot{
  width: 100%;
  height: 120rpx;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.img{
  display: flex;
  align-items: center;
}
.img img{
  width: 60rpx;
  height: 60rpx;
  margin:0 30rpx;
}
.num span{
  color: red;
}
.btn{
  display: flex;
}
.btn p{
  width: 160rpx;
  height: 120rpx;
  text-align: center;
  line-height: 120rpx;
  font-size: 32rpx;
  color: #ffffff;
}
.btn p:first-child{
  background: skyblue;
}
.btn p:last-child{
  background: salmon;
}
</style>