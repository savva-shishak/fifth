<template lang="html">
  <div class="container">
    <app-navbar></app-navbar><hr><hr>
    <transition name='components-slide' mode='out-in'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue';

export default {
  data(){
    return {
      message: 'It`s work'
    }
  },
  components: {
    appNavbar: Navbar
  }
}
</script>

<style lang="css" scoped>
.components-slide-enter-active{
  animation: components-slide .5s reverse;
}
.components-slide-leave-active{
  animation: components-slide .5s;
}
@keyframes components-slide {
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
</style>
