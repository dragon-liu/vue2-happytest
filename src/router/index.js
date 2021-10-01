import VueRouter from "vue-router"
export default new VueRouter({
  routes:[{
    path:'',
    component: r => require.ensure([], () => r(require('../page/Home')), 'home')
  },{
    path:'/item',
    component: r => require.ensure([], () => r(require('../page/Item')), 'item')
  },{
    path:'/score',
    component: r => require.ensure([], () => r(require('../page/Score')), 'score')
  }]
})