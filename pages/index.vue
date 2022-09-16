<template>
  <div>
    <Menu />
    <div class="welcome">
      <h1>Bem vindo ao Kommunity</h1>
      <h2>Encontre aqui ideias de arte feitas pra você</h2>
      <SearchButtons />
    </div>
    <GalleryContainerWelcome />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Menu from '../shared/Menu.vue'
import Footer from '~/shared/Footer.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { Footer, Menu },
  data () {
    return {
      name: 'index'
    }
  }
})
</script>

<style lang="scss" scoped>
  .welcome{
    padding: 150px;
    text-align: center;
    flex-direction: column;
    display: flex;
    h1{
      font-size: 3.5vw;
      margin: 20px;
    }
    h2{
      font-size: 1.2vw;
      font-weight: 600;
      padding-bottom: 20px;
    }
  }
</style>
