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
        <h1 class="text-2xl my-2 font-bold">
          縮寫
        </h1>
        The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.
        <h1 class="text-2xl my-2 font-bold">
          地址
        </h1>
        <address class=" text-sm ">
          Written by John Doe.<br>
          Visit us at:<br>
          Example.com<br>
          Box 564, Disneyland<br>
          USA
        </address>
        <h1 class="text-2xl my-2 font-bold">
          引用
        </h1>

        <blockquote cite="http://www.worldwildlife.org/who/index.html">
          For 50 years, WWF has been protecting the future of nature.
          The world's leading conservation organization,
          WWF works in 100 countries and is supported by
          1.2 million members in the United States and
          close to 5 million globally.
        </blockquote>
      </div>
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
            title: 'HTML Text Formatting, Quotations, Comments, Colors',
            date: 'March 11, 2021',
            week: '3',
            code: 'console.log(\'HTML Text Formatting, Quotations, Comments, Colors\')'
        }
    }
}
</script>

<style lang="scss">
.root{
    position: absolute;
    font-size: 28px;
    top: -11px;
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
