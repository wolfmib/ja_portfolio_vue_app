import { createApp } from 'vue'
console.log("01: success create app");
import App from './App.vue'
console.log("01: success create app.vue");
import router from './router/router'
console.log("01: success create router");
import store from './store'
console.log("01: success create store");
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
console.log("01: success create loadfonts");
import '@fortawesome/fontawesome-free/css/all.css';


loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
