<template>
  <div class="wrapper">
    <div class="banner">
       <img src="../../../../static/images/topic.png" alt="">
       <p>南靖特产专区</p>
    </div>
    <div class="tit">
       <img src="../../../../static/images/left.png" alt="">
       <span>南靖特产专区</span>
       <img src="../../../../static/images/right.png" alt="">
    </div>
    <div class="topicList">
    <div>
        <img src="../../../../static/images/topicList.png" alt="">
       <div class="block">
          <span class="produce">10致大海的的华师大的时候大会收到货到时候跌Hi好山东矿机别的班</span>
          <p><span class="price">￥79</span><small>赚￥3.44元</small></p>
       </div>
    </div>
    <div>
        <img src="../../../../static/images/topicList.png" alt="">
       <div class="block">
          <span class="produce">10致大海的的华师大的时候大会收到货到时候跌Hi好山东矿机别的班</span>
          <p><span class="price">￥79</span><small>赚￥3.44元</small></p>
       </div>
    </div>
      <div>
        <img src="../../../../static/images/topicList.png" alt="">
       <div class="block">
          <span class="produce">10致大海的的华师大的时候大会收到货到时候跌Hi好山东矿机别的班</span>
          <p><span class="price">￥79</span><small>赚￥3.44元</small></p>
       </div>
    </div>
      <div>
        <img src="../../../../static/images/topicList.png" alt="">
       <div class="block">
          <span class="produce">10致大海的的华师大的时候大会收到货到时候跌Hi好山东矿机别的班</span>
          <p><span class="price">￥79</span><small>赚￥3.44元</small></p>
       </div>
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
<style scoped lang="scss">
.wrapper{
  width:100%;
  height:100%;
  background:#F7F7F7;
  .banner{
    width:100%;
    height:500rpx;
    background:white;
    img{
      width:100%;
      height:80%;
    }
    p{
   width:100%;
   flex:1;
   color:red;
   line-height:80rpx;
   padding:0 20rpx;
    }
  }

  .tit{
    width:100%;
    height:180rpx;
    display:flex;
    justify-content:center;
    line-height:180rpx;
    align-items:center;
    font-size:30rpx;
    img{
      width:100rpx;
      height:30rpx;
    }
  }

  .topicList{
    width:100%;
    display:flex;
    flex-direction:column;
    div{
      width:100%;
      height:300rpx;
      background:white;
      margin-top:30rpx;
      display:flex;
      justify-content:space-around;
      img{
       width:32%;
       height:88%;
       margin:20rpx 20rpx;
      }
      .block{
      flex:1;
       height:100%;
      display:flex;
      flex-direction:column;
      span{
        display:block;
      }
      .produce{
        display:inline-block;
        width:90%;
        height:80rpx;
        color: #323a45;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
         line-height: 40rpx;
         margin-top:-50rpx;
      }
      p{
        display:flex;
        margin-top:-30rpx;
        .price{
         color: #fc5d7b;
         margin-right: 20rpx;

        }
        small{
          padding-top:10rpx;
          border-radius: 6rpx;
          font-size: 24rpx;
          background-color: #ffe8ed;
          color: #fc5d7b;
        }
      }
      }
    }
  }
}
</style>