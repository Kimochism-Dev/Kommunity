<template>
  <div class="container-gallery">
    <CardGallery v-for="(item, i) in gallery" :key="i" :item="item" />
  </div>
</template>

<script>
import Vue from 'vue'
import galleryItems from '~/api'

export default Vue.extend({
  name: 'GalleryContainer',
  data () {
    return {
      gallery: []
    }
  },
  beforeMount () {
    this.gallery = galleryItems
  }
})
</script>

<style scoped>
.container-gallery {
  margin: 0 auto;
  margin-top: 0;
  padding: 0;
  max-width: 95vw;
  column-count: 7;
}
</style>
