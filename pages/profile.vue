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
        <CardPost
          v-for="(post, i) in posts"
          :key="i"
          :post="post"
        />
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
      posts: [
        {
          title: 'EuláEucáEuláEucáEuláEucáEuláEucáEuláEucáEuláEucá',
          about: 'About the image etc',
          tags: [
            'genshin',
            'waifu',
            'girls',
            'wow',
            'fanart'
          ],
          isPosted: false,
          image: 'https://i.pinimg.com/736x/5e/c7/04/5ec7044e2aee86553f4dabe18e055cac.jpg'
        },
        {
          title: 'Noelle main joel',
          about: 'About the image etc',
          tags: [
            'genshin',
            'waifu',
            'girls',
            'wow',
            'fanart'
          ],
          isPosted: false,
          image: 'https://i.pinimg.com/564x/e0/1b/bd/e01bbdb2bf822e114f4806ecb981084d.jpg'
        },
        {
          title: 'Raiden Shogun',
          about: 'About the image etc',
          tags: [
            'genshin',
            'waifu',
            'girls',
            'wow',
            'fanart'
          ],
          isPosted: true,
          image: 'https://i.pinimg.com/564x/f4/d7/49/f4d7496c987156531e60d411e6d3987a.jpg'
        },
        {
          title: 'Laylalalala',
          about: 'About the image etc',
          tags: [
            'genshin',
            'waifu',
            'girls',
            'wow',
            'fanart'
          ],
          isPosted: true,
          image: 'https://i.pinimg.com/564x/54/8b/dd/548bdd120ae86276b54e0e5e95c1d373.jpg'
        },
        {
          title: 'Shenhe 💕',
          about: 'About the image etc',
          tags: [
            'genshin',
            'waifu',
            'girls',
            'wow',
            'fanart'
          ],
          isPosted: true,
          image: 'https://i.pinimg.com/564x/f1/ce/c9/f1cec91ff4e1122325e6ea188a39f93d.jpg'
        }
      ],
      loadingScreen: true,
      user: ''
    }
  },
  beforeMount () {
    this.user = JSON.parse(localStorage.getItem('user'))
    // simular loading
    setTimeout(() => {
      this.loadingScreen = false
    }, 1000)
  }
})
</script>
<style lang="scss" scoped>
.container-profile {
  flex-direction: column;
  display: flex;
}
.front-profile {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
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
  padding: 20px;
  padding-bottom: 80px;
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
}
</style>
