import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import meishifenlei from '@/views/modules/meishifenlei/list'
    import dianpufenlei from '@/views/modules/dianpufenlei/list'
    import meishi from '@/views/modules/meishi/list'
    import discussdianpu from '@/views/modules/discussdianpu/list'
    import yonghu from '@/views/modules/yonghu/list'
    import dianjia from '@/views/modules/dianjia/list'
    import discussmeishi from '@/views/modules/discussmeishi/list'
    import orders from '@/views/modules/orders/list'
    import dianpu from '@/views/modules/dianpu/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/meishifenlei',
        name: '美食分类',
        component: meishifenlei
      }
      ,{
	path: '/dianpufenlei',
        name: '店铺分类',
        component: dianpufenlei
      }
      ,{
	path: '/meishi',
        name: '美食',
        component: meishi
      }
      ,{
	path: '/discussdianpu',
        name: '店铺评论',
        component: discussdianpu
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/dianjia',
        name: '店家',
        component: dianjia
      }
      ,{
	path: '/discussmeishi',
        name: '美食评论',
        component: discussmeishi
      }
      ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
      ,{
	path: '/dianpu',
        name: '店铺',
        component: dianpu
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
