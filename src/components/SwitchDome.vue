<template>
<div>Switch</div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";

export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible');
    return { menuVisible };
  }
}
</script>

<style lang="scss" scoped>

</style>
