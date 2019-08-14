import fly from '@/utils/request';
//分类
// 获取分类信息
export let classifyList = params => {
  // console.log(params,'params')
    return fly.post('/api/open/page/home/products/1.0.0', params);
  }
  
export function classifyTopList(){
  //console.log(params)
  return fly.post("/api/open/product/category/query/1.0.0",)
}
