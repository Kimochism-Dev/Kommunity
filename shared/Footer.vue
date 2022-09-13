<template>
  <div class="container-footer">
    <div class="box">
      <h3 class="title-box">
        Loja
      </h3>
      <span>
        <a href="https://kimochism.com/" target="_blank" rel="noopener noreferrer">Home - Loja </a>
      </span>
      <span>Informações</span>
      <span>© 2021, Kimo</span>
    </div>
    <div class="box">
      <h3 class="title-box">
        Outros
      </h3>
      <span>Informações</span>
      <span>COVID-19</span>
    </div>
    <div class="box">
      <h3 class="title-box">
        Contato
      </h3>
      <span>contato.kimochism@gmail.com</span>
    </div>
    <div class="box">
      <h3 class="title-box">
        Sobre nós
      </h3>
      <span>A <b>Kimochism 気持ち</b> é uma loja totalmente virtual, especializada em produtos de altíssima qualidade, por um baixo custo.</span>
      <br>
      <span>Nossa principal missão é fornecer aos nossos clientes as melhores ofertas do mercado, de produtos que possuem qualidade e conforto, através do contato que temos com muitos fabricantes fora do país, oferecemos essa oportunidade a você, futuro cliente, de poder adquirir produtos de ponta com o melhor preço do mercado.</span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'FooterComponent',
  data () {
    return {
    }
  }
})
</script>

<style scoped>
  .container-footer{
    background-color: black;
    color: white;
    margin-top: 50px;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 40px 80px;
    display: flex;
  }

  .box {
    width: 300px;
    margin-bottom: 80px;
    line-height: 25px;
    flex-direction: column;
    display: flex;
  }

  .box h3 {
    padding: 20px 8px;
    font-size: 20px;
    margin: 0px;
  }

  .box span {
    padding: 8px;
  }

  .box span a {
    color: white;
  }
</style>
