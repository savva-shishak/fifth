<template lang="html">
  <div>

    <div v-if='news.length != 0'>

      <h2 class="text-primary text-center">Интересное</h2>
      <router-link tag='a' to="/create-news" class="nav-link" active-class='active'>
        <h6 class="text-secondary text-right">Разместить своё объявление <i class="fas fa-arrow-right"></i></h6>
      </router-link>

      <div class="row">
        <card v-for='info in news' :urlImg='info.image' :title="info.title" :content='info.contentTitle'></card>
      </div>

    </div>

    <div class="card col-12 text-center text-info" v-else>
      <h3>Здес может быть ваше объявление</h3>
      <router-link tag='a' to="/create-news" class="nav-link" active-class='active'>
        <h6 class="text-secondary">Разместить своё объявление <i class="fas fa-arrow-right"></i></h6>
      </router-link>
    </div>
  </div>

</template>

<script>
export default {
  data(){
    return {
      news: [],
      resource: null
    };
  },
  created(){
    this.resource = this.$resource('http://localhost:5000/api/news');
    
    console.log(this.resource);

    this.resource.get().then(response => {
      this.news = response.body.reverse();
      this.load = false;
    });
  }
}
</script>

<style lang="scss" scoped>
</style>
