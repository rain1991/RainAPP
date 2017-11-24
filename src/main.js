// Import Vue
import Vue from 'vue'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
*/

import Framework7Icons from 'framework7-icons/css/framework7-icons.css'

// Import App Custom Styles
import AppStyles from './css/app.css'


// Import Routes
import Routes from './routes.js'

// 引入全局变量
import api from './api'
//Vue.use(api)
Object.keys(api).forEach((key)=>{
    Vue.prototype[key] = api[key];
})

// Import App Component
import App from './app'

import util from './util'
Vue.use(util);

import Vuex from 'vuex'

Vue.use(Vuex)

import Axios from 'axios'
Vue.prototype.$ajax = Axios

// Init F7 Vue Plugin
Vue.use(Framework7Vue)


// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    dynamicNavbar: true,
    animateNavBackIcon: true,
    /* Uncomment to enable Material theme: */
    vuex: Vuex,
    //axios: Axios,
    routes: Routes
  },
  // Register App Component
  components: {
    app: App
  }
});
