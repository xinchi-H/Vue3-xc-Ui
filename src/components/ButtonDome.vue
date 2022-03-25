<template>
  <div>
    Button 示例
    <h1>示例</h1>
    <div>
      <Button
        @click="onClick"
        @focus="onClick"
        @mouseover="onClick"
      >
        你好
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import buttonVue from "../lib/button.vue";

 export default {
   components: {
     Button: buttonVue
   },
   setup() {
     const onClick = () => {
       console.log('111');
     };
     return { onClick };
   },
 };
</script>

<style lang="scss" scoped>

</style>
