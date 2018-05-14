<template>
  <div class="page--chapters">
    <div class="chapters">
      <router-link 
      class="item" 
      v-for="chapter in chapters" 
      :key="chapter.id" 
      :to="{name: 'contents', params: {id: `${id}-${chapter.id}`}}">
        {{chapter.name}}
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chapters: []
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    book() {
      return this.$store.books[this.id];
    },
    source() {
      return `${this.book.source}`;
    }
  },
  async created() {
    let res = await this.$http.get(`data/${this.source}/chapters.json`);
    this.chapters = res.data;
  }
};
</script>
