<template>
  <v-coruse-card
    :code="code"
    :date="date"
    :title="title"
    :week="week"
  >
    <template slot="card-left">
      <h1 class="text-2xl my-2 font-bold">
        SVG
      </h1>
      <svg
        width="600"
        height="300"
      >
        <defs>
          <linearGradient
            id="grad1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              style="stop-color:rgb(50,50,50);stop-opacity:1"
            />
            <stop
              offset="50%"
              style="stop-color:rgb(200,200,200);stop-opacity:1"
            />
            <stop
              offset="100%"
              style="stop-color:rgb(50,50,50);stop-opacity:1"
            />
          </linearGradient>
        </defs>
        <rect
          width="600"
          height="300"
          fill="url(#grad1)"
        />
        <g
          ref="ball"
          y="200"
          x="0"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="blue"
            stroke-width="4"
          />
        </g>
        <g
          ref="heart"
        >
          <svg
            id="Capa_1"
            enable-background="new 0 0 512 512"
            height="512"
            viewBox="0 0 512 512"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          ><linearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="300"
            x2="300"
            y1="512"
            y2="300"
          ><stop
            offset="0"
            stop-color="#fd3a84"
          /><stop
            offset="1"
            stop-color="#ffa68d"
          /></linearGradient><linearGradient
            id="SVGID_2_"
            gradientUnits="userSpaceOnUse"
            x1="332.077"
            x2="332.077"
            y1="301"
            y2="0"
          ><stop
            offset="0"
            stop-color="#ffc2cc"
          /><stop
            offset="1"
            stop-color="#fff2f4"
          /></linearGradient><g><g><g y="400"><path
            d="m490.492 38.527c-12.7-17.576-36.316-38.527-76.704-38.527-30.054 0-56.403 12.181-76.202 35.225-2.34 2.724-4.458 5.454-6.365 8.12-1.834-2.626-3.87-5.312-6.122-7.992-19.425-23.128-45.614-35.353-75.734-35.353-27.427 0-52.486 11.188-70.563 31.502-17.185 19.313-26.648 45.146-26.648 72.74 0 57.286 40.79 89.495 102.532 138.249 19.956 15.757 42.573 33.617 67.066 54.844 2.819 2.443 6.321 3.665 9.824 3.665s7.005-1.222 9.824-3.665c24.608-21.327 47.519-39.313 67.73-55.182 30.785-24.169 55.102-43.259 72.906-63.818 20.443-23.604 29.964-47.147 29.964-74.093 0-22.51-8.04-47.077-21.508-65.715z"
            fill="url(#SVGID_2_)"
          /></g></g></g></svg>
        </g>

        <g ref="heart2">
          <svg
            id="Capa_1"
            enable-background="new 0 0 512 512"
            height="512"
            viewBox="0 0 512 512"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          ><linearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="180.5"
            x2="180.5"
            y1="512"
            y2="211"
          ><stop
            offset="0"
            stop-color="#fd3a84"
          /><stop
            offset="1"
            stop-color="#ffa68d"
          /></linearGradient><linearGradient
            id="SVGID_2_"
            gradientUnits="userSpaceOnUse"
            x1="332.077"
            x2="332.077"
            y1="301"
            y2="0"
          ><stop
            offset="0"
            stop-color="#ffc2cc"
          /><stop
            offset="1"
            stop-color="#fff2f4"
          /></linearGradient><g><g><g><path
            d="m490.492 38.527c-12.7-17.576-36.316-38.527-76.704-38.527-30.054 0-56.403 12.181-76.202 35.225-2.34 2.724-4.458 5.454-6.365 8.12-1.834-2.626-3.87-5.312-6.122-7.992-19.425-23.128-45.614-35.353-75.734-35.353-27.427 0-52.486 11.188-70.563 31.502-17.185 19.313-26.648 45.146-26.648 72.74 0 57.286 40.79 89.495 102.532 138.249 19.956 15.757 42.573 33.617 67.066 54.844 2.819 2.443 6.321 3.665 9.824 3.665s7.005-1.222 9.824-3.665c24.608-21.327 47.519-39.313 67.73-55.182 30.785-24.169 55.102-43.259 72.906-63.818 20.443-23.604 29.964-47.147 29.964-74.093 0-22.51-8.04-47.077-21.508-65.715z"
            fill="url(#SVGID_2_)"
          /></g></g></g></svg>
        </g>
      </svg>

      <h1 class="text-2xl mt-8 my-2 font-bold">
        JavaScript Html DOM
      </h1>
      <div>
        <input type="text">
        <div>
          <label
            for="email-address"
            class="sr-only"
          >
            名稱
          </label>
          <input
            v-model="user.name"
            type="text"
            required
            class="my-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="名稱"
          >
          <input
            v-model="user.acs"
            type="text"
            required
            class="my-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="學號"
          >
        </div>
        <button
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          點我
        </button>

        <div
          v-if="user.name && user.acs"
          class="mt-4"
        >
          <h1>{{ user.name }}</h1>
          <h1>{{ user.acs }}</h1>
        </div>
      </div>
    </template>
  </v-coruse-card>
</template>

<script>
import vCoruseCard from '../CourseCard.vue'
import gsap from 'gsap'
const mycode = `

`

export default {
    components: {
        vCoruseCard
    },
    data () {
        return {
            title: 'HTML SVG ,HTML Dom JavaScript',
            date: 'April 29, 2021',
            week: '14',
            code: mycode,
            pre: '<a href="https://cs.ntcu.edu.tw/">台中教育大學資訊工程學系-入口處</a>',
            counter: 1,
            user: {
                name: '',
                acs: ''
            }

        }
    },
    computed: {

    },
    mounted () {
        const { ball, heart, heart2 } = this.$refs
        gsap.fromTo(ball, { y: 200 }, { y: 0, duration: 1, yoyo: true, repeat: -1 })
        gsap.fromTo(heart, { scale: 0.5 }, { scale: 0.2, duration: 0.8, yoyo: true, repeat: -1, transformOrigin: 'center' })
        gsap.fromTo(heart2, { scale: 0.6, opacity: 0.2 }, { scale: 0.2, duration: 0.8, yoyo: true, repeat: -1, transformOrigin: 'center' })
    },
    methods: {

    }
}
</script>

<style lang="scss">

</style>
