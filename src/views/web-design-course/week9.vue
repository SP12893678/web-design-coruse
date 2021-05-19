<template>
  <v-coruse-card
    :code="code"
    :date="date"
    :title="title"
    :week="week"
  >
    <template slot="card-left">
      <h1 class="text-2xl my-2 font-bold">
        相對路徑
      </h1>
      <div class="flex space-x-2">
        <router-link
          class="px-2 py-2 bg-blue-400 shadow-md rounded-md flex flex-col w-32"
          to="./week1"
        >
          <div>Week1</div>
          <div class=" text-xs text-gray-700">
            ./week1
          </div>
        </router-link>
        <router-link
          class="px-2 py-2 bg-green-400 shadow-md rounded-md flex flex-col w-32"
          to="./week2"
        >
          <div>Week2</div>
          <div class=" text-xs text-gray-700">
            ./week2
          </div>
        </router-link>
        <router-link
          class="px-2 py-2 bg-yellow-400 shadow-md rounded-md flex flex-col w-32"
          to="./book/1"
        >
          <div>Book1</div>
          <div class=" text-xs text-gray-700">
            ./book/1
          </div>
        </router-link>
        <router-link
          class="px-2 py-2 bg-orange-500 shadow-md rounded-md flex flex-col w-32"
          to="../"
        >
          <div>Dashboard</div>
          <div class=" text-xs text-gray-700">
            ../
          </div>
        </router-link>
        <router-link
          class="px-2 py-2 bg-red-400 text text-white shadow-md rounded-md flex flex-col w-32"
          to="../404"
        >
          <div>404 Error</div>
          <div class=" text-xs text-gray-700">
            ../404
          </div>
        </router-link>
      </div>

      <h1 class="text-2xl my-2 font-bold">
        絕對路徑
      </h1>
      <div class="flex space-x-2">
        <router-link
          class="px-2 py-2 bg-blue-400 shadow-md rounded-md flex flex-col w-32"
          to="/course/week1"
        >
          <div>Week1</div>
          <div class=" text-xs text-gray-700">
            /course/week1
          </div>
        </router-link>
        <router-link
          class="px-2 py-2 bg-green-400 shadow-md rounded-md flex flex-col w-32"
          to="/course/week1"
        >
          <div>Week2</div>
          <div class=" text-xs text-gray-700">
            /course/week2
          </div>
        </router-link>
        <router-link
          class="px-2 py-2 bg-yellow-400 shadow-md rounded-md flex flex-col w-32"
          to="/course/book/1"
        >
          <div>Book1</div>
          <div class=" text-xs text-gray-700">
            /course/book/1
          </div>
        </router-link>
        <router-link
          class="px-2 py-2 bg-orange-500 shadow-md rounded-md flex flex-col w-32"
          to="/"
        >
          <div>Dashboard</div>
          <div class=" text-xs text-gray-700">
            /
          </div>
        </router-link>
        <router-link
          class="px-2 py-2 bg-red-400 text text-white shadow-md rounded-md flex flex-col w-32"
          to="/404"
        >
          <div>404 Error</div>
          <div class=" text-xs text-gray-700">
            /404
          </div>
        </router-link>
      </div>
    </template>
  </v-coruse-card>
</template>

<script>
import vCoruseCard from '../CourseCard.vue'

import image1 from '../../assets/images/ball-size-b.png'
import image2 from '../../assets/images/ball-size-m.png'
import image3 from '../../assets/images/ball-size-s.png'

const mycode = `

`

export default {
    components: {
        vCoruseCard
    },
    data () {
        return {
            title: 'HTML HTML File Paths, Head Element, Layout Elements and Techniques',
            date: 'April 29, 2021',
            week: '9',
            code: mycode,
            pre: '<a href="https://cs.ntcu.edu.tw/">台中教育大學資訊工程學系-入口處</a>',
            counter: 1,
            img: [image1, image2, image3]
        }
    },
    computed: {
        getCounter () {
            return this.counter % 3
        }
    },
    methods: {
        addCounter () {
            this.counter++
        }
    }
}
</script>

<style lang="scss">
</style>
