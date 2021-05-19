<template>
  <v-coruse-card
    :code="code"
    :date="date"
    :title="title"
    :week="week"
  >
    <template slot="card-left">
      <h1 class="text-xl my-2 font-bold">
        能夠把水球擠爆嗎?
      </h1>
      <div
        id="img"
      />

      <table
        class="mt-4 text-xs"
      >
        <caption class="text-base font-bold ">
          表. 109-2修課表
        </caption>
        <tr
          v-for="(row,index) in corses_table"
          :key="index"
        >
          <td
            v-for="(item,i) in row"
            :key="i"
            :colspan="item.col"
            :rowspan="item.row"
            :class="item.class"
            :width="item.width"
          >
            <template v-if="item.name">
              {{ item.name }}<br>{{ item.teacher }}<br>{{ item.room }}
            </template>
            <template v-else>
              {{ item.text }}
            </template>
          </td>
        </tr>
      </table>

      <h1 class="mt-2 text-xl my-2 font-bold">
        喜愛的食物
      </h1>

      <ul class="pl-10 list-disc">
        <li>巧克力</li>
        <li>方塊酥</li>
        <li>沙其馬</li>
      </ul>

      <h1 class="mt-2 text-xl my-2 font-bold">
        喜愛的食物排行
      </h1>

      <ol class="">
        <li>巧克力</li>
        <li>沙其馬</li>
        <li>方塊酥</li>
      </ol>

      <dl>
        <dt>IOT-物聯網</dt>
        <dd>- 物聯網是一種計算裝置、機械、數位機器相互關聯的系統，具備通用唯一辨識碼，並具有通過網路傳輸數據的能力，無需人與人、或是人與裝置的互動。</dd>
        <dt>AI-人工智慧</dt>
        <dd>- 指由人製造出來的機器所表現出來的智慧。通常人工智慧是指透過普通電腦程式來呈現人類智慧的技術。該詞也指出研究這樣的智慧系統是否能夠實現，以及如何實現。</dd>
        <dt>ML-機器學習</dt>
        <dd>- 是一門人工智慧的科學，該領域的主要研究物件是人工智慧，特別是如何在經驗學習中改善具體演算法的效能。</dd>
        <dt>DL-深度學習</dt>
        <dd>- 是一種以人工神經網路為架構，對資料進行表徵學習的演算法。 深度學習是機器學習中一種基於對資料進行表徵學習的演算法。</dd>
        <dt>Big Data-大數據</dt>
        <dd>- 巨量資料，又稱為大數據，指的是在傳統數據處理應用軟體不足以處理的大或複雜的數據集的術語。</dd>
        <dt>6V</dt>
        <dd>- white cold drink</dd>
      </dl>
    </template>
  </v-coruse-card>
</template>

<script>
import vCoruseCard from '../CourseCard.vue'

const mycode = `圖片依視窗大小變更
<picture>
  <source media="(min-width: 650px)" srcset="圖片來源路徑">
  <source media="(min-width: 465px)" srcset="圖片來源路徑">
  <img src="img_girl.jpg">
</picture>
<!--表格-->
<table>
    <tr>
        <td>Hello</td>
        <td colspan="欄幾格">Hello</td>
        <td rowspan="列幾格">Hello</td>
    </tr>
</table>
<!--無序列表-->
<ul>
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
</ul>
<!--有序列表-->
<ol>
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
</ol>
<!--巢狀列表-->
<dl>
  <dt>Title</dt>
  <dd>- Description</dd>
  <dt>Title</dt>
  <dd>- Description</dd>
</dl>
`

