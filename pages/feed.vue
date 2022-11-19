<template>
  <div>
    <Menu />
    <SearchButtons />
    <TagsContainer v-if="$store.getters['feed/showTags']" />
    <GalleryContainer />
  </div>
</template>

<script>
import Vue from 'vue'
import Menu from '../shared/Menu.vue'
import SearchButtons from '~/components/SearchButtons.vue'
import TagsContainer from '~/components/TagsContainer.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { Menu, SearchButtons, TagsContainer },
  data () {
    return {
      name: 'index'
    }
  }
})
</script>
