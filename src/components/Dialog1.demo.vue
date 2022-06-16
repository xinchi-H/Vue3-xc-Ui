<demo>
常规用法
</demo>

<template>
  <Button
    @click="toggle"
  >
    toggle
  </Button>
  <Dialog
    v-model:visible="dialog1Visible"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:title>
      <strong>提示</strong>
    </template>
    <template v-slot:content>
      <div>
        内容1
      </div>
      <div>
        内容2
      </div>
    </template>
  </Dialog>
</template>

<script lang="ts">
/**
 * Dialog1.demo
 */
import { ref } from "vue";
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";

export default {
  name: 'Dialog1.demo',
  components: {
    Button,
    Dialog,
  },
  setup() {
    const dialog1Visible = ref(false);
    const toggle = () => {
      dialog1Visible.value = !dialog1Visible.value;
    };
    const f1 = () => {
      console.log(1111);
      return false;
    };
    const f2 = () => {
      console.log(2222);
    };
    return {
      dialog1Visible,
      toggle,
      f1,
      f2,
    };
  },
}
</script>