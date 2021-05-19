<template>
  <div class=" grid h-screen  ">
    <div class=" m-auto text-center">
      <img
        style="width:500px;"
        src="../assets/images/error.png"
        alt=""
        srcset=""
      >
      <button
        type="button"
        class=" shadow-md duration-200 focus:outline-none text-white text-sm py-3 px-8 bg-gradient-to-r from-blue-400 to-blue-600 transform hover:scale-110"
        @click="goBack"
      >
        回上一頁
      </button>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        goBack () {
            this.$router.go(-1)
        }
    }
}
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
}
.break{
  flex-basis: 100%;
  height: 0px;
}
button{
  animation: border;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
}
@keyframes border {
  0%{
    border-top-left-radius: 9999px;
    border-bottom-left-radius: 9999px;
    border-top-right-radius: 9999px;
    border-bottom-right-radius: 9999px;
  }
  25%{
    border-top-left-radius: 0;
    border-bottom-left-radius: 9999px;
    border-top-right-radius: 9999px;
    border-bottom-right-radius: 9999px;
  }
  50%{
    border-top-left-radius: 9999px;
    border-bottom-left-radius: 9999px;
    border-top-right-radius: 9999px;
    border-bottom-right-radius: 0;
  }
  75%{
    border-top-left-radius: 9999px;
    border-bottom-left-radius: 0;
    border-top-right-radius: 9999px;
    border-bottom-right-radius: 9999px;
  }
  100%{
    border-top-left-radius: 9999px;
    border-bottom-left-radius: 9999px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 9999px;
  }
}
</style>
