<template>
  <div>
    <div class="card-post-options" @click="closeDialog()">
      <button>
        <img src="https://cdn-icons-png.flaticon.com/512/61/61456.png">
      </button>
    </div>
    <div v-if="dialog" class="container-post-dialog">
      <div class="subcontainer-post-dialog">
        <div class="post-dialog-close">
          <button @click="closeDialog()">
            <img src="https://www.pngitem.com/pimgs/m/164-1646917_close-button-icon-png-x-icon-transparent-png.png" alt="">
          </button>
        </div>
        <h1>Editar post</h1>
        <div class="toaggle-visible">
          <span>
            <b>Tornar meu post visivel para todos</b>
          </span>
          <button
            ref="toagleBody"
            :class="post.isPublic ? 'toagle-body' : 'toagle-body toagle-disabled'"
            @click="changeVisibility(post.isPublic)"
          >
            <div class="toagle-circle" />
          </button>
        </div>
        <label for="">Titulo</label>
        <input
          v-model="postEdited.title"
          type="text"
          placeholder="Titulo"
        >
        <label for="">Sobre</label>
        <input
          v-model="postEdited.description"
          type="text"
          placeholder="Sobre"
        >
        <label for="">Tags ( separar tags por vírgula ",")</label>
        <input
          v-model="postEdited.tags"
          type="text"
          placeholder="Tags"
        >
        <div v-if="!postEdited.isPosted" class="already-post">
          <label for="">Data de publicação</label>
          <input
            type="date"
            placeholder="Data da publicação"
            value=""
          >
          <label for="">Horário de publicação</label>
          <select>
            <option>Manhã - 10:00 </option>
            <option>Tarde - 16:00</option>
            <option>Noite - 22:00</option>
          </select>
        </div>
        <div class="post-dialog-actions">
          <input type="button" value="" @click="separateTags()">
          <button @click="closeDialog()">
            Cancelar
          </button>
          <button @click="updatePost()">
            Atualizar
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
      postEdited: '',
      user: ''
    }
  },
  beforeMount () {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.postEdited = this.post
  },
  methods: {
    closeDialog () {
      this.dialog = !this.dialog
    },
    changeVisibility (visible) {
      this.postEdited.isPublic = !visible
      const toagle = this.$refs.toagleBody
      const TOAGLE_OFF = 'toagle-disabled'
      toagle.classList.contains(TOAGLE_OFF) ? toagle.classList.remove(TOAGLE_OFF) : toagle.classList.add(TOAGLE_OFF)
    },
    separateTags () {
      let tagsArr = this.postEdited.tags
      tagsArr = tagsArr.toString()
      tagsArr = tagsArr.split(',')
      tagsArr = tagsArr.map(function (a) { return a.trim() })
      this.postEdited.tags = tagsArr
    },
    async updatePost () {
      this.separateTags()
      await this.$axios({
        method: 'put',
        url: `/posts/${this.post._id}`,
        data: this.postEdited,
        config: {
          headers: {
            Authorization: this.user._id
          }
        }
      }).finally(() => {
        this.closeDialog()
        this.$router.go(0)
      })
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
.toaggle-visible{
  justify-content: space-between;
  padding: 20px 0px 10px 0px;
  align-items: center;
  display: flex;
  .toagle-body {
    width: 45px;
    height: 26px;
    background-color: green;
    border-radius: 100px;
    border: none;
    padding: 2px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .toagle-circle {
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 100%;
    transition: .3s;
    transform: translate(20px);
  }
  .toagle-disabled {
    background-color: gray;
    justify-content: left;
  }
  .toagle-disabled > .toagle-circle {
    transition: .3s;
    transform: translate(2px);
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
