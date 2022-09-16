<template>
  <div class="container">
    <Menu />
    <div class="send-back">
      <NuxtLink to="/">
        <span>Voltar</span>
      </NuxtLink>
    </div>
    <div class="sub-container">
      <div class="post-container">
        <div class="post-left">
          <div class="box-upload">
            <input id="file-upload" type="file" class="file-upload" name="file-upload">
            <div class="icon-upload">
              <img src="https://cdn.discordapp.com/attachments/512809986699690004/1019676357246070895/arrow-simple-black-top.png">
            </div>
            <span>
              Arraste e solte ou clique para carregar imagens ou Gifs
            </span>
            <span>
              Recomendação: use arquivos .jpg de alta qualidade com menos de 20 MB ou arquivos .mp4 com menos de 2 GB
            </span>
          </div>
        </div>
        <div class="post-right">
          <h2 for="">
            Crie seu post aqui ✨
          </h2>
          <input type="text" placeholder="Titulo">
          <div class="post-user">
            <div class="user-icon" />
            <div class="user-info">
              <span>Username</span>
              <span>320 seguidores</span>
            </div>
          </div>
          <input id="" type="text" name="" placeholder="Escreva um pouco sobre o seu post">
          <input type="text" placeholder="Tags">
          <button>Postar</button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Menu from '~/shared/Menu.vue'
import Footer from '~/shared/Footer.vue'

export default Vue.extend({
  name: 'NewPost',
  components: { Menu, Footer },
  data () {
    return {
      name: 'Novo post =)'
    }
  }
})
</script>

<style lang="scss" scoped>
.send-back{
  width: 95vw;
  margin: 0 auto;
  display: flex;
  a {
    margin: 20px 0;
    margin-top: 0;
    padding: 8px 24px;
    text-decoration: none;
    background-color: white;
    border: 5px solid black;
    box-shadow: black 5px 5px;
    span{
      font-weight: 600;
    }
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
  padding: 60px;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  overflow: hidden;
  span{
    padding: 20px 0px;
    font-weight: 600;
    opacity: 0.6;
  }
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
  button{
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
  background-color: purple;
  background-image: url('https://64.media.tumblr.com/d2251ec9326a12361e7e0864c6fabeaa/90b56d91692950f2-4e/s400x600/c815539d3f3d98fb7167bee890176fea8cea8015.pnj');
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
