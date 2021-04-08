<template>
  <v-coruse-card
    :code="code"
    :date="date"
    :title="title"
    :week="week"
  >
    <template slot="card-left">
      <div>
        圖片隨視窗大小更換
      </div>
      <div
        id="img"
      />
      <table
        class="mt-4 text-xs"
      >
        <caption class=" font-bold ">
          109-2修課表
        </caption>
        <tr>
          <td
            colspan="3"
            rowspan="2"
            class="has_course bg-gray-200 text-center"
          >
            節次/時間
          </td>
          <td
            colspan="5"
            class="text-center has_course bg-gray-200"
          >
            工作日
          </td>
          <td
            colspan="2"
            class="text-center has_course bg-gray-200"
          >
            周末
          </td>
        </tr>
        <tr>
          <td width="80px">
            一
          </td>
          <td width="80px">
            二
          </td>
          <td width="80px">
            三
          </td>
          <td width="80px">
            四
          </td>
          <td width="80px">
            五
          </td>
          <td width="80px">
            六
          </td>
          <td width="80px">
            日
          </td>
        </tr>
        <tr>
          <td
            rowspan="4"
            width="30px"
            class="has_course bg-gray-300"
          >
            上午
          </td>
          <td width="20px">
            1
          </td>
          <td width="80px">
            08:10-09:00
          </td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>2</td>
          <td>09:10-10:00</td>
          <td />
          <td />
          <td
            class="text-center has_course bg-orange-400"
            rowspan="3"
            width="60px"
          >
            軟體品質保證與測試<br>
            徐國勛<br>
            K204b<br>
          </td>
          <td
            class="text-center has_course bg-yellow-400"
            rowspan="3"
          >
            網頁程式設計<br>
            林嬿雯<br>
            K208a<br>
          </td>
          <td
            class="text-center has_course bg-red-400"
            rowspan="3"
          >
            電腦網路應用<br>
            方覺非<br>
            K303a<br>
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td>3</td>
          <td>10:20-11:10</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>4</td>
          <td>11:20-12:10</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td
            rowspan="1"
            class="has_course bg-gray-300"
          >
            中午
          </td>
          <td>5</td>
          <td>12:20-13:10</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td
            rowspan="4"
            class="has_course bg-gray-300"
          >
            下午
          </td>
          <td>6</td>
          <td>13:30-14:20</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>7</td>
          <td>14:30-15:20</td>
          <td />
          <td />
          <td />
          <td
            class="text-center has_course bg-green-500"
            rowspan="3"
          >
            網路程式設計<br>
            李宗翰<br>
            K204a<br>
          </td>
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>8</td>
          <td>15:40-16:30</td>
          <td />
          <td
            class="text-center has_course bg-blue-400"
            rowspan="2"
          >
            班會<br>
            孔崇旭、李宗翰<br>
            K204a<br>
          </td>
          <td />

          <td
            class="text-center has_course bg-purple-400"
            rowspan="3"
          >
            無人機證照與創業<br>
            何信昭<br>
            K410<br>
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td>9</td>
          <td>16:40-17:30</td>
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td
            rowspan="4"
            class="has_course bg-gray-300"
          >
            晚上
          </td>
          <td>10</td>
          <td>12:20-13:10</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>11</td>
          <td>16:40-17:30</td>
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>12</td>
          <td>16:40-17:30</td>
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>13</td>
          <td>16:40-17:30</td>
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
      </table>

      <!-- <table>
        <tr>
          <td class=" text-xs">
            細項/時段
          </td>
          <td>早餐</td>
          <td>午餐</td>
          <td>晚餐</td>
        </tr>
        <tr>
          <td>食物</td>
          <td>三明治</td>
          <td>義大利麵</td>
          <td>便當</td>
        </tr>
        <tr>
          <td>價錢</td>
          <td>$30</td>
          <td>$100</td>
          <td>$75</td>
        </tr>
      </table> -->
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
            title: 'Introduction HTML',
            date: 'February 25, 2021',
            week: '7',
            code: mycode,
            corses: [
                {
                    day: {
                        row: 4,
                        col: 1,
                        text: '上午'
                    }
                }
            ]
        }
    }
}
</script>

<style lang="scss">
table{
    border-collapse:separate;
    border-spacing:10px;
    border-radius: 16px;
    box-shadow: 0px 7px 35px -9px rgba(0,0,0,0.35);
}
th, td {
  padding: 10px 10px;
}
.has_course{
    border-radius: 8px;
    box-shadow: 0px 7px 20px -9px rgba(0,0,0,0.35);
    transition: .5s;
}
.has_course:hover{
    box-shadow: 0px 7px 25px -9px rgba(0,0,0,0.60);
}
  #img {
    width: 100%;
    height: 200px;
    background: url("../../assets/images/ball-size-b.png") no-repeat center;
  }
@media only screen and (max-width: 900px) {
  #img {
      width: 100%;
    height: 200px;
    background-image: url("../../assets/images/ball-size-m.png");
  }
}
@media only screen and (max-width: 450px) {
  #img {
      width: 100%;
    height: 200px;
    background-image: url("../../assets/images/ball-size-s.png");
  }
}
</style>
