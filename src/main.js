import Vue from 'vue'
import App from './App.vue'
import THREE from 'three.js'

Vue.config.productionTip = false
Vue.prototype.THREE = THREE

new Vue({
  render: h => h(App)
}).$mount('#app')
