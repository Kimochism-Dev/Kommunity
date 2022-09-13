<template>
  <div class="container-login">
    <div class="login-inputs">
      <h1 class="main-title-style">
        Kommunity
      </h1>
      <label for="">Email</label>
      <input type="text" placeholder="Login" required>
      <label for="">Senha</label>
      <input id="" type="password" name="" placeholder="Senha" required>
      <NuxtLink to="/">
        <button>
          Entrar
        </button>
      </NuxtLink>
      <span>
        Ainda não possui conta?
        <b>Cadastre-se</b>
      </span>
    </div>
    <div class="background">
      <div class="opacity">
        <span>
          <NuxtLink to="/">
            Kommunity
          </NuxtLink>
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
    return {}
  }
})
</script>

<style scoped>
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
}

.opacity {
  width: 100%;
  height: 100%;
  background-color: #0000007b;
  flex-direction: column;
  display: flex;
}

.opacity span {
  padding: 24px;
  font-weight: 600;
  color: #ecebeb7b;
  letter-spacing: 1px;
}

.opacity span a {
  color: #ecebeb7b;
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
}

.login-inputs input {
  padding: 12px;
  border: 2px solid black;
}

.login-inputs label {
  font-weight: 600;
  padding: 12px 0;
}

.login-inputs button {
  width: 100%;
  border: 5px solid black;
  background-color: white;
  box-shadow: black 8px 8px;
  font-weight: 600;
  padding: 12px;
  margin: 8% 0%;
  cursor: pointer;
}

.login-inputs span {
  padding: 24px;
  text-align: center;
}
</style>
