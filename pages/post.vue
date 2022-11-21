<template>
  <div class="container">
    <Menu />
    <div class="send-back">
      <span @click="$router.go(-1)">Voltar</span>
      <CreatedDialog :resp-post="respPost" />
    </div>
    <div class="sub-container">
      <div class="post-container">
        <div class="post-left">
          <div class="box-upload">
            <input
              id="file-upload"
              ref="file_upload"
              type="file"
              class="file-upload"
              name="file-upload"
              @change="changeFile"
            >
            <div v-if="!file" class="post-texts">
              <div class="icon-upload">
                <img src="https://cdn.discordapp.com/attachments/512809986699690004/1019676357246070895/arrow-simple-black-top.png">
              </div>
              <span>
                Clique ou arraste para carregar imagens ou Gifs
              </span>
              <span>
                Recomendação: use arquivos .jpg de alta qualidade com menos de 20 MB ou arquivos .mp4 com menos de 2 GB
              </span>
            </div>
            <div v-else>
              <img :src="file">
            </div>
          </div>
        </div>
        <form ref="post_form" class="post-right" enctype="multipart/form-data" method="post">
          <h2>
            Crie seu post aqui ✨
          </h2>
          <input
            v-model="post.title"
            type="text"
            placeholder="Titulo"
            required
            onvalid="this.setCustomValidity('')"
          >
          <div class="post-user">
            <div
              class="user-icon"
              :style="{ backgroundImage: 'url('+ user.picture +')' }"
            />
            <div class="user-info">
              <span>
                {{ user.name }}
              </span>
              <span>
                {{ user.followers > 0 ? user.followers + ' Seguidores' : 'Você ainda não tem seguidores' }}
              </span>
            </div>
          </div>
          <input
            id=""
            v-model="post.description"
            type="text"
            name=""
            placeholder="Escreva um pouco sobre o seu post"
            required
          >
          <input
            v-model="post.tags"
            type="text"
            placeholder="TagExample, TagExample2, TagExample3"
            required
          >
          <div class="form-date">
            <div>
              <input
                id="now"
                type="radio"
                name="pub_date"
                value="false"
                checked="checked"
                @change="changeDatePost"
              >
              <label for="now">Publicar imediatamente</label>
            </div>
            <div>
              <input
                id="later"
                type="radio"
                name="pub_date"
                value="true"
                @change="changeDatePost"
              >
              <label for="later">Publicar em outra data</label>
            </div>
          </div>
          <div v-if="postNow === 'later'" class="other-date-container">
            <label>
              📅 <b>Quando quer que o post seja publicado?</b>
            </label>
            <input v-model="date" type="date">
            <input v-model="hour" type="time">
          </div>
          <input
            class="send-form"
            type="button"
            value="Postar"
            @click="createPost()"
          >
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import Menu from '~/shared/Menu.vue'
import Footer from '~/shared/Footer.vue'
import CreatedDialog from '~/components/CreatedDialog.vue'

