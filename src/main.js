import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 配置mintui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 配置axios
import axios from 'axios'
axios.defaults.baseURL="http://localhost:3000"
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
