import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './style.css'
import './style.scss'
import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

Vue.use(PerfectScrollbar)
// import VueHighlightJS from 'vue-highlight.js'

// // Highlight.js languages (All languages)
// import 'vue-highlight.js/lib/allLanguages'

// /*
// * Import Highlight.js theme
// * Find more: https://highlightjs.org/static/demo/
// */
// import 'highlight.js/styles/default.css'

// /*
// * Use Vue Highlight.js
// */
// Vue.use(VueHighlightJS)

const app = new Vue({
    store,
    router,
    el: '#app',
    mounted () {
        // router.push('/course/week8')
    },
    render: h => h(App)
})
