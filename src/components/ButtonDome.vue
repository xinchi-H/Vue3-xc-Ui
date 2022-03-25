<template>
<div>
  Button 示例
  <h1>示例</h1>
  <div>
    <Button>你好</Button>
  </div>
</div>
</template>

<script lang="ts">
import buttonVue from "../lib/button.vue";

 export default {
   components: {
     Button: buttonVue
   }
 }
</script>

<style lang="scss" scoped>

</style>
