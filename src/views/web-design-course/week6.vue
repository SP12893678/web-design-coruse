<template>
  <v-coruse-card
    :code="code"
    :date="date"
    :title="title"
    :week="week"
  >
    <template slot="card-left">
      <h1 class="text-2xl my-2 font-bold">
        台灣影像地圖
      </h1>
      <div class="card">
        <img
          src="../../assets/images/taiwan-map.jpg"
          alt="Workplace"
          usemap="#workmap"
        >
        <div class="right-side flex-grow py-8">
          <h1 class=" text-center font-semibold text-lg">
            {{ map.content.city }}
          </h1>
          <hr class="my-4 border-t-2 border-black w-2/3 m-auto">
          <div class="box-container flex justify-center">
            <div
              v-for="item in map.content.fav"
              :key="item"
              class="my-box mx-4 my-4 font-semibold text-sm"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>

      <map name="workmap">
        <area
          target=""
          alt=""
          title=""
          href="#"
          coords="360,34,355,41,353,47,356,54,363,54,364,46,372,42,365,38"
          shape="poly"
        >
        <area
          target=""
          alt=""
          title=""
          href="#"
          coords="351,36,343,36,336,43,335,50,335,57,343,54,348,50,351,44"
          shape="poly"
        >

        <area
          target=""
          alt=""
          title=""
          href="#"
          coords="329,29,334,30,343,28,349,26,357,28,359,33,368,38,372,43,380,50,380,57,373,63,365,69,353,72,343,74,334,73,326,70,322,74,312,73,311,67,314,62,318,57,323,50,326,45,329,39"
          shape="poly"
        >

        <area
          target=""
          alt=""
          title=""
          href="#"
          coords="293,25,301,22,307,21,313,22,321,23,328,26,330,34,329,40,326,47,320,54,316,60,311,70,304,74,294,79,296,71,299,66,300,59,303,52,302,44,300,35"
          shape="poly"
        >
        <area
          target=""
          alt=""
          title=""
          href="#"
          coords="273,33,280,29,287,26,294,25,298,31,300,36,301,45,303,52,301,60,300,67,296,73,294,80,285,81,281,73,278,67,272,63,278,55,277,48,275,40"
          shape="poly"
        >
        <area
          shape="poly"
          coords="275,34,269,34,267,35,263,37,259,37,254,38,250,39,239,42,239,55,242,65,252,70,256,73,256,78,263,79,272,79,282,80,282,69,275,66,273,63,277,59,278,52,278,43"
          alt="Computer"
          href="#"
        >
        <area
          target=""
          alt=""
          title=""
          href="#"
          coords="237,45,229,46,217,50,208,55,212,67,210,76,217,82,227,83,235,86,243,89,252,91,262,93,268,99,275,100,286,97,282,91,283,86,276,82,264,79,254,78,251,71,245,66,240,61,237,54"
          shape="poly"
        >
        <area
          target=""
          alt=""
          title=""
          href="#"
          coords="213,55,206,56,198,60,189,60,180,66,170,67,178,75,184,81,188,88,194,91,200,91,207,90,211,83,210,77,213,70,211,62"
          shape="poly"
        >
        <area
          target=""
          alt=""
          title=""
          href="#"
          coords="211,77,215,84,221,86,225,82,230,79,238,86,244,88,253,91,259,90,263,95,270,97,263,102,261,107,255,113,245,116,247,121,237,122,233,129,230,136,223,140,215,139,212,144,204,141,194,137,189,132,189,124,194,118,188,112,185,106,191,100,196,97,201,93,207,89"
          shape="poly"
        >
        <area
          target=""
          alt=""
          title=""
          href="#"
          coords="169,67,176,75,183,80,191,89,195,95,191,100,184,106,188,115,182,115,177,110,174,104,176,98,167,95,158,95,149,91,143,88,145,81,153,76,160,72"
          shape="poly"
        >

        <area
          target=""
          alt=""
          title=""
          href="#"
          coords="191,135,184,136,175,136,164,137,159,132,157,137,151,133,152,126,156,123,155,114,148,109,138,109,132,108,128,103,120,106,114,104,117,100,122,97,125,92,130,88,134,84,140,82,146,80,148,86,154,93,161,92,168,93,172,98,174,107,178,111,185,115,192,116,191,123,186,126"
          shape="poly"
        >
        <area
          target=""
          alt=""
          title=""
          href="#"
          coords="125,95,120,100,113,105,103,111,99,116,101,121,103,129,105,135,110,141,116,145,123,145,130,146,137,144,147,143,153,142,159,139,152,133,150,127,154,124,156,118,155,111,147,108,136,110,131,105,127,99"
          shape="poly"
        >
        <area
          target=""
          alt=""
          title=""
          href="#"
          coords="99,117,95,123,90,129,90,134,89,140,87,148,85,156,82,164,82,171,84,180,86,185,91,185,96,180,100,176,105,169,114,163,119,157,123,162,129,161,134,164,140,172,143,177,149,170,154,167,159,164,163,160,170,158,174,154,180,155,186,158,189,153,189,146,196,144,194,137,186,136,179,136,171,137,162,137,155,140,147,141,137,143,127,145,117,144,110,141,105,137,102,124"
          shape="poly"
        >
        <area
          target=""
          alt=""
          title=""
          href="#"
          coords="90,187,96,192,96,201,93,212,90,222,83,233,79,239,82,250,88,255,96,257,112,250,110,237,106,229,109,219,110,209,114,202,118,196,125,192,134,190,139,192,143,188,146,182,141,175,137,170,132,162,120,159,115,159,105,168,101,172"
          shape="poly"
        >
        <area
          target=""
          alt=""
          title=""
          href="#"
          coords="113,249,110,239,106,230,107,219,109,210,114,201,120,194,131,191,136,191,142,187,144,181,146,175,151,169,158,164,164,160,172,157,179,154,184,157,188,153,189,163,191,171,192,182,202,178,209,175,217,171,224,170,229,172,234,176,232,181,212,189,203,193,193,197,177,203,156,212,147,217,128,235"
          shape="poly"
        >
        <area
          target=""
          alt=""
          title=""
          href="#"
          coords="306,117,298,125,290,131,284,137,277,145,266,154,254,165,243,173,232,174,233,180,225,170,214,171,209,173,198,178,192,181,190,171,188,163,188,155,193,149,187,147,193,143,201,142,208,145,216,143,221,138,229,136,231,129,240,123,247,120,250,113,257,111,262,108,261,103,268,101,274,99,280,96,285,92,289,99,300,109"
          shape="poly"
        >
        <area
          target=""
          alt=""
          title=""
          href="#"
          coords="357,68,355,76,354,82,353,87,346,93,334,100,330,104,325,107,318,108,309,114,304,118,300,111,294,103,286,96,283,88,285,81,292,78,298,75,306,72,313,73,319,75,324,72,331,68,337,72,343,72,348,71"
          shape="poly"
        >
      </map>
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
            title: 'HTML Images',
            date: 'April 1, 2021',
            week: '6',
            code: mycode,
            map: {
                content: { city: '請將滑鼠移置地圖內', fav: ['你好'] }
            },
            data: [{ city: '基隆市', fav: ['鳳梨酥'] },
                { city: '台北市', fav: ['101大樓'] },
                { city: '台北縣', fav: ['淡水老街'] },
                { city: '桃園縣', fav: ['國際機場'] },
                { city: '新竹縣', fav: ['米粉', '貢丸'] },
                { city: '苗栗縣', fav: ['大湖草莓', '三義木雕'] },
                { city: '台中市', fav: ['大甲媽祖'] },
                { city: '彰化縣', fav: ['肉圓', '八掛山'] },
                { city: '南投縣', fav: ['日月潭', '埔里酒廠'] },
                { city: '雲林縣', fav: ['古坑咖啡'] },
                { city: '嘉義縣', fav: ['雞肉飯'] },
                { city: '台南市', fav: ['赤崁樓', '安平古堡'] },
                { city: '高雄市', fav: ['85大樓', '愛河'] },
                { city: '屏東縣', fav: ['墾丁', '萬巒豬腳'] },
                { city: '台東縣', fav: ['知本溫泉'] },
                { city: '花蓮縣', fav: ['太魯閣'] },
                { city: '宜蘭縣', fav: ['三星蔥', '牛舌餅'] }]
        }
    },
    computed: {

    },
    mounted () {
        const areas = document.getElementsByTagName('area')
        const app = this
        for (let index = 0; index < areas.length; index++) {
            areas[index].addEventListener('mouseover', function () {
                app.map.content = app.data[index]
                this.focus()
            }, false)
            areas[index].addEventListener('mouseout', function () {
                app.map.content = { city: '請將滑鼠移置地圖內', fav: ['你好'] }
                this.blur()
            }, false)
        };
    }
}
</script>

<style lang="scss">

.card{
  background: white;
  display: flex;
  box-shadow: 0px 7px 35px -9px rgba(0,0,0,0.35);
  border-radius: 8px;
}
.card img{
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
area{
  outline: 10px solid #26f;
  filter:Glow(color=#00FF00,strength=4);
  text-decoration: blink;
}
.my-box{
  display: flex;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  background: white;
}
.my-box:nth-child(1){
  box-shadow: 0px 7px 35px -9px rgba(255, 84, 72, 0.45);
}
.my-box:nth-child(2){
  box-shadow: 0px 7px 35px -9px rgba(73, 182, 255, 0.45);
}
.right-side{
  background-image: linear-gradient(90deg,rgba(60,10,30,.04) 3%,transparent 0),linear-gradient(1turn,rgba(60,10,30,.04) 3%,transparent 0);
  background-size: 40px 40px;
}
</style>
