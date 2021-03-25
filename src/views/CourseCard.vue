<template>
  <div>
    <div class="grid grid-cols-2 course-container">
      <div class="course-card course-card-left">
        <perfect-scrollbar>
          <div>
            <h1 class=" text-4xl font-bold Exo">
              {{ title }}
            </h1>
            <div class="pb-2 border-b border-gray-500 border-dotted">
              <span class="text-black opacity-50 text-xs pr-2">
                Posted on {{ date }}
              </span>
              <span class="text-xs px-2 py-1 bg-black  opacity-50 text-gray-200  rounded-full">Week{{ week }}</span>
            </div>

            <slot name="card-left" />
            <div class="mt-4 card-footer flex justify-between">
              <router-link
                v-if="week>1"
                :to="`/course/week${subNum(week,1)}`"
                class=" text-xs text-blue-600 border-b border-blue-600"
              >
                〈〈 前往上一篇文章
              </router-link>
              <router-link
                v-if="week<=1"
                :to="`/`"
                class=" text-xs text-blue-600 border-b border-blue-600"
              >
                回目錄
              </router-link>
              <router-link
                :to="`/course/week${addNum(week,1)}`"
                class=" text-xs text-blue-600 border-b border-blue-600"
              >
                前往下一篇文章 〉〉
              </router-link>
            </div>
          </div>
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

    <!-- <div>Testing</div> -->
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
        },
        title: {
            type: String,
            default: 'Course Title'
        },
        date: {
            type: String,
            default: 'February 25, 2021'
        },
        week: {
            type: Number,
            default: 0
        }
    },
    data () {
        return {

        }
    },
    methods: {
        addNum (week, value) {
            const res = Number(week) + value
            return String(res)
        },
        subNum (week, value) {
            const res = Number(week) - value
            return String(res)
        }
    }
}
</script>

<style lang="scss">
.course-container {

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
  height: 80vh;
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
