<template>
  <div>
    <div class="card-profile-options" @click="closeDialog()">
      <button>
        <img src="https://cdn-icons-png.flaticon.com/512/61/61456.png">
      </button>
    </div>
    <div v-if="dialog" class="container-profile-dialog">
      <div class="subcontainer-profile-dialog">
        <div class="profile-dialog-close">
          <button @click="closeDialog()">
            <img src="https://www.pngitem.com/pimgs/m/164-1646917_close-button-icon-png-x-icon-transparent-png.png" alt="">
          </button>
        </div>
        <h1>Editar Perfil</h1>
        <label for="">Nome</label>
        <input
          v-model="editedUser.name"
          type="text"
          placeholder="Titulo"
        >
        <label for="">Nickname</label>
        <input
          v-model="editedUser.nickname"
          type="text"
          placeholder="Nickname"
        >
        <label for="">Telefone</label>
        <input
          v-model="editedUser.phone"
          type="text"
          placeholder="Telefone"
        >
        <label for="">Sobre</label>
        <input
          v-model="editedUser.bio"
          type="text"
          placeholder="Sobre"
        >
        <label for="">Banner ( utilizar url )</label>
        <input
          v-model="editedUser.banner"
          type="text"
          placeholder="Banner"
        >
        <label for="">Foto ( utilizar url )</label>
        <input
          v-model="editedUser.picture"
          type="text"
          placeholder="Foto"
        >
        <div class="profile-dialog-actions">
          <div>
            <ProfileDialogDelete :user="user" />
          </div>
          <div>
            <button @click="updateProfile()">
              Atualizar
            </button>
            <button @click="closeDialog()">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      name: 'ProfileEditDialog',
      dialog: false,
      editedUser: {
        name: '',
        nickname: '',
        phone: '',
        bio: '',
        banner: '',
        picture: ''
      }
    }
  },
  beforeMount () {
    this.editedUser = this.user
  },
  methods: {
    closeDialog () {
      this.dialog = !this.dialog
    },
    updateProfile () {
      this.$axios.put('/users/update', this.editedUser).then((response) => {
        const resp = response.data
        localStorage.setItem('user', JSON.stringify(resp))
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
        this.dialog = false
        this.$router.go(0)
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.card-profile-options {
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
.container-profile-dialog {
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
.subcontainer-profile-dialog {
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
.profile-dialog-close{
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
    cursor: pointer;
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
.profile-dialog-actions{
  padding-top: 20px;
  justify-content: space-between;
  flex-direction: row;
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
  div {
    &:nth-child(1){
      button {
        width: unset;
        margin-left: 0px;
      }
    }
  }
}
</style>
