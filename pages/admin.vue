<template>
  <div>
    <Menu />
    <div class="container-admin">
      <Preloader v-if="loadingScreen" />
      <div v-else class="sub-container-admin">
        <div class="left-admin">
          <h1>Dados & Estatísticas</h1>
          <div class="wrapper-top">
            <div class="data-info-box">
              <span>{{ infos.posts }}</span>
              <h3>Posts</h3>
            </div>
            <div class="data-info-box">
              <span>{{ infos.accounts }}</span>
              <h3>Usuários</h3>
            </div>
            <div class="data-info-box">
              <span>{{ infos.profit }}</span>
              <h3>Receita</h3>
            </div>
            <div class="data-info-box">
              <span>{{ infos.tags }}</span>
              <h3>Tags</h3>
            </div>
            <div class="data-info-box">
              <span>{{ infos.buyedPosts }}</span>
              <h3>Aquisições</h3>
            </div>
          </div>
          <h1>Relatorios & informações</h1>
          <div class="wrapper-bottom">
            <div class="data-reports-box">
              <h3>Desempenho de posts por usuários</h3>
              <select id="user-reports" v-model="userReports" name="">
                <option value="" selected disabled hidden>
                  Escolha aqui
                </option>
                <option v-for="(email, i) in emails" :key="i" :value="email">
                  {{ email }}
                </option>
              </select>
              <button @click="generateUserReports()">
                Gerar relatório
              </button>
            </div>
            <div class="data-reports-box">
              <h3>Contagem de posts por tag, por usuário</h3>
              <select id="count-user-reports" v-model="countUserReports">
                <option value="" selected disabled hidden>
                  Escolha aqui
                </option>
                <option
                  v-for="(email, i) in getUserReports()"
                  :key="i"
                  :value="email"
                >
                  {{ email }}
                </option>
              </select>
              <button @click="generatePostCountReports()">
                Gerar relatório
              </button>
            </div>
            <div class="data-reports-box">
              <!-- <select id="" name="">
                <option value="" selected disabled hidden>Escolha aqui</option>
                <option v-for="(tag, i) in tags" :key="i" :value="tag">
                  {{ tag }}
                </option>
              </select> -->
              <h3>Desempenho geral de posts</h3>
              <button @click="generateGeneralReports()">
                Gerar relatório
              </button>
            </div>
          </div>
          <button class="get-all-infos" @click="getAllReports()">
            Obter todos relatórios
          </button>
        </div>
        <div class="right-admin">
          <div class="box-list">
            <h3 class="purchasable">
              Propostas em andamento
            </h3>
            <div v-if="postPurchasable.length">
              <item-post-admin
                v-for="(postPur, i) in postPurchasable"
                :key="i"
                :post="postPur"
              />
            </div>
            <div v-else class="empty-content">
              <img
                src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-qiqi/sticker_10.png?8a65468de2ac98e87dc9b6ddbe8502a9&d=200x200"
                alt=""
              >
              <span>Nada por aqui...</span>
            </div>
          </div>
          <div class="box-list">
            <h3 class="buyed">
              Propostas aceitas
            </h3>
            <div v-if="postOur.length">
              <item-post-admin
                v-for="(postPurchased, i) in postOur"
                :key="i"
                :post="postPurchased"
              />
            </div>
            <div v-else class="empty-content">
              <img
                src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-qiqi/sticker_10.png?8a65468de2ac98e87dc9b6ddbe8502a9&d=200x200"
                alt=""
              >
              <span>Nada por aqui...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import { utils, writeFileXLSX } from 'xlsx'
import ItemPostAdmin from '~/components/ItemPostAdmin.vue'
import Menu from '~/shared/Menu.vue'
import Footer from '~/shared/Footer.vue'
import Preloader from '~/shared/Preloader.vue'

