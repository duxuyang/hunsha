// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import top from './components/top'
import footerb from './components/footerb'

import './assets/css/reset.css'
import './assets/js/jquery.js'
import './assets/js/jquery.Xslider.js'
Vue.config.productionTip = false

Vue.component('top',top);
Vue.component('footerb',footerb);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
