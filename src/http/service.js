import axios from 'axios'
// 导入baseUrl
import { baseUrl } from '@/config'
// 导入Toast
import { Toast } from 'vant';
// 导入vuex
import store from '@/store'
let service = axios.create({
    baseURL: baseUrl, // url = base api url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 10000 // request timeout
  })
  let loading
// 请求拦截
service.interceptors.request.use(config =>{
    //1.loading动画开启
     loading=Toast.loading({
        duration: 5000,
        message: '加载中...',
        forbidClick: true,
      });
    //2.token设置(把token添加到请求头中)  vuex
    config.headers["Authorization"] ='Bearer '+ store.state.token 
    return config
})
// 响应拦截器
service.interceptors.response.use(
      res=> {
        //1、关闭loading
        loading.clear();
        return Promise.resolve(res);
      },
      error => {
        loading.clear();
        console.log("err" + error);
        return Promise.reject(error);
      }
    );
    export default service