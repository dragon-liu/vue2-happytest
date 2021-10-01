import VueRouter from "vue-router"
export default new VueRouter({
  routes:[{
    path:'',
    component: r => require.ensure([], () => r(require('../page/home')), 'home')
  },{
    path:'/item',
    component: r => require.ensure([], () => r(require('../page/item')), 'item')
  },{
    path:'/score',
    component: r => require.ensure([], () => r(require('../page/score')), 'score')
  }]
})