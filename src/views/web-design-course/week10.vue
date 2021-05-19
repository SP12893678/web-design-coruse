<template>
  <v-coruse-card
    :code="code"
    :date="date"
    :title="title"
    :week="week"
  >
    <template slot="card-left">
      <div class="relative bg-gray-100 py-6 px-4 rounded-3xl w-64 my-4 shadow-xl">
        <h1 class="text-2xl my-2 font-bold">
          RGB
        </h1>
        <div class="flex">
          <span>R:</span>
          <input
            id="Red"
            v-model="color.red"
            class="w-full mx-1"
            type="range"
            min="0"
            max="255"
          >
          <input
            class="w-16 bg-gray-100 appearance-none border-2 border-gray-300 rounded-md px-2 text-center"
            type="text"
            :value="color.red"
          >
        </div>
        <div class="flex">
          <span>G:</span>
          <input
            id="Green"
            v-model="color.green"
            class="w-full mx-1"
            type="range"
            min="0"
            max="255"
          >
          <input
            class="w-16 bg-gray-100 appearance-none border-2 border-gray-300 rounded-md px-2 text-center"
            type="text"
            :value="color.green"
          >
        </div>
        <div class="flex">
          <span>B:</span>
          <input
            id="Blue"
            v-model="color.blue"
            class="w-full mx-1"
            type="range"
            min="0"
            max="255"
          >
          <input
            class="w-16 bg-gray-100 appearance-none border-2 border-gray-300 rounded-md px-2 text-center"
            type="text"
            :value="color.blue"
          >
        </div>
        <div class="flex">
          <span
            class="w-16 mx-1 rounded-md shadow-md px-1 py-1"
            :style="'background-color:' + getHexColor + ';'"
          >color:</span>
          <input
            disabled
            class="w-full bg-gray-100 appearance-none border-2 border-gray-300 rounded-md px-2 text-center"
            type="text"
            :value="getHexColor"
          >
        </div>
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
            title: 'HTML HTML The id Attribute, Iframes, JavaScript',
            date: 'April 29, 2021',
            week: '10',
            code: mycode,
            pre: '<a href="https://cs.ntcu.edu.tw/">台中教育大學資訊工程學系-入口處</a>',
            counter: 1,
            img: [image1, image2, image3],
            color: {
                red: '255',
                green: '100',
                blue: '100'
            }
        }
    },
    computed: {
        getCounter () {
            return this.counter % 3
        },
        getHexColor () {
            const r = this.color.red
            const g = this.color.green
            const b = this.color.blue
            return 'rgb(' + r + ',' + g + ',' + b + ')'
        }
    },
    methods: {
        addCounter () {
            this.counter++
        },
        decimalToHexString (number) {
            if (number < 0) {
                number = 0xFFFFFFFF + number + 1
            }

            return number.toString(16).toUpperCase()
        }
    }
}
</script>

<style lang="scss">

</style>
