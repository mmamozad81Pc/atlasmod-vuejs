import Vue from 'vue'
import App from './App.vue'
import './assets/css/Mybody.css'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
