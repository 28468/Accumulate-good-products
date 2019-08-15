<template>
  <div class="wrappers">
    <label class="banner">
      <div class="divs">
        <img :src="list.specialImg" />
      </div>
      <div class="aa">
        <label class="_span">{{list.specialName}}</label>
      </div>
    </label>
    <div class="main">
      <div class="tit">
        <img src="../../../../static/images/right.png" alt />
        <span>南靖特产专区</span>
        <img src="../../../../static/images/right.png" alt />
      </div>
      <div class="topicList">
        <div v-for="(item,index) in list.anchors[0].products"
        :key="index"
        @click="detail(item)"
        >
          <img :src="item.mainImgUrl" alt />
          <div class="block">
            <span class="produce">{{item.title}}</span>
            <p>
              <span class="price">￥{{item.salesPrice}}</span>
              <small>赚￥{{item.memberDiscountPrice}}元</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      list: state => state.topic.list
    })
  },
  methods: {
     ...mapActions({
      getDetailData: "home/getDetailData",
      getDetailNum: "home/getDetailNum",
      getDetailImg: "home/getDetailImg"
    }),
    detail(item){
      let pid=item.pid
      this.getDetailData(pid)
      this.getDetailNum(pid)
      this.getDetailImg(pid)
      wx.navigateTo({ url: "../searchDetail/main" });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.wrappers {
  width: 100%;
  background: #f3f7f7;
  .banner {
    width: 100%;
    .divs {
      width: 100%;
      img {
        width: 100%;
        height: 300rpx;
        display: inline-block;
        overflow: hidden;
      }
    }
    .aa {
      width: 100%;
      height: 92rpx;
      line-height: 92rpx;
      display: flex;
      white-space: nowrap;
      justify-content: space-between;
      background: #fff;
      ._span {
        height: 92rpx;
        margin: 0 20rpx;
        flex: 1;
        display: inline-block;
        color: red;
      }
    }
  }

  .main {
    height: 100vh;
    box-sizing: border-box;
    display: block;
    width: 100%;
    .tit {
      width: 100%;
      display: flex;
      height: 150rpx;
      box-sizing: border-box;
      padding: 0 150rpx;
      justify-content: space-between;
      span {
        width: 300rpx;
        height: 50rpx;
        font-size: 28rpx;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: #484848;
        line-height: 50rpx;
        text-align: center;
        margin-top: 50rpx;
        box-sizing: border-box;
      }
      img {
        width: 100rpx;
        height: 30rpx;
        margin-top: 60rpx;
      }
    }

    .topicList {
      width: 100%;
      display: flex;
      flex-direction: column;
      div {
        width: 100%;
        height: 300rpx;
        background: white;
        margin-top: 30rpx;
        display: flex;
        justify-content: space-around;
        img {
          width: 32%;
          height: 88%;
          margin: 20rpx 20rpx;
        }
        .block {
          flex: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          span {
            display: block;
          }
          .produce {
            display: inline-block;
            width: 90%;
            height: 80rpx;
            color: #323a45;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            line-height: 40rpx;
            margin-top: -50rpx;
          }
          p {
            display: flex;
            margin-top: -30rpx;
            .price {
              color: #fc5d7b;
              margin-right: 20rpx;
            }
            small {
              padding-top: 10rpx;
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
}
</style>