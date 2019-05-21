<template>
	<div class="form-group">

          <label>Введите свой уникальный логин под которым будете заходить в приложение</label>

          <!--Ввод-->
          <input v-focus @keyup.enter='check' type="text" class="form-control" v-model='login'>
			
		  <!--Уведомление-->
          <span class="text-warning" v-show='checkedLogin'>Такой логин уже существует</span>

          <!--Кнопка назад-->
          <button  type="button"  @click='backed' class="btn btn-light btn-sm">
            <i class="fas fa-angle-double-left"></i> Назад
          </button>

        </div>
</template>

<script>
export default{
	props: ['checkLogin', 'back'],
	data(){
		return{
			login: '',
			checkedLogin: false
		}
	},
	methods: {

		// проверка
		check(){

			this.$http.get('http://localhost:5000/api/users/' + this.login.trim()).then(res => {

		    this.checkedLogin = res.body

		    if (!this.checkedLogin) {this.next(this.login)}

		    }, res => {
		    	console.log(res);
		    });
		},

		// следующее поле
		next(){
			if (this.login.trim() != '') {

				this.checkLogin(this.login);
			}
		},

		// предыдущее поле
		backed(){
			this.back()
		}
	}
}
</script>