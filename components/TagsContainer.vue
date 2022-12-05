<template>
  <div class="container">
    <div class="container-tags">
      <button
        v-for="(tag, index) in tags"
        :key="tag"
        class="tag"
        :class="currentSelected === index && ' selected'"
        @click="selectTag(tag, index)"
      >
        <img src="/price-tag.png">
        {{ tag }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TagsCotainer',
  data () {
    return {
      tags: [],
      currentSelected: -1
    }
  },
  beforeMount () {
    this.getAllTags()
  },
  methods: {
    async getAllTags () {
      const response = await this.$axios.get('/posts/tags')

      if (response.data) {
        this.tags = response.data

        const queryTags = this.$route.query.tags as string

        if (queryTags) {
          const currentIndex = response.data.findIndex(
            (tag: string) => tag === queryTags
          )
          this.selectTag(queryTags as string, currentIndex)
        }
      }
    },
    async selectTag (tag: string, index: number) {
      let url = '/posts'

      if (this.currentSelected === index) {
        this.currentSelected = -1
        this.$router.push('/feed')
      } else {
        this.currentSelected = index
        this.$router.push('/feed?tags=' + tag)
        url += `?tags=${tag}`
      }

      const response = await this.$axios.get(url)

      if (response.data) {
        this.$store.commit('feed/SET_COLUMNS_TAGS', response.data)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
}
.container-tags {
  display: flex;
  justify-content: center;
  max-width: 70%;
  flex-wrap: wrap;
  margin-bottom: 20px;
  gap: 10px;

  .tag {
    border: 2px solid black;
    padding: 4px 8px;
    cursor: pointer;
    transition: 0.3s all ease;
    background: white;
    color: black;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-transform: uppercase;

    img {
      width: 16px;
      margin-right: 4px;
      transition: 0.3s all ease;
      filter: invert(1);
    }

    &:hover {
      background: black;
      color: white;

      img {
        filter: invert(0);
      }
    }
  }

  .selected {
    background: black;
    color: white;

    img {
      filter: invert(0);
    }
  }
}
</style>
