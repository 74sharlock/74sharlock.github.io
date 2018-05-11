<template>
  <ui-layout>
    <ui-layout-header>
      <ui-layout-header-row>
        <ui-layout-spacer></ui-layout-spacer>
      </ui-layout-header-row>
    </ui-layout-header>
    <ui-layout-drawer>
      <ui-layout-title>{{book.name}}</ui-layout-title>
      <ui-nav>
        <router-link 
          class="mdl-navigation__link"
          v-for="(chapter, index) in chapters" 
          active-class="mdl-navigation__link--current"
          :key="index" 
          :to="{name: 'book', params: {id: `${bookId}-${chapter.id}`} }" replace>
          {{chapter.name}}
          </router-link>
      </ui-nav>
    </ui-layout-drawer>
    <ui-layout-content>
      <div class="page--contents">
        <div class="tools">
          {{chapters[chapterId] && chapters[chapterId].name}}
        </div>
        <div class="contents">
          <p v-for="(content, index) in contents" :key="index" v-html="content"></p>
        </div>
      </div>
    </ui-layout-content>
  </ui-layout>
</template>
<script>
export default {
  data() {
    return {
      contents: [],
      chapters: {}
    };
  },
  computed: {
    bookId() {
      return this.$route.params.id.split('-')[0];
    },
    chapterId() {
      return this.$route.params.id.split('-')[1];
    },
    book() {
      return this.$store.books[this.bookId];
    },
    urlPrefix() {
      return `data/${this.book.source}`;
    }
  },
  methods: {
    async getChapters() {
      let res = await this.$http.get(`${this.urlPrefix}/chapters.json`);
      this.chapters = res.data;
    },
    async getContents() {
      let res = await this.$http.get(
        `${this.urlPrefix}/${this.chapterId}.json`
      );
      this.contents = res.data;
    }
  },
  async created() {
    this.getContents();
    this.getChapters();
  }
};
</script>

