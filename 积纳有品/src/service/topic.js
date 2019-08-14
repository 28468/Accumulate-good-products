import fly from '@/utils/request';
//专题
//获取专题详情  
export function topicInfo(){
  //console.log(params)
  
  return fly.post("/api/open/sepcial/query/1.0.0")
}
