<template>
  <div class="left-side" @click.stop="$emit('close')">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show(val) {
      if (val) {
        this.$nextTick(function() {
          this.addClass();
        });
      } else {
        this.$el.classList.remove('active');
      }
    }
  },
  methods: {
    addClass() {
      let el = this.$el;
      el.classList.add('show');
      setTimeout(() => {
        el.classList.add('active');
      }, 10);
    }
  },
  mounted() {
    this.$el.addEventListener(
      'transitionend',
      e => {
        if (!this.show) {
          this.$el.classList.remove('show');
        }
      },
      false
    );
  }
};
</script>

