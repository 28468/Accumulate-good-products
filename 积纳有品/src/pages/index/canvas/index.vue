<template>
  <div>
    <canvas style="width: 350px; height: 520px;" canvas-id="canvas"></canvas>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
//头像和用户
const userInfo = {
  avatar:
    "https://jnup.oss-cn-beijing.aliyuncs.com/product/2e236a0f58a99523e698befc100785da.jpg",
  name: "积纳有品"
};
//二维码
const qrCode = "https://upapi.jinaup.com/static/image/QRCode.png";
export default {
  data() {
    return {
      info:{}
    };
  },
  computed: {
    ...mapState({
      detail: state => state.home.detail
    })
  },
  onLoad(){
    this.info = this.detail
  },
  mounted() {
    // 获取canvas
    var context = wx.createCanvasContext("canvas");
    
    // 绘制用户名和头像
    context.drawImage(userInfo.avatar, 0, 0, 800, 800, 20, 12, 40, 40);
    //保存绘图上下文
    context.save();
    //字体大小
    context.setFontSize(12);
    //绘制文字
    context.fillText(`${userInfo.name}分享给你一个商品`, 60, 26);
    context.fillText(`邀请码: dasbdabdbaj`, 60, 46);

    // context.drawImage(info.mainImgUrl, 0, 0, 800, 800, 1, 50, 348, 300);
    // context.setFontSize(20);
    // //绘制文字
    // context.fillText(`${info.title}分享给你一个商品`, 20, 370);
    // 绘制商品大图和标题
    context.save();
    context.setFontSize(12);
    // 计算多行文本，自动换行
    let row = 0,
      pos = 0;
    for (let i = 0; i < this.info.title.length; i++) {
      let str = this.info.title.slice(pos, i);
      if (
        context.measureText(str).width > 266 &&
        context.measureText(str).width < 280
      ) {
        context.fillText(this.info.title.slice(pos, i), 20, 350 + 15 * row);
        row++;
        pos = i;
      }
    }
    if (pos < this.info.title.length) {
      context.fillText(
        this.info.title.slice(pos, this.info.title.length),
        20,
        350 + 15 * row
      );
    }
    //恢复之前保存的绘图上下文
    context.restore();

    // 拿到图片的宽高
    wx.getImageInfo({
      src: this.info.mainImgUrl, //图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径,
      complete: res => {
        console.log("res...", res);
        let rx, ry, rw, rh;
        if (res.width / res.height > 220 / 260) {
          ry = 0;
          rh = res.height;
          rw = res.height / 260 * 220;
          rx = (res.width - rw) / 2;
        } else {
          rx = 0;
          rw = res.width;
          rh = res.height / 220 * 260;
          ry = (res.height - rh) / 2;
        }
        context.drawImage(
          this.info.mainImgUrl,
          0,
          0,
          res.width,
          res.height,
          50,
          80,
          220,
          260
        );
        context.draw(true, () => {
          // 生成图片
          wx.canvasToTempFilePath({
            canvasId: "canvas",
            quality: 1,
            fileType: "jpg",
            complete: res => {
              console.log("tmpFile...", res);
              // 预览一下
              wx.previewImage({
                urls: [res.tempFilePath] //需要预览的图片链接列表,
              });
              // 保存到本地
            }
          });
        });
      }
    });

    // 绘制二维码
    context.save();
    context.setFontSize(15);
    context.fillText("长按识别二维码访问", 20, 480);
    context.restore();
    context.drawImage(qrCode, 0, 0, 1000, 1000, 200, 400, 90, 90);

    // 绘制商品价格
    context.save();
    context.setFontSize(10);
    context.setFillStyle("#ff0000");
    context.fillText("￥", 20, 450);

    context.setFontSize(18);
    context.fillText(this.info.salesPrice, 30, 450);
    context.setFontSize(10);
    context.setFillStyle("#999");
    // this.info.marketPrice = '88888.888888';
    context.fillText(
      `￥${this.info.marketPrice}`,
      155 - context.measureText(`￥${this.info.marketPrice}`).width,
      450
    );
    context.restore();

    context.draw();
  }
};
</script>
<style scoped lang="scss">
canvas {
  width: 100%;
  border: 1px solid rgb(11, 108, 235);
  margin: 0 auto;
}
</style>