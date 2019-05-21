<template lang="html">
  <div class="col-12 col-lg-3 col-md-4 wow text-center fadeIn"

    :data-wow-delay='(random) + "s"'
    data-wow-offset='100'
    >
    <div class="card">
      <img :src="urlImg" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ content }}</p>
        <button href="#" class="btn btn-primary">Подробнее</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['title', 'content', 'urlImg'],
  data(){
    return{
      random: Math.random()
    }
  }
}
</script>

<style lang="css" scoped>
</style>
