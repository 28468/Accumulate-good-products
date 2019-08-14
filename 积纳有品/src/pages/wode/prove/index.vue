<template>
  <div class="wrapper">
    <form report-submit="true" @submit="formSubmit" @reset="formReset">
      <div class="info">
        <p class="name">
          <label for="text">真实姓名</label>
          <input placeholder="请输入身份证姓名" id="text" name="text" type="text" />
        </p>
        <p class="idcard">
          <label for="card">身份证号</label>
          <input placeholder="请输入身份证号" id="card" name="card" type="card" />
        </p>
      </div>
    </form>
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
.wrapper {
  width: 100%;
  height: 100%;
  .info {
    width: 100%;
    height: 200rpx;
    p {
      display: flex;
    }
  }
}
</style>