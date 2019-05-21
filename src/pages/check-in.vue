<template lang="html">
  <div class="text-center">
    <h2>Регистрация</h2>

    <router-link tag='a' to="/sing-in" class="nav-link" active-class='active'>
      <small class="text-muted">Войти <i class="fas fa-sign-in-alt"></i></small>
    </router-link>

    <div class="col-12 col-lg-3 col-md-4 mx-auto">
      <transition name='slide' appear mode="out-in">

        <!--Имя-->
        <input-name :checkName='Name' v-if='check == 0' key='name'></input-name>

        <!--Логин-->
        <input-login :checkLogin='Login' :back='back' v-if='check == 1' key='login'></input-login>


        <!--Пароль-->
        <input-password :checkPassword='Password' :back='back' v-if='check == 2' key='password'></input-password>

        <!--Конец-->
        <div  v-if='check == 3' class="card text-center" key='good'>
          <div v-if='checkIn == true' class="text-success">
            <i class="far fa-check-circle" style="font-size: 100px"></i>
            <h4>Успешно!</h4>
            <router-link tag='li' to="/users" exact class="nav-link" active-class='active'>
              <button type="button" class="btn btn-light">Список пользователей <i class="fas fa-arrow-right"></i></button>
            </router-link>
          </div>
          <div v-else class="text-danger">
            ошибка
          </div>
        </div>

      </transition>
    </div>
  </div>
</template>

<script>
import CheckedName from './check-in-components/name.vue';
import CheckLogin from './check-in-components/login.vue';
import CheckPassword from './check-in-components/password.vue';

export default {
  data(){
    return {
      check: 0,
      name: '',
      login: '',
      password: '',
      checkIn: false,
    };
  },
  components: {
    'input-name': CheckedName,
    'input-login': CheckLogin,
    'input-password': CheckPassword,
  },
  methods: {

    Name(name){
      this.name = name;
      this.check++;
    },

    Login(login){
      this.login = login;
      this.check++;
    },

    Password(password){
      this.password = password;
      this.check++;
      this.requestOnServer();
    },

    requestOnServer(){
      this.$http.post('http://localhost:5000/api/user', {
        name: this.name,
        login: this.login,
        password: this.password
      }).then(res => {
        console.log(res.body)
        this.checkIn = true
      })
    },

    back(){
      this.check--
    }
  }
}
</script>

<style lang="scss" scoped>

  .slide-enter-active{
    animation: slide .5s reverse;
  }

  .slide-leave-active{
    animation: slide .5s;
  }

  .card{
    padding: 20px
  }

  input{
    margin-bottom: 20px
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
</style>
