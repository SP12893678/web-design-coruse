<template>
  <v-coruse-card
    :code="code"
    :date="date"
    :title="title"
    :week="week"
  >
    <template slot="card-left">
      <h1 class="text-2xl my-2 font-bold">
        喜愛食物介紹
      </h1>
      <div>
        <div class="food-card-list my-4 ">
          <img
            src="../../assets/images/chocolate.jpg"
            alt=""
            srcset=""
          >
          <div class=" mx-4 my-2">
            <div class="text-xl font-bold px-2 border-l-6 border-orange-900">
              巧克力
            </div>
            <p class=" my-2 text-sm font-medium">
              原產自中美洲，是以可可粉作為主要材料的混合型食品。「巧克力」一詞來自納瓦特爾語單詞「xocolatl」，意思為「苦水」。主要原料為可可豆（Cacao），產於赤道南北緯線18度以內狹長地帶。
            </p>
          </div>
        </div>
        <div class="food-card-list my-4 ">
          <img
            src="../../assets/images/Donburi.jpg"
            alt=""
            srcset=""
          >
          <div class=" mx-4 my-2">
            <div class="text-xl font-bold px-2 border-l-6 border-orange-500">
              丼飯
            </div>
            <p class=" my-2 text-sm font-medium">
              丼物，簡稱丼，詞意為「碗食」，是對於日本料理中蓋澆飯類的通稱，通常以較大尺寸的碗盛裝米飯並蓋上魚肉、肉類、蔬菜或者其他燉煮料理而成。
            </p>
          </div>
        </div>
        <div class="food-card-list my-4 ">
          <img
            src="../../assets/images/Pasta.jpg"
            alt=""
            srcset=""
          >
          <div class=" mx-4 my-2">
            <div class="text-xl font-bold px-2 border-l-6 border-purple-500">
              義大利麵
            </div>
            <p class=" my-2 text-sm font-medium">
              義大利麵，泛指所有源自義大利的麵食。在義大利，一般會用「Pasta」來稱呼各種由麵粉及水、有時或會加入雞蛋。
            </p>
          </div>
        </div>
        <div class="food-card-list my-4 ">
          <img
            src="../../assets/images/BubbleTea.jpg"
            alt=""
            srcset=""
          >
          <div class=" mx-4 my-2">
            <div class="text-xl font-bold px-2 border-l-6 border-indigo-500">
              珍珠奶茶
            </div>
            <p class=" my-2 text-sm font-medium">
              原產自中美洲，是以可可粉作為主要材料的混合型食品。「巧克力」一詞來自納瓦特爾語單詞「xocolatl」，意思為「苦水」。主要原料為可可豆（Cacao），產於赤道南北緯線18度以內狹長地帶。
            </p>
          </div>
        </div>
        <div class="food-card-list my-4">
          <img
            src="../../assets/images/icecream.jpg"
            alt=""
            srcset=""
          >
          <div class=" mx-4 my-2">
            <div class="text-xl font-bold px-2  border-l-6 border-pink-300">
              冰淇淋
            </div>
            <p class=" my-2 text-sm font-medium">
              冰淇淋統稱「冰激凌、冰淇淋、雪糕類、甜筒」，是一種冷凍的甜品，通常以鮮奶油或奶油等乳製品為原料，並加入水果或其他成分和香料混合製成。大多數冰淇淋含糖，但也有一部分是使用其他的甜味劑。
            </p>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <router-link
          to="/course/week4-2"
          class=" text-xs text-blue-600 border-b border-blue-600"
        >
          前往隱藏文章 〉〉
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
.food-card-list{
  height: 120px;
  background-color: white;

  box-shadow: 0px 7px 20px -9px rgba(0,0,0,0.40);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
}
.food-card-list img{
  width: 120px;
  height: 120px;
  flex-grow: 1;
  display: inline-block;
}
</style>
