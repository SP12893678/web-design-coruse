<template>
  <v-coruse-card
    :code="code"
    :date="date"
    :title="title"
    :week="week"
  >
    <template slot="card-left">
      <div>123</div>
      <canvas
        id="myCanvas"
        width="200"
        height="100"
        style="border:1px solid #000000;"
      />
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
            title: 'HTML Canvas',
            date: 'April 29, 2021',
            week: '12',
            code: mycode,
            counter: 1

        }
    },
    computed: {

    },
    mounted () {
        const c = document.getElementById('myCanvas')
        const ctx = c.getContext('2d')

        // Create gradient
        const grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100)
        grd.addColorStop(0, 'red')
        grd.addColorStop(1, 'white')

        // Fill with gradient
        ctx.fillStyle = grd
        ctx.fillRect(10, 10, 150, 80)
    },
    methods: {

    }
}
</script>

<style lang="scss">

</style>
