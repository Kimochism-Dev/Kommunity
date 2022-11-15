<template>
  <div>
    <Menu />
    <Preloader v-if="loadingScreen" />
    <div class="container-profile">
      <div class="front-profile">
        <div class="icon-container-profile">
          <div class="icon-profile" />
          <h2>Username</h2>
          <div>
            <b>320 Seguidores • 15 seguindo</b>
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

<script lang="ts">
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
          name: 'EuláEucáEuláEucáEuláEucáEuláEucáEuláEucáEuláEucá',
          image: 'https://i.pinimg.com/564x/e1/de/00/e1de009dec68be710fc6cca8ce21222a.jpg'
        },
        {
          name: 'Noelle main joel',
          image: 'https://i.pinimg.com/564x/e0/1b/bd/e01bbdb2bf822e114f4806ecb981084d.jpg'
        },
        {
          name: 'Raiden Shogun',
          image: 'https://i.pinimg.com/564x/69/39/2a/69392a01a8942d49584d5042649dd10d.jpg'
        },
        {
          name: 'Wanderer or Scaramouch?',
          image: 'https://i.pinimg.com/564x/ab/7f/fa/ab7ffabc701bd56a7d38e558ebe431dd.jpg'
        },
        {
          name: 'Shenhe 💕',
          image: 'https://i.pinimg.com/564x/f1/ce/c9/f1cec91ff4e1122325e6ea188a39f93d.jpg'
        }
      ],
      loadingScreen: false
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
  background-image: url("https://24wallpapers.com/app-gateway/wallpaper-uploads/wallpapers/legacyUploads/wi29557185768-4f52-4dcc-bdaa-7c6ecaa28b261009973105.jpg");
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  border-bottom: 5px solid black;
  background-size: cover;
  background-position: center;
  height: 300px;
  padding-left: 15vw;
  align-items: flex-end;
  display: flex;
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
  background-image: url("https://64.media.tumblr.com/d2251ec9326a12361e7e0864c6fabeaa/90b56d91692950f2-4e/s400x600/c815539d3f3d98fb7167bee890176fea8cea8015.png");
  background-size: cover;
  border: 5px solid black;
  border-radius: 100%;
}

.your-posts {
  text-align: center;
  padding-top: 120px;
}

.container-posts-profile {
  padding: 20px;
  padding-bottom: 80px;
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
}
</style>
