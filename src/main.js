// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.config.productionTip = false



router.beforeEach((to, from, next) => {
  console.log("路有钩子跳转")
  document.title = `Mmail后端管理系统 | ${to.meta.title}`;
  const role = localStorage.getItem('admin');
  if (!role && to.path !== '/login') {
      next('/login');
  }  else if (to.meta.permission) {
  //     // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
      role === 'admin' ? next() : next('/403');
  } else if (to.matched.length === 0) {
    next('/404');
   // from.name ? next({
   //   name: from.name
   // }) : next('/404');
  }else {
      // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
      if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/edit') {
          Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
              confirmButtonText: '确定'
          });
      } else {
          next();
      }
  }
});




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
