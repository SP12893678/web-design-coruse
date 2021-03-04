<template>
  <v-coruse-card :code="code">
    <template slot="card-left">
      <router-link to="/course/week1">
        <a>Go To Week1</a>
      </router-link>
      <h1 style="color:red;">
        I am Header Title
      </h1>
      <hr>
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
            code: '<a>Go To Week1</a>'
        }
    }
}
</script>

<style>

</style>
