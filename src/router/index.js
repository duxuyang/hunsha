import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import top from '@/components/top'
import footerb from '@/components/footerb'
import activity from '@/components/activity'
import contact from '@/components/contact'
import customers from '@/components/customers'
import login from '@/components/login'
import register from '@/components/register'
import news from '@/components/news'
import newsdetail from '@/components/newsdetail'
import photoes from '@/components/photoes'
import photoesdetail from '@/components/photoesdetail'
import message from '@/components/message'
import weibo1 from '@/components/weibo1'
import demo1 from '@/components/demo1'
import demo2 from '@/components/demo2'
import parent from '@/components/parent'
import son from '@/components/son'
import son1 from '@/components/son1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/index',
      component:index
    },
    {
      path:'/message',
      component:message
    },
     {
      path:'/photoesdetail',
      component:photoesdetail
    },
    {
      path:'/photoes',
      component:photoes
    },
    {
      path:'/newsdetail',
      component:newsdetail
    },
    {
      path:'/news',
      component:news
    },
    {
      path:'/customers',
      component:customers
    },
    {
      path:'/contact',
      component:contact
    },
    {
      path:'/activity',
      component:activity
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/register',
      component:register
    },
    {
      path:'/weibo1',
      component:weibo1,
      children:[
      	{
          path:'/',
          component:demo1
        },
         {
          path:'/demo1',
          component:demo1
        },    
      	{
          path:'/demo2',
          component:demo2
        }    
      ]
    },
    {
      path:'/parent',
      component:parent
    }
  ]
})
