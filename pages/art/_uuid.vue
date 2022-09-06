<template>
  <div>
    <MenuCommunity />
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CommentaryItem from '~/components/CommentaryItem.vue'

export default Vue.extend({
  name: 'ArtPage',
  components: { CommentaryItem },
  data () {
    return {
      galleryItems: [
        {
          id: 0,
          name: 'Genshim person',
          image: 'https://i.pinimg.com/564x/e3/58/d5/e358d5caae587c348e4257dcaf7f46e3.jpg',
          tags: [
            'genshin',
            'genshin-impact'
          ],
          author: {
            name: 'GenshinPlayer',
            image: 'https://assets.reedpopcdn.com/how-hollow-knights-community-crafted-gibberish-into-a-real-language-1567781461548.jpg/BROK/thumbnail/1200x1200/quality/100/how-hollow-knights-community-crafted-gibberish-into-a-real-language-1567781461548.jpg',
            followers: 320
          }
        },
        {
          id: 1,
          name: 'Genshim person',
          image: 'https://i.pinimg.com/564x/57/69/b9/5769b9b4b7d2f6f5d0710c9eec9468d3.jpg',
          tags: [
            'genshin',
            'genshin-impact'
          ],
          author: {
            name: 'GenshinPlayer',
            image: 'https://assets.reedpopcdn.com/how-hollow-knights-community-crafted-gibberish-into-a-real-language-1567781461548.jpg/BROK/thumbnail/1200x1200/quality/100/how-hollow-knights-community-crafted-gibberish-into-a-real-language-1567781461548.jpg',
            followers: 320
          },
          replies: [
            {
              id: 0,
              name: 'Usuário',
              image: 'https://64.media.tumblr.com/d2251ec9326a12361e7e0864c6fabeaa/90b56d91692950f2-4e/s400x600/c815539d3f3d98fb7167bee890176fea8cea8015.pnj',
              replie: 'Comentário'
            },
            {
              id: 1,
              name: 'Utilizador',
              image: 'https://i.pinimg.com/736x/bb/f1/d4/bbf1d4fdc41aff7911099773b102765b.jpg',
              replie: 'Comentário'
            }
          ]
        },
        {
          id: 2,
          name: 'Baal Queeen Supremacy',
          image: 'https://i.pinimg.com/564x/e0/ed/84/e0ed84ba682e25e5939fed33fe800abc.jpg',
          tags: [
            'genshin',
            'genshin-impact',
            'hot',
            '💕',
            'electro',
            'wallpaper'
          ],
          author: {
            name: 'GenshinPlayer',
            image: 'https://assets.reedpopcdn.com/how-hollow-knights-community-crafted-gibberish-into-a-real-language-1567781461548.jpg/BROK/thumbnail/1200x1200/quality/100/how-hollow-knights-community-crafted-gibberish-into-a-real-language-1567781461548.jpg',
            followers: 320
          },
          replies: [
            {
              id: 0,
              name: 'Usuário',
              image: 'https://64.media.tumblr.com/d2251ec9326a12361e7e0864c6fabeaa/90b56d91692950f2-4e/s400x600/c815539d3f3d98fb7167bee890176fea8cea8015.pnj',
              replie: 'Comentário'
            },
            {
              id: 1,
              name: 'Utilizador',
              image: 'https://i.pinimg.com/736x/bb/f1/d4/bbf1d4fdc41aff7911099773b102765b.jpg',
              replie: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
              id: 2,
              name: 'Usuário',
              image: 'https://64.media.tumblr.com/d2251ec9326a12361e7e0864c6fabeaa/90b56d91692950f2-4e/s400x600/c815539d3f3d98fb7167bee890176fea8cea8015.pnj',
              replie: 'Comentário'
            },
            {
              id: 3,
              name: 'Utilizador',
              image: 'https://i.pinimg.com/736x/bb/f1/d4/bbf1d4fdc41aff7911099773b102765b.jpg',
              replie: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
          ]
        },
        {
          id: 3,
          name: 'Genshim person',
          image: 'https://i.pinimg.com/564x/f4/d2/f7/f4d2f716059d8041010549b7c4b2312c.jpg',
          tags: [
            'genshin',
            'genshin-impact'
          ],
          author: {
            name: 'GenshinPlayer',
            image: 'https://assets.reedpopcdn.com/how-hollow-knights-community-crafted-gibberish-into-a-real-language-1567781461548.jpg/BROK/thumbnail/1200x1200/quality/100/how-hollow-knights-community-crafted-gibberish-into-a-real-language-1567781461548.jpg',
            followers: 320
          },
          replies: [
            {
              id: 0,
              name: 'Usuário',
              image: 'https://64.media.tumblr.com/d2251ec9326a12361e7e0864c6fabeaa/90b56d91692950f2-4e/s400x600/c815539d3f3d98fb7167bee890176fea8cea8015.pnj',
              replie: 'Comentário'
            },
            {
              id: 1,
              name: 'Utilizador',
              image: 'https://i.pinimg.com/736x/bb/f1/d4/bbf1d4fdc41aff7911099773b102765b.jpg',
              replie: 'Comentário'
            }
          ]
        },
        {
          id: 4,
          name: 'Genshim person',
          image: 'https://i.pinimg.com/564x/bd/4b/23/bd4b23b2bf4d29d95ea75e61316b1c66.jpg',
          tags: [
            'genshin',
            'genshin-impact'
          ],
          author: {
            name: 'GenshinPlayer',
            image: 'https://assets.reedpopcdn.com/how-hollow-knights-community-crafted-gibberish-into-a-real-language-1567781461548.jpg/BROK/thumbnail/1200x1200/quality/100/how-hollow-knights-community-crafted-gibberish-into-a-real-language-1567781461548.jpg',
            followers: 320
          },
          replies: [
            {
              id: 0,
              name: 'Usuário',
              image: 'https://64.media.tumblr.com/d2251ec9326a12361e7e0864c6fabeaa/90b56d91692950f2-4e/s400x600/c815539d3f3d98fb7167bee890176fea8cea8015.pnj',
              replie: 'Comentário'
            },
            {
              id: 1,
              name: 'Utilizador',
              image: 'https://i.pinimg.com/736x/bb/f1/d4/bbf1d4fdc41aff7911099773b102765b.jpg',
              replie: 'Comentário'
            }
          ]
        }
      ],
      item: {}
    }
  },
  beforeMount () {
    this.item = this.galleryItems[parseInt(this.$route.params.uuid)]
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
  width: 80%;
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
  width: 19vw;
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
  margin: 24px;
  z-index: 1;
}

/* Replies */

.container-comments {
  height: 370px;
  min-height: auto;
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
