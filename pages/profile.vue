<template>
  <div>
    <Menu />
    <Preloader v-if="loadingScreen" />
    <div v-else class="container-profile">
      <div class="front-profile" :style="{ backgroundImage: 'url('+ user.banner +')' }">
        <div class="edit-profile">
          <button>
            <img src="https://cdn-icons-png.flaticon.com/512/61/61456.png" alt="">
          </button>
        </div>
        <div class="icon-container-profile">
          <div class="icon-profile" :style="{ backgroundImage: 'url('+ user.picture +')' }" />
          <h2>{{ user.name }}</h2>
          <div>
            <b>
              {{ user.followers > 0 ? user.followers : '0' }} Seguidores
              •
              {{ user.following > 0 ? user.followers : '0' }} Seguindo</b>
          </div>
        </div>
      </div>
      <h1 class="your-posts">
        Seus posts
      </h1>
      <div class="container-posts-profile">
        <div v-if="posts.length" class="container-posts-profile">
          <CardPost
            v-for="(post, i) in posts"
            :key="i"
            :post="post"
          />
        </div>
        <div v-else class="unpublished">
          <img
            src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-qiqi/sticker_10.png?8a65468de2ac98e87dc9b6ddbe8502a9&d=200x200"
            width="200px"
          >
          <h3>Você ainda não tem nenhum post =(</h3>
          <br>
          <NuxtLink to="/post">
            <button>
              Publique agora!
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import Menu from '~/shared/Menu.vue'
import Footer from '~/shared/Footer.vue'
import Preloader from '~/shared/Preloader.vue'
import CardPost from '~/components/CardPost.vue'

export default Vue.extend({
  name: 'ArtPage',
  components: { Footer, Menu, Preloader, CardPost },
  data () {
    return {
      item: {},
      posts: [],
      loadingScreen: true,
      user: ''
    }
  },
  beforeMount () {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.getPostsUser()
  },
  methods: {
    getPostsUser () {
      this.$axios.get(`/posts?email=${this.user.email}`)
        .then((response) => {
          this.posts = response.data
        }).catch((error) => {
          console.log(error)
        }).finally(() => {
          this.loadingScreen = false
        })
    }
  }
})
</script>
<style lang="scss" scoped>
.container-profile {
  flex-direction: column;
  display: flex;
}
.front-profile {
  border-bottom: 5px solid black;
  background-color: black;
  background-size: cover;
  background-position: center;
  height: 300px;
  padding-left: 15vw;
  align-items: flex-end;
  position: relative;
  display: flex;
}
.edit-profile{
  width: 40px;
  height: 40px;
  top: 12px;
  right: 12px;
  border: 2px solid black;
  box-shadow: black 4px 4px;
  background-color: white;
  position: absolute;
  display: flex;
  button {
    width: 100%;
    height: 100%;
    padding: 8px;
    background-color: transparent;
    cursor: pointer;
    img{
      width: 100%;
    }
  }
}
.icon-container-profile {
  margin-bottom: -160px;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  h2 {
    margin: 12px;
  }
}
.icon-profile {
  width: 168px;
  height: 168px;
  background-size: cover;
  border: 5px solid black;
  border-radius: 100%;
}
.your-posts {
  text-align: center;
  padding-top: 160px;
}
.container-posts-profile {
  padding-top: 10px;
  padding-bottom: 80px;
  max-width: 1280px;
  min-height: 300px;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
}
.unpublished {
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  button {
    color: black;
    box-shadow: black 6px 6px;
    background-color: white;
    border: 5px solid black;
    font-weight: bold;
    padding: 8px 24px;
    margin: 0 auto;
    cursor: pointer;
  }
}
</style>
