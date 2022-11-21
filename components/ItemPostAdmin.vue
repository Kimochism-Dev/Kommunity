<template>
  <div class="item-post" @click="sendToPost(post._id)">
    <div class="item-post-image">
      <div class="image-container" :style="{backgroundImage: 'url('+ post.image +')'}" />
    </div>
    <div class="item-post-title">
      <span>{{ post.title }}</span>
    </div>
    <div class="item-post-likes">
      <label>{{ post.likes }}</label>
      <span>Likes</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    sendToPost (id) {
      this.$router.push('/art/' + id)
    }
  }
}
</script>

<style lang="scss">
h1{
  padding: 1px;
  margin: 0px;
}
.item-post {
  width: 100%;
  max-height: 60px;
  border-bottom: 1px solid #eaeaea;
  flex-direction: row;
  display: flex;
  cursor: pointer;
}
.item-post-image {
  width: 15%;
  height: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
  display: flex;
}
.item-post-title {
  width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0px 8px;
  justify-content: center;
  align-items: center;
  display: flex;
  span {
    text-overflow: ellipsis;
    overflow: hidden;
    font-weight: bold;
    text-transform: capitalize;
  }
}
.item-post-likes{
  width: 15%;
  background-color: rgb(0, 0, 0);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  label {
    color: #fc035a;
    font-weight: bold;
    padding-bottom: 5px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  span {
    color: white;
  }
}
.image-container {
  width: 75%;
  height: 75%;
  background-image: url('https://i.pinimg.com/564x/d1/6a/26/d16a26d6c94e25bf349d060228a0319e.jpg');
  background-position: center;
  background-size: cover;
  border: 2px solid black;
}
</style>
