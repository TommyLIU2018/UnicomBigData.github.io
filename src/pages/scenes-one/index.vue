<template>
  <div class="scenes-one">
    <navBar></navBar>
    场景一
    <div class="bg1"></div>
  </div>
</template>

<script>
import navBar from 'components/navBar/navBar'
export default {
  name: 'scenes-1',
  data () {
    return {
      msg: '欢迎来到jusfoun'
    }
  },
  components:{
    navBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
@import "./../../assets/css/variable.scss";
@import "./../../assets/css/mixin.scss";
  .scenes-one{
     width: 1280px;
     margin: auto;
     color: $cl-text1;
    h2{
      font-size: 30px;
      text-align: center;
      line-height:20;
      color: $cl-text1;
    }
    .bg1 {
      width: 100%;
      height: 500px;
      background: url("../../../static/bg1.jpeg");
    }
  }


</style>
