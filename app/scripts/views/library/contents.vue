<template>
  <div class="page--contents">
    <left-side :show="show" @close="show = false">
      <h4 class="book-name">{{ book.name }}</h4>
      <div class="links">
        <router-link 
          class="item"
          v-for="(chapter, index) in chapters" 
          active-class="active"
          @click="show = false"
          :key="index" 
          :to="{name: 'contents', params: {id: `${bookId}-${chapter.id}`} }" replace>
          {{chapter.name}}
        </router-link>
      </div>  
    </left-side>  
    <div class="tools">
      <div class="menu-btn" @click="show=true">
        <i class="material-icons">menu</i>
      </div>
      <div class="actions">
        <div class="menu-btn" @click="plus">A <sup>+</sup> </div>
        <div class="menu-btn" @click="reduce">A <sup>-</sup> </div>
      </div>
    </div>
    <div class="contents" @scroll="scroll($event)">
      <h5 class="chapter-name">{{chapter.name}}</h5>
      <div class="content-data" :style="style">
        <p v-for="(data, index) in contents" :key="index" v-html="data"></p>
      </div>
    </div>
  </div>
</template>
<script>
import leftSide from 'components/left-side';

export default {
  components: {
    leftSide
  },
  data() {
    return {
      show: false,
      contents: [],
      chapters: {},
      scrollTop: 0,
      fontSize: 18
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
    chapter() {
      return this.chapters[this.chapterId] || {};
    },
    urlPrefix() {
      return `data/${this.book.source}`;
    },
    style() {
      return { fontSize: this.fontSize + 'px' };
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
      /*  let contents = res.data.join('|');
      let length = contents.length;
      let fonts = 800;
      let i = Math.ceil(length / fonts);
      let pages = [];
      for (let l = 0; l < i; l++) {
        if (l === i) {
          pages.push(contents.substring(fonts * l, length - 1).split('|'));
        } else {
          pages.push(contents.substring(fonts * l, fonts * (l + 1)).split('|'));
        }
      } */
      this.contents = res.data;
    },
    scroll(e) {
      let node = e.target;
      node._timer && clearTimeout(node._timer);
      node._timer = setTimeout(() => {
        this.scrollTop = node.scrollTop;
        let mark = {
          bookId: this.bookId,
          bookName: this.book.name,
          chapterId: this.chapterId,
          chapterName: this.chapter.name,
          scrollTop: this.scrollTop
        };
        localStorage.setItem('autoMark', JSON.stringify(mark));
      }, 150);
    },
    plus() {
      this.fontSize < 30 && this.fontSize++;
    },
    reduce() {
      this.fontSize > 12 && this.fontSize--;
    }
  },
  async mounted() {
    this.getChapters();
    await this.getContents();
    let autoMark = localStorage.getItem('autoMark');
    if (autoMark) {
      let mark = JSON.parse(autoMark);
      if (mark.bookId === this.bookId) {
        if (mark.chapterId !== this.chapterId) {
          if (!this.$store.remind) {
            this.$store.remind = true;
            let result = confirm(
              `上次阅读到[${mark.chapterName}]章节，要继续上次的进度阅读吗？`
            );
            if (result) {
              this.$router.replace({
                name: 'contents',
                params: { id: `${mark.bookId}-${mark.chapterId}` }
              });
            }
          }
        } else {
          this.$el.querySelector('.contents').scrollTop = mark.scrollTop;
        }
      }
    }
  }
};
</script>
