<template>
  <div class="ui-mask controll-panel">
    <div class="tools">
      <div class="menu-btn" @click="show=true">
        <i class="material-icons">menu</i>
      </div>
      <div class="actions">
        <div class="menu-btn" @click="plus">A <sup>+</sup> </div>
        <div class="menu-btn" @click="reduce">A <sup>-</sup> </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true
    }
  }
};
</script>
