<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button
    @click="toggle"
  >
    toggle
  </Button>
  <Dialog
    v-model:visible="x"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:header>
      <strong>提示</strong>
    </template>
    <template v-slot:content>
      <div>
        内容1111
      </div>
      <div>
        内容2222
      </div>
    </template>
  </Dialog>
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
    };
    const f1 = () => {
      console.log(1111);
      return false;
    };
    const f2 = () => {
      console.log(2222);
    };
    return {
      x,
      toggle,
      f1,
      f2,
    };
  }
}
</script>

<style lang="scss" scoped>

</style>
