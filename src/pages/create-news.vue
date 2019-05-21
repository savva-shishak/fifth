<template lang="html">
  <div class="">
    <router-link tag='a' to="/" class="nav-link" active-class='active'>
      <h6 class="text-secondary text-left"><i class="fas fa-arrow-left"></i> Назад</h6>
    </router-link>
    <h2>Придумайте обложку для вашего объявления</h2>
    <hr>
    <div class="row">

      <card :title='title' :urlImg='imageSrc' :content='contentTitle'></card>

      <div class="col-12 col-lg-6 col-md-6">
        <div class="card">
            <div class="form-group">

              <h5>Фото</h5>
              <button type="button" class="btn btn-success" @click='clickInputFile'>Выбрать</button>

              <div class="hide">
                <input type="file" ref='load' class="form-control-file" name='sibur-tob.jpg' @change="previewThumbnail" accept="image/*" id="exampleInputFile">
              </div>

            </div>

            <div class="card-body">

              <small>Максимум 50 слов</small>
              <h5 class="card-title">
                <input type="text" v-model='title' maxlength="50" class="form-control">
              </h5>

              <p class="card-text">
                <small>Максимум 200 слов</small>
                <textarea type="text" maxlength='200' v-model='contentTitle' class="form-control"></textarea>
              </p>

              <a href="#" class="btn btn-primary" @click='SaveNews'>Сохранить</a>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
        title: 'Красивое название объявления',
        contentTitle: 'Напишите краткую информацию о вас или вашей компании, так чтобы привлечь внимание туристов',
        img: null,
        imageSrc: 'images/Responsive-Tobolsk.jpg',
        file: null
    }
  },
  methods: {

    // получение картинки
    previewThumbnail(e){
      let input = e.target;

      if (input.files && input.files[0]) {

        let reader = new FileReader(),

        vm = this;

        reader.onload = event => {

          vm.imageSrc = event.target.result;
        }

        reader.readAsDataURL(input.files[0])

        console.log(this.imageSrc);
      }
    },

    // отправка
    SaveNews(){
      this.$http.post('http://localhost:5000/api/news', {
        title: this.title,
        contentTitle: this.contentTitle
      })
    },

    // загрузка фото у пользователя
    clickInputFile(){
      this.$refs.load.click()
    }
  }
}
</script>

<style lang="scss" scoped>
textarea{
  height: 100px;
}
.hide{
  height: 0;
  width: 0;
  overflow: hidden;
}
.form-group{
  padding: 20px
}
</style>
