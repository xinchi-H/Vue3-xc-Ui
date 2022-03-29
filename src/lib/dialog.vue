<template>
  <div class="xc-dialog-overlay" />
  <div class="xc-dialog-wrapper">
    <header>标题</header>
    <main>
      <p>第一行字</p>
      <p>第二行字</p>
    </main>
    <footer>
      <Button>OK</Button>
      <Button>Cancel</Button>
    </footer>
  </div>
</template>

<script lang="ts">
/**
 * dialog组件
 */
import Button from "./Button.vue";

export default {
  components: {
    Button,
  },
}
</script>

<!--<style lang="scss" scoped>-->

<!--</style>-->