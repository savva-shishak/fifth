<template>
	<div class="form-group">
      <label>Введите ваше имя</label>
      <input v-focus @keyup.enter='next()' v-model='name' type="text" class="form-control">
    </div>
</template>

<script>
	export default{
		props: ['checkName'],
		data(){
			return{
				name: ''
			}
		},
		methods: {
			next(){
				if (this.name.trim() != '') {
					this.checkName(this.name);
				}
			}
		}
	}
</script>

<style>
	
</style>