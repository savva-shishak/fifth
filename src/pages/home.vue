<template lang="html">
  <div>
    <img src="images/_kreml.jpg" style="width: 100%" class="img-fluid">
    <div class="text-center wow fadeIn" style="margin-top: 50px; margin-bottom: 50px" data-wow-offset='50' data-wow-delay='.5s'>
      <h2>Добро пожаловать <span class="text-primary">ВТобольске!!!</span></h2>
      <p class="lead">Путиводитель для туриста.
        <br>Где выгодно. <i class="fas fa-percent"></i>
        <br>Где уютно. <i class="fas fa-bed"></i>
        <br>Где интересно. <i class="far fa-eye"></i>
        <br>Где вкусно. <i class="fas fa-utensils"></i></p>
    </div>
    <div class='jumbotron wow fadeIn' data-wow-delay='.5s' data-wow-offset='50'>
      <iframe width="100%" height="400px" src="https://www.youtube.com/embed/BnE-DJ7-wK8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe  >
    </div>
    <div class="wow fadeIn" data-wow-delay='.5s'>
      <news></news>
    </div>
  </div>
</template>

<script>
import WOW from '../wow.js';

export default {}

new WOW().init();
</script>

<style lang="css" scoped>
.slide-enter-active{
  animation: components-slide .5s reverse;
}
.slide-leave-active{
  animation: slide .5s;
}
@keyframes slide {
  0%{
    transform: translate(0);
  }
  25%{
    transform: translate(20px);
  }
  100%{
    transform: translate(-50px);
    opacity: 0
  }
}

[class^='block']{
  width: 350px;
  height: 350px;
  margin: 20px
}

.block1{
  background-color: blue
}
.block2{
  background-color: green
}
.block3{
  background-color: black
}
.block4{
  background-color: yellow
}
.block5{
  background-color: red
}
</style>
