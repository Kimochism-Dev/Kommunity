<template>
  <div class="container-card-post" :style="{backgroundImage: 'url('+ post.image +')'}">
    <div class="card-post-options">
      <CardPostDialog :post="post" />
      <CardPostDialogDelete :post="post" />
      <CardPostDialogSell :post="post" />
    </div>
    <div class="card-post-title">
      <span>
        {{ post.title }}
      </span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import CardPostDialog from './CardPostDialog.vue'

export default Vue.extend({
  name: 'CardPost',
  components: { CardPostDialog },
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
    width: 250px;
    height: 380px;
    position: relative;
    flex-direction: column-reverse;
    display: flex;
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

  .card-post-options{
    position: absolute;
    top: 6px;
    right: 12px;
    flex-direction: column;
    display: flex;
  }
</style>
