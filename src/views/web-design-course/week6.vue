<template>
  <v-coruse-card
    :code="code"
    :date="date"
    :title="title"
    :week="week"
  >
    <template slot="card-left">
      <div>
        台灣影像地圖
      </div>
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
            title: 'Introduction HTML',
            date: 'February 25, 2021',
            week: '6',
            code: mycode
        }
    }
}
</script>

<style lang="scss">
</style>
