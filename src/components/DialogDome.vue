<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button
    @click="toggle"
  >
    toggle
  </Button>
  <Dialog :visible="x" />
</template>

<script lang="ts">
import { ref } from "vue";
import Dialog from "../lib/dialog.vue";
import Button from "../lib/button.vue";

export default {
  components: {
    Button,
    Dialog,
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    }
    return {
      x,
      toggle,
    };
  }
}
</script>

<style lang="scss" scoped>

</style>
