import Vue from 'vue'
import Router from 'vue-router'

import CourseMenu from '../views/CourseMenu.vue'
import CourseViewer from '../views/CourseViewer.vue'
import Error from '../views/Error.vue'

import week1 from '../views/web-design-course/week1.vue'
import week2 from '../views/web-design-course/week2.vue'
import week3 from '../views/web-design-course/week3.vue'
import week4 from '../views/web-design-course/week4.vue'
import week4sub2 from '../views/web-design-course/week4-2.vue'
import week5 from '../views/web-design-course/week5.vue'

import week5book1 from '../views/book/book1.vue'
import week5book2 from '../views/book/book2.vue'
import week5book3 from '../views/book/book3.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        { path: '/', component: CourseMenu },
        {
            path: '/course',
            component: CourseViewer,
            children: [
                { path: 'week1', component: week1 },
                { path: 'week2', component: week2 },
                { path: 'week3', component: week3 },
                { path: 'week4', component: week4 },
                { path: 'week4-2', component: week4sub2 },
                { path: 'week5', component: week5 },
                { path: 'week5-book1', component: week5book1 },
                { path: 'week5-book2', component: week5book2 },
                { path: 'week5-book3', component: week5book3 }
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
