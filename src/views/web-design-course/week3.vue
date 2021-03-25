<template>
  <v-coruse-card
    :code="code"
    :date="date"
    :title="title"
    :week="week"
  >
    <template slot="card-left">
      <h1 class="text-2xl my-2 font-bold">
        2點之間直線距離公式
      </h1>
      <div style="position: relative; height: 30px;">
        <span class="root">√</span>
        <span
          class="roof"
        >
          (x<sub>1</sub> - x<sub>2</sub>)<sup>2</sup> + (y<sub>1</sub> - y<sub>2</sub>)<sup>2</sup>
        </span>
      </div>
      <div>
        <h1 class="text-2xl mt-4 my-2 font-bold">
          縮寫
        </h1>
        <abbr title="National Taichung University of Education">NTCU</abbr> 是國立臺中教育大學的簡稱.
        <h1 class="text-2xl mt-4 my-2 font-bold">
          地址
        </h1>
        <address class=" text-sm ">
          403台中市西區民生路140號
        </address>
        <h1 class="text-2xl mt-4 my-2 font-bold">
          引用
        </h1>

        <blockquote cite="http://www.worldwildlife.org/who/index.html">
          <span>
            一念成滄海，一念化桑田。一念斬千魔，一念誅萬仙。唯我念……永恆
            <br><span class="text-xs  flex justify-end"> ——耳根 《一念永恆》</span>
          </span>
        </blockquote>

        <h1 class="text-2xl mt-4 my-2 font-bold">
          倒著念
        </h1>
        <textarea
          id=""
          v-model="msg"
          placeholder="輸入想說的話"
          name=""
          rows="1"
          class="w-full pl-4 border border-black  rounded-full"
        />
        <bdo
          class=" flex flex-grow w-full pr-4 border border-black  rounded-full"
          dir="rtl"
        >{{ msg?msg:'輸入想說的話' }}</bdo>
      </div>
    </template>
  </v-coruse-card>
</template>

<script>
import vCoruseCard from '../CourseCard.vue'

const mycode = `<b> <!-- 粗體文字 -->
<strong> <!-- 重要文字 -->
<i> <!-- 斜體文字 -->
<em> <!-- 強調文字 -->
<mark> <!-- 標記文字 -->
<small> <!-- 較小的文字 -->
<del> <!-- 刪除的文字 -->
<ins> <!-- 插入文字 -->
<sub> <!-- 下標文字 -->
<sup> <!-- 上標文字 -->
<abbr> <!-- 縮寫文字 -->
<address> <!-- 聯絡地址文字 -->
<bdo> <!-- 雙向替代文字 (改變文字方向)-->
<cite> <!-- 引用文字 (斜體)-->
<blockquote> <!-- 區塊引用文字 -->
<q> <!-- 行內引用文字 (雙引號)-->

<h1 style="background-color:Blue;">Hello World</h1> 
<!-- style屬性添加元素樣式 -->
<!-- background-color css可使用預定義的顏色名稱 -->
`

export default {
    components: {
        vCoruseCard
    },
    data () {
        return {
            title: 'HTML Text Formatting, Quotations, Comments, Colors',
            date: 'March 11, 2021',
            week: '3',
            code: mycode,
            msg: ''
        }
    }
}
</script>

<style lang="scss">
.root{
    position: absolute;
    font-size: 28px;
    top: -9px;
}
.roof{
    border-top: 2px solid rgb(0, 0, 0);
    position: absolute;
    left: 14px;
}
blockquote{
    padding-left: 20px;
    border-left: 6px solid #39f;
}
</style>
