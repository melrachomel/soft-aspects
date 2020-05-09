import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics';

// USE WITH VUE ROUTER COMMENTED OUT BELOW
// import About from './components/About.vue'
// Vue.component('about', About)
// Vue.use(VueRouter)
//
// const routes = [
//   {
//     path: '/about',
//     name: 'about',
//     component: About
//   }
// ]
// const router = new VueRouter ({
//   routes
// })

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-165917874-1'
});

new Vue({
  el: '#app',
  // About,
  // router,
  render: h => h(App)
})