export default {
    components: {
        vCoruseCard
    },
    data () {
        return {
            title: 'HTML Tables',
            date: 'April 8, 2021',
            week: '7',
            code: mycode,
            corses_table: [
                [
                    {
                        col: 3,
                        row: 2,
                        text: '節次/時間',
                        class: 'has_course bg-gray-200 text-center font-semibold'
                    },
                    {
                        col: 5,
                        row: 1,
                        text: '工作日',
                        class: 'has_course bg-gray-200 text-center font-semibold'
                    },
                    {
                        col: 2,
                        row: 1,
                        text: '周末',
                        class: 'has_course bg-gray-200 text-center font-semibold'
                    }
                ],
                [
                    {
                        col: 1,
                        row: 1,
                        text: '一',
                        class: 'text-center',
                        width: '80px'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '二',
                        class: 'text-center',
                        width: '80px'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '三',
                        class: 'text-center',
                        width: '80px'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '四',
                        class: 'text-center',
                        width: '80px'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '五',
                        class: 'text-center',
                        width: '80px'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '六',
                        class: 'text-center',
                        width: '80px'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '日',
                        class: 'text-center',
                        width: '80px'
                    }
                ],
                [
                    {
                        col: 1,
                        row: 4,
                        text: '上午',
                        class: 'has_course bg-gray-200 text-center font-semibold',
                        width: '30px'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '1',
                        class: 'text-center',
                        width: '20px'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '08:10-09:00',
                        class: '',
                        width: '80px'
                    }
                ],
                [
                    {
                        col: 1,
                        row: 1,
                        text: '2',
                        class: 'text-center'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '09:10-10:00',
                        class: ''
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '',
                        class: 'text-center'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '',
                        class: 'text-center'
                    },
                    {
                        col: 1,
                        row: 3,
                        text: '',
                        name: '軟體品質保證與測試',
                        teacher: '徐國勛',
                        room: 'K204b',
                        class: 'has_course bg-orange-400 text-center'
                    },
                    {
                        col: 1,
                        row: 3,
                        text: '網頁程式設計林嬿雯K208a',
                        name: '網頁程式設計',
                        teacher: '林嬿雯',
                        room: 'K208a',
                        class: 'has_course bg-yellow-400 text-center'
                    },
                    {
                        col: 1,
                        row: 3,
                        text: '電腦網路應用方覺非K303a',
                        name: '電腦網路應用',
                        teacher: '方覺非',
                        room: 'K303a',
                        class: 'has_course bg-red-400 text-center'
                    }
                ],
                [
                    {
                        col: 1,
                        row: 1,
                        text: '3',
                        class: 'text-center'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '10:20-11:10',
                        class: ''
                    }
                ],
                [
                    {
                        col: 1,
                        row: 1,
                        text: '4',
                        class: 'text-center'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '11:20-12:10',
                        class: ''
                    }
                ],
                [
                    {
                        col: 1,
                        row: 1,
                        text: '中午',
                        class: 'has_course bg-gray-200 text-center font-semibold'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '5',
                        class: 'text-center'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '12:20-13:10',
                        class: ''
                    }
                ],
                [
                    {
                        col: 1,
                        row: 4,
                        text: '下午',
                        class: 'has_course bg-gray-200 text-center font-semibold'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '6',
                        class: 'text-center'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '13:30-14:20',
                        class: ''
                    }
                ],
                [
                    {
                        col: 1,
                        row: 1,
                        text: '7',
                        class: 'text-center'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '14:30-15:20',
                        class: ''
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '',
                        class: 'text-center'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '',
                        class: 'text-center'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '',
                        class: 'text-center'
                    },
                    {
                        col: 1,
                        row: 3,
                        text: '網路程式設計李宗翰K204a',
                        name: '網路程式設計',
                        teacher: '李宗翰',
                        room: 'K204a',
                        class: 'has_course bg-green-500 text-center'
                    }
                ],
                [
                    {
                        col: 1,
                        row: 1,
                        text: '8',
                        class: 'text-center'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '15:40-16:30',
                        class: ''
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '',
                        class: 'text-center'
                    },
                    {
                        col: 1,
                        row: 2,
                        text: '班會孔崇旭、李宗翰K204a',
                        name: '班會',
                        teacher: '孔崇旭、李宗翰',
                        room: 'K204a',
                        class: 'has_course bg-blue-400 text-center'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '',
                        class: 'text-center'
                    },
                    {
                        col: 1,
                        row: 3,
                        text: '無人機證照與創業何信昭K410',
                        name: '無人機證照與創業',
                        teacher: '何信昭',
                        room: 'K410',
                        class: 'has_course bg-purple-400 text-center'
                    }
                ],
                [
                    {
                        col: 1,
                        row: 1,
                        text: '9',
                        class: 'text-center'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '16:40-17:30',
                        class: ''
                    }
                ],
                [
                    {
                        col: 1,
                        row: 4,
                        text: '晚上',
                        class: 'has_course bg-gray-200 text-center font-semibold'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '10',
                        class: 'text-center'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '17:40-18:30',
                        class: ''
                    }
                ],
                [

                    {
                        col: 1,
                        row: 1,
                        text: '11',
                        class: 'text-center'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '18:40-19:30',
                        class: ''
                    }
                ],
                [

                    {
                        col: 1,
                        row: 1,
                        text: '12',
                        class: 'text-center'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '19:40-20:30',
                        class: ''
                    }
                ],
                [

                    {
                        col: 1,
                        row: 1,
                        text: '13',
                        class: 'text-center'
                    },
                    {
                        col: 1,
                        row: 1,
                        text: '20:40-21:30',
                        class: ''
                    }
                ]
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
@media only screen and (max-width: 350px) {
  #img {
      width: 100%;
    height: 200px;
    background-image: url("../../assets/images/bubbleburst.gif");
  }
}

ol li{
    counter-increment: counter;
    padding: 1rem 1rem 1rem 1rem;
    background: white;
    margin-top: 1rem;
    box-shadow: 0.25rem 0.25rem 0.6rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(75,0,0,0.05);
}
ol li::before{
    content: counter(counter);
    font: 900 1.5em/1 'Montserrat';
    border: 8px;
    padding: 0.125em 0.25em;
}
dt{
    font-weight: 600;
}
dd{
    font-size: 14px;
    margin-inline-start: 2rem;
}
</style>
