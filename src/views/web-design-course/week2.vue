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
          專案目錄結構
        </h1>
        <img
          src="../../assets/images/folderStructure.jpg"
          alt=""
          srcset=""
        >
        <h1 class="text-2xl my-2 font-bold">
          HR彩虹
        </h1>

        <hr class="border-t-4 border-pink-600">
        <hr class="border-t-4 border-red-600">
        <hr class="border-t-4 border-orange-600">
        <hr class="border-t-4 border-yellow-600">
        <hr class="border-t-4 border-green-600">
        <hr class="border-t-4 border-teal-600">
        <hr class="border-t-4 border-blue-600">
        <hr class="border-t-4 border-indigo-600">
        <hr class="border-t-4 border-purple-600">
      </div>
    </template>
  </v-coruse-card>
</template>

<script>
import vCoruseCard from '../CourseCard.vue'

const mycode = `<hr /> <!-- 分隔線 -->
<br> <!-- 換行元素 -->
<a href="連結位置" target="開啟目標"> <!-- 連結元素 -->
<!-- target
_blank 新視窗
_self 當前視窗
_parent 父視窗
_top 整個瀏覽器視窗
-->

<img src="圖片來源位置" width="寬度" height="高度" alt="替代文字"> <!-- 圖片 -->
`

export default {
    components: {
        vCoruseCard
    },
    data () {
        return {
            title: 'HTML Basic, Elements, Attributes, Headings, Paragraphs, Styles',
            date: 'March 4, 2021',
            week: '2',
            code: mycode
        }
    }
}
</script>

<style lang="scss">
</style>
