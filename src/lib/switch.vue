<template>
  <button
    class="xc-switch"
    :class="{'xc-checked': value}"
    @click="toggle"
  >
    <span></span>
  </button>
</template>

<script lang="ts">
/**
 * Switch 组件
 */

export default {
  props: {
    value: Boolean,
  },
  emits: ['update:value'],
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    }
    return { toggle };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;

.xc-switch {
  position: relative;
  height: $h;
  width: $h * 2;
  border: none;
  border-radius: $h / 2;
  background: #bfbfbf;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }
  &.xc-checked {
    background: #1890ff;
    
    > span {
     left: calc(100% - #{$h2} - 2px);
    }
  }
 
  &:focus {
    outline: none;
  }

  &:active {
    > span { width: $h2 + 4px; }
  }

  &.xc-checked:active {
    > span { width: $h2 + 4px; margin-left: -4px; }
  }
}
</style>
