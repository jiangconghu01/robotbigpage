<template>
  <div class="chart-title">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.chart-title {
  height: 22 * $height;
  width: 100%;
  font-size: 20 * $font;
  position: relative;
  padding-left: 18 * $width;
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 6 * $width;
    height: 20 * $width;
    background-color: rgba(66, 189, 255, 0.706);
    border-radius: 3 * $width;
    left: 0;
  }
}
</style>
