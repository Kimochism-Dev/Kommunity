<template>
  <div>
    <div class="card-profile-options" @click="closeDialog()">
      <button>
        Excluir minha conta
      </button>
    </div>
    <div v-if="dialog" class="container-profile-dialog">
      <div class="subcontainer-profile-dialog">
        <div class="profile-dialog-close">
          <button @click="closeDialog()">
            <img src="https://www.pngitem.com/pimgs/m/164-1646917_close-button-icon-png-x-icon-transparent-png.png" alt="">
          </button>
        </div>
        <h2>Atenção</h2>
        <h3>Deseja mesmo excluir essa conta?</h3>
        <span>
          Ao pressionar em <b>Confirmar</b> sua conta será imediatamente deletada do <b>Kommunity</b> e não haverá formas de recupera-la.
          <br>
          <br>
          <b>Tem certeza de que quer fazer isso?</b>
        </span>
        <br>
        <div class="profile-dialog-actionss">
          <div>
            <button @click="confirmDelete()">
              Concordo, exclua minha conta.
            </button>
          </div>
          <div>
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
  methods: {
    closeDialog () {
      this.dialog = !this.dialog
    },
    async confirmDelete () {
      await this.$axios({
        method: 'delete',
        url: `/users/destroy/${this.user._id}`,
        config: {
          headers: {
            Authorization: this.user._id
          }
        }
      }).finally(() => {
        localStorage.removeItem('idToken')
        localStorage.removeItem('user')
        this.$router.push('/')
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.card-profile-options {
  height: 40px;
  border: 2px solid black;
  box-shadow: black 4px 4px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  button {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 500;
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
  max-width: 800px;
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
h3, h2 {
  text-align: center;
}
h2 {
  margin-bottom: 0px;
}
span {
  margin: 0 auto;
  max-width: 90%;
  text-align: center;
  line-height: 20px;
  margin-bottom: 10px;
}
.profile-dialog-actionss{
  padding-top: 20px;
  flex-direction: row;
  justify-content: space-between;
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
        margin-left: 0px;
      }
    }
  }
}

</style>
