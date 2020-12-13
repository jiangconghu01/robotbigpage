<template>
  <div class="single-index-box">
    <img class="bg" src="../assets/images/index/index_bg_new_2@2.png" />
    <div class="title">
      <ul>
        <li class="circle-title t1"><span>保</span><i>流程顺畅</i></li>
        <li class="circle-title t2"><span>促</span><i>操作规范</i></li>
        <li class="circle-title t3"><span>提</span><i>处理效率</i></li>
        <li class="circle-title t4"><span>控</span><i>业务风险</i></li>
      </ul>
    </div>
    <div class="container">
      <div class="left-light"><lightLeft></lightLeft></div>
      <div class="center-light">
        <div class="center-top-bars c-item">
          <img class="company-group" src="../assets/images/index/company_group@2.png" alt="" />
          <ul>
            <li class="b1"><animateBar :opacity="0.3" :height="90"></animateBar></li>
            <li class="b2"><animateBar :opacity="0.3" :height="100">></animateBar></li>
            <li class="b3"><animateBar :opacity="0.3" :height="100">></animateBar></li>
            <li class="b4"><animateBar :opacity="0.3" :height="80">></animateBar></li>
            <li class="b5"><animateBar :opacity="0.3" :height="80">></animateBar></li>
            <li class="b6"><animateBar :opacity="0.3" :height="100">></animateBar></li>
            <li class="b7"><animateBar :text="'江苏'" :opacity="0.6" :height="100">></animateBar></li>
            <li class="b8"><animateBar :opacity="0.3" :height="80">></animateBar></li>
            <li class="b9"><animateBar :text="'IT公司'" :opacity="0.8" :height="100">></animateBar></li>
            <li class="b10"><animateBar :text="'广东'" :opacity="1" :height="100">></animateBar></li>
            <li class="b11"><animateBar :opacity="0.3" :height="100">></animateBar></li>
          </ul>
        </div>
        <div class="center-light-container c-item"><lightCenter></lightCenter></div>
        <div class="center-golbe-runing c-item"></div>
      </div>
      <div class="center-robot"><img src="../assets/images/index/index_robot@2.png" /></div>
      <div class="right-light-list-t">
        <lightListTop></lightListTop>
      </div>
      <div class="right-light-b">
        <lightBottom></lightBottom>
      </div>
      <div class="img-path">
        <svg viewBox="0 0 2088 784" version="1.1">
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style="stop-color:rgb(2, 231, 254);stop-opacity:1" />
              <stop offset="100%" style="stop-color:rgb(2, 231, 254);stop-opacity:0" />
            </radialGradient>
          </defs>
          <path id="left-1" fill="none" d="M1015.64396,649.027098 L964.820892,620.600596 L722.88533,767.575449 L333.196902,543.536718"></path>
          <path id="left-1-1" fill="none" d="M489.1061,633.789966 L630.259231,548.213555"></path>
          <polyline id="left-2" fill="none" points="1044 619.034817 1002.83947 596.035852 1187.85936 481.233049 988.765505 353.706481 799.227189 243.218978"></polyline>
          <polyline id="center-1" fill="none" points="1205.68996 392 1363.85946 486.061936 1384.98168 472.355418 1503.221 543.536718"></polyline>
          <polyline
            id="right-1"
            fill="none"
            stroke="#979797"
            stroke-width="10"
            stroke-linecap="round"
            stroke-linejoin="round"
            points="1856.82026 403.982481 2088 539.741552 1891.69573 673.197353"
          ></polyline>
          <circle cx="0" cy="0" r="8" stroke="none" fill="rgba(255, 255, 255, 0.677)">
            <animateMotion path="M1503.221,543.536718 L1384.98168,472.355418 L1363.85946,486.061936 L1205.68996,392 " dur="2s" fill="freeze" repeatCount="indefinite" begin="0" />
          </circle>
          <circle cx="0" cy="0" r="8" stroke="none" fill="rgba(255, 255, 255, 0.677)">
            <animateMotion path="M1503.221,543.536718 L1384.98168,472.355418 L1363.85946,486.061936 L1205.68996,392 " dur="2s" fill="freeze" repeatCount="indefinite" begin="0.4s" />
          </circle>
          <circle cx="0" cy="0" r="8" stroke="none" fill="rgba(255, 255, 255, 0.677)">
            <animateMotion path="M1503.221,543.536718 L1384.98168,472.355418 L1363.85946,486.061936 L1205.68996,392 " dur="2s" fill="freeze" repeatCount="indefinite" begin="0.8s" />
          </circle>
          <circle cx="0" cy="0" r="8" stroke="none" fill="rgba(255, 255, 255, 0.677)">
            <animateMotion path="M1503.221,543.536718 L1384.98168,472.355418 L1363.85946,486.061936 L1205.68996,392 " dur="2s" fill="freeze" repeatCount="indefinite" begin="1.2s" />
          </circle>
          <circle cx="0" cy="0" r="8" stroke="none" fill="rgba(255, 255, 255, 0.677)">
            <animateMotion path="M1503.221,543.536718 L1384.98168,472.355418 L1363.85946,486.061936 L1205.68996,392 " dur="2s" fill="freeze" repeatCount="indefinite" begin="1.6s" />
          </circle>
        </svg>
      </div>
      <div class="text-layer">
        <div class="auto-export-1 normal">自动输出操作结果</div>
        <!-- <div class="auto-export-2 normal">自动输出异常报告</div> -->
        <div class="manual-exe normal">正常运行845小时</div>
        <div class="exc-status normal">运行时</div>
        <div class="flage-box">
          <svg class="svg" viewBox="0 0 96 128">
            <g id="编组" transform="translate(0.000000, 1.000000)" stroke="#979797">
              <rect id="矩形" x="0.5" y="0.5" width="3" height="126"></rect>
              <polyline id="路径-6" points="4 0 94.2670112 0 66.2059415 23.9250527 94.2670112 44.2358857 4 44.2358857"></polyline>
            </g>
          </svg>
          <div class="circles">
            <div class="cir item1"></div>
            <div class="cir item2"></div>
            <div class="cir item3"></div>
            <div class="item4"></div>
          </div>
        </div>
        <div class="all-users">
          <h3>用户已突破</h3>
          <p><i class="num">2661</i><i>人</i></p>
        </div>
        <div class="acc-bills acc">
          <h3>累计成功作业</h3>
          <p><i class="num">639</i><i>笔</i></p>
        </div>
        <div class="acc-exc acc">
          <h3>累计节约时长</h3>
          <p><i class="num">201</i><i>小时</i></p>
        </div>
        <div class="normal-status normal">作业</div>
        <div class="right">
          <h3>10个流程</h3>
          <div class="flow-list-box">
            <ul class="flow-list-inner">
              <li class="text">支付失败清单整理</li>
              <li class="text">资产转资确认流程</li>
              <li class="text">竣工决算辅助审核流程</li>
              <li class="text">租赁类资产稽核表编制流程</li>
              <li class="text">现金流量表编制流程</li>
              <li class="text">月末关账检查流程</li>
              <li class="text">开账关账管理流程</li>
              <li class="text">应交增值税结转计提流程</li>
              <li class="text">纳税申报流程</li>
              <li class="text">关联交易表填报流程</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="up-line-layer">
        <ul>
          <li class="line line1"></li>
          <li class="line line2"></li>
          <li class="line line3"></li>
          <li class="line line4"></li>
          <li class="line line5"></li>
          <li class="line line6"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import lightBottom from '@/components/index/lightBottom.vue'
