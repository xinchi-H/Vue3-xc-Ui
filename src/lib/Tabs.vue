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
        :ref="el => {if(el) navItems[index] = el}"
        @click="select(title)"
      >
        {{ title }}
      </div>
      <div
        class="xc-tabs-nav-indicator"
        ref="indicator"
      />
    </div>
    <div class="xc-tabs-content">
      <component
        v-for="c in defaults"
        :is="c"
        class="xc-tabs-content-item"
        :class="{selected: c.props.title === selected}"
      />
    </div>
  </div>
</template>

<script lang="ts">
/**
 * Tabs组件
 */
import {
  ref,
  onMounted,
  computed,
} from 'vue';
import Tab from "./Tab.vue";
import dialog from "./Dialog.vue";

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
    );

    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null);
    onMounted(() => {
      const divs = navItems.value;
      const result = divs.filter(div =>
        div.classList.contains('selected')
      )[0];
      const { width } = result.getBoundingClientRect();
      indicator.value.style.width = width + 'px';
    })

    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected
      })[0]
    })

    const select = (title: string) => {
      context.emit('update:selected', title);
    }

    return {
      defaults,
      titles,
      navItems,
      indicator,
      current,
      select,
    };
  },
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.xc-tabs {
  &-nav {
   display: flex;
   color: $color;
   border-bottom: 1px solid $border-color;
    position: relative;

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

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
    }
  }

  &-content {
     padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}
</style>