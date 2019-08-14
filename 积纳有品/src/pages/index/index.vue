<template>
  <div class="wrapper">
    <div class="search">
      <input placeholder="搜索" disabled/>
    </div>
    <nav class="_scroll">
      <li class="_li active">今日推荐</li>
      <li class="_li">奶粉</li>
      <li class="_li">尿不湿</li>
      <li class="_li">运动户外</li>
      <li class="_li">母婴专区</li>
      <li class="_li">家具生活</li>
    </nav>
    <section class="main">
      <div class="conter">
        <div class="swiper">
             <swiper class="u-wrp-bnr" autoplay="true" indicator-dots='true'>
                <swiper-item class="u-item" 
                v-for="(item,index) in swiper"
                :key="index"
                >
                  <image :src='item.imgUrl' class='u-img-slide' mode='aspectFill'></image>
                </swiper-item>
            </swiper>
        </div>
        <div class="conter-nav">
          <dl v-for="(item,index) in nav"
          :key="index"
          >
            <dt>
              <img
                :src="item.imgUrl"
              />
            </dt>
            <dd>{{item.title}}</dd>
          </dl>
        </div>
        <div class="bao">
          <img
            :src="tu"
          />
        </div>
        <div class="tu">
          <img
            src="https://jnup.oss-cn-beijing.aliyuncs.com/product/82bbf5eb5ec638aa1a471ae2b0126eee.jpg?x-oss-process=style/small"
          />
        </div>
        <div class="selected">
          <div class="nav">
            <label class="_span">精选好物</label>
            <label class="_spans">等你来抢</label>
          </div>
          <img src="/static/images/Group 2.svg" />
        </div>
        <homeDl :dl="dl"></homeDl>
        <div class="tu">
          <img
            :src="tu2"
          />
        </div>
        <div class="selected">
          <div class="nav">
            <label class="_span">精选好物</label>
            <label class="_spans">等你来抢</label>
          </div>
          <img src="/static/images/Group 2.svg" />
        </div>
        <homeDl :dl='dl1'></homeDl>
        <div class="tu">
          <img
            :src="tu3"
          />
        </div>
        <div class="selected">
          <div class="nav">
            <label class="_span">精选好物</label>
            <label class="_spans">等你来抢</label>
          </div>
          <img src="/static/images/Group 2.svg" />
        </div>
        <homeDl :dl='dl2'></homeDl>
        <div class="tu">
          <img
            :src="tu3"
          />
        </div>
        <div class="selected">
          <div class="nav">
            <label class="_span">精选好物</label>
            <label class="_spans">等你来抢</label>
          </div>
          <img src="/static/images/Group 2.svg" />
        </div>
        <homeDl :dl='dl3'></homeDl>
        <div class="tu">
          <img
            :src="tu5"
          />
        </div>
        <div class="selected">
          <div class="nav">
            <label class="_span">精选好物</label>
            <label class="_spans">等你来抢</label>
          </div>
          <img src="/static/images/Group 2.svg" />
        </div>
        <homeDl :dl='dl4'></homeDl>
        <div class="list">
          <div class="selected">
            <div class="nav">
              <label class="_span">为你精选</label>
              <label class="_spans">等你来抢</label>
            </div>
          </div>
          <homeList :list='listData'></homeList>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import homeDl from "../../components/dl";