import animateBar from '@/components/index/animateBar.vue'
import lightLeft from '@/components/index/lightLeft.vue'
import lightCenter from '@/components/index/lightCenter.vue'
import lightListTop from '@/components/index/lightListTop.vue'
export default {
  data() {
    return {}
  },
  created() {},
  components: { lightBottom, lightListTop, lightLeft, lightCenter, animateBar },
  computed: {},
  methods: {},
  mounted() {
    // const path = document.getElementById('left-2')
    // const pathLen = path.getTotalLength() //获取路径总长度
    // const path2 = document.getElementById('right-1')
    // const pathLen2 = path2.getTotalLength() //获取路径总长度
    // console.log(pathLen, pathLen2)
  }
}
</script>
<style lang="scss" scoped>
.single-index-box {
  width: 1800 * $width;
  margin-left: 60 * $width;
  position: relative;
  //   background-color: rgba(72, 147, 233, 0.473);
  .bg {
    margin-top: 200 * $height;
    width: 100%;
  }
  .title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 130 * $height;
    // display: flex;
    .t1 {
      left: 5 * $width;
      top: 35 * $height;
    }
    .t2 {
      //   left: 675 * $width;
      left: 625 * $width;
      top: 35 * $height;
      transform: translateX(-50%);
    }
    .t3 {
      //   left: 1125 * $width;
      left: 1175 * $width;
      top: 35 * $height;
      transform: translateX(-50%);
    }
    .t4 {
      right: 5 * $width;
      top: 35 * $height;
    }
    .circle-title {
      font-family: Microsoft YaHei;
      display: flex;
      align-items: center;
      position: absolute;
      &::after {
        display: inline-block;
        content: '';
        border: 3 * $width solid #fff;
        width: 74 * $width;
        height: 74 * $height;
        position: absolute;
        border-radius: 50%;
        left: -13 * $width;
        top: -13 * $height;
      }
      span {
        font-size: 50 * $font;
        font-weight: bold;
        position: relative;
      }
      i {
        margin-left: 30 * $width;
        font-size: 24 * $font;
        font-weight: bold;
      }
    }
  }
  .container {
    position: absolute;
    width: 1806 * $width;
    height: 676 * $height;
    right: 0;
    bottom: 13 * $height;
    .up-line-layer {
      position: absolute;
      left: 850 * $width;
      bottom: 30 * $height;
      width: 250 * $width;
      height: 320 * $height;

      ul {
        width: 100%;
        height: 100%;
        position: relative;
        .line {
          position: absolute;
          bottom: 0;
          width: 5 * $width;
          height: 30 * $height;
          border-radius: 5 * $width;
          background-image: linear-gradient(180deg, rgb(38, 212, 224), rgba(38, 212, 224, 0.6) 30%, rgba(38, 212, 224, 0));
        }
        .line1 {
          left: 20 * $width;
          bottom: 50 * $height;
          animation: linea 1.8s infinite;
        }
        .line2 {
          left: 32 * $width;
          bottom: 85 * $height;
          height: 20 * $height;
          animation: lineb 2.8s infinite;
        }
        .line3 {
          left: 55 * $width;
          bottom: 112 * $height;
          animation: linec 2.2s infinite;
        }
        .line4 {
          right: 55 * $width;
          bottom: 112 * $height;
          animation: lined 2.4s infinite;
        }
        .line5 {
          right: 32 * $width;
          bottom: 85 * $height;
          height: 20 * $height;
          animation: lineb 2s infinite;
        }
        .line6 {
          right: 20 * $width;
          bottom: 50 * $height;

          animation: linea 2.8s infinite;
        }
      }
    }
    .text-layer {
      position: absolute;
      width: 100%;
      height: 100%;
      right: 0;
      bottom: 0;
      .normal {
        text-align: center;
        font-size: 24 * $font;
        font-weight: bold;
        position: absolute;
      }
      .auto-export-1 {
        transform: rotateZ(-30deg) rotateY(30deg) rotateX(35deg);
        left: 560 * $width;
        top: 189 * $height;
      }
      .auto-export-2 {
        transform: rotateZ(-30deg) rotateY(30deg) rotateX(35deg);
        left: 180 * $width;
        top: 430 * $height;
      }
      .manual-exe {
        transform: rotateZ(-30deg) rotateY(30deg) rotateX(35deg);
        left: 620 * $width;
        top: 465 * $height;
      }
      .exc-status {
        transform: rotateZ(-30deg) rotateY(30deg) rotateX(35deg);
        left: 700 * $width;
        top: 560 * $height;
      }
      .flage-box {
        position: absolute;
        width: 96 * $width;
        height: 128 * $height;
        left: 180 * $width;
        top: -20 * $height;
        .svg {
          fill: #00e4ff;
          stroke-width: 0;
          stroke: #00e4ff;
          width: 96 * $width;
          height: 128 * $height;
        }
        .circles {
          width: 80 * $width;
          height: 80 * $height;
          position: absolute;
          transform: rotateX(60deg);
          bottom: -37 * $width;
          left: -39 * $height;
          .cir {
            position: absolute;
            border-radius: 50%;
            border: 3 * $width solid #00e4ff;
            animation: aniTwo 1.2s ease-in-out 0s infinite;
            transform-origin: 50% 50%;
          }
          .item4 {
            position: absolute;
            left: 32 * $width;
            top: 32 * $height;
            width: 16 * $width;
            height: 16 * $height;
            border-radius: 50%;
            background-color: #fff;
          }
          .item1 {
            left: 12 * $width;
            top: 12 * $height;
            width: 56 * $width;
            height: 56 * $height;
          }
          .item2 {
            left: 17 * $width;
            top: 17 * $height;
            width: 46 * $width;
            height: 46 * $height;
          }
          .item3 {
            left: 25 * $width;
            top: 25 * $height;
            width: 30 * $width;
            height: 30 * $height;
          }
        }
      }
      .all-users {
        transform: rotateZ(-30deg) rotateY(30deg) rotateX(35deg);
        left: 180 * $width;
        top: 90 * $height;
        position: absolute;
        h3 {
          font-size: 28 * $font;
          font-weight: bold;
          height: 50 * $height;
          line-height: 50 * $height;
        }
        p {
          padding-left: 15 * $width;
          display: flex;
          align-items: center;
          i {
            font-weight: bold;
            font-size: 16 * $font;
          }
          .num {
            font-weight: bold;
            font-size: 45 * $font;
          }
        }
      }
      .acc {
        transform: rotateZ(33deg) rotateY(30deg) rotateX(-35deg);
        position: absolute;
        h3 {
          font-size: 28 * $font;
          font-weight: bold;
          height: 50 * $height;
          line-height: 50 * $height;
        }
        p {
          padding-left: 10 * $width;
          display: flex;
          align-items: center;
          i {
            font-weight: bold;
            font-size: 22 * $font;
          }
          .num {
            font-weight: bold;
            font-size: 42 * $font;
          }
        }
      }
      .acc-bills {
        left: 390 * $width;
        top: 200 * $height;
      }
      .normal-status {
        left: 790 * $width;
        top: 240 * $height;
        transform: rotateZ(33deg) rotateY(30deg) rotateX(-35deg);
      }
      .acc-exc {
        left: 0 * $width;
        top: 450 * $height;
      }
      .right {
        position: absolute;
        width: 330 * $width;
        height: 229 * $height;
        right: 172 * $width;
        bottom: 0 * $height;

        h3 {
          height: 45 * $height;
          line-height: 45 * $height;
          font-size: 26 * $font;
          font-weight: bold;
          text-align: center;
        }
        .flow-list-box {
          width: 100%;
          margin-top: 28 * $height;
          height: 150 * $height;
          font-size: 24 * $font;
          overflow: hidden;
          position: relative;
          .flow-list-inner {
            position: absolute;
            top: 0;
            left: 42 * $width;
            animation: index-right-list 12s linear infinite forwards;
            .text {
              height: 50 * $height;
              line-height: 50 * $height;
              position: relative;
              padding-left: 20 * $width;
              //   font-weight: bold;
              &::before {
                display: inline-block;
                content: '';
                position: absolute;
                width: 14 * $width;
                height: 14 * $height;
                border-radius: 50%;
                left: -10 * $width;
                top: 16 * $height;
                background-color: #7ce2ff;
              }
            }
          }
        }
      }
    }
    .img-path {
      position: absolute;
      width: 1800 * $width;
      height: 676 * $height;
      right: 0;
      bottom: 0;
    }
    .left-light {
      width: 197 * $width;
      height: 248 * $height;
      top: 156 * $height;
      left: 78 * $width;
      position: absolute;
    }
    .center-robot {
      width: 66 * $width;
      height: 120 * $height;
      bottom: 120 * $height;
      left: 940 * $width;
      position: absolute;
      z-index: 10;
      animation: bounce-in-top 1.5s infinite;
      img {
        width: 100%;
      }
    }
    .center-light {
      width: 528 * $width;
      height: 417 * $height;
      top: -100 * $height;
      left: 713 * $width;
      position: absolute;
      //   background: rgba(128, 255, 0, 0.459);
      .c-item {
        position: absolute;
      }
      .center-light-container {
        width: 285 * $width;
        height: 317 * $height;
        bottom: 2 * $height;
        left: 110 * $width;
      }
    }
    .center-top-bars {
      //   background-color: chocolate;
      width: 478 * $width;
      height: 350 * $height;
      left: 25 * $width;
      top: 0 * $height;
      position: relative;
      .company-group {
        position: absolute;
        width: 100 * $width;
        left: 190 * $width;
        top: 140 * $height;
      }
      ul {
        width: 100%;
        height: 100%;
        position: relative;
      }
      .b1 {
        position: absolute;
        left: 80 * $width;
        top: 90 * $height;
      }
      .b6 {
        position: absolute;
        left: 130 * $width;
        top: 150 * $height;
      }
      .b2 {
        position: absolute;
        left: 130 * $width;
        top: 60 * $height;
      }
      .b7 {
        position: absolute;
        left: 180 * $width;
        top: 70 * $height;
      }
      .b3 {
        position: absolute;
        left: 210 * $width;
        top: 30 * $height;
      }

      .b8 {
        position: absolute;
        left: 250 * $width;
        top: 60 * $height;
      }
      .b9 {
        position: absolute;
        left: 290 * $width;
        top: 60 * $height;
      }
      .b4 {
        position: absolute;
        left: 330 * $width;
        top: 60 * $height;
      }
      .b10 {
        position: absolute;
        left: 315 * $width;
        top: 160 * $height;
      }
      .b11 {
        position: absolute;
        left: 340 * $width;
        top: 110 * $height;
      }
      .b5 {
        position: absolute;
        left: 380 * $width;
        top: 90 * $height;
      }
    }
    .right-light-b {
      top: 40 * $height;
      right: 26 * $width;
      position: absolute;
    }
    .right-light-list-t {
      top: 35 * $height;
      right: 10 * $width;
      position: absolute;
    }
  }
}
#left-1 {
  stroke-dasharray: 880 791;
  stroke-dashoffset: 791;
  stroke: rgba(0, 255, 213, 0.829);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 6 * $width;
  animation-name: draw;
  animation-delay: 0s;
  animation-duration: 5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

