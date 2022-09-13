<template>
  <div>
    <Menu />
    <div class="container">
      <div v-if="item" class="container-art">
        <!-- btn absolute -->
        <a class="btn-primary">
          <NuxtLink to="/">Voltar</NuxtLink>
        </a>
        <!-- image contrast -->
        <div class="art-left">
          <img :src="item && item.image ? item.image : ''" alt="" width="500">
        </div>
        <!-- info author -->
        <div class="art-right">
          <div class="art-info">
            <div class="art-options">
              <div class="left-options">
                <button>O</button>
                <button>P</button>
                <button>T</button>
              </div>
              <div class="right-options">
                <button>💖</button>
              </div>
            </div>
            <h1 class="art-title">
              {{ item?.name }}
            </h1>
            <hr class="line-break">
            <div class="author-info">
              <div class="column-left">
                <div class="icon-author">
                  <img :src="item && item.author?.image ? item.author.image : ''" alt="">
                </div>
              </div>
              <div class="column-right">
                <h3>{{ item.author?.name }}</h3>
              </div>
            </div>
            <div class="art-tags">
              <span v-for="(tag, i) in item.tags" :key="i" class="tag"> #{{ tag }}</span>
            </div>
            <br>
            <hr class="line-break">
            <div class="container-comments">
              <div v-if="item.replies">
                <CommentaryItem v-for="(replie,j) in item.replies" :key="j" :item="replie" />
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

<script lang="ts">
import Vue from 'vue'
import galleryItems from '~/api'
import CommentaryItem from '~/components/CommentaryItem.vue'
import Footer from '~/shared/Footer.vue'
import Menu from '~/shared/Menu.vue'

export default Vue.extend({
  name: 'ArtPage',
  components: { CommentaryItem, Footer, Menu },
  data () {
    return {
      arts: galleryItems,
      item: {}
    }
  },
  beforeMount () {
    for (const art of this.arts) {
      if (art.id === parseInt(this.$route.params.uuid)) {
        this.item = art
        return
      }
    }
  }
})
</script>

<style scoped>
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
}

.art-left img {
  width: auto;
  max-width: 100%;
  max-height: 90%;
  left: auto;
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

.art-tags {
  padding-top: 15px;
  flex-wrap: wrap;
  display: flex;
}

.art-tags span {
  color: white;
  background-color: black;
  padding: 5px 10px;
  margin: 1%;
  cursor: pointer;
}

.icon-author {
  width: 60px;
  height: 60px;
  border: 5px solid black;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
}

.icon-author img {
  height: 100%;
}

.art-info {
  flex-direction: column;
  display: flex;
}

.art-info h1 {
  text-align: left;
  padding: 34px 0;
  margin: 0;
}

.art-options {
  justify-content: space-between;
  padding: 8px 0;
  display: flex;
}

.art-options button {
  width: 38px;
  height: 38px;
  border: 5px solid black;
  background-color: white;
  cursor: pointer;
}

.author-info {
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
