<template>
  <v-coruse-card
    :code="code"
    :date="date"
    :title="title"
    :week="week"
  >
    <template slot="card-left">
      <div>
        <div class="pt-3 pb-4 Font-Sans font-light">
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
            title: 'Introduction HTML',
            date: 'February 25, 2021',
            week: '1',
            code: ''
        }
    }
}
</script>

<style lang="scss">
</style>