#left-1-1 {
  stroke-dasharray: 220 685;
  stroke-dashoffset: 685;
  stroke: rgba(0, 255, 213, 0.822);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 6 * $width;
  animation-name: draw;
  //   animation-delay: 2s;
  animation-duration: 5s;
  //   animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
#left-2 {
  stroke-dasharray: 721 721;
  stroke-dashoffset: 721;
  stroke: rgba(0, 255, 213, 0.226);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 10 * $width;
  animation-name: draw;
  animation-delay: 0s;
  animation-duration: 5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
#right-1 {
  stroke-dasharray: 506 506;
  stroke-dashoffset: 506;
  stroke: rgba(0, 255, 213, 0.89);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 8 * $width;
  animation-name: draw;
  animation-delay: 0s;
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
@keyframes bounce-in-top {
  0% {
    transform: translateY(0px);
    animation-timing-function: ease-in;
    // opacity: 0;
  }
  //   25% {
  //     transform: translateY(0);
  //     animation-timing-function: ease-out;
  //     // opacity: 1;
  //   }
  40% {
    transform: translateY(-45 * $height);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateY(-38 * $height);
    animation-timing-function: ease-in;
  }
  //   90% {
  //     transform: translateY(0);
  //     animation-timing-function: ease-out;
  //   }
  //   95% {
  //     transform: translateY(-28 * $height);
  //     animation-timing-function: ease-in;
  //   }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
}
@keyframes index-right-list {
  0% {
    top: 0 * $height;
    opacity: 1;
  }
  90% {
    top: -345 * $height;
    opacity: 1;
  }
  100% {
    top: -355 * $height;
    opacity: 0;
  }
}
@keyframes aniTwo {
  0% {
    transform: scale(0.1);
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0.1;
  }
}
@keyframes linea {
  30% {
    opacity: 1;
  }
  85%,
  100% {
    transform: translateY(-240 * $height);
    opacity: 0;
  }
}
@keyframes lineb {
  30%,
  50% {
    opacity: 1;
  }
  85%,
  100% {
    transform: translateY(-200 * $height);
    opacity: 0;
  }
}
@keyframes linec {
  40%,
  55% {
    opacity: 1;
  }
  85%,
  100% {
    transform: translateY(-160 * $height);
    opacity: 0;
  }
}
@keyframes lined {
  10%,
  25% {
    opacity: 1;
  }
  85%,
  100% {
    transform: translateY(-160 * $height);
    opacity: 0;
  }
}
</style>
