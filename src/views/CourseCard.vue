<template>
  <div class="grid grid-cols-2 course-container">
    <div class="course-card course-card-left">
      <perfect-scrollbar>
        <slot name="card-left" />
      </perfect-scrollbar>
    </div>
    <div class="course-card course-card-right">
      <perfect-scrollbar>
        <v-high-light
          :code="code"
          style="overflow-y: overlay;"
        />
      </perfect-scrollbar>
    </div>
  </div>
</template>

<script>
import vHighLight from '../components/vHighLight.vue'

export default {
    components: {
        vHighLight
    },
    props: {
        code: {
            type: String,
            default: ''
        }
    },
    data () {
        return {

        }
    }
}
</script>

<style lang="scss">
.course-container {
  height: calc(100vh - 80px);
}
.course-card {
  padding-top: 16px;
  padding-bottom: 16px;
}
.course-card-left {
  padding-left: 16px;
}
.course-card-right {
  padding-right: 16px;
}
.ps {
  height: 100%;
  border-radius: 16px;
  background-image: linear-gradient(90deg,rgba(60,10,30,.04) 3%,transparent 0),linear-gradient(1turn,rgba(60,10,30,.04) 3%,transparent 0);
  background-size: 20px 20px;
  box-shadow: 0px 7px 35px -9px rgba(0,0,0,0.75);
}
.course-card-left .ps {
  padding: 16px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
.course-card-right .ps {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
</style>