import homeList from '../../components/list'
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {
    homeDl,
    homeList
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      // homeData: state => state.home.homeData,
      swiper: state => state.home.swiper,
      nav: state => state.home.nav,
      tu: state => state.home.tu,
      tu1: state => state.home.tu1,
      dl: state => state.home.dl,
      tu2: state => state.home.tu2,
      dl1: state => state.home.dl1,
      tu3: state => state.home.tu3,
      dl2: state => state.home.dl2,
      tu4: state => state.home.tu4,
      dl3: state => state.home.dl3,
      tu5: state => state.home.tu5,
      dl4: state => state.home.dl4,
      listData:state => state.home.listData
    }),
  },
  methods: {
    ...mapActions({
      getData: 'home/getData',
      getNavData:'home/getNavData',
      getLData:'home/getLData'
    }),
  },
  created() {},
  onShow(){
    this.getData()
    this.getNavData()
    this.getLData()
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
  .search {
    width: 100%;
    height: 60rpx;
    display: block;
    padding: 0 20rpx;
    box-sizing: border-box;
    input {
      width: 100%;
      height: 100%;
      background: #eee;
    }
  }
  ::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
  ._scroll {
    width: 100%;
    display: flex;
    white-space: nowrap;
    height: 100rpx;
    background: #fff;
    overflow-x: auto;
    ._li {
      font-size: 32rpx;
      display: inline-block;
      height: 100rpx;
      line-height: 94rpx;
      text-align: center;
      color: #484848;
      box-sizing: border-box;
      margin: 0 20rpx;
    }
    .active {
      border-bottom: 6rpx solid #56d2bf;
      line-height: 94rpx;
      font-weight: 500;
      color: #56d2bf;
    }
  }
  .main {
    .conter {
      width: 100%;
      height: 100%;
      .swiper {
        width: 100vw;
        padding: 0 10rpx;
        height: 39.5vw;
        margin-bottom: 20rpx;
        margin-top: 10rpx;
        box-sizing: border-box;
       .u-wrp-bnr{
         width:100%;
height:39.5vw;
box-sizing:border-box;
display: block;
     .u-item{
       position:absolute;
width:100%;
height:100%;
transform:translate(0%, 0px) translateZ(0px);
 display:block;
overflow:hidden;
will-change:transform;
 image{
   height:100%;
width:100%;
border-radius:10rpx;
display:inline-block;
overflow:hidden;

 }
     }
       }
      }
      .conter-nav {
        display: flex;
        dl {
          width: 20%;
          box-sizing: border-box;
          text-align: center;
          margin: 0 0 20rpx;
          dt {
            width: 100%;
            img {
              width: 114rpx;
              height: 114rpx;
              display: inline-block;
              overflow: hidden;
            }
          }
          dd {
            width: 100%;
            font-size: 24rpx;
            line-height: 2;
          }
        }
      }
      .bao {
        width: 100%;
        height: 208rpx;
        img {
          width: 96%;
          height: 100%;
          margin: 0 2%;
          border-radius: 30rpx;
          display: inline-block;
          overflow: hidden;
        }
      }
      .selected {
        display: flex;
        font-size: 26rpx;
        justify-content: space-between;
        padding: 0 20rpx;
        margin: 6rpx 0;
        line-height: 3;
        .nav {
          display: block;
          ._span {
            font-size: 40rpx;
            padding-right: 20rpx;
          }
          ._spans {
            border-left: 4rpx solid #ccc;
            padding-left: 20rpx;
            box-sizing: border-box;
            font-size: 32rpx;
          }
        }
        img {
          width: 72rpx;
          height: 32rpx;
          margin-top: 44rpx;
          display: inline-block;
          overflow: hidden;
        }
      }
      .tu {
        width: 100%;
        height: 208rpx;
        img {
          width: 96%;
          height: 100%;
          margin: 0 2%;
          border-radius: 30rpx;
          display: inline-block;
          overflow: hidden;
        }
      }
    }
  }
}
.list {
  width: 100%;
  .selected {
    display: flex;
    font-size: 26rpx;
    justify-content: space-between;
    padding: 0 20rpx;
    margin: 6rpx 0;
    line-height: 3;
    .nav {
      display: block;
      ._span {
        font-size: 40rpx;
        padding-right: 20rpx;
      }
      ._spans {
        border-left: 4rpx solid #ccc;
        padding-left: 20rpx;
        box-sizing: border-box;
        font-size: 32rpx;
      }
    }
  }
}
</style>