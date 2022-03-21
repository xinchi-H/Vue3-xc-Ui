<template>
  <div class="topnav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span
      class="toggle-aside"
      @click="toggleMenu"
    />
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue"

export default {
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
.topnav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background: pink;

  > .logo {
    max-width: 6em;
    margin-right: auto;
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
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    background: red;
  }

  @media (max-width: 500px) {
    > .menu { display: none; }
    > .logo { margin: 0 auto; }
    > .toggle-aside { display: inline-block; }
  }
}
</style>