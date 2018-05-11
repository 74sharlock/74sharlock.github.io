import Vue from 'vue';
import http from 'axios';

export default new Vue({
  data() {
    return {
      books: {}
    };
  },
  methods: {
    async getBooks() {
      let res = await http.get('data/library.json');
      this.books = res.data;
    },
    getChapters(bookId) {}
  },
  created() {
    this.getBooks();
  }
});
