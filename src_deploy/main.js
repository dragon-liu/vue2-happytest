import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import App from './App'
//整个项目的一般样式
import './style/common.less'
//这个rem.js应该是响应式布局相关，没太看懂
import './config/rem' 

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

new Vue({
	router,
	store,
  render: h => h(App)
}).$mount('#app')