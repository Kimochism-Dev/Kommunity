<template>
  <div class="container-login">
    <div class="login-inputs">
      <h1 class="main-title-style">
        Kommunity
      </h1>
      <label for="">Email</label>
      <input
        v-model="email"
        type="text"
        placeholder="example@community.com"
        required
      >
      <label for="">Senha</label>
      <input v-model="password" type="password" placeholder="Senha" required>
      <button @click="handleLogin">
        Entrar
      </button>
      <span>
        Ainda não possui conta?

        <NuxtLink to="/register">
          <b>Cadastre-se</b>
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

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginComponent',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async handleLogin () {
      if (this.password.length < 6) {
        alert('Senha precisa ter 6 ou mais caracteres')
        return
      }

      await this.$axios.post('/users/signin', {
        email: this.email,
        password: this.password
      }).then((response) => {
        const { idToken } = response.data
        localStorage.setItem('idToken', idToken)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        this.$router.push('/')
      }).catch(error => console.error(error))
    }
  }
})
</script>

<style lang="scss" scoped>
.container-login {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
}

.background {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("https://my4kwallpapers.com/wp-content/uploads/2021/06/Anime-Wallpaper.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

.opacity {
  width: 100%;
  height: 100%;
  background-color: #0000007b;
  flex-direction: column;
  display: flex;
  span {
    padding: 24px;
    font-weight: 600;
    color: #ecebeb7b;
    letter-spacing: 1px;
    a {
      color: #ecebeb7b;
      text-decoration: none;
    }
  }
}

.login-inputs {
  position: absolute;
  width: 340px;
  right: 20vw;
  top: 20vh;
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
