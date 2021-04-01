<template>
  <v-coruse-card
    :code="code"
    :date="date"
    :title="title"
    :week="week"
  >
    <template slot="card-left">
      <div class="py-2">
        <div class="book">
          <div class="book-front  shadow-lg">
            <img
              src="../../assets/images/book1.jfif"
              alt=""
            >
          </div>
          <div class="book-back shadow-lg px-2 py-8">
            <h1 class=" text-3xl font-bold tetai-2">
              一念永恆
            </h1>
            <a class=" text-sm">耳根 著</a>
            <ul class="flex mt-2 my-4">
              <li class=" px-1 mr-1  bg-black text-white font-semibold">
                仙侠
              </li>
              <li class=" px-1  bg-black text-white font-semibold">
                修真文明
              </li>
            </ul>
            <p class="tetai-2">
              一念成滄海，一念化桑田。<br>一念斬千魔，一念誅萬仙。<br> 唯我念……永恆
            </p>
            <div class="mt-4">
              <router-link
                to="/course/week5-book1"
                class=" px-2 py-1 border border-black font-bold hover:text-white hover:bg-black"
                href="https://book.qidian.com/info/1003354631"
              >
                前去了解
              </router-link>
            </div>
          </div>
        </div>

        <div class="book">
          <div class="book-front  shadow-lg">
            <img
              src="../../assets/images/book2.jfif"
              alt=""
            >
          </div>
          <div class="book-back shadow-lg px-2 py-8">
            <h1 class=" text-3xl font-bold tetai-2">
              我欲封天
            </h1>
            <a class=" text-sm">耳根 著</a>
            <ul class="flex mt-2 my-4">
              <li class=" px-1 mr-1  bg-black text-white font-semibold">
                仙侠
              </li>
              <li class=" px-1  bg-black text-white font-semibold">
                搞笑
              </li>
            </ul>
            <p class="tetai-2">
              我若要有 天不可無！<br>
              我若要無 天不許有！<br>
              我命如妖 欲封天...
            </p>
            <div class="mt-4">
              <router-link
                to="/course/week5-book2"
                class=" px-2 py-1 border border-black font-bold hover:text-white hover:bg-black"
                href="https://book.qidian.com/info/1003354631"
              >
                前去了解
              </router-link>
            </div>
          </div>
        </div>

        <div class="book">
          <div class="book-front  shadow-lg">
            <img
              src="../../assets/images/book3.jfif"
              alt=""
            >
          </div>
          <div class="book-back shadow-lg px-2 py-8">
            <h1 class=" text-3xl font-bold tetai-2">
              神墓
            </h1>
            <a class=" text-sm">辰東 著</a>
            <ul class="flex mt-2 my-4">
              <li class=" px-1 mr-1  bg-black text-white font-semibold">
                玄幻
              </li>
              <li class=" px-1  bg-black text-white font-semibold">
                異世大陸
              </li>
            </ul>
            <p class="tetai-2">
              恨天奪我一萬年<br>
              到陰陽逆亂時<br>
              以我魔血染青天
            </p>
            <div class="mt-4">
              <router-link
                to="/course/week5-book3"
                class=" px-2 py-1 border border-black font-bold hover:text-white hover:bg-black"
                href="https://book.qidian.com/info/1003354631"
              >
                前去了解
              </router-link>
            </div>
          </div>
        </div>
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
            title: 'HTML Link',
            date: 'March 25, 2021',
            week: '5',
            code: mycode
        }
    }
}
</script>

<style lang="scss">
.book{
    display: inline-block;
    width: 210px;
    height: 280px;
    cursor: pointer;
    margin: 8px;
}

.book-front,.book-back{
    position:absolute;
    width: 210px;
    height: 280px;
    overflow: hidden;
    backface-visibility: hidden;
    transition: transform .6s linear;
}

.book-front{
    transform: perspective(600px) rotateY(0deg);
}
.book-back{
    background: #fffdfb;
    transform: perspective(600px) rotateY(180deg);

}

.book-back:hover{

}

.book:hover > .book-front{
    transform: perspective(600px) rotateY(-180deg);
}

.book:hover > .book-back{
    transform: perspective(600px) rotateY(0deg);
}
</style>
