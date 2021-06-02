<template>
  <v-coruse-card
    :code="code"
    :date="date"
    :title="title"
    :week="week"
  >
    <template slot="card-left">
      <h1 class="text-2xl my-2 font-bold">
        Vedio
      </h1>
      <video
        width="320"
        height="240"
        controls
      >
        <source
          :src="vedio"
          type="video/mp4"
        >
        <source
          src="movie.ogg"
          type="video/ogg"
        >
        Your browser does not support the video tag.
      </video>

      <h1 class="text-2xl my-2 font-bold">
        Audio
      </h1>
      <audio controls>
        <source
          :src="song"
          type="audio/mpeg"
        >
        Your browser does not support the audio element.
      </audio>

      <h1 class="text-2xl my-2 font-bold">
        PDF
      </h1>
      <object
        width="100%"
        height="500px"
        type="application/pdf"
        :data="pdf"
      />

      <h1 class="text-2xl my-2 font-bold">
        Image
      </h1>
      <object :data="icecream" />

      <h1 class="text-2xl my-2 font-bold">
        Youtube
      </h1>
      <iframe
        class="w-full"
        height="400"
        src="https://www.youtube.com/embed/VfGW0Qiy2I0"
      />
    </template>
  </v-coruse-card>
</template>

<script>
import vCoruseCard from '../CourseCard.vue'
import icecream from '../../assets/images/icecream.jpg'
import vedio from '../../assets/wo-ye-shi.mp4'
import pdf from '../../assets/110學年度行事曆.pdf'
import song from '../../assets/song.mp3'

const mycode = `
      <video
        width="320"
        height="240"
        controls
      >
        <source
          :src="vedio"
          type="video/mp4"
        >
        Your browser does not support the video tag.
      </video>


      <audio controls>
        <source
          src="horse.mp3"
          type="audio/mpeg"
        >
        Your browser does not support the audio element.
      </audio>

      <object
        width="100%"
        height="500px"
        type="application/pdf"
        :data="pdf"
      />

      <object :data="icecream" />

      <iframe
        class="w-full"
        height="400"
        src="https://www.youtube.com/embed/VfGW0Qiy2I0"
      />
`

export default {
    components: {
        vCoruseCard
    },
    data () {
        return {
            title: 'HTML Media',
            date: 'May 20, 2021',
            week: '11',
            code: mycode,
            pre: '<a href="https://cs.ntcu.edu.tw/">台中教育大學資訊工程學系-入口處</a>',
            counter: 1,
            icecream: icecream,
            vedio: vedio,
            pdf: pdf,
            song: song
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
