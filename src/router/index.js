import Vue from 'vue'
import Router from 'vue-router'

import CourseMenu from '../views/CourseMenu.vue'
import CourseViewer from '../views/CourseViewer.vue'
import Error from '../views/Error.vue'

import week1 from '../views/web-design-course/week1.vue'
import week2 from '../views/web-design-course/week2.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        { path: '/', component: CourseMenu },
        {
            path: '/course',
            component: CourseViewer,
            children: [
                { path: 'week1', component: week1 },
                { path: 'week2', component: week2 }
            ]
        },
        { path: '/404', name: 'error', component: Error },
        { path: '*', redirect: '/404' }
    ]
    // mode: 'history'
})

router.beforeEach(async (to, from, next) => {
    next()
})

export default router
