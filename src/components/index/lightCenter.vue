<template>
  <div class="light-center-box">
    <svg viewBox="-10 0 342 368" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <mask id="Mask-polygon-center">
          <path
            fill="white"
            stroke="#979797"
            d="M125,337 L24.3579739,1 L176.5,1 L328.66,1 L228,337 C225.642019,344.39013 222.075706,350.009886 217.301061,353.859269 C212.526416,357.708651 208.474106,360.465624 205.144133,362.130185 C191.301903,365.305785 182.989589,366.929057 180.20719,367 C175.563888,367.11839 157.14827,365.384179 152.274764,363.161844 C147.001295,360.757125 136.758037,355.833157 131.590064,350.505317 C128.98945,347.824255 126.792762,343.322483 125,337 Z"
          ></path>
        </mask>
        <mask id="Mask-circles-center-1">
          <!-- 最下开始 圆环1  -->
          <path
            stroke-width="4"
            stroke-linecap="round"
            fill="none"
            d="M174,218 C233.646753,218 282,239.938047 282,267 C282,293.75878 234.72408,315.507816 176.00035,315.991764"
            stroke="#979797"
          ></path>
        </mask>
        <mask id="Mask-circles-center-2">
          <!-- 最下开始 圆环2 -->
          <path
            d="M176.000528,292.992561 C104.617801,292.638276 47,267.032023 47,235.496282 C47,218.955867 62.8505175,204.046639 88.2240008,193.5566 C111.22744,184.046397 142.057921,178.16838 176.000528,178"
            stroke="#979797"
            stroke-width="4"
            stroke-linecap="round"
            transform="translate(111.500264, 235.496281) scale(1, -1) translate(-111.500264, -235.496281) "
          ></path>
        </mask>
        <mask id="Mask-circles-center-3">
          <!-- 最下开始 圆环3 -->
          <path
            fill="none"
            stroke-width="4"
            stroke-linecap="round"
            d="M163.5,127.500255 C209.076937,127.54684 250.327124,133.96072 280.216073,144.313819 C295.452648,149.591549 307.73167,155.889391 316.108404,162.894424 C324.067566,169.550263 328.5,176.837383 328.5,184.5 C328.5,192.162617 324.067566,199.449737 316.108404,206.105576 C307.73167,213.110609 295.452648,219.408451 280.216073,224.686181 C250.327124,235.03928 209.076937,241.45316 163.5,241.499745 L163.5,241.499745"
            stroke="#979797"
          ></path>
        </mask>
        <mask id="Mask-circles-center-4">
          <!-- 最下开始 圆环4 -->
          <path
            d="M177.5,209 C80.5740264,209 2,180.570082 2,145.5 C2,112.652006 70.9323604,85.6293745 159.312265,82.3368668 C165.290954,82.1141365 171.358639,82 177.5,82"
            stroke="#979797"
            stroke-width="4"
            stroke-linecap="round"
            transform="translate(89.750000, 145.500000) scale(1, -1) translate(-89.750000, -145.500000) "
          ></path>
        </mask>
        <linearGradient id="polygon-light-linear-center" gradientUnits="userSpaceOnUse" x1="153" y1="308" x2="153" y2="0">
          <stop offset="0%" stop-color="rgb(5, 211, 253)" stop-opacity="0.5" />
          <stop offset="50%" stop-color="rgb(5, 211, 253)" stop-opacity=".3" />
          <stop offset="100%" stop-color="rgb(5, 211, 253)" stop-opacity="0" />
          <animate id="xxx" attributeName="y2" from="20" to="200" dur="2.5s" begin="0; yyy.end + 0.5s" fill="freeze" />
          <animate id="yyy" attributeName="y2" from="200" to="20" dur="1s" begin="xxx.end + 0.5s" fill="freeze" />
        </linearGradient>
        <linearGradient id="polygon-light-linear-center-circle" gradientUnits="userSpaceOnUse" x1="53" y1="308" x2="53" y2="0">
          <stop offset="0%" stop-color="rgb(5, 211, 253)" stop-opacity="1" />
          <stop offset="50%" stop-color="rgb(5, 211, 253)" stop-opacity=".3" />
          <stop offset="100%" stop-color="rgb(5, 211, 253)" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="polygon-light-linear-center-circle-1" gradientUnits="userSpaceOnUse" x1="115" y1="318" x2="115" y2="218">
          <stop offset="0%" stop-color="rgb(5, 211, 253)" stop-opacity="1" />
          <stop offset="100%" stop-color="rgb(5, 211, 253)" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="polygon-light-linear-center-circle-2" gradientUnits="userSpaceOnUse" x1="115" y1="292" x2="115" y2="176">
          <stop offset="0%" stop-color="rgb(5, 211, 253)" stop-opacity="1" />
          <stop offset="100%" stop-color="rgb(5, 211, 253)" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="polygon-light-linear-center-circle-3" gradientUnits="userSpaceOnUse" x1="115" y1="241" x2="115" y2="127">
          <stop offset="0%" stop-color="rgb(5, 211, 253)" stop-opacity="1" />
          <stop offset="100%" stop-color="rgb(5, 211, 253)" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="polygon-light-linear-center-circle-4" gradientUnits="userSpaceOnUse" x1="115" y1="210" x2="115" y2="83">
          <stop offset="0%" stop-color="rgb(5, 211, 253)" stop-opacity="1" />
          <stop offset="50%" stop-color="rgb(5, 211, 253)" stop-opacity=".8" />
          <stop offset="100%" stop-color="rgb(5, 211, 253)" stop-opacity="0" />
        </linearGradient>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style="stop-color:rgb(2, 231, 254);stop-opacity:1" />
          <!-- <stop offset="80%" style="stop-color:rgb(2, 231, 254);stop-opacity:0.6" /> -->
          <stop offset="100%" style="stop-color:rgb(2, 231, 254);stop-opacity:0" />
        </radialGradient>
      </defs>
      <!-- 四个圆环 -->
      <rect x="174" y="218" width="155" height="100" fill="url(#polygon-light-linear-center-circle-1)" mask="url(#Mask-circles-center-1)"></rect>
      <rect x="0" y="176" width="195" height="118" fill="url(#polygon-light-linear-center-circle-2)" mask="url(#Mask-circles-center-2)"></rect>
      <rect x="153" y="127" width="185" height="117" fill="url(#polygon-light-linear-center-circle-3)" mask="url(#Mask-circles-center-3)"></rect>
      <rect x="-10" y="83" width="195" height="129" fill="url(#polygon-light-linear-center-circle-4)" mask="url(#Mask-circles-center-4)"></rect>
      <!-- <circle cx="177.5" cy="209" r="10" stroke="none" fill="url(#grad1)" transform="translate(89.750000, 145.500000) scale(1, -1) translate(-89.750000, -145.500000)"> -->

      <!-- 中间大灯 -->
      <rect x="-10" y="0" width="340" height="368" fill="url(#polygon-light-linear-center)" mask="url(#Mask-polygon-center)"></rect>
      <!-- 底部光做 -->
      <ellipse stroke="none" fill-opacity="0.703862544" fill="#54D8DF" cx="176.5" cy="337" rx="51" ry="29.5"></ellipse>
      <circle cx="0" cy="0" r="10" stroke="none" fill="url(#grad1)" opacity="1">
        <animateMotion
          path="M176.508987,84 C165.916463,83.6298726 157.972628,83.6298726 152.677482,84 C147.382336,84.3701274 142.818129,85.2444316 138.984861,86.6229126 C125.136769,86.9994666 114.64263,87.7470999 107.502445,88.8658126 C100.362259,89.9845252 89.7706263,92.5405759 75.7275479,96.5339647 C60.010306,100.613015 48.2887512,104.142298 40.5628835,107.121815 C32.8370158,110.101332 27.4353793,113.175687 24.3579739,116.344881 L5.19777844,133.998301 C2.39925948,139.740192 1,144.240758 1,147.5 C1,150.759242 2.39925948,155.190121 5.19777844,160.792639 L24.3579739,178 C36.7783944,184.777948 46.1163237,189.404274 52.3717618,191.878979 C58.6271999,194.353684 66.4124619,196.501438 75.7275479,198.322242 C89.0742133,201.783207 99.6658455,204.26167 107.502445,205.757633 C115.339044,207.253595 126.884892,209.001051 142.139988,211 C151.395824,211 158.349161,211 163,211 C167.650839,211 172.317681,211 177.000528,211"
          dur="4s"
          repeatCount="indefinite"
        />
        <!-- <animate attributeName="opacity" from="0" to="1" dur="4s" repeatCount="indefinite"></animate> -->
      </circle>
      <circle cx="0" cy="0" r="10" stroke="none" fill="url(#grad1)" opacity="1">
        <animateMotion
          path="M163.5,127.500255 C209.076937,127.54684 250.327124,133.96072 280.216073,144.313819 C295.452648,149.591549 307.73167,155.889391 316.108404,162.894424 C324.067566,169.550263 328.5,176.837383 328.5,184.5 C328.5,192.162617 324.067566,199.449737 316.108404,206.105576 C307.73167,213.110609 295.452648,219.408451 280.216073,224.686181 C250.327124,235.03928 209.076937,241.45316 163.5,241.499745 L163.5,241.499745"
          dur="4s"
          fill="freeze"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="0" cy="0" r="10" stroke="none" fill="url(#grad1)" opacity="1">
        <animateMotion
          path="M176.5,178 C161.64065,178.245535 149.112879,179.080492 138.916688,180.504869 C128.720497,181.929246 121.129579,183.260956 116.143934,184.5 C107.000112,186.90611 98.8654032,189.615576 91.7398074,192.628399 C84.6142116,195.641221 77.5540818,199.428244 70.559418,203.989466 C65.0414836,207.487876 61.1947988,210.339523 59.0193636,212.544407 C56.8439283,214.749291 54.1626658,218.05772 50.975576,222.469694 C48.9918587,227.92982 48,232.272015 48,235.496281 C48,238.720546 49.6340109,243.752536 52.9020327,250.592253 C55.4977011,254.720815 58.0413263,257.94243 60.5329082,260.257098 C63.02449,262.571766 66.36666,264.818027 70.559418,266.995882 C75.9885249,270.864321 79.8271566,273.317382 82.0753132,274.355064 C89.3230043,277.70038 94.5649474,279.67348 98.9632842,281.212483 C105.408097,283.467559 111.13498,285.054442 116.143934,285.97313 C127.206639,288.345877 136.508039,290.033393 144.048135,291.035679 C151.588231,292.037965 162.572362,292.690259 177.000528,292.992561"
          dur="3s"
          fill="freeze"
          repeatCount="indefinite"
          transform="translate(111.500264, 235.496281) scale(1, -1) translate(-111.500264, -235.496281) "
          begin="1s"
        />
        <animate attributeName="opacity" from="0" to="1" dur="3s" repeatCount="indefinite" begin="1s"></animate>
      </circle>
      <circle cx="0" cy="0" r="10" stroke="none" fill="url(#grad1)" opacity="1">
        <animateMotion path="M174,218 C233.646753,218 282,239.938047 282,267 C282,293.75878 234.72408,315.507816 176.00035,315.991764" dur="3s" fill="freeze" repeatCount="indefinite" begin="1s" />
        <animate attributeName="opacity" from="0" to="1" dur="3s" repeatCount="indefinite" begin="1s"></animate>
      </circle>
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
.light-center-box {
  width: 294 * $width;
  height: 317 * $height;
  //   background-color: rgb(2, 231, 254);
}
#Mask-circles-center-4 {
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  // stroke: rgb(165, 9, 212);
  // fill: none;

  animation-name: draw;
  animation-duration: 4s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
#Mask-circles-center-3 {
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  // stroke: rgb(165, 9, 212);
  // fill: none;
  animation-name: draw;
  animation-duration: 4s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
#Mask-circles-center-2 {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  // stroke: rgb(165, 9, 212);
  // fill: none;
  animation-name: draw;
  animation-delay: 1s;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
#Mask-circles-center-1 {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  // stroke: rgb(165, 9, 212);
  // fill: none;
  animation-name: draw;
  animation-delay: 1s;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes draw {
  //   0% {
  //     stroke-dashoffset: 0;
  //   }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
