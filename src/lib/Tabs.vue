<template>
  <div>
    Tabs组件
    <component :is="defaults[0]"/>
    <component :is="defaults[1]"/>
  </div>
</template>

<script>/**
 * Tabs组件
 */
import Tab from "./Tab.vue";

export default {
  name: "Tabs",
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if(tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });
    return {
      defaults,
    }
  }
}
</script>

<style scoped>

</style>