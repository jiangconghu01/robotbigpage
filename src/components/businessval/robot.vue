<template>
  <div class="light-robot-box">
    <div class="robot-icon">
      <svg viewBox="0 0 26 46">
        <image
          xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAuCAYAAAA2oQl1AAAFfUlEQVRYhbWYC2xURRSGv7Yr1hoe8YUlYW6NV6kaFEN8RCQoqagIopDyaDQxhNBUAkGiAbEJ0sQYrFGwmviCtAajRIoKQStR6jPiK4q8mjKiMyKgRS2ioLCw5jRnN7fLtt2FcpJNt3fumX/mzDn/+Wfz6MGs82cDtwDXAVcA5wF9gDZgB/Ap8F4YmH+6m6lLIOu8ARYC9wJFwE/A18Bu4CgwCLgGuBQ4DLwIPB4G5tesgKzzBcB84FHgEPA80BAGZkcXCyoFZgCzgH+BuWFgGroFss5LWNYAI4FngEVhYNp7Cq/6DlKfSbq42WFg4icAWefPBT4EioEpYWA+iMxzAXAncIeek4TOAp8BbwI7I/Pcr4BvAPeEgTnWKVzW+Y+s823W+aERAIl/PSArS3TzeRe4LDLfJOv8Mev8E+nbnm+dP2qdvyHyeJ7GvDuA6EcSYkpkzjnW+YR1vqwjdNb5vsBeYFkYmEf0vVrgwWzOJs2OA5OBRut8nu70IqBUgMYDKwETBuYAMAF4q6ioiPLycgoLC2lubqa1tTXjzCUlJZSVlZFIJGhsbKS9vV3qaQjwix7D98DFssWF1vnXIr4bJBwrVqxIRK26uvqEcFVVVSXi8XjqraampuTYw5EQbrPO35wPDNAMStpg+dvS0tJp5TU1NQwcODD1fywWY+nSpRQUFKSebdmyJfnVRFy3A/1jeojnRwbk7dLa2loJA5WVlRQXF7N+/Xra2tpSL8Xjcerq6qioqGD//v00NDR0AEfmSJrQ1THZ2gzr/JeRges7BrLPtvTPPqBvJHS7rPOjJHSbhbOs81fp2CagUsFytd+BccBBBZmuWbdTgL4BvgOWW+eLdOKXgVFKotmaMMHVSR/rvETmWeClMDB78vThMKWTj4GpmuYoRYlDuTL1JZo8cV39dvWTrP0hEq6xwOua2mPCwByKcp30nNU6wQPA2jAwiVxCZ52/EFgMzJQeJcUbBuYvMrB3qfaVkdrU6tVhaydy7OwjO7wJmKisIOxQrUyT8onuqEhf+g8Yq/1FdiklcARo1d0e0JTtpzU3WKfw0reAujAwbekLEgqShKjTTNsKjEi2ZeVBSYqhej7nKMARzay96vNVGJhv086oXv9dHAbmOQG6FXgHeBKoUseJYWD25XI+EZCZmm3NwB+SXLJI2Y20hlVhYKR9j+kgQBB+mmed75cDwAjr/EbgBeBVYHwYmGnA58DlMRUeHdQcBmaTdf5K4Gnd4WPW+Q2qdFpUmPwNnCH8JS7AcOB2bZKS4pPCwKyJrOFHeT+mDFCYfKoqpsI6v0haMXCbqBugIONW4DeVAAuAdVGdoCY65HBMu+iAdO8wMKIDBGyRdV6yrEQl1lmqGUQh7criLFNAhzSjurQwMMn0ztz9ujdJ/4P5qjiDk5igR9PalBZ0IAlUcjqAIpFqFyA5/EG5pHIONjRJwPmaknnKzr1tUiotYWCO54eBkerdA1x7GoBuBL6QL/n6YJMycK+ZJsJwLfYUkFT/aOt8/17EGq0s/34UaJ1W/rheBBIhujkMzO4UkPR04BNgWm8gWOfP1Pa/KvksPzIunXWsdb43amqySq6VmYBWa00tOBUEFffzVHP8fAJQGBhp4UuA6db5IaeAdRcwTOdKWbo46aMd1qlMylUFSbvZpmJmQnQsGrokS8vVUC5Ps09iN0v0ajo325U9ZZ0/Ipo5WwTr/FS94c3KNJ6f6SHwkIqLtWnXza5A5DL3imgFUTxZA6nwu1t1+UYV65kAREXNkRsi0CSJ1NViuv2JRgtPfjO4T++jNUmSFP2n8leoZrmcrZ5x7kARQKnyZXrQUgbiJxkqdSI/XLzd0xxZASmYhFmUavJqI2r2T+k1PToD/wM4CVf17MsgnQAAAABJRU5ErkJggg=="
        />
      </svg>
    </div>
    <div class="mask">
      <svg viewBox="0 0 26 46">
        <defs>
          <mask id="Mask-robot-run">
            <path
              id="bottom-path"
              stroke="white"
              fill="white"
              d="M1.60394499,19.6057666 L1,25.016371 L1.85398745,31.9627934 C2.22423872,33.4024945 2.53303654,34.5033616 2.78038089,35.2653948 C3.02772525,36.027428 3.30240949,36.724187 3.60443363,37.3556719 L6.48632247,40.9677476 L11.1157962,44.0505518 C12.1541636,44.2876072 12.8991454,44.406135 13.3507414,44.406135 C13.8023375,44.406135 14.3888199,44.2876072 15.1101886,44.0505518 L17.9362044,42.1268795 C18.8650513,41.0987465 19.5300061,40.2880288 19.931069,39.6947265 C20.3321319,39.1014243 20.7422638,38.3217394 21.1614648,37.3556719 L23.6189518,31.9627934 L24.5247335,25.016371 L24.5247335,19.6057666 C24.2400703,19.2465483 23.9893049,19.0474941 23.7724374,19.0086042 C23.55557,18.9697143 23.2146152,19.0626578 22.7495731,19.2874347 L21.1614648,20.7617452 L18.594593,22.5417941 L15.5499675,23.6189832 L12.7650992,23.6189832 L9.88613679,23.6189832 L8.03392285,23 L5.03987727,21.1253882 L3.60443363,19.6057666 C3.37024472,19.4740544 3.17011718,19.3679437 3.00405101,19.2874347 C2.83798484,19.2069256 2.62752297,19.1139821 2.37266539,19.0086042 L1.60394499,19.6057666 Z"
            ></path>
          </mask>
          <radialGradient :id="'Gradient-robot-run' + index" gradientUnits="userSpaceOnUse" cx="13" cy="46" fx="13" fy="46" r="27">
            <stop offset="0%" stop-color="rgb(5, 211, 253)" stop-opacity="0.6" />
            <stop offset="50%" stop-color="rgb(5, 211, 253)" stop-opacity=".3" />
            <stop offset="100%" stop-color="rgb(5, 211, 253)" stop-opacity="0" />
            <animate attributeName="r" from="0" :to="num" dur="2s" repeatCount="indefinite" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="26" height="46" :fill="'url(#Gradient-robot-run' + index + ')'" mask="url(#Mask-robot-run)"></rect>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    num: {
      type: Number,
      required: false,
      default: 20
    },
    index: {
      type: Number,
      required: true,
      default: 0
    }
  },
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
.light-robot-box {
  width: 100%;
  height: 100%;
  position: relative;
  .robot-icon {
    height: 46 * $height;
    width: 26 * $width;
    @include Xcenter;
  }
  .mask {
    height: 46 * $height;
    width: 26 * $width;
    @include Xcenter;
    z-index: 1;
  }
}
</style>
