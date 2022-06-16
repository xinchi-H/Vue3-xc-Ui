<demo>
一键打开 Dialog
</demo>

<template>
  <Button @click="showDialog">toggle</Button>
</template>

<script lang="ts">
/**
 * Dialog2.demo
 */
import { h } from "vue";
import { openDialog } from "../lib/openDialog";
import Button from "../lib/Button.vue";

export default {
  name: 'Dialog2.demo',
  components: {
    Button,
  },
  setup() {
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
      showDialog,
    };
  },
}
</script>