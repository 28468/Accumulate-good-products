<template>
  <div class="wrapper">
    <div class="search">
      <input placeholder="搜索" />
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
                <swiper-item class="u-item">
                  <image src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=416883042,2446087554&fm=26&gp=0.jpg' class='u-img-slide' mode='aspectFill'></image>
                </swiper-item>
                <swiper-item class="u-item">
                  <image src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2328966754,873353896&fm=26&gp=0.jpg' class='u-img-slide' mode='aspectFill'></image>
                </swiper-item>
                <swiper-item class="u-item">
                  <image src='https://f11.baidu.com/it/u=1328175307,1706219131&fm=72' class='u-img-slide' mode='aspectFill'></image>
                </swiper-item>
            </swiper>
        </div>
        <div class="conter-nav">
          <dl>
            <dt>
              <img
                src="https://jnup.oss-cn-beijing.aliyuncs.com/product/a01c35e1ce24fa20ef3c0b23648b978e.png"
              />
            </dt>
            <dd>会员专区</dd>
          </dl>
          <dl>
            <dt>
              <img
                src="https://jnup.oss-cn-beijing.aliyuncs.com/product/f60f568d90ddea99ec297ea17d65bf98.png"
              />
            </dt>
            <dd>体验会员</dd>
          </dl>
          <dl>
            <dt>
              <img
                src="https://jnup.oss-cn-beijing.aliyuncs.com/product/00d94d41b82362749cf4bdb6a84182ab.png"
              />
            </dt>
            <dd>南靖特产</dd>
          </dl>
          <dl>
            <dt>
              <img
                src="https://jnup.oss-cn-beijing.aliyuncs.com/product/bd2b19587606ecc47e7b715b331d283d.png"
              />
            </dt>
            <dd>偏远包邮</dd>
          </dl>
          <dl>
            <dt>
              <img
                src="https://jnup.oss-cn-beijing.aliyuncs.com/product/9916c8a95d965a4bc78237dfff302d4e.png"
              />
            </dt>
            <dd>夏季驱蚊</dd>
          </dl>
        </div>
        <div class="bao">
          <img
            src="https://jnup.oss-cn-beijing.aliyuncs.com/product/71444f703ec758791ef64cd327a4ce13.jpg?x-oss-process=style/small"
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
        <homeDl></homeDl>
        <div class="tu">
          <img
            src="https://jnup.oss-cn-beijing.aliyuncs.com/product/f93802560ad3f1ec6c5a2074c90822f7.jpg?x-oss-process=style/small"
          />
        </div>
        <div class="selected">
          <div class="nav">
            <label class="_span">精选好物</label>
            <label class="_spans">等你来抢</label>
          </div>
          <img src="/static/images/Group 2.svg" />
        </div>
        <homeDl></homeDl>
        <div class="tu">
          <img
            src="https://jnup.oss-cn-beijing.aliyuncs.com/product/ae6d6963d9523ef8b63f2aa8ab7666c0.jpg?x-oss-process=style/small"
          />
        </div>
        <div class="selected">
          <div class="nav">
            <label class="_span">精选好物</label>
            <label class="_spans">等你来抢</label>
          </div>
          <img src="/static/images/Group 2.svg" />
        </div>
        <homeDl></homeDl>
        <div class="tu">
          <img
            src="https://jnup.oss-cn-beijing.aliyuncs.com/product/e2e81b76eb278e6af9b367ce48625b21.jpg?x-oss-process=style/small"
          />
        </div>
        <div class="selected">
          <div class="nav">
            <label class="_span">精选好物</label>
            <label class="_spans">等你来抢</label>
          </div>
          <img src="/static/images/Group 2.svg" />
        </div>
        <homeDl></homeDl>
        <div class="tu">
          <img
            src="https://jnup.oss-cn-beijing.aliyuncs.com/product/e2e81b76eb278e6af9b367ce48625b21.jpg?x-oss-process=style/small"
          />
        </div>
        <div class="selected">
          <div class="nav">
            <label class="_span">精选好物</label>
            <label class="_spans">等你来抢</label>
          </div>
          <img src="/static/images/Group 2.svg" />
        </div>
        <homeDl></homeDl>
        <div class="list">
          <div class="selected">
            <div class="nav">
              <label class="_span">为你精选</label>
              <label class="_spans">等你来抢</label>
            </div>
          </div>
          <homeList></homeList>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import homeDl from "../../components/dl";
import homeList from '../../components/list'
export default {
  props: {},
  components: {
    homeDl,
    homeList
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
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
  ._scroll {
    width: 100%;
    display: flex;
    white-space: nowrap;
    height: 100rpx;
    background: #fff;
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