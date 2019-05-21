<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
    <a class="navbar-brand text-primary" href="#">ВТобольске</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExample09">
      <ul class="navbar-nav mr-auto">
        <router-link tag='li' to="/" exact class="nav-link" active-class='active'>
          <a class="nav-link">Главная</a>
        </router-link>
        <router-link tag='li' to="/sing-in" class="nav-link" active-class='active'>
          <a class="nav-link"><i class="fas fa-sign-in-alt"></i></a>
        </router-link>
        <router-link tag='li' to="/users" class="nav-link" active-class='active'>
          <a class="nav-link"><i class="fas fa-users"></i></a>
        </router-link>
        <router-link tag='li' to="/news" class="nav-link" active-class='active'>
          <a class="nav-link"><i class="far fa-newspaper"></i></a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
