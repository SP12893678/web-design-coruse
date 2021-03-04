<template>
  <v-coruse-card :code="code">
    <template slot="card-left">
      <div>
        <h1 class=" text-5xl font-bold Exo">
          Introduction HTML
        </h1>
        <div class="pb-2 border-b-2">
          <span class="text-black opacity-50 text-xs pr-2">
            Posted on February 25, 2021
          </span>
          <span class="text-xs px-2 py-1 bg-black  opacity-50 text-gray-200  rounded-full">Week1</span>
        </div>
        <div class="pt-3 pb-2 Font-Sans font-light">
          <p>
            喵喵喵喵喵⋯喵喵喵喵喵⋯喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵⋯喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵。喵，喵喵喵喵喵喵喵喵喵喵喵，喵喵喵，喵喵喵喵喵喵喵。喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵喵喵：喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵，喵喵喵喵。

            喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵：喵喵喵喵喵喵喵喵喵，喵喵。
          </p>
        </div>
        <div>
          <a
            class=" bg-blue-500 px-2 py-1 rounded-full text-white"
            href="https://cs.ntcu.edu.tw/"
          >台中教育大學資訊工程學系-入口處</a>
          <img
            src="../../assets/images/name.png"
            alt="my picture"
          >
        </div>
      </div>
    </template>
  </v-coruse-card>
</template>

<script>
import vCoruseCard from '../CourseCard.vue'

export default {
    components: {
        vCoruseCard
    },
    data () {
        return {
            code: `<div>
  <h1 class="text-red-500">
    2021/2/25 ACS106103彭俊閎 註
  </h1>
  <a href="https://cs.ntcu.edu.tw/">台中教育大學資訊工程學系</a>
  <p>敘述</p>
  <img
    src="../../assets/images/name.png"
    alt="my picture"
  >
  <v-high-light :code="code" />
</div>`
        }
    }
}
</script>

<style lang="scss">

</style>