export default Vue.extend({
  name: 'NewPost',
  components: { Menu, Footer, CreatedDialog },
  data () {
    return {
      date: '',
      hour: '',
      file: '',
      fileToSend: '',
      postNow: 'now',
      respPost: {},
      post: {
        title: '',
        description: '',
        tags: [],
        email: '',
        isPublic: true
      },
      user: ''
    }
  },
  beforeMount () {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.post.email = this.user.email
  },
  methods: {
    changeFile (e) {
      this.file = URL.createObjectURL(e.target.files[0])
      this.fileToSend = e.target.files[0]
    },
    separateTags () {
      let tags = this.post.tags
      tags = tags.trim()
      tags = tags.replace(/\s/g, '')
      const tagsArr = tags.split(',')

      for (let i = 0; i < tagsArr.length; i++) {
        if (tagsArr[i] === '') {
          tagsArr.splice(i, 1)
        }
      }
      this.post.tags = tagsArr
    },
    changeDatePost (e) {
      this.postNow = e.target.id
    },
    async createPost () {
      this.separateTags()
      const formData = new FormData(this.$refs.post_form)
      formData.append('image', this.fileToSend)

      if (this.postNow === 'later') {
        this.post.date = `${this.date}:${this.hour}:00`
      }

      const post = await this.$axios.post('/posts', this.post)

      await this.$axios({
        method: 'post',
        url: `/posts/${post.data._id}/image`,
        data: formData,
        config: {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      }).finally(() => {
        this.respPost = post.data
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.send-back{
  width: 95vw;
  margin: 0 auto;
  display: flex;
  span {
    margin: 20px 0;
    margin-top: 0;
    padding: 8px 24px;
    text-decoration: none;
    background-color: white;
    border: 5px solid black;
    box-shadow: black 5px 5px;
    font-weight: 600;
  }
}

.container{
  overflow-x: hidden;
  flex-direction: column;
  display: flex;
}

.sub-container{
  padding: 0px 40px;
  padding-bottom: 40px;
  justify-content: center;
  display: flex;
}

.post-container{
  background-color: #eaeaea;
  width: 100%;
  height: 90%;
  align-items: start;
  justify-content: center;
  display: flex;
}

/* left */

.post-left{
  width: 100%;
  max-width: 450px;
  min-height: 550px;
  margin: 5%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #f8f5f5;
  border: 5px solid #828282;
  border-style: dashed;
}

.box-upload{
  position: relative;
  height: 100%;
  max-height: 585px;
  padding: 60px;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  overflow: hidden;
  span {
    padding: 20px 0px;
    font-weight: 600;
    opacity: 0.6;
  }
  img {
    width: 100%;
    z-index: 0;
  }
}

.post-texts {
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
}
.icon-upload{
  width: 18px;
  height: 18px;
  border: 4px solid #828282;
  border-style: dashed;
  padding: 8px;
  justify-content:center;
  align-items: center;
  display: flex;
  img{
    width: 12px;
  }
}

.file-upload{
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
}

/* right */

.post-right{
  background-color: white;
  margin: 5%;
  width: 100%;
  max-width: 500px;
  padding: 24px;
  border: 5px solid black;
  box-shadow: black 6px 6px;
  flex-direction: column;
  display: flex;
  input {
    padding: 18px;
    padding-left: 0px;
    margin: 2% 0;
    border: 0px;
    border-bottom: 2px solid #cfcfcf;
  }
  .send-form{
    color: black;
    background-color: white;
    border: 5px solid black;
    box-shadow: black 5px 5px;
    font-weight: bold;
    margin-top: 5%;
    padding: 12px 24px;
    bottom: 0px;
    cursor: pointer;
  }
  h2 {
    margin: 0px
  }
}

.post-user{
  background-color: #eaeaea;
  flex-direction: row;
  align-items: center;
  display:flex;
}

.user-icon{
  width: 70px;
  height: 70px;
  margin: 20px;
  border: 3px solid black;
  background-image: url('https://i.pinimg.com/564x/2a/1d/ba/2a1dba3b065dce9c06ea16e19d8621cc.jpg');
  background-size: cover;
}

.user-info{
  flex-direction: column;
  display: flex;
  span{
    font-weight: 500;
    padding: 8px;
    &:nth-child(1){
      font-weight: 700;
    }
  }
}

.form-date{
  justify-content: space-between;
  padding: 12px;
  padding-top: 18px;
  display: flex;
  input{
    cursor: pointer
  }
  label{
    cursor: pointer;
  }
}

.other-date-container {
  background-color: #eaeaea;
  padding: 12px;
  margin-top: 15px;
  flex-direction: column;
  display: flex;
  input {
    margin: 0px;
    padding-left: 4px;
    background-color: transparent;
  }
  select {
    margin: 1% 0px;
    padding: 8px 0px;
    padding-top: 15px;
    margin-right: 17px;
    background-color: transparent;
    border: 0px;
    cursor: pointer;
  }
}

.disabled-button {
  background-color: grey;
  cursor: not-allowed !important;
}

/* media screen */

@media screen and (max-width: 925px) {
  .post-container{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .post-right{
    max-width: 70%;
  }
  .post-left{
    max-width: 75%;
  }
}
</style>
