<template>
  <div class="boot-page">
    <navBar></navBar>
    <div><img :src="imgsrc"/></div>
  </div>
</template>

<script>
import navBar from 'components/navBar/navBar';
import imgurl from '../../../static/bg.jpeg'
export default {
  name: 'bootPage',
  data () {
    return {
      msg: 'Welcome to 金融小场景',
      imgsrc: imgurl
    }
  }, 
  components:{
    navBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./../../assets/css/variable.scss";
@import "./../../assets/css/mixin.scss";


.boot-page {
  width: 1280px;
  margin: auto;
  color: #000
}
img {
  width: 100%;
}
</style>
