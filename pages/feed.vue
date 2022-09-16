<template>
  <div>
    <Menu />
    <SearchButtons />
    <GalleryContainer />
  </div>
</template>

<script>
import Vue from 'vue'
import Menu from '../shared/Menu.vue'
import SearchButtons from '~/components/SearchButtons.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { Menu, SearchButtons },
  data () {
    return {
      name: 'index'
    }
  }
})
</script>
