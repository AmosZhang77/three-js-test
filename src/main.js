import Vue from 'vue'
import App from './App.vue'
// import THREE from 'three.js'
// import * as THREE from 'three';
Vue.config.productionTip = false
// Vue.prototype.THREE = THREE
import router from './router'

new Vue({
  render: h => h(App),
  router,

}).$mount('#app')
