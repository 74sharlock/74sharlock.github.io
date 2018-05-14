<template>
  <div class="container">
    
    <router-view :key="key"></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gettingData: true
    };
  },
  computed: {
    key() {
      return this.$route.name + '_' + Date.now();
    }
  },
  created() {
    this.$bus.$on('got-books', () => {
      this.gettingData = false;
    });
  }
};
</script>

