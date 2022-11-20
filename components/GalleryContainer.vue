<template>
  <div>
    <div class="container-gallery">
      <CardGallery
        v-for="(item, i) in $store.getters['feed/posts']"
        :key="i"
        :item="item"
      />
    </div>
    <InfiniteLoading spinner="spiral" @infinite="infiniteScroll" />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'GalleryContainer',
  data () {
    return {
      loadingScreen: true,
      skip: 0
    }
  },
  computed: {
    url () {
      return 'posts?skip=' + this.skip
    }
  },
  created () {
    this.getArts()
  },
  methods: {
    getArts () {
      const query = this.$route.query

      const url = query?.tags ? `/posts?tags=${query?.tags}` : '/posts'
      this.$axios.get(url)
        .then((response) => {
          this.$store.commit('feed/SET_POSTS', this.shuffle(response.data))
        }).catch((error) => {
          console.error(`Error: ${error}`)
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
    },
    infiniteScroll ($state) {
      setTimeout(() => {
        this.skip++
        this.$axios.get(this.url)
          .then((response) => {
            if (response.data.length > 1) {
              const currentItems = this.$store.getters['feed/posts']
              const newItems = new Set([...new Set(currentItems)].concat(this.shuffle(response.data)))
              this.$store.commit('feed/SET_POSTS', newItems)
              $state.loaded()
            } else {
              $state.complete()
            }
          }).catch((err) => { console.log(err) })
      }, 500)
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
</style>
