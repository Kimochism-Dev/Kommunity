<template>
  <div>
    <div class="card-post-options" @click="actionDialog(post.isPurchasable)">
      <button
        :class="post.isPurchasable? 'purchasable' : 'not-purchasable'"
        :disabled="post.isPurchasable? '' : 'disabled'"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/1194/1194711.png">
      </button>
    </div>
    <div v-if="dialog" class="container-post-dialog">
      <div class="subcontainer-post-dialog">
        <div class="post-dialog-close">
          <button @click="actionDialog(post.isPurchasable)">
            <img src="https://www.pngitem.com/pimgs/m/164-1646917_close-button-icon-png-x-icon-transparent-png.png" alt="">
          </button>
        </div>
        <div class="post-dialog-left">
          <div class="post-dialog-image" :style="{ backgroundImage: 'url('+ post.image +')' }" />
        </div>
        <div class="post-dialog-right">
          <h2>Parabéns!</h2>
          <h3>O seu post atingiu a quantidade de 100 likes!<br> E agora está elegível para a venda</h3>
          <p>
            Olá <b>{{ user.name }}</b>, a equipe da kimochism agradece pelo seu empenho e a participação em nossa comunidade!
            <br>
            Estamos muito interessados na sua ilustração e gostariamos de que ela fizesse parte da
            nossa galeria original.
            <br>
            <br>
            <b>Trouxemos essa proposta para você:</b>
          </p>
          <label class="post-dialog-value">
            R$ 90
          </label>
          <div class="checkbox-term">
            <input id="term" type="checkbox" name="">
            <label for="term">Termos e condições</label>
          </div>
          <button>
            Aceito a proposta
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      dialog: false,
      user: ''
    }
  },
  beforeMount () {
    this.user = JSON.parse(localStorage.getItem('user'))
  },
  methods: {
    actionDialog (purchasable) {
      if (purchasable) {
        this.dialog = !this.dialog
      }
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
    margin: 0px;
    padding: 0px;
    border: 2px solid black;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    display: flex;
    img {
      width: 70%;
      height: 70%;
      padding: 8px;
      display: flex;
    }
  }
}
.container-post-dialog {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.500);
  justify-content: center;
  align-items: center;
  display: flex;
}
.subcontainer-post-dialog {
  width: 100%;
  max-width: 700px;
  max-height: 800px;
  padding: 20px;
  border: 5px solid black;
  box-shadow: black 6px 6px;
  background-color: white;
  justify-content: center;
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

/* Modal compra */

.post-dialog-left {
  width: 100%;
  max-width: 260px;
  background-color: #eaeaea;
  padding: 20px;
}
.post-dialog-image {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 100%;
}
.post-dialog-right {
  text-align: center;
  padding: 20px;
  width: 400px;
  height: 100%;
  flex-direction: column;
  display: flex;
  h2 {
    margin: 0px;
  }
  p {
    line-height: 22px;
  }
  button {
    color: black;
    padding: 12px;
    background-color: white;
    border: 5px solid black;
    box-shadow: black 6px 6px;
    font-weight: bold;
    z-index: 1;
  }
}

.post-dialog-value{
    width: 100%;
    /* background-color: #28a745; */
    background-color: #3198e8;
    color: white;
    margin: 0px auto;
}
.checkbox-term {
  padding: 8px 0px;
  margin: 0px;
  justify-content: center;
  align-items: center;
  display: flex;
  input {
    cursor: pointer
  }
  label {
    cursor: pointer
  }
}

.purchasable {
  background-color: #3198e8;
  img {
    filter: invert(1);
  }
}

.not-purchasable {
  background-color: grey
}
</style>
