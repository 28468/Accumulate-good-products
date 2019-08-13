import fly from '@/utils/request';

//首页tab
export function shouTab() {
    return fly.post('/api/open/sepcial/query/1.0.0/siid=127');
}



