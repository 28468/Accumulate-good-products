<template>
  <div class="wrapper">
  <form report-submit="true" @submit="formSubmit" @reset="formReset">
    <div class="info">
     <p class="name">
          <label for="text">真实姓名</label>
          <input placeholder="请输入身份证姓名" id="text" name="text" type="text"/>
     </p>
      <p class="idcard">
          <label for="card">身份证号</label>
          <input placeholder="请输入身份证号" id="card" name="card" type="card" />
      </p>
    </div>
    <view class="upload">
     <view class="uploadtit">
     上传身份证照片
     <label for="">(图片png、jpg大小不超过5M)</label>
     </view>
     <div class="uploadImg">
      <view bindtap="handleProxy">
      <img src="../../../../static/images/photo.png" alt="">
      <span>正面照片</span>
      </view>
      <view bindtap="handleProxy">
        <img src="../../../../static/images/photo.png" alt="">
        <span>反面照片</span>
      </view>
     </div>
     <div class="tit">
      <p>为什么需要实名认证？</p>
      <div class="eve">
        <div>
       ● 根据海关规定,购买跨境商品需要办理清关手续,请您配合进行实名认证,以确保您购买分的商品顺利通过·海关检查。(积纳有品海购承诺所传身份证明只用于办理跨境商品的清关手续,不做他途使用,其他任何人均法查看)
        </div>
      </div>
       <div class="eve">
        <div>
          ● 实名认证的规则:购买跨境商品需填写积纳账号注册·人的真实姓名、身份证号码及与实名一致的手机号,部分商品下单时需提供收货人的实名信息(含身份证照片)，具体请以下单时的提示为准。
        </div>
      </div>
     </div>
     <button>保存</button>
    </view>
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
  background: #f3f7f7;
  .info {
    width: 100%;
    height: 200rpx;
    background: white;
    p {
      width: 100%;
      height: 100rpx;
      align-items: center;
      display: flex;
      label {
        width: 150rpx;
        margin-left: 26rpx;
        font-size: 32rpx;
        font-weight: 700;
      }
      input {
        height: 100rpx;
        flex: 1;
        padding-left: 20rpx;
        font-size: 32rpx;
      }
    }
  }
  .upload {
    width: 100%;
    height: 350rpx;
    margin-top: 20rpx;
    background: white;
    .uploadtit {
      width: 100%;
      height: 100rpx;
      line-height: 100rpx;
      display: flex;
      justify-content: space-around;
      font-size: 32rpx;
      label {
        font-size: 30rpx;
        display: inline-block;
        color: #999da2;
      }
    }
    .uploadImg {
      display: flex;
      img {
        width: 100rpx;
        height: 90rpx;
        margin-top: 30rpx;
      }
      view {
        width: 330rpx;
        height: 220rpx;
        border-radius: 10rpx;
        border: 1rpx dashed #64e1d3;
        margin-left: 34rpx;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    .tit {
      width: 100%;
      display: block;
      p {
        height: 80rpx;
        line-height: 80rpx;
        text-align: center;
        font-size: 32rpx;
        margin-top: 40rpx;
      }
      .eve {
        width: 100%;
        height: 230rpx;
        font-size: 28rpx;
        color: #999da2;
        div {
          width: 80%;
          margin: 0 auto;
          line-height: 45rpx;
        }
      }
    }
    button {
      height: 80rpx;
      width: 90%;
      background: #64e1d3;
      color: #fff;
      font-size: 36rpx;
      line-height: 80rpx;
      border-radius: 17rpx;
      margin: 0 5%;
      margin-top: -20rpx;
    }
  }
}
</style>