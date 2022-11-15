<template>
  <div class="container-card-post" :style="{backgroundImage: 'url('+ post.image +')'}">
    <div class="card-post-options">
      <button>
        <img src="https://cdn-icons-png.flaticon.com/512/61/61456.png" alt="">
      </button>
    </div>
    <div class="card-post-title">
      <span>
        {{ post.name }}
      </span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'CardPost',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      name: 'CardPost'
    }
  }
})
</script>

<style lang="scss" scoped>
  .container-card-post {
    background-size: cover;
    background-position: top;
    border: 5px solid black;
    box-shadow: black 6px 6px;
    margin: 1%;
    width: 280px;
    height: 380px;
    position: relative;
    flex-direction: column-reverse;
    display: flex;
  }
  .card-post-options {
    width: 40px;
    height: 40px;
    background-color: white;
    border: 2px solid black;
    box-shadow: black 4px 4px;
    position: absolute;
    top: 6px;
    right: 12px;
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

  .card-post-title {
    height: 30px;
    padding: 20px;
    background-color: white;
    box-shadow:  0px -12px 5px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    border-top: 5px solid black;
    font-size: 24px;
    font-weight: bold;
    flex-direction: row;
    justify-content: center;
    display: flex;
    span {
      padding: 0px;
      margin: 0px;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
