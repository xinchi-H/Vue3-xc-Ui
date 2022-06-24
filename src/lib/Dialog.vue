<template>
  <template v-if="visible">
    <Teleport to="body">
      <div
        class="xc-dialog-overlay"
        @click="onClickOverlay"
      />
      <div class="xc-dialog-wrapper">
        <div class="xc-dialog">
          <header>
            <slot name="title" />
            <span
              class="xc-dialog-close"
              @click="close"
            />
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button
              level="main"
              @click="ok"
            >
              OK
            </Button>
            <Button @click="cancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
/**
 * dialog组件
 */
import Button from "./Button.vue";

export default {
  name: "Dialog",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    // 是否点击遮罩层关闭
    closeOnClickOverlay: {
      type: Boolean,
      default: false,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  components: {
    Button,
  },
  emits: ['update:visible'],
  setup(props, {emit}) {
    const close = () => {
      emit('update:visible', false);
    };
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const ok = () => {
      if(props.ok && props.ok() !== false) {
        close();
      }
    };
    const cancel = () => {
      props.cancel && props.cancel();
      close();
    };
    return {
      close,
      onClickOverlay,
      ok,
      cancel,
    };
  },
}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.xc-dialog {
  min-width: 20em;
  max-width: 90%;
  border-right: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  background: white;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    border-bottom: 1px solid $border-color;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    padding: 12px 16px;
    text-align: right;
    border-top: 1px solid $border-color;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>