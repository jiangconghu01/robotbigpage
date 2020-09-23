<template>
  <div class="left-light-box">
    <svg viewBox="0 0 228 288">
      <defs>
        <mask id="Mask-polygon-left">
          <polygon fill="white" stroke="#979797" points="169.505661 256.06676 226.899915 0.744229254 1.43122485 0.744229254 65.2020275 256.06676 114.16557 286.792789"></polygon>
        </mask>
        <linearGradient id="polygon-light-linear-left" gradientUnits="userSpaceOnUse" x1="114" y1="288" x2="114" y2="40">
          <stop offset="0%" stop-color="rgb(5, 211, 253)" stop-opacity="0.8" />
          <stop offset="50%" stop-color="rgb(5, 211, 253)" stop-opacity=".3" />
          <stop offset="100%" stop-color="rgb(5, 211, 253)" stop-opacity="0" />
          <animate id="light-up-left" attributeName="y2" from="20" to="200" dur="2s" begin="0; light-down-left.end + 0.5s" fill="freeze" />
          <animate id="light-down-left" attributeName="y2" from="200" to="20" dur="2s" begin="light-up-left.end + 0.5s" fill="freeze" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="228" height="288" fill="url(#polygon-light-linear-left)" mask="url(#Mask-polygon-left)"></rect>
    </svg>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  created() {},
  components: {},
  computed: {},
  methods: {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
.left-light-box {
  width: 197 * $width;
  height: 248 * $height;
}
</style>
