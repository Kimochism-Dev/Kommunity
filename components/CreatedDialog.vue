<template>
  <div>
    <div v-if="post._id" class="container-post-dialog">
      <div class="subcontainer-post-dialog">
        <h1>Expansão de comunidade!</h1>
        <h3>Parabéns o seu post foi criado com sucesso</h3>
        <img src="https://s3.amazonaws.com/stickers.wiki/Genshin_Impact_Official_Chibi/966424.512.webp" width="140px">
        <br>
        <span>
          <b>Confira agora mesmo</b>
        </span>
        <div class="post-dialog-actions" @click="sendToPost(post._id)">
          <button>Ir a publicação</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    respPost: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      name: 'CardPostDialog',
      dialog: false,
      post: this.respPost
    }
  },
  watch: {
    'respPost' () {
      this.post = this.respPost
    }
  },
  methods: {
    sendToPost (id) {
      this.$router.push('/art/' + id)
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
    margin: 5px;
    text-align: center;
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
  img {
    margin: 0 auto;
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
  justify-content: center;
  display: flex;
  button {
    width: 80%;
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
</style>
