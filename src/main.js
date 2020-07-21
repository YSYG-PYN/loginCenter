import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

/* 导入全局样式表 */
import './assets/global.css'

import axios from 'axios'

import './plugins/element'

// 配置请求的根路径
// axios.defaults.baseURL = 'http://192.168.0.29:7778'
// axios.defaults.headers.common['Authorization'] = 'Basic d2ViOndlYi1zZWNyZXQ='
// 在request 拦截器中，展示进度条 nprogress,start()
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token') ? "Bearer" + window.sessionStorage.getItem('token') : 'Basic d2ViOndlYi1zZWNyZXQ='
  // 在最后必须return config
  return config
})
// response 拦截器中，隐藏进度条 nprogress,done()
axios.interceptors.response.use(config => {
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
