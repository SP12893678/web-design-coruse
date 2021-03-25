<template>
  <v-coruse-card
    :code="code"
    :date="date"
    :title="title"
    :week="week"
  >
    <template slot="card-left">
      <div>
        <h1 class="text-2xl my-2 font-bold">
          網頁程式設計的第一堂課
        </h1>
        <div class="pb-4 Font-Sans font-light">
          <p>
            喵喵喵喵喵⋯喵喵喵喵喵⋯喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵⋯喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵。喵，喵喵喵喵喵喵喵喵喵喵喵，喵喵喵，喵喵喵喵喵喵喵。喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵喵喵：喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵，喵喵喵喵。

            喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵：喵喵喵喵喵喵喵喵喵，喵喵。
          </p>
        </div>

        <div>
          <a
            class="text-blue-600 border-b border-blue-600"
            href="https://cs.ntcu.edu.tw/"
            target="_blank"
          >台中教育大學資訊工程學系-入口處</a>
          <pre>{{ pre }}</pre>
          <img
            src="../../assets/images/name.png"
            alt="Jun Hong Peng"
          >
        </div>
      </div>
    </template>
  </v-coruse-card>
</template>

<script>
import vCoruseCard from '../CourseCard.vue'

const mycode = `<h1> <!-- 標題文字1 (font-size: 2em font-weight: bolder) -->
<h2> <!-- 標題文字2  (font-size: 1.5em font-weight: bolder)-->
<h3> <!-- 標題文字3  (font-size: 1.17em font-weight: bolder)-->
<h4> <!-- 標題文字4  (font-size: 1em font-weight: bolder)-->
<h5> <!-- 標題文字5  (font-size: .83em font-weight: bolder)-->
<h6> <!-- 標題文字6  (font-size: .67em font-weight: bolder)-->

<p> <!-- 段落文字 (以換行開始)-->
<a href="連結位置"> <!-- 連結元素 -->

<pre> <!-- 預格式化文本 (保留原始文字，含html tag)-->
<img src="圖片來源位置"> <!-- 圖片 -->
`

export default {
    components: {
        vCoruseCard
    },
    data () {
        return {
            title: 'Introduction HTML',
            date: 'February 25, 2021',
            week: '1',
            code: mycode,
            pre: '<a href="https://cs.ntcu.edu.tw/">台中教育大學資訊工程學系-入口處</a>'
        }
    }
}
</script>

<style lang="scss">
</style>
