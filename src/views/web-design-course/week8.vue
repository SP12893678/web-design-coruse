<template>
  <v-coruse-card
    :code="code"
    :date="date"
    :title="title"
    :week="week"
  >
    <template slot="card-left">
      <div>
        <h1 class="text-2xl my-2 font-bold">
          地圖嵌入
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3999.0582352113324!2d120.67133806379461!3d24.144716793949357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d74a3cc6029%3A0xc81df603b4737da5!2z5ZyL56uL5Y-w5Lit5pWZ6IKy5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1619661733892!5m2!1szh-TW!2stw"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        />

        <h1 class="text-2xl my-2 font-bold">
          錯位時空-Music
        </h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mXf3Klcn-sM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />

        <h1 class="text-2xl my-2 font-bold">
          圖片更換
        </h1>
        <img
          class=""
          :src="img[getCounter]"
          alt=""
          srcset=""
          @click="addCounter"
        >
      </div>
    </template>
  </v-coruse-card>
</template>

<script>
import vCoruseCard from '../CourseCard.vue'

import image1 from '../../assets/images/ball-size-b.png'
import image2 from '../../assets/images/ball-size-m.png'
import image3 from '../../assets/images/ball-size-s.png'

const mycode = `<!--iframe嵌入-->
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/mXf3Klcn-sM"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
/>

<!--圖片更換-->
let arr = ['image_src1','image_src1','image_src1']
let image = doucument.getElementByID('id')
image.src = arr[index]
`

export default {
    components: {
        vCoruseCard
    },
    data () {
        return {
            title: 'HTML Iframe',
            date: 'April 29, 2021',
            week: '8',
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
