import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import App from './App'
// import ajax from './config/ajax'
import './style/common.less'
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