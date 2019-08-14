<template>
  <div class="wrap">
    <div class="head">
      <!-- <img src="/static/images/person.svg" alt=""> -->
      <p>提交订单后<span>30:00</span>内未付款，订单已取消</p>
    </div>
    <div class="timeOut">
      <h3>超时取消</h3>
      <p>订单编号: 190110507509504</p>
      <span>复制</span>
    </div>
    <div class="address">
      <h3>李倩倩 1527838560</h3>
      <div>
        <!-- <img src="/static/images/person.svg" alt=""> -->
        <p>北京朝阳区焦奥中心A座902室</p>
      </div>
    </div>
    <div class="menuDetail">
      <p class="menuTime">2019-01-10 16:07:51</p>

      <ul class="menuCar">
        <li>
          <p>
            <img src="/static/images/topic.png" alt="">
          </p>
          <section>
            <p>帮宝适绿帮纸尿裤大号L164片超薄男女通用透气通用婴儿尿布尿不湿</p>
            <p>规格：XL</p>
            <p>
              <span>￥52.50</span>
              <span>x1</span>
            </p>
          </section>
        </li>
      </ul>
      <div class="menus">
        <p>
          <span>运费</span>
          <span>￥0</span>
        </p>
        <p>
          <span>税</span>
          <span>￥0</span>
        </p>
        <p>
          <span>优惠金额</span>
          <span>￥0</span>
        </p>
        <p>
          <span>订单总计</span>
          <span>￥39</span>
        </p>
        <h4 class="call">去付款</h4>
      </div>
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
<style scoped lang="scss">
.wrap{
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  background: #eeeeee;;
}
.head{
  width: 100%;
  height: 80rpx;
  display: flex;
  align-items: center;
  background: rgb(255, 243, 243);
}
.head img{
  width: 40rpx;
  height: 40rpx;
  margin: 0 30rpx;
}
.head p{
   font-size: 26rpx;
}
.head span{
  color: red;
}
.timeOut{
  width: 95%;
  height: 160rpx;
  background: #ffffff;
  border-radius: 20rpx;
  margin:20rpx auto;
}
.timeOut h3{
  font-size: 36rpx;
  margin: 30rpx 0 30rpx 30rpx;
  letter-spacing:2px;
}
.timeOut p{
  font-size: 26rpx;
  margin-left: 30rpx;
  position: absolute;
}
.timeOut span{
  position: relative;
  left:400rpx;
  top: -5rpx;
  display: inline;
  padding: 2rpx 10rpx;
  border: 1px solid red;
  color: red;
  border-radius: 6rpx;
   font-size: 24rpx;
}
.address{
  width: 95%;
  height: 160rpx;
  background: #ffffff;
  border-radius: 20rpx;
  margin:20rpx auto;
}
.address h3{
  font-size: 36rpx;
  margin: 30rpx 0 30rpx 30rpx;
  letter-spacing:2px;
}
.address div{
  display: flex;
}
.address div img{
  width: 40rpx;
  height: 40rpx;
  margin: 0 20rpx;
}
.menuDetail {
  width: 95%;
  height: 670rpx;
  margin-left: 2%;
  background: white;
  border-radius: 10rpx;
  margin-top: 20rpx;
}
.menus {
  margin-top: 30rpx;
  width: 95%;
  margin-left: 2%;
  height: 300rpx;
  p {
    color: #222;
    font-size: 25rpx;
    height: 60rpx;
    line-height: 60rpx;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
.call {
  width: 23%;
  height: 50rpx;
  line-height: 50rpx;
  text-align: center;
  border-radius: 15rpx;
  border: 1px solid red;
  color: red;
  margin-left: 78%;
  font-size: 27rpx;
  margin-top: 50rpx;
}
.menuTime {
  width: 100%;
  height: 100rpx;
  line-height: 100rpx;
  text-indent: 15rpx;
  font-size: 27rpx;
  color: #111;
}
.menuCar {
  width: 95%;
  height: 160rpx;
  margin-left: 2%;
  margin-bottom: 15rpx;
  li:nth-child(1) {
    width: 100%;
    height: 170rpx;
    display: flex;
    > p {
      width: 30%;
      height: 100%;
      > img {
        width: 70%;
        height: 80%;
        margin-top: 10%;
        margin-left: 15%;
        background: green;
        border-radius: 10rpx;
      }
    }
    section {
      width: 70%;
      height: 100%;
      > p:nth-child(1) {
        font-size: 27rpx;
        width: 100%;
        color: #333;
      }
      > p:nth-child(2) {
        font-size: 27rpx;
        width: 100%;
        height: 55rpx;
        line-height: 55rpx;
        color: #666;
      }
      > p:nth-child(3) {
        font-size: 27rpx;
        width: 100%;
        height: 55rpx;
        line-height: 55rpx;
        color: #333;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>