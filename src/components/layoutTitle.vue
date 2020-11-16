<template>
  <div class="layout-title">
    <div class="label label-l" v-if="direction === 'left'"><slot name="left"></slot></div>
    <div class="icon" :class="[direction === 'right' ? 'reversal' : '']">
      <svg viewBox="0 0 383 22">
        <image
          width="383"
          height="22"
          xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAX8AAAAWCAYAAAAoyJxBAAAC20lEQVR4nO3cOWgUURzH8e+GXfFiBS2irKioKbwQCyUW4oHgUYgWHuABqQQLQcRCG9HCwkYQSwtZxQPRRhtTCGqxhXiiFmqjQlBB8YpGokZG/gOjbHCXzMvM2/f7wLBJCDP/ee/x3+G9N//CrOrAOuAe8IoherJ9qGdwa/bpP6c/ZhfZgwcxi4i40AZMAQ4AG4BSAK082g4RkWAV7cajL4HVwAIgej5+piEhIpItm61wopg46VegHdgL3AQuA33q++y5HAAxTX+J5FYZGJFycH3J5F8FKsAaYCkwHzgLPNCYyIVoSm6cg0DeA788bA+RUOwA5qV8rzeSyf8HcBW4C0TPgdOBXcBt4ALwWUMtU1OBfQ4C2G9fACISkLY6t9oDHLWE/x1YCBwCOjUwRERaQ73kHxkArlvSfwyMAbqA3cAE9b2IiN8GS/6xd8Bx4BTQC8wBDgLLgYL6XkTET8UGo64Bj4DNNg20BVhk20J74n8ajl0pafMxZhfUDiJhaTT5Ywu+J20B+DDQAawEHtrx05OW67DPbRnH0az2ROxp2gR88aIFJC2lQF7obBVlF/fRTPKPjQQmA6Ms4UeLwmM9auSJ9rkk4ziaVU7EnqZO60MRyafXLqJqJvmPB7YCc60O0EugG/jo2YCJE+iZjONoVsVRWYqLwCe3oUvO9Nshfljm4sGvkeRfsIuvt6f+XtsKWrNdQb6Jp3tueRb3TFtoT1tN+/xFcm2xi+D+l/wn2QtfM+z3O8D5wZ4UPanq+RcfyhqovINImIarts+/f18FrLWfPwDngPsagyIi/quX/KdZLYmKTetE0yOXgG/qbxGR1pBM/lHVuI3ACnv5663t43+qvhYRycwJFxdOJv8u2/sbVXi8BlzRjoBceQ7sDL0RRELici0umfxLtoWzats4JSe0GCsiaYuTf7+Vc+4OoLb7ixzEICKSqaJNJ0Qv+rwJpCuO5CAGEZHsAL8BaQd1UPz5FXoAAAAASUVORK5CYII="
        />
      </svg>
      <!-- <dv-decoration-3 style="width:360px;height:30px;" /> -->
    </div>
    <div class="label label-r" v-if="direction === 'right'"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  props: {
    direction: {
      type: String,
      required: false,
      default: 'left'
    }
  }
}
</script>
<style lang="scss" scoped>
.layout-title {
  height: 30 * $height;
  width: 532 * $width;
  display: flex;
  align-items: center;
  .label {
    font-size: 24 * $font;
    font-weight: bold;
    text-align: left;
  }
  .label-l {
    margin-right: 25 * $width;
  }
  .label-r {
    margin-left: 25 * $width;
  }
  .icon {
    flex: 1;
    // width: 383 * $width;
    height: 22 * $height;
  }
  .reversal.icon {
    transform: rotate(180deg) rotateX(180deg);
  }
}
</style>
