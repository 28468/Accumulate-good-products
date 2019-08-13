import fly from '../utils/request';

// 获取首页dl数据
export function getHomeData() {
  return fly.post("/api/open/page/home/list/1.0.0");
}
// 获取首页nav
export function getNav(payload) {
  // let item = Object.values(payload)
  // let item1 = JSON.parse(item)

  // console.log(item1,"aaaaaaaaa")

  return fly.post("/api/open/product/category/sub/1",payload);
}
// 获取首页list数据
export function getListData(payload) {
  console.log("ddddddd",payload)
  return fly.post("/api/open/page/home/products/1.0.0",payload);
}
// 获取首页商品详情
export function getDetail(payload) {
  return fly.post("/api/open/product/info/1.0.0",payload);
}
export function getDetailNum(payload) {
  return fly.post("/api/open/product/sku/attrs/1.0.0",payload);
}
export function getDetailImg(payload) {
  return fly.post("/api/open/product/detailPicture/1.0.0",payload);
}
export function getDetailDq(payload) {
  return fly.post("/api/open/shipping/templates/info/1.0.0",payload);
}