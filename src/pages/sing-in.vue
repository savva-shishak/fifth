<template lang="html">
  <div class="col-12 col-lg-3 col-md-4 text-center mx-auto">
    <h3>Авторизация</h3>
    <router-link tag='a' to="/check-in" class="nav-link" active-class='active'>
      <small class="form-text text-muted">Регистрация</small>
    </router-link>
    <hr>
    <transition name='slide' mode='out-in'>

      <div class="form-group" v-if='slide == 0' key='login'>
        <label for="login">Введите ваш логин</label>
        <input type="text" v-focus class="form-control form-control-sm" @keyup.enter='slide++;' v-model='login' id="login">
        <small id="emailHelpId" class="form-text text-muted">Пример: Sherlok_Holms</small>
      </div>

      <div class="form-group" v-if='slide == 1' key='password'>
        <label for="password">Введите пароль</label>
        <input :type="passwordLook? 'password': 'text'" @keyup.enter='singIn' v-focus class="form-control form-control-sm" v-model='password' id="password">
        <button type="button" @click='slide--' class="btn btn-light btn-sm">Назад</button>
        <button type="button"  @click='passwordLook = !passwordLook'  class="btn btn-light btn-sm">
            {{ passwordLook? 'Показать': 'Скрыть' }}
          </button>
      </div>

      <div  v-if='slide >= 2' class="card text-center" key='end'>

        <div v-if='check' class="text-success">

          <i class="far fa-check-circle" style="font-size: 100px"></i>
          <h4>Успешно!</h4>

          <router-link tag='li' to="/users" exact class="nav-link" active-class='active'>
            <button type="button" class="btn btn-light">Список пользователей <i class="fas fa-arrow-right"></i></button>
          </router-link>
        </div>

        <div v-if='!check' class="text-danger">

          <h5>Не верно введённый логин или пароль. Пожалуйста, проверьте данные</h5>

          <div class="form-group">
            <input type="text" v-focus class="form-control form-control-sm" @keyup.enter='slide++;' v-model='login' id="login">
          </div>

          <div class="form-group">
            <input :type="passwordLook? 'password': 'text'" class="form-control form-control-sm" v-model='password' id="password">
            <button type="button"  @click='passwordLook = !passwordLook'  class="btn btn-light btn-sm">
              {{ passwordLook? 'Показать': 'Скрыть' }}
            </button>
          </div>

          <button class="btn btn-primary" @click='singIn' >Повторить</button>
        </div>

      </div>

    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: '',
      password: '',
      slide: 0,
      check: null,
      passwordLook: true
    }
  },
  methods: {
    singIn(){
      this.$http.post('http://localhost:5000/api/users/check', { login: this.login, password: this.password}).then(res => {
        console.log(res.body);

        this.check = res.body
      }, res => {
        console.log(res);
      });
      this.slide++
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="css" scoped>

.card{
  padding: 15px
}

.slide-enter-active{
  animation: slide .5s reverse;
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
    transform: translate(-70px);
    opacity: 0
  }
}
input{
  margin-bottom: 20px
}
</style>
