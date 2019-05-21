<template>
    <div>
      <div>
        <i v-show="! imageSrc"></i>
        <img v-show="imageSrc" :src="imageSrc">
      </div>

      <input @change="previewThumbnail" name="thumbnail" type="file">
    </div>
</template>

<script type="text/javascript">
  export default {
    props: [ 'imageSrc' ],

    methods: {
        previewThumbnail: function(event) {
            var input = event.target;

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                var vm = this;

                reader.onload = function(e) {
                    vm.imageSrc = e.target.result;
                }

                reader.readAsDataURL(input.files[0]);
            }
        }
    }
  }
</script>
