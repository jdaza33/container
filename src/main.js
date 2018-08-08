import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookie from 'vue-cookie'
import notify from 'vue-notification'
import logger from 'vuejs-logger'
import * as VueGoogleMaps from "vue2-google-maps"

//Buefy
import Buefy from 'buefy'

//CSS Buefy
import 'buefy/lib/buefy.css'

//Config

Vue.use(VueCookie)
Vue.use(notify)
Vue.use(Buefy)

const loggerOptions = {
  // optional : defaults to true if not specified
  isEnabled: true,
  // required ['debug', 'info', 'warn', 'error', 'fatal']
  logLevel: 'debug',
  // optional : defaults to false if not specified
  stringifyArguments: false,
  // optional : defaults to false if not specified
  showLogLevel: false,
  // optional : defaults to false if not specified
  showMethodName: false,
  // optional : defaults to '|' if not specified
  separator: '|',
  // optional : defaults to false if not specified
  showConsoleColors: false
}

Vue.use(logger, loggerOptions)

//Google maps
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyADO0m7x04v9uSYGHh9n6Qk0ds0S76ta-E",
    libraries: "places" // necessary for places input
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
