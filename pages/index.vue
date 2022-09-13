<template>
  <div>
    <Menu />
    <GalleryContainer />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Menu from '../shared/Menu.vue'
import Footer from '~/shared/Footer.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { Footer, Menu }
})
</script>
