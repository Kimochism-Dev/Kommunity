<template>
  <div>
    <div class="container-commentary">
      <div class="commentary-left">
        <img :src="item?.image" alt="">
      </div>
      <div class="commentary-right">
        <span>{{ item?.name }}</span>
        <p>{{ item?.replie }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      name: 'Comentario'
    }
  }
}
</script>

<style lang="scss" scoped>
.container-commentary {
  margin: 1% 0%;
  margin-bottom: 15px;
  width: 100%;
  flex-direction: row;
  display: flex;
}

.commentary-left {
  width: 20%;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  img {
    border: 3px solid black;
    width: 90%;
    margin: 0 auto;
  }
}

.commentary-right {
  width: 80%;
  padding: 0 10px;
  flex-direction: column;
  justify-content: left;
  display: flex;
  span {
    padding: 8px 0;
    padding-top: 0;
  }
  p {
    font-size: 14px;
    line-height: 18px;
    margin: 0;
    padding: 5px;
    background-color: #ececec;
    font-weight: 500;
  }
}
</style>
