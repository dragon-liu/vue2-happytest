import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '', //NOTE:即根路径/#/默认显示home路由组件
        component: r => require.ensure([], () => r(require('../page/home')), 'home')
    }, {
        path: '/item', //NOTE:以/开头的嵌套路径会被当作根路径
        component: r => require.ensure([], () => r(require('../page/item')), 'item')
    }, {
        path: '/score',
        component: r => require.ensure([], () => r(require('../page/score')), 'score')
    }]
}]