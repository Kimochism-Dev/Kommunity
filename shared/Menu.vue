<template>
  <div class="container-menu">
    <h1 class="main-title-style">
      <NuxtLink to="/">
        Kommunity
      </NuxtLink>
    </h1>
    <div class="user">
      <div v-if="user" class="user-info">
        <span>Username</span>
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
      user: false
    }
  }
})
</script>

<style>
  .container-menu {
    width: 95vw;
    margin: 0 auto;
    justify-content: space-between;
    display: flex;
  }

  a {
    text-decoration: none;
  }

  .user{
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
  }

  .user button {
    color: black;
    background-color: white;
    border: 5px solid black;
    box-shadow: black 5px 5px;
    font-weight: bold;
    padding: 8px 24px;
    cursor: pointer;
  }

</style>
