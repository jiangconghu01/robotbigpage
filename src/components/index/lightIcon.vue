<template>
  <div>
    <svg class="light-icon-box" viewBox="0 0 103 52">
      <defs>
        <mask id="Mask-polygon-light-icon">
          <path
            fill="white"
            d="M32.9896953,46.2644887 L0.821271111,0.57063972 L101.821271,0.57063972 L68.7862644,46.2644887 C67.957953,47.2525449 67.2999817,47.9016618 66.8123506,48.2118394 C65.4203166,49.0972993 63.8496174,49.378133 62.9440207,49.6453697 C58.5294493,50.9480858 54.0298074,50.4835572 51.3212711,50.4835572 C48.5905204,50.4835572 42.921546,50.9695423 38.1846801,49.6453697 C37.3296769,49.4063568 35.9013745,48.9575197 34.8452081,48.2118394 C34.3597044,47.8690615 33.7412002,47.2199446 32.9896953,46.2644887 Z"
            stroke="#979797"
          ></path>
        </mask>
        <linearGradient :id="'polygon-light-linear' + begin" gradientUnits="userSpaceOnUse" x1="52" y1="52" x2="52" y2="35">
          <stop offset="0%" stop-color="rgb(5, 211, 253)" stop-opacity=".8" />
          <stop offset="50%" stop-color="rgb(5, 211, 253)" stop-opacity=".3" />
          <stop offset="100%" stop-color="rgb(5, 211, 253)" stop-opacity="0" />
          <!-- <animate id="light-up-icon" attributeName="y2" from="30" to="15" dur="2.5s" begin="0; light-down-icon.end + 0.5s" fill="freeze" />
          <animate id="light-down-icon" attributeName="y2" from="15" to="30" dur="2.5s" begin="light-up-icon.end + 0.5s" fill="freeze" /> -->
          <animate id="light-down-icon" attributeName="y2" from="45" to="15" dur="3.5s" :begin="begin + 's'" fill="freeze" repeatCount="indefinite" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="103" height="52" :fill="'url(#polygon-light-linear' + begin + ')'" mask="url(#Mask-polygon-light-icon)"></rect>
    </svg>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    begin: {
      type: Number,
      default: 0
    }
  },
  created() {},
  components: {},
  computed: {},
  methods: {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
.light-icon-box {
  width: 177 * $width;
  height: 90 * $height;
}
</style>
