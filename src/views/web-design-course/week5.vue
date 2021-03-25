<template>
  <v-coruse-card
    :code="code"
    :date="date"
    :title="title"
    :week="week"
  >
    <template slot="card-left">
      <div class="py-2">
        <a href="https://book.qidian.com/info/1003354631">
          <div class="book">
            <div class="book-front  shadow-lg">
              <img
                src="../../assets/images/book1.jfif"
                alt=""
              >
            </div>
            <div class="book-back shadow-lg px-4 py-8">
              <h1 class=" text-3xl font-bold tetai-2">
                一念永恆
              </h1>
              <a class=" text-sm">耳根 著</a>
              <ul class="flex mt-2 my-4">
                <li class=" px-1 mr-1  bg-black text-white font-semibold">仙侠</li>
                <li class=" px-1  bg-black text-white font-semibold">搞笑</li>
              </ul>
              <p class="tetai-2">
                一念成滄海，一念化桑田。<br>一念斬千魔，一念誅萬仙。<br> 唯我念……永恆
              </p>
            </div>
          </div>
        </a>
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
    width: 240px;
    height: 320px;
    cursor: pointer;
}

.book-front,.book-back{
    position:absolute;
    width: 240px;
    height: 320px;
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
