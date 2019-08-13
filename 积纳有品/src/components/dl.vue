<template>
  <div class="aa">
    <div class="dl">
      <div class="dt">
        <img
          src="https://jnup.oss-cn-beijing.aliyuncs.com/web/uploads/image/store_1/f957bc59e14afd4f251d79ce086d5d0270bb13c6.jpg?x-oss-process=style/small"
        />
      </div>
      <div class="title">澳洲直邮 QV 意高小老虎保湿面霜 250g 包邮</div>
      <div class="pic">￥75</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
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
      -webkit-line-clamp: 2;
      line-clamp: 2;
    }
    .pic {
      font-size: 28rpx;
      color: #fc5d7b;
    }
  }
}
</style>