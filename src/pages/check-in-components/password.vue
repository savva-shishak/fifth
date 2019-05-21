<template>
	<div class="form-group">

		<label>Придумайте пароль</label>

		<input v-focus :type="look? 'text': 'password'" class="form-control" placeholder="Пароль" v-model='password'>

		<button type="button" @click='look = !look' class="btn btn-light btn-sm">
			{{ !look? 'Показать': 'Скрыть' }}
		</button>
		
		<hr>

		<template v-if='checkPass'>
			<span class="text-danger">Пароли не совпадают</span>
			<hr>
		</template>

		<label>И повторите его</label>

		<input :type="look2? 'text': 'password'" class="form-control" placeholder="Пароль" v-model='password2'>
	
		<!--Показ пароля-->
		<button type="button" @click='look2 = !look2' class="btn btn-light btn-sm">
			{{ !look2? 'Показать': 'Скрыть' }}
		</button>
		<hr>
		<!--Кнопка назад-->
		<button type="button" @click='backed' class="btn btn-light btn-sm">
			<i class="fas fa-angle-double-left"></i> Назад
		</button>
		<button class="btn btn-secondary" @click='check'>Далее</button>
	</div>
</template>

<script>
export default{
	props: ['checkPassword', 'back'],
	data(){
		return{
			password: '',
			password2: '',
			look: false,
			checkPass: false,
			look2: false
		}
	},
	methods: {

		// проверка
		check(){
			
			if (this.password2.trim() != '' && this.password.trim() != '') {
				
				if (this.password == this.password2) {
					
			    	this.checkPassword(this.password);
			    } else {
			    	
			    	this.checkPass = true
			    }
			}
		},

		// предыдущий компонент
		backed(){
			this.back()
		}
	}
}
</script>