<template>
  <div class="aa">
    <div class="dl" v-for="(item,index) in dl" :key="index" @click='detail(item)'>
      <div class="dt">
        <img :src="item.imgUrl" />
      </div>
      <div class="title">{{item.title}}</div>
      <div class="pic">{{item.salesPrice}}</div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  props: {
    dl: {
      type: Array,
      default: []
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions({
      getDetailData: "home/getDetailData",
      getDetailNum: "home/getDetailNum",
      getDetailImg: "home/getDetailImg",
      getDetailDq: "home/getDetailDq"
    }),
    detail(item){
      let id=item.jumpUrl.split("product")[1].split("&")[1].split("=")[1]
      this.getDetailData(id)
      this.getDetailNum()
      this.getDetailImg()
      this.getDetailDq()
      wx.navigateTo({ url: "searchDetail/main" });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.aa {
  width: 100%;
  .dl {
    display: inline-block;
    width: 30vw;
    margin-left: 2.5vw;
    .dt {
      width: 30vw;
      height: 30vw;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        max-height: 100%;
        max-width: 100%;
        width: 320px;
        height: 240px;
        display: inline-block;
        overflow: hidden;
      }
    }
    .title {
      font-size: 28rpx;
      color: #323a45;
      line-height: 40rpx;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .pic {
      font-size: 28rpx;
      color: #fc5d7b;
    }
  }
}
</style>