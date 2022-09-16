<template>
  <div>
    <div v-if="loadingScreen" class="loader">
      <Preloader />
    </div>
    <div v-else class="container-gallery">
      <CardGallery v-for="(item, i) in gallery" :key="i" :item="item" />
      <div class="opacity-welcome" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Preloader from '../shared/Preloader.vue'

export default Vue.extend({
  name: 'GalleryContainerWelcome',
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
          // Por enquanto n tem limite
          const aux = this.shuffle(response.data)
          for (let i = 0; i <= 23; i++) {
            this.gallery.push(aux[i])
          }
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
  position: relative;
  margin: 0 auto;
  margin-top: 0;
  padding: 0 50px;
  padding-bottom: 50px;
  column-count: 7;
}

.loader{
  width: 100%;
  margin: 0 auto;
  display: flex;
}

.opacity-welcome{
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 25%, rgba(255,255,255,0) 100%);
  left: 0;
  bottom: 0;
}
</style>
