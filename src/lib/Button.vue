<template>
  <button
    class="xc-button"
    :class="classes"
    :disabled="disabled"
  >
    <span
      v-if="loading"
      class="xc-loadingIndicator"
    />
    <slot />
  </button>
</template>

<script lang="ts">
/**
 * Button组件
 */
import { computed } from 'vue';
export default {
  name: "Button",
  props: {
    theme: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return [
        `xc-theme-${theme}`,
        `xc-size-${size}`,
        `xc-level-${level}`,
      ];
    });
    return { classes };
  }
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;

.xc-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid $border-color;
  border-radius: $radius;
  white-space: nowrap;
  cursor: pointer;
  color: $color;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  background: white;
  transition: background 250ms;

  & + & {
    margin-left: 8px;
  }

  &:hover, &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }
  // 兼容Firefox
  &::-moz-focus-inner {
    border: 0;
  }

  &.xc-theme-link{
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    background: none;

    &:hover, &:focus{
      color: lighten($blue, 10%);
    }
  }

  &.xc-theme-text{
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover, &:focus{
      background: darken(white, 5%);;
    }
  }

  &.xc-size-big {
    height: 48px;
    padding: 0 16px;
    font-size: 24px;
  }

  &.xc-size-small {
    height: 20px;
    padding: 0 4px;
    font-size: 12px;
  }

  &.xc-theme-button {
    &.xc-level-main {
      background: $blue;
      color: white;
      border-color: $blue;

      &:hover, &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }

    &.xc-level-danger {
      background: $red;
      border-color: $red;
      color: white;

      &:hover, &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }

  &.xc-theme-link {
    &.xc-level-danger {
      color: $red;

      &:hover, &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.xc-theme-text {
    &.xc-level-main {
      color: $blue;

      &:hover, &:focus {
        color: darken($blue, 10%);
      }
    }

    &.xc-level-danger {
      color: $red;

      &:hover, &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.xc-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;

      &:hover {
        border-color: $grey;
      }
    }
  }

  &.xc-theme-link, &.xc-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }

  > .xc-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-style: solid;
    border-width: 2px;
    border-color: $blue $blue $blue transparent;
    border-radius: 8px; 
    animation: xc-spin 1s infinite linear;
  }
}

@keyframes xc-spin {
  0%{transform: rotate(0deg)} 
  100%{transform: rotate(360deg)} 
}
</style>