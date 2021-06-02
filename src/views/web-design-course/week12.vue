<template>
  <v-coruse-card
    :code="code"
    :date="date"
    :title="title"
    :week="week"
  >
    <template slot="card-left">
      <div>123</div>
      <video
        width="320"
        height="240"
        controls
      >
        <source
          src="movie.mp4"
          type="video/mp4"
        >
        <source
          src="movie.ogg"
          type="video/ogg"
        >
        Your browser does not support the video tag.
      </video>
    </template>
  </v-coruse-card>
</template>

<script>
import vCoruseCard from '../CourseCard.vue'

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
            counter: 1

        }
    },
    computed: {

    },
    methods: {

    }
}
</script>

<style lang="scss">

</style>