export default Vue.extend({
  name: 'AdminView',
  components: { Menu, Footer, Preloader, ItemPostAdmin },
  data () {
    return {
      name: 'admin',
      infos: '',
      loadingScreen: true,
      postPurchasable: '',
      postOur: '',
      tags: '',
      emails: [],
      userReports: '',
      countUserReports: ''
    }
  },
  beforeMount () {
    this.getInfo()
    this.getTags()
    this.getEmails()
    this.getProposalWaiting()
    this.getProposalAccepted()
  },
  methods: {
    getInfo () {
      this.$axios
        .get('/reports/infos')
        .then((response) => {
          // Por enquanto n tem limite
          this.infos = response.data
        })
        .catch((error) => {
          console.log(`Erro: ${error}`)
        })
        .finally(() => {
          this.loadingScreen = false
        })
    },
    getProposalWaiting () {
      this.$axios
        .get('/posts/buy')
        .then((response) => {
          // Por enquanto n tem limite
          this.postPurchasable = response.data
        })
        .catch((error) => {
          console.log(`Erro: ${error}`)
        })
        .finally(() => {})
    },
    getProposalAccepted () {
      this.$axios
        .get('/posts/our')
        .then((response) => {
          // Por enquanto n tem limite
          this.postOur = response.data
        })
        .catch((error) => {
          console.log(`Erro: ${error}`)
        })
        .finally(() => {})
    },
    getTags () {
      this.$axios
        .get('/posts/tags')
        .then((response) => {
          // Por enquanto n tem limite
          this.tags = response.data
        })
        .catch((error) => {
          console.log(`Erro: ${error}`)
        })
        .finally(() => {})
    },
    async getEmails () {
      this.emails = (await this.$axios.get('/reports/emails')).data
    },
    async generateUserReports () {
      const { data } = await this.$axios.get(
        `/reports/all?email=${this.userReports}`
      )
      const ws = utils.aoa_to_sheet(data)
      const wb = utils.book_new()
      utils.book_append_sheet(wb, ws, 'Data')
      writeFileXLSX(wb, `likesByTags_${this.userReports.split('@')[0]}.xlsx`)
    },
    async generateGeneralReports () {
      const { data } = await this.$axios.get('/reports/all')
      const ws = utils.aoa_to_sheet(data)
      const wb = utils.book_new()
      utils.book_append_sheet(wb, ws, 'Data')
      writeFileXLSX(wb, 'likesByTags.xlsx')
    },
    async generatePostCountReports () {
      const url =
        this.countUserReports == 'todos'
          ? '/reports/count'
          : `reports/count?email=${this.countUserReports}`
      const { data } = await this.$axios.get(url)
      const ws = utils.aoa_to_sheet(data)
      const wb = utils.book_new()
      utils.book_append_sheet(wb, ws, 'Data')
      const name =
        this.countUserReports == 'todos'
          ? 'postsByTag.xlsx'
          : `postsByTag_${this.countUserReports.split('@')[0]}.xlsx`
      writeFileXLSX(wb, name)
    },
    async getAllReports () {
      await this.generateUserReports()
      await this.generateGeneralReports()
      await this.generatePostCountReports()
    },
    getUserReports () {
      return ['todos', ...this.emails]
    }
  }
})
</script>

<style lang="scss" scoped>
h1 {
  color: black;
}

.container-admin {
  width: 100%;
  height: 85vh;
  display: flex;
  margin-top: 25px;
}

.sub-container-admin {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}

/* left admin */
.left-admin {
  width: 50%;
  height: 100%;
  flex-direction: column;
  display: flex;
  /* background-color: purple; */
  h1 {
    padding: 16px;
    margin: 0px;
    padding-left: 48px;
    background-color: black;
    color: white;
  }
}

/* left top admin */
.wrapper-top {
  /* background-color: #ffb700; */
  padding: 30px 48px;
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.data-info-box {
  width: 120px;
  height: 120px;
  margin: 1%;
  border: 5px solid black;
  box-shadow: black 8px 8px;
  background-color: white;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  &:first-child {
    margin-left: 0px;
  }
  span {
    font-size: 40px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  h3 {
    margin: 0px;
  }
}

/* left bottom admin */
.wrapper-bottom {
  padding: 10px 48px;
  /* background-color: plum; */
  justify-content: space-between;
  align-items: flex-start;
  display: flex;
}

.data-reports-box {
  width: 300px;
  margin: 2% 20px;
  border: 5px solid black;
  box-shadow: black 8px 8px;
  background-color: white;
  flex-direction: column;
  display: flex;
  &:first-child {
    margin-left: 0px;
  }
  h3 {
    height: 50px;
    margin: 0px;
    padding: 12px;
    color: white;
    text-align: center;
    background-color: black;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  select {
    margin: 5%;
    padding: 12px;
    border: 5px solid black;
    box-shadow: black 6px 6px;
    cursor: pointer;
  }
  button {
    margin: 5%;
    padding: 12px;
    margin-top: 5%;
    color: white;
    font-weight: bold;
    border: 5px solid black;
    box-shadow: black 6px 6px;
    background-color: black;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    cursor: pointer;
  }
}

.get-all-infos {
  width: 30%;
  color: black;
  background-color: #ffffff;
  border: 5px solid black;
  box-shadow: black 8px 8px;
  font-weight: bold;
  padding: 20px 24px;
  margin: 0 auto;
  margin-top: 40px;
  cursor: pointer;
}
/* right admin */
.right-admin {
  width: 50%;
  height: 100%;
  justify-content: center;
  display: flex;
}

.box-list {
  width: 42%;
  height: 90%;
  margin: 3%;
  margin-top: 0px;
  background-color: white;
  border: 5px solid black;
  box-shadow: black 8px 8px;
  flex-direction: column;
  display: flex;
  h3 {
    border-bottom: 5px solid black;
    letter-spacing: 1.2px;
    text-align: center;
    padding: 22px;
    margin: 0px;
    color: white;
  }
  div {
    height: 100%;
    overflow-y: auto;
  }
}
.purchasable {
  background-color: #3198e8;
}
.buyed {
  background-color: #32a852;
}

.empty-content {
  width: 100%;
  height: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  img {
    width: 150px;
  }
  span {
    padding: 8px;
    font-weight: bold;
  }
}
</style>
