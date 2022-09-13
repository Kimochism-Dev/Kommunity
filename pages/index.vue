<template>
  <div>
    <MenuCommunity />
    <GalleryContainer />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Footer from '~/shared/Footer.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { Footer }
})
</script>
