<template lang="html">
  <div>
    <h3>Посетители:</h3>

    <i :class="{'loadActive': load, 'load': true,'fas fa-sync': true}" @click='loadUsers'></i>

    <table class="table table-striped">

      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">login</th>
        </tr>
      </thead>

      
        <tr v-for='user of users' :key='user.id'>
          <td>{{ user.name }}</td>
          <td>{{ user.login }}</td>
        </tr>
      

    </table>
  </div>
</template>

<script>
export default {
  data() {
      return {

          users: [],
          resource: null,
          load: false,

      }
  },
  methods: {
    loadUsers(){
      this.load = true;
      this.resource.get().then(response => {
        this.users = response.body.reverse();
        console.log(this.users)
        this.load = false;
      });
    }
  },
  created(){
    this.resource = this.$resource('http://localhost:5000/api/users')

    this.loadUsers();
  }
}
</script>

<style lang="css" scoped>
*{
  transition: .5s;
}

.load{
  cursor: pointer;
}

.loadActive{
  animation: loader .3s infinite linear;
}

.load:active{
  animation: loader .3s;
}

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
    position: absolute;
  }

  25%{
    transform: translate(20px);
  }

  100%{
    transform: translate(-70px);
    opacity: 0;
    position: absolute;
  }
}

@keyframes loader{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>
