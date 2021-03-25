<template>
  <v-coruse-card
    :code="code"
    :date="date"
    :title="title"
    :week="week"
  >
    <template slot="card-left">
      <h1 class="text-2xl my-2 font-bold">
        討厭食物介紹
      </h1>
      <div>
        <div class="food-card-list my-4 ">
          <img
            src="../../assets/images/BitterGourd.jpg"
            alt=""
            srcset=""
          >
          <div class=" mx-4 my-2">
            <div class="text-xl font-bold px-2 border-l-6 border-green-600">
              苦瓜
            </div>
            <p class=" my-2 text-sm font-medium">
              苦瓜又名涼瓜、半生瓜，是葫蘆科植物。涼瓜是一種瓜菜類蔬菜，原產地一般是熱帶地區。在南亞、東南亞、中國、和加勒比海群島均有廣泛的種植。中國廣東江門市杜阮鎮已有上百年的種植涼瓜/苦瓜歷史。
            </p>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <router-link
          to="/course/week4"
          class=" text-xs text-blue-600 border-b border-blue-600"
        >
          〈〈 回到上一篇文章
        </router-link>
      </div>
    </template>
  </v-coruse-card>
</template>

<script>
import vCoruseCard from '../CourseCard.vue'

const mycode = `/* CSS class*/
body{
  background-image: 
    linear-gradient(90deg, rgba(60, 10, 30, 0.04) 3%, transparent 0), 
    linear-gradient(1turn, rgba(60, 10, 30, 0.04) 3%, transparent 0);
  background-size: 20px 20px;
}

.food-card-list{
  display: flex;
  height: 120px;
  background-color: white;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0px 7px 20px -9px rgba(0,0,0,0.40);
}

.food-card-list img{
  display: inline-block;
  flex-grow: 1;
  width: 120px;
  height: 120px;
}
`

export default {
    components: {
        vCoruseCard
    },
    data () {
        return {
            title: 'HTML CSS',
            date: 'March 18, 2021',
            week: '4',
            code: mycode
        }
    }
}
</script>

<style lang="scss">

</style>
