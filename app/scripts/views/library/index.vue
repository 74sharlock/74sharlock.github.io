<template>
  <div class="page--library">
    <div class="books">
      <router-link class="item" v-for="book in books" :key="book.id" :to="{name: 'chapter', params: {id: book.id}}">
        <div class="inner">
          <div class="cover">
            <span :style="setBg(book)"></span>
          </div>
          <div class="name">《{{ book.name }}》</div>
          <div class="author">{{ book.author }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    books() {
      return this.$store.books;
    }
  },
  methods: {
    setBg({ cover }) {
      let bg = require(`images/${cover}`);
      return cover ? { backgroundImage: `url(${bg})` } : null;
    }
  }
};
</script>

