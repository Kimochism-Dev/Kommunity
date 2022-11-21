<template>
  <div class="container-register">
    <div class="register-inputs">
      <h1 class="main-title-style">
        Kommunity
      </h1>
      <div class="picture-user" :style="{backgroundImage: 'url('+ user.picture +')'}" />
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
      icons: [
        'https://i.pinimg.com/564x/27/e7/db/27e7db3cd80f758a4346d4aee847ad31.jpg',
        'https://i.pinimg.com/564x/8e/41/d5/8e41d532d71da1352800c9b32d639eaf.jpg',
        'https://i.pinimg.com/564x/2c/f4/33/2cf433b98257c786c5675f3038eedd1d.jpg',
        'https://i.pinimg.com/564x/c5/ad/b5/c5adb5a116001b70430f1a23a8b80eb9.jpg',
        'https://i.pinimg.com/564x/4b/bf/d8/4bbfd86abcc0ce888a7eab57c17bc19a.jpg',
        'https://i.pinimg.com/736x/47/68/94/47689419e5576d79cc565217a0bae973.jpg',
        'https://i.pinimg.com/564x/b7/9d/6c/b79d6c297f44e92352ca7fa405f8d63c.jpg',
        'https://i.pinimg.com/564x/17/9d/f2/179df2b7277cadc7aabd791fef7ce763.jpg',
        'https://i.pinimg.com/736x/65/62/21/6562214fad01f0c42cbf67925aad425c.jpg',
        'https://i.pinimg.com/736x/7a/ec/8f/7aec8f386a24d14b75a20f52362a0c7f.jpg',
        'https://i.pinimg.com/736x/57/17/5f/57175fea57f58351a0f0a0ca71999e89.jpg',
        'https://i.pinimg.com/564x/61/38/4f/61384f02e6fc02f35e9cbfe5dc578bf1.jpg',
        'https://i.pinimg.com/564x/35/48/44/354844334ecc0f71ece93a1405b4483a.jpg',
        'https://i.pinimg.com/564x/e8/0b/d0/e80bd0606ef1896e64e66cff1d4b884d.jpg',
        'https://i.pinimg.com/564x/2f/c7/9b/2fc79b47eb49d84ab3e222f1a732b620.jpg',
        'https://i.pinimg.com/564x/97/04/00/9704004250a27cc239a22562f567a309.jpg',
        'https://i.pinimg.com/564x/54/a2/b5/54a2b51d84ff9681cbaeb06af3ecc90a.jpg',
        'https://i.pinimg.com/736x/65/4b/07/654b07b2d924276acb09f5af8686d6af.jpg',
        'https://i.pinimg.com/564x/0c/41/49/0c414913234139d3513aaecd46d38539.jpg',
        'https://i.pinimg.com/736x/b9/5c/ef/b95cefa19d70a75beb00aab9425f2d3c.jpg',
        'https://i.pinimg.com/564x/52/00/cb/5200cbfc83691c28fd8b95b1c15e69f2.jpg',
        'https://i.pinimg.com/564x/9b/fa/fc/9bfafcd1a7c16ee8aaa1685351eeeb13.jpg',
        'https://i.pinimg.com/564x/17/70/4e/17704eaed212291a04e7a506897d1aea.jpg',
        'https://i.pinimg.com/564x/4b/75/db/4b75db45b2e447edb17fa9daeebe8ce4.jpg',
        'https://i.pinimg.com/564x/59/d2/8e/59d28ef2c73f5c46b2ec9cfab05055ea.jpg',
        'https://i.pinimg.com/564x/f7/31/a5/f731a5ba40adfaa98e8d06e000de4768.jpg',
        'https://i.pinimg.com/564x/ed/96/a8/ed96a87597973c3a9ba99a03e9f672c3.jpg',
        'https://i.pinimg.com/564x/a4/1b/61/a41b61b77ad1e0d1d53f1c9cdfe49e42.jpg',
        'https://i.pinimg.com/564x/0a/7b/61/0a7b6122ec47bca198a2fa12aa67c1ee.jpg',
        'https://i.pinimg.com/564x/cd/8a/4e/cd8a4e195b25b2a7f681b09ba624bc38.jpg',
        'https://i.pinimg.com/564x/4f/81/38/4f81385311d0da39e82b379805266764.jpg'
      ],
      user: {
        picture: '',
        name: '',
        nickname: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  beforeMount () {
    this.user.picture = this.icons[Math.floor(Math.random() * this.icons.length)]
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

.picture-user {
  width: 60px;
  height: 60px;
  border-radius: 50px;
  border: 5px solid black;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 20px;
  right: 25px;
}
</style>
