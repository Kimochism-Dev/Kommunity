<template>
  <div class="container-preloader">
    <div class="spinner-container">
      <div class="spinner" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'GalleryContainer',
  data () {
    return {
      name: 'Loader'
    }
  }
})
</script>

<style lang="scss" scoped>
  .container-preloader{
    width: 90vw;
    height: 70vh;
    padding: 20px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .spinner-container {
    width: 50px;
    height: 50px;
    z-index: 99999;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .spinner {
    margin: auto;
    border: 2px solid #939393;
    border-style: dotted;
    width: 32px;
    height: 32px;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border-right: 2px solid #000000;
    text-align:center;
    animation-name: spin;
    animation-duration: 900ms;
    animation-iteration-count: infinite;
    /* animation-timing-function: linear; /*linear spin */
    animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67);
  }
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    /*50% {width:24px;height:24px} /*shrinking effect*/
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes spin {
    0% { -webkit-transform: rotate(0deg);}
  /*50% {width:24px;height:24px} /*shrinking effect*/
    100% { -webkit-transform: rotate(360deg); }
  }

</style>
