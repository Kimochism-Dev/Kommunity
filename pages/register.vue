<template>
  <div class="container-register">
    <div class="register-inputs">
      <h1 class="main-title-style">
        Kommunity
      </h1>
      <label for="">Nome</label>
      <input
        v-model="user.name"
        type="text"
        placeholder="John Doe"
        required
      >
      <label for="">Nome de usuário</label>
      <input
        v-model="user.nickname"
        type="text"
        placeholder="@johndoe"
        required
      >
      <label for="">Email</label>
      <input
        v-model="user.email"
        type="email"
        placeholder="johndoe@kommunity.com"
        required
      >
      <label for="">Senha</label>
      <input
        v-model="user.password"
        type="password"
        placeholder="Senha"
        required
      >
      <label for="">Repetir Senha</label>
      <input
        v-model="user.confirmPassword"
        type="password"
        placeholder="Senha"
        required
      >
      <button @click="handleRegister">
        Cadastrar
      </button>
      <span>
        Já possui conta?
        <NuxtLink to="/login">
          <b>Entre agora!</b>
        </NuxtLink>
      </span>
    </div>
    <div class="background">
      <div class="opacity">
        <span>
          <NuxtLink to="/"> Kommunity </NuxtLink>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RegisterComponent',
  data () {
    return {
      user: {
        name: '',
        nickname: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    async handleRegister () {
      if (Object.values(this.user).includes('')) {
        alert('Preencha todos os campos')
        return
      }

      if (this.user.password !== this.user.confirmPassword) {
        alert('Senhas não conferem')
        return
      }

      if (this.user.password.length < 6 || this.user.confirmPassword.length < 6) {
        alert('Senhas precisam ter 6 ou mais caracteres')
        return
      }

      const response = await this.$axios.post('/users/signup', this.user)

      if (response.data) {
        this.$router.push('/login')
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.container-register {
    background-color: red;
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
}
.background {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("https://wallpaperaccess.com/full/4839734.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

.main-title-style{
    margin: 0px;
    padding: 10px 0px;

}
.opacity {
  width: 100%;
  height: 100%;
  background-color: #0000007b;
  align-items: flex-end;
  flex-direction: column;
  display: flex;
  span {
    padding: 24px;
    font-weight: 600;
    color: #ecebeb93;
    letter-spacing: 1px;
    a {
      color: #ecebeb7b;
      text-decoration: none;
    }
  }
}

.register-inputs {
  position: absolute;
  width: 340px;
  left: 10vw;
  top: 4vh;
  padding: 24px;
  border: 5px solid black;
  background-color: white;
  box-shadow: black 15px 15px;
  flex-direction: column;
  display: flex;
  input {
    padding: 12px;
    border: 2px solid black;
  }
  label {
    font-weight: 600;
    padding: 12px 0;
  }
  button {
    width: 100%;
    border: 5px solid black;
    background-color: white;
    box-shadow: black 8px 8px;
    font-weight: 600;
    padding: 12px;
    margin: 8% 0%;
    cursor: pointer;
  }
  span {
    padding: 24px;
    text-align: center;
  }
}
</style>
