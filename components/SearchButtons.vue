<template>
  <div class="container-buttons">
    <button @click="reloadPage()">
      Pra você
    </button>
    <NuxtLink to="/feed">
      <button @click="$store.commit('feed/SET_SHOW_TAGS', !$store.getters['feed/showTags'])">
        Descobrir
      </button>
    </NuxtLink>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'SearchButtons',
  data () {
    return {
    }
  },
  methods: {
    reloadPage () {
      const current = window.location.href
      window.location.href = current
    }
  }
})
</script>

<style lang="scss" scoped>

.container-buttons{
  padding-bottom: 0px;
  justify-content: center;
  margin: 0 auto;
  padding: 25px;
  padding-top: 0px;
  display: flex;
  button{
    padding: 4px 12px;
    margin: 0px 8px;
    color: black;
    background-color: white;
    border: 5px solid black;
    font-weight: bold;
    padding: 8px 24px;
    box-shadow: black 6px 6px;
    cursor: pointer;
  }
}
</style>
