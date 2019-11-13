import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Home from './views/main/Home.vue'
import News from './views/main/News.vue'
import About from './views/main/About.vue'
import Menu from './views/main/Menu.vue'
import Strict from './views/main/Strict.vue'
import Store from './views/main/Store.vue'
import Join from './views/main/Join.vue'
import Careers from './views/main/Careers.vue'


Vue.use(Router)

export default new Router({
  // App.vue 的 route
  routes: [
    {
      path: '/main',
      // name: 'home',
      component: Main,
      // Main.vue 底下的 routerview
      children: [
        {path: '/main', component: Home},
        {path: '/main/news', component: News},
        {path: '/main/about', component: About},
        {path: '/main/menu', component: Menu},
        {path: '/main/strict', component: Strict},
        {path: '/main/store', component: Store},
        {path: '/main/join', component: Join},
        {path: '/main/careers', component: Careers},
      ],
    },
    // 一開始或是不知道是哪個連結的都導入首頁 /main
    {
      path: '*', 
      redirect: '/main'
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/main/About.vue')
    // }
  ]
})
