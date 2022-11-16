<template>
  <div>
    <div class="card-post-options" @click="closeDialog()">
      <button>
        <img src="https://cdn-icons-png.flaticon.com/512/860/860829.png">
      </button>
    </div>
    <div v-if="dialog" class="container-post-dialog">
      <div class="subcontainer-post-dialog">
        <div class="post-dialog-close">
          <button @click="closeDialog()">
            <img src="https://www.pngitem.com/pimgs/m/164-1646917_close-button-icon-png-x-icon-transparent-png.png" alt="">
          </button>
        </div>
        <h1>Excluir post</h1>
        <h3>Deseja mesmo excluir essa publicação?</h3>
        <span>
          Ao pressionar em <b>Confirmar</b> sua publicação será imediatamente deletada do <b>Kommunity</b> e não haverá formas de recupera-la.
          <br>
          <br>
          Tem certeza de que quer fazer isso?
        </span>
        <div class="post-dialog-actions">
          <button @click="closeDialog()">
            Cancelar
          </button>
          <button>Confirmar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      name: 'CardPostDialog',
      dialog: false
    }
  },
  methods: {
    closeDialog () {
      this.dialog = !this.dialog
    }
  }
})
</script>

<style lang="scss" scoped>
.card-post-options {
  width: 40px;
  height: 40px;
  background-color: white;
  border: 2px solid black;
  box-shadow: black 4px 4px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  button {
    width: 100%;
    height: 100%;
    padding: 8px;
    margin: 0px;
    background-color: transparent;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
}
.container-post-dialog {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.500);
  position: fixed;
  justify-content: center;
  align-items: center;
  display: flex;
  top: 0px;
  left: 0px;
  z-index: 1;
}
.subcontainer-post-dialog {
  width: 100%;
  max-width: 600px;
  max-height: 800px;
  padding: 20px;
  border: 5px solid black;
  box-shadow: black 6px 6px;
  background-color: white;
  justify-content: center;
  flex-direction: column;
  position: relative;
  display: flex;
  z-index: 1px;
  h1{
    margin: 0px;
    padding-bottom: 20px;
  }
  h3 {
    text-align: center;
  }
  span {
    margin: 0 auto;
    max-width: 90%;
    text-align: center;
    line-height: 20px;
    margin-bottom: 10px;
  }
  label {
    padding: 12px 0px;
    &:first-child{
      padding-top: 0px;
    }
  }
  input {
    padding: 12px;
    border: 1px solid black;
  }
  select {
    padding: 12px;
  }
}
.post-dialog-close{
  width: 35px;
  height: 35px;
  top: 20px;
  right: 20px;
  justify-content: center;
  align-items: center;
  position: absolute;
  display: flex;
  button {
    width: 100%;
    padding: 8px;
    border:0px;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    display: flex;
    img{
      width: 100%;
    }
  }
}
.post-dialog-actions{
  padding-top: 20px;
  flex-direction: row-reverse;
  display: flex;
  button {
    width: unset;
    padding: 10px;
    margin-left: 15px;
    font-weight: 500;
    letter-spacing: 1px;
    background-color: white;
    border: 5px solid black;
    box-shadow: black 4px 4px;
    cursor: pointer;
    &:first-child{
      background-color: black;
      color: white;
    }
  }
}
.already-post {
  flex-direction: column;
  display: flex;
  label {
    &:first-child{
      padding-top: 12px;
    }
  }
}
</style>
