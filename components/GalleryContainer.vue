<template>
  <div>
    <div v-show="loadingScreen" class="loader">
      <Preloader />
    </div>
    <div v-if="!loadingScreen" class="container-gallery">
      <CardGallery v-for="(item, i) in gallery" :key="i" :item="item" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Preloader from '../shared/Preloader.vue'

export default Vue.extend({
  name: 'GalleryContainer',
  components: { Preloader },
  data () {
    return {
      gallery: [],
      loadingScreen: true
    }
  },
  beforeMount () {
    this.getArts()
  },
  methods: {
    getArts () {
      this.$axios.get('/posts')
        .then((response) => {
          this.gallery = this.shuffle(response.data)
        }).catch((error) => {
          console.log(`Erro: ${error}`)
        }).finally(() => {
          this.loadingScreen = false
        })
    },
    shuffle (array) {
      let currentIndex = array.length
      let randomIndex
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex]
        ]
      }
      return array
    }
  }
})
</script>

<style lang="scss" scoped>
.container-gallery {
  margin: 0 auto;
  margin-top: 0;
  padding: 0;
  padding-bottom: 50px;
  max-width: 95vw;
  column-count: 7;
}

.loader{
  width: 100%;
  margin: 0 auto;
  display: flex;
}
</style>
