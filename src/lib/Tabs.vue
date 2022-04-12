<template>
  <div class="xc-tabs">
    <div
      class="xc-tabs-nav"
    >
      <div
        class="xc-tabs-nav-item"
        :class="{selected: title === selected}"
        v-for="(title, index) in titles"
        :key="index"
      >
        {{ title }}
      </div>
    </div>
    <div class="xc-tabs-content">
      <component
        class="xc-tabs-content-item"
        v-for="(c, index) in defaults"
        :key="index"
        :is="c"
      />
    </div>
  </div>
</template>

<script>
/**
 * Tabs组件
 */
import Tab from "./Tab.vue";

export default {
  name: "Tabs",
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if(tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });
    const titles = defaults.map((tag) =>
      tag.props.title
    )
    return {
      defaults,
      titles,
    }
  }
}
</script>

<style lang="scss" scoped>
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.xc-tabs {
  &-nav {
   display: flex;
   color: $color;
   border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
     padding: 8px 0;
  }
}
</style>