import Vue from 'vue'
import App from './App.vue'
import Announcement from './components/alert/Announcement'
import Article from './components/news/article'

Vue.component("app-Announcement",Announcement)
Vue.component("app-article",Article);
new Vue({
  el: '#app',
  render: h => h(App)
})
