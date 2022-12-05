<template>
  <div class="container">
    <CardGallery
      v-for="(item, i) in columnPosts"
      :key="i"
      :item="item"
    />
  </div>
</template>

<script>
export default {
  props: {
    columnPosts: {
      type: Array,
      required: true
    }
  },
  mounted () {
    console.log(this.columnPosts)
  }
}
</script>

<style lang="scss" scoped>
.container {
  flex-direction: column;
  display: flex;
}
</style>
