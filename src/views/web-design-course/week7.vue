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
</style>
