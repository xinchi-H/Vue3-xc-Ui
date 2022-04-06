<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
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
  <h1>示例2</h1>
  <Button @click="showDialog">toggle</Button>
</template>

<script lang="ts">
/**
 * Dialog示例
 */
import { ref, h } from "vue";
import { openDialog } from "../lib/openDialog";
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";

export default {
  name: 'DialogDemo',
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
    const showDialog =() => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        },
        closeOnClickOverlay: true,
      })
    };
    return {
      dialog1Visible,
      toggle,
      f1,
      f2,
      showDialog,
    };
  },
}
</script>
