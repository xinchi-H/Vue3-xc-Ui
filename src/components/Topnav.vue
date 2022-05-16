<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-xc"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <router-link to="/doc">文档</router-link>
    </ul>
    <svg
      v-if="toggleMenuButtonVisible"
      class="toggle-aside"
      @click="toggleMenu"
    >
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang="ts">
/**
 * Topnav组件
 */
import { inject, Ref } from "vue"

export default {
  name: "Topnav",
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible');

    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    }

    return { toggleMenu };
  }
}
</script>

<style lang="scss" scoped>
$color: #007974;

.topnav {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px;
  color: $color;
  z-index: 10;

  > .logo {
    max-width: 6em;
    height: 28px;
    margin-right: auto;
    transform: rotate(0deg) scale(1);
    transition: all cubic-bezier(0.22, 0.58, 0.12, 0.98) 0.4s;
    &:hover {
      transform:  rotate(180deg) scale(1.1);
    }

    > svg {
      width: 28px;
      height: 28px;
    }
  }

  > .menu {
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    > li {
      margin: 0 1em;
    }
  }

  .toggle-aside {
    position: absolute;
    top: 50%;
    left: 16px;
    display: none;
    width: 32px;
    height: 32px;
    transform: translateY(-50%);
  }

  @media (max-width: 500px) {
    > .menu { display: none; }
    > .logo { margin: 0 auto; }
    > .toggle-aside { display: inline-block; }
  }
}
</style>