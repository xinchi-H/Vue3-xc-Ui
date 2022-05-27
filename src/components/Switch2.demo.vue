<template>
  <Switch v-model:value="bool" disabled />
</template>

<script lang="ts">
/**
 * Switch2.demo
 */

import {
  ref
} from 'vue'
import Switch from '../lib/Switch.vue'

export default {
  name: 'Switch2Demo',
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false)
    return {
      bool
    }
  }
}
</script>