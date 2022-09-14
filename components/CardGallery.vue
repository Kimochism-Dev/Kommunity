<template>
  <div
    class="card-container"
  >
    <img :src="item.image">
    <div class="card-opacity" @click="navigateTo(item.id)">
      <div class="top">
        <button class="btn-primary">
          Salvar
        </button>
      </div>
      <div class="bottom">
        <button class="btn-primary">
          Share
        </button>
        <button class="btn-primary">
          Options
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'CardGallery',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    navigateTo (id) {
      this.$router.push('/art/' + id)
    }
  }
})
</script>

<style lang="scss" scoped>
.card-container {
  max-width: 236px;
  margin: 1%;
  margin-bottom: 18px;
  position: relative;
  overflow: hidden;
  display: flex;
  border: 5px solid black;
  background-color: white;
  box-shadow: black 6px 6px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  img {
    display: block;
    max-width: 100%;
  }
  &:hover .card-opacity {
    display: flex;
    cursor: pointer;
  }
}

.card-opacity {
  background-color: #0000008f;
  right: 0;
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
  display: none;
}

.bottom, .top {
  width: 100%;
  flex-direction: row-reverse;
  display: flex;
  button {
    padding: 2% 5%;
    margin: 7% 5%;
    box-shadow: black 3.4px 3.4px;
    border: 5px solid black;
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
  }
}
</style>
