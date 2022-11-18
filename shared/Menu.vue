<template>
  <div class="container-menu">
    <h1 class="main-title-style">
      <NuxtLink to="/">
        Kommunity
      </NuxtLink>
    </h1>
    <div class="user">
      <div v-if="user" class="user-info">
        <NuxtLink to="/post">
          <button>Create</button>
        </NuxtLink>
        <NuxtLink to="/profile">
          <span>
            <b>
              {{ user.name }}
            </b>
          </span>
        </NuxtLink>
        <button @click="logout()">
          Sair
        </button>
      </div>
      <div v-else class="login">
        <NuxtLink to="/login">
          <button>
            Login
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'FooterComponent',
  data () {
    return {
      user: ''
    }
  },
  beforeMount () {
    this.user = JSON.parse(localStorage.getItem('user'))
  },
  methods: {
    logout () {
      localStorage.removeItem('idToken')
      localStorage.removeItem('user')
      this.$router.push('/login')
    }
  }
})
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
  }

  .container-menu {
    width: 95vw;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    display: flex;
  }

  .user{
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    button {
      color: black;
      background-color: white;
      border: 5px solid black;
      box-shadow: black 5px 5px;
      font-weight: bold;
      padding: 8px 24px;
      cursor: pointer;
    }
  }

  .user-info{
    width: auto;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    padding: 8px;
    padding-right: 0;
    a {
      margin: 5%;
      button{
        margin: 0 5%;
        margin-right: 0;
      }
      span{
        padding: 12px;
      }
    }
  }

</style>
