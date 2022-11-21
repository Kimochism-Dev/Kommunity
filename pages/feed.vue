<template>
  <div>
    <Menu />
    <SearchButtons />
    <TagsContainer v-if="$store.getters['feed/showTags']" />
    <GalleryContainer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Menu from '../shared/Menu.vue'
import SearchButtons from '~/components/SearchButtons.vue'
import TagsContainer from '~/components/TagsContainer.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { Menu, SearchButtons, TagsContainer },
  data () {
    return {
      name: 'index',
      rota: this.$router
    }
  },
  watch: {
    'rota' () {
      window.scrollTo({ top: 0 })
    }
  },
  mounted () {
    if (this.$route.query.tags) {
      this.$store.commit('feed/SET_SHOW_TAGS', true)
    }
  }
})
</script>
<style scoped>
html,
body {
  overflow-x: hidden;
}
</style>
