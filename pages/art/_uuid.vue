<template>
  <div>
    <Menu />
    <div v-if="loadingScreen">
      <Preloader />
    </div>
    <div v-else class="container">
      <div v-if="item" class="container-art">
        <!-- btn absolute -->
        <a class="btn-primary" @click="$router.go(-1)"> Voltar </a>
        <!-- image contrast -->
        <div class="art-left">
          <img :src="item && item.image ? item.image : ''" alt="" width="500">
        </div>
        <!-- info owner -->
        <div class="art-right">
          <div class="art-info">
            <div class="art-options">
              <div class="left-options" />
              <div
                v-if="user"
                class="right-options"
                :class="{ unliked: !isLikedByMe }"
                @click="like()"
              >
                <button>💖</button>
              </div>
            </div>
            <h1 class="art-title">
              {{ item?.title }}
            </h1>
            <p class="art-description">
              {{ item?.description }}
            </p>
            <hr class="line-break">
            <div class="owner-info">
              <div class="column-left">
                <div class="icon-owner" :style="{ backgroundImage: 'url('+ item.owner.picture +')' }" />
              </div>
              <div class="column-right">
                <h3>{{ item.owner?.name }}</h3>
              </div>
            </div>
            <div class="art-tags">
              <span v-for="(tag, i) in item.tags" :key="i" class="tag" @click="navigateTo(tag)">
                #{{ tag }}
              </span>
            </div>
            <br>
            <hr class="line-break">
            <span v-if="item.likes > 0" class="likes-post">
              <b style="color: #fc035a; font-family: Arial, Helvetica, sans-serif;">
                {{ item.likes }}
              </b>
              likes
            </span>
            <hr v-if="item.likes > 0" class="line-break">
            <div class="container-comments">
              <div v-if="item.replies">
                <CommentaryItem
                  v-for="(replie, j) in item.replies"
                  :key="j"
                  :item="replie"
                />
              </div>
              <div v-else class="empty">
                <span>Este post ainda não possui comentários</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="art-similar">
      Veja também
    </h1>
    <GalleryContainer />
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import CommentaryItem from '~/components/CommentaryItem.vue'
import Footer from '~/shared/Footer.vue'
import Menu from '~/shared/Menu.vue'
import Preloader from '~/shared/Preloader.vue'

export default Vue.extend({
  name: 'ArtPage',
  components: { CommentaryItem, Footer, Menu, Preloader },
  data () {
    return {
      item: {},
      loadingScreen: true,
      isLikedByMe: false,
      myId: '',
      user: ''
    }
  },
  beforeMount () {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.getArt()
  },
  methods: {
    getArt () {
      this.$axios
        .get(`/posts/${this.$route.params.uuid}`)
        .then((response) => {
          this.item = response.data
          this.checkIsLikedByMe()
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.loadingScreen = false
        })
    },
    navigateTo (tag) {
      this.$router.push(`/feed?tags=${tag}`)
    },
    checkIsLikedByMe () {
      this.myId = JSON.parse(localStorage.getItem('user'))._id
      const isLiked = !!this.item.likers.filter(liker => liker === this.myId)
        .length
      this.isLikedByMe = isLiked
    },
    async like () {
      await this.$axios.post(
        `/posts/${this.$route.params.uuid}/likes`,
        { userId: this.myId }
      )
      this.getArt()
    }
  }
})
</script>

<style lang="scss" scoped>
.line-break {
  width: 100%;
  border: 1px solid #f6f6f6;
}

.container {
  min-height: 90vh;
  overflow: hidden;
}

.art-similar {
  text-align: center;
  padding: 15px;
}

.container-art {
  display: flex;
}

a {
  text-decoration: none;
}

.art-left {
  position: relative;
  background-color: #000;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 40px;
  width: 100%;
  height: 90vh;
  justify-content: center;
  align-items: center;
  display: flex;
  img {
    width: auto;
    max-width: 100%;
    max-height: 90%;
    left: auto;
  }
}

.art-right {
  z-index: 1;
  width: 20vw;
  height: 84.9vh;
  padding: 25px;
  flex-direction: column;
  box-sizing: content-box;
  display: flex;
}

.art-title{
  text-transform: capitalize;
}
.art-description {
  text-transform: capitalize;
}
.art-tags {
  padding-top: 15px;
  flex-wrap: wrap;
  display: flex;
  span {
    color: white;
    background-color: black;
    padding: 5px 10px;
    margin: 1%;
    cursor: pointer;
  }
}

.likes-post {
  opacity: 0.8;
  font-weight: 500;
  letter-spacing: 1px;
  align-items: center;
  display: flex;
  b {
    padding-right: 5px;
    font-size: 14px;
  }
}

.icon-owner {
  width: 60px;
  height: 60px;
  border: 5px solid black;
  border-radius: 50px;
  background-size: cover;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
  img {
    height: 100%;
  }
}

.art-info {
  flex-direction: column;
  display: flex;
  h1 {
    text-align: left;
    padding: 20px 0;
    margin: 0;
  }
}

.art-options {
  justify-content: space-between;
  padding: 8px 0;
  display: flex;
  button {
    width: 38px;
    height: 38px;
    border: 5px solid black;
    background-color: white;
    cursor: pointer;
  }
}

.unliked {
  filter: grayscale(100);
}

.owner-info {
  justify-content: left;
  display: flex;
}

.column-left {
  padding: 10px 0;
}

.column-right {
  padding: 15px;
}

.btn-primary {
  position: absolute;
  color: black;
  background-color: white;
  border: 5px solid black;
  font-weight: bold;
  padding: 8px 24px;
  margin: 34px;
  z-index: 1;
  cursor: pointer;
}

/* Replies */

.container-comments {
  height: 370px;
  padding: 5px 0;
  flex-direction: column;
  overflow: auto;
  display: flex;
}

.empty {
  width: 100%;
  padding: 20px 0;
  color: #6f6f6f;
  text-align: center;
}
</style>
