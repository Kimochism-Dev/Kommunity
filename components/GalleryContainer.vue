<template>
  <div class="container-gallery">
    <CardGallery v-for="(item, i) in galleryItems" :key="i" :item="item" />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'GalleryContainer',
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
      ]
    }
  }
})
</script>

<style scoped>
.container-gallery {
  margin: 0 auto;
  margin-top: 0;
  padding: 0;
  max-width: 95vw;
  column-count: 7;
}
</style>
