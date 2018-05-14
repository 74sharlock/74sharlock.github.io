import Vue from 'vue';
import http from 'axios';
import bus from './bus';

export default new Vue({
  data() {
    return {
      books: {},
      remind: false
    };
  },
  methods: {
    async getBooks() {
      let res = await http.get('data/library.json');
      this.books = res.data;
      this.$nextTick(function() {
        bus.$emit('got-books');
      });
    }
  }
});
