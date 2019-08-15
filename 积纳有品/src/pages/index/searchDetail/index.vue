<template>
  <div class="searchDetail">
    <div class="u-wrp-bnr" autoplay="true">
      <img :src="detail.mainImgUrl"/>
    </div>
    <div class="detMoney">
      <span>￥{{detail.salesPrice}}</span>
      <span>{{detail.vipPrice}}</span>
      <img src="../../../../static/images/vip.svg"/>
      <p>
        分享赚
        <span>{{detail.earnMoney}}</span>
      </p>
    </div>
    <div class="detTit">
      <P>{{detail.title}}</P>
      <b>快递包邮</b>
    </div>
    <div class="detChoose">
      <div class="chooseLeft" @click="click">
        <label class="_span">选择</label>
        <div class="_div">
          <label>数量</label>
          <label>></label>
        </div>
      </div>
      <div class="chooseRight">
        <label class="_span">提示</label>
        <div class='div'>
          <label class="_spans">{{dq}}</label>
        </div>
      </div>
    </div>
    <div class="imgs">
      <img
      v-for="(item,index) in img"
      :key="index"
      :src="item.imgUrl"
      :style="{'height':item.imgHeight+'rpx'}"
      />
    </div>
    <div class="mask" v-if="flag">
      <div class="div">
        <div class="_p">
          <label class="_span">{{num.aname}}</label>
          <label class="_span" @click="close">x</label>
        </div>
        <div class="_dl">
          <div class="dt">
            <img :src="detail.mainImgUrl"/>
          </div>
          <div class="dd">
            <div class="_p">￥{{detail.salesPrice}}</div>
            <div class="_ps">库存：{{detail.totalStock}}</div>
          </div>
        </div>
        <div class="_div">
          <div class="_p">默认</div>
          <div class="jian">
            <!-- <div class="divs">{{num[0].attributeValueRelationVoList[0].vname}}</div>
            <div class="divss">{{num[0].attributeValueRelationVoList[1].vname}}</div> -->
          </div>
        </div>
        <div class="_divs">
          <label class="_span">数量</label>
          <div class="count">
            <label class="del">-</label>
            <label class="num">1</label>
            <label class="add">+</label>
          </div>
        </div>
        <button>确定</button>
      </div>
    </div>
    <div class="btns">
      <p @click="goShare">
        分享赚
        <span>{{detail.earnMoney}}</span>
      </p>
      <p>立即购买</p>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      flag:false
    };
  },
  computed: {
    ...mapState({
      img:state => state.home.img,
      dq:state => state.home.dq,
      detail:state => state.home.detail,
      num:state => state.home.num
    })
  },
  methods: {
      goShare(){
      console.log(this.detail.pid)
      wx.navigateTo({ url: "/pages/index/share/main?pid="+this.detail.pid });
   },
    click(){
      this.flag = !this.flag;
    },
    close(){
       this.flag = false
    }
  },
  
  created() {
  console.log(this.flag)
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.searchDetail {
  width: 100%;

  overflow-y: auto;
}
.u-wrp-bnr {
  width: 100%;
  height: 750rpx;
  display: block;
  img{
    width: 100%;
    height: 100%;
  }
}
.u-item {
  display: block;
  width: 100%;
  height: 100%;
}
.u-item > image {
  display: block;
  width: 100%;
  height: 100%;
}
.detMoney {
  position: relative;
  width: 100%;
  height: 100rpx;
  display: flex;
  img{
    width: 40rpx;
    height: 20rpx;
    margin-top: 45rpx;
    margin-left: 10rpx;
    display: inline-block;
    overflow: hidden;
  }
}
.detMoney > span:nth-child(1) {
  height: 100%;
  line-height: 100rpx;
  color: rgb(243, 117, 138);
  font-size: 40rpx;
  text-indent: 30rpx;
}
.detMoney > span:nth-child(2) {
  line-height: 100rpx;
  color: rgb(125, 125, 10);
  font-size: 25rpx;
  display: inline-block;
  margin-left: 20rpx;
}
.detMoney > p {
  width: 20%;
  height: 50rpx;
  line-height: 50rpx;
  text-align: center;
  position: absolute;
  right: 0;
  top: 25rpx;
  border: 1rpx solid rgb(243, 117, 138);
  font-size: 20rpx;
  color: rgb(243, 117, 138);
  border-bottom-left-radius: 20rpx;
  border-top-left-radius: 20rpx;
}
.detTit {
  width: 100%;
  flex: 1;
  margin-top: 10rpx;
}
.detTit > p {
  font-size: 38rpx;
  color: #333;
  margin-left: 2%;
}
.detTit > b {
  display: block;
  color: #999;
  font-size: 28rpx;
  margin-top: 10rpx;
  margin-left: 2%;
}
.detChoose {
  width:100%;
  padding:0 2%;
  box-sizing:border-box;
  .chooseLeft{
    display:flex;
    font-size:26rpx;
    height:80rpx;
    line-height:80rpx;
    ._span{
      color:#676767;
    }
    ._div{
      flex:1;
      color:#323a45;
      display:flex;
      padding:0 10rpx;
      box-sizing:border-box;
      justify-content:space-between;
    }
  }
  .chooseRight{
    display:flex;
    font-size:26rpx;
    height:80rpx;
    line-height:80rpx;
    ._span{
      padding: 20rpx;
      color:#676767;
    }
    .div{
      flex:1;
      color:#323a45;
      display:flex;
      padding:0 10rpx;
      box-sizing:border-box;
      justify-content:space-between;
      ._spans{
        color:#fc5d7b;
      }
    }
  }
}
.imgs{
  width: 100%;
  height: 400rpx;
  margin-bottom: 120rpx;
  img{
    width: 100%;
    height: 100%;
  }
}
.mask{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  // display:none;
  .div{
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    ._p{
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
    }
    ._dl{
      display: flex;
      padding: 0 2%;
      box-sizing: border-box;
      .dt{
        margin-right: 5px;
        img{
          width: 160rpx;
          height: 160rpx;
          display: inline-block;
          overflow: hidden;
        }
      }
      .dd{
        ._p{
          font-size: 30rpx;
          color: #323a45;
          line-height: 2;
        }
        ._p{
          font-size: 30rpx;
          color: #999da2;
          line-height: 2;
        }
      }
    }
    ._div{
      padding: 0 2%;
      box-sizing: border-box;
      margin-top: 10rpx;
      ._p{
        color: #999da2;
        font-size: 30rpx;
        line-height: 2;
      }
      .jian{
        display: flex;
        flex-wrap: wrap;
        .divs{
          background: #33d6c5;
          color: #fff;
          border: 2rpx solid #33d6c5;
          padding: 6rpx 16rpx;
          box-sizing: border-box;
          margin: 10rpx 20rpx;
          font-size: 24rpx;
        }
        .divss{
          border: 2rpx solid #ccc;
          padding: 6rpx 16rpx;
          box-sizing: border-box;
          margin: 10rpx 20rpx;
          font-size: 24rpx;
          border-radius: 10rpx;
        }
      }
    }
    ._divs{
      padding: 0 2%;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20rpx;
      ._span{
        font-size: 30rpx;
        color: #999da2;
        line-height: 2;
      }
      .count{
        display: flex;
        .del{
          display: block;
          line-height: 2;
          font-size: 28rpx;
          text-align: center;
          padding: 0 20rpx;
          box-sizing: border-box;
          border: 2rpx solid #ccc;
        }
        .num{
          min-width: 80rpx;
          display: block;
          line-height: 2;
          font-size: 28rpx;
          text-align: center;
          padding: 0 20rpx;
          box-sizing: border-box;
          border: 2rpx solid #ccc;
        }
        .add{
          display: block;
          line-height: 2;
          font-size: 28rpx;
          text-align: center;
          padding: 0 20rpx;
          box-sizing: border-box;
          border: 2rpx solid #ccc;
        }
      }
    }
    button{
      width: 100%;
      height: 110rpx;
      line-height: 110rpx;
      text-align: center;
      color: #fff;
      background: linear-gradient(217deg,#f86367,#fb2579);
      padding: 0;
      margin: 0;
    }
  }
}
.btns {
  position: fixed;
  bottom: 0;
  z-index: 888;
  width: 100%;
  height: 100rpx;
  display: flex;
}
.btns > p {
  width: 50%;
  height: 100rpx;
  line-height: 100rpx;
  text-align: center;
  color: white;
  background: linear-gradient(217deg, #f86367, #fb2579);
}
</style>