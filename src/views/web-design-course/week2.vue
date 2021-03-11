<template>
  <v-coruse-card
    :code="code"
    :date="date"
    :title="title"
    :week="week"
  >
    <template slot="card-left">
      <div>
        121231
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
            title: 'HTML Basic, Elements, Attributes, Headings, Paragraphs, Styles',
            date: 'March 4, 2021',
            week: '2',
            code: ''
        }
    }
}
</script>

<style lang="scss">
</style>
