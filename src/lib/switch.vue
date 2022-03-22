<template>
  <button>
    <span></span>
  </button>
</template>

<script setup>
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;

button {
  position: relative;
  height: $h;
  width: $h * 2;
  border: none;
  border-radius: $h / 2;
  background: blue;
}

span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
}
</style>
