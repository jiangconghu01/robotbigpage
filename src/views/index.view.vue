<template>
  <div class="all-view">
    <div class="view-desc">
      <div class="label">
        <img src="../assets/images/label@2.png" alt="" />
      </div>
      <div class="house"></div>
      <div class="text">
        <div class="item t1">
          <div class="title">
            <span class="icon">
              <img src="../assets/images/t1@2.png" alt="" />
            </span>
            <span class="t-text">践行大连接战略的重要举措</span>
          </div>
          <ul class="desc">
            <li class="line point">”资源共享、能力集中、合理管控“</li>
            <li class="line point">践行”五化“改革”管理集中化、流程标准化“</li>
            <li class="line point">RPA作为最成熟的企业自动化技术，首先进行全面推广具有实践意义。</li>
          </ul>
        </div>
        <div class="item t2">
          <div class="title">
            <span class="icon">
              <img src="../assets/images/t2@2.png" alt="" />
            </span>
            <span class="t-text">落地业务自动化处理工具</span>
          </div>
          <ul class="desc">
            <li class="line point">
              企业ERP、报账、资金、税务等系统集中后，更增加了业务操作人员的手工系统操作工作量，合理落地必要的业务场景，使用RPA替代人工操作，也是企业自身人工资源再分配的需要
            </li>
          </ul>
        </div>
        <div class="item t3">
          <div class="title">
            <span class="icon">
              <img src="../assets/images/t3@2.png" alt="" />
            </span>
            <span class="t-text">支撑财务转型的技术手段</span>
          </div>
          <ul class="desc">
            <li class="line point">
              近些年，公司在战略财务、业务财务、共享财务领域开展了诸多探索和实践。实践证明，共享财务是支撑财务转型的基础，而RPA是支持财务共享中心落地的智能化新技术
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="view-carousel">
      <img src="../assets/images/carousel_bg@2.png" />
      <div class="left-arrow arrow">
        <img src="../assets/images/arrow@2.png" />
      </div>
      <div class="right-arrow arrow">
        <img src="../assets/images/arrow@2.png" />
      </div>
      <div class="carousel-item" :class="carousels[0]">123</div>
      <div class="carousel-item" :class="carousels[1]">abc</div>
      <div class="carousel-item" :class="carousels[2]">ddd</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      carousels: ['left', 'center', 'right']
    }
  },
  created() {},
  components: {},
  computed: {},
  methods: {
    carouselsPage() {
      const copy = this.carousels.slice(0)
      copy.unshift(copy[copy.length - 1])

      copy.length = copy.length - 1
      this.carousels = copy
      setTimeout(() => {
        this.carouselsPage()
      }, 4000)
    }
  },
  mounted() {
    this.carouselsPage()
  }
}
</script>
<style lang="scss" scoped>
.all-view {
  width: 100%;
  margin-top: 25 * $height;
  .view-desc {
    height: 265 * $height;
    display: flex;
    align-items: center;
    .label {
      height: 236 * $height;
      width: 40 * $width;
      margin-left: 35 * $width;
      img {
        width: 100%;
      }
    }
    .house {
      height: 262 * $height;
      width: 394 * $width;
      margin-bottom: 20 * $height;
      margin-left: 60 * $width;
      background: url('../assets/images/house@2.png') no-repeat;
      background-size: contain;
    }
    .text {
      height: 238 * $height;
      width: 1305 * $width;
      margin-left: 60 * $width;
      background: url('../assets/images/all_textbg@2.png') no-repeat;
      background-size: contain;
      display: flex;
      align-items: center;
      .item {
        width: 29%;
        margin-left: 3%;
        .title {
          display: flex;
          height: 45 * $height;
          .t-text {
            height: 26 * $height;
            line-height: 26 * $height;
            font-size: 22 * $font;
            margin-left: 10 * $width;
          }
          .icon {
            width: 26 * $width;
            height: 26 * $height;
            img {
              width: 100%;
            }
          }
        }
        .desc {
          .line {
            // height: 26 * $height;
            line-height: 30 * $height;
            font-size: 14 * $font;
            padding-left: 30 * $width;
            position: relative;
            &::before {
              display: inline-block;
              content: '';
              position: absolute;
              width: 12 * $width;
              height: 12 * $height;
              border-radius: 50%;
              left: 8 * $width;
              top: 9 * $height;
              background-color: #7ce2ff;
            }
          }
        }
      }
    }
  }
  .view-carousel {
    margin-top: 24 * $height;
    height: 660 * $height;
    position: relative;
    img {
      width: 100%;
    }
    .arrow {
      position: absolute;
      top: 50 * $height;
      width: 369 * $width;
      height: 57 * $height;
      img {
        width: 100%;
      }
    }
    .right-arrow {
      right: 20 * $width;
    }
    .left-arrow {
      left: 20 * $width;
      transform: rotate(180deg) rotateX(180deg); //倒转，垂直镜像
    }
    .carousel-item {
      position: absolute;
      background-color: rgba(199, 230, 238, 0.178);
      width: 1100 * $width;
      height: 590 * $height;
      top: 30 * $height;
      transform-style: preserve-3d;
      transition: all 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985) 0s;
      font-size: 80px;

      transition: transform-origin 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985) 0s, transform 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985) 0s;
      //     visibility 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985) 0s, opacity 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985) 0s;
    }
    .center {
      left: 410 * $width;
      background: url('../assets/images/ca_center@1.png') no-repeat;
      background-size: contain;
      //   display: none;
      animation: carousel-scroll-center 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1 forwards;
    }
    .left,
    .right {
      background: url('../assets/images/ca_aside@2.png') no-repeat;
      background-size: contain;
    }
    .left {
      left: -300 * $width;
      top: 60 * $height;
      transform: perspective(1000px) rotateY(30deg) scale(0.3, 0.75);
      animation: carousel-scroll-left 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1 forwards;
    }
    .right {
      right: -300 * $width;
      top: 60 * $height;
      transform: perspective(1000px) rotateY(-30deg) scale(0.3, 0.75);
      animation: carousel-scroll-right 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1 forwards;
      animation-delay: 0s;
    }
  }
}
@keyframes carousel-scroll-center {
  0% {
    left: 410 * $width;
    background: url('../assets/images/ca_center@1.png') no-repeat;
    opacity: 1;
  }
  //   25% {
  //     left: -80 * $width;
  //     top: 30 * $height;
  //     transform: perspective(300px) rotateY(5deg) scale(0.8, 0.9);
  //     background: url('../assets/images/ca_center@1.png') no-repeat;
  //     opacity: 0.5;
  //   }
  //   50% {
  //     left: -100 * $width;
  //     top: 40 * $height;
  //     transform: perspective(500px) rotateY(10deg) scale(0.5, 0.8);
  //     background: url('../assets/images/ca_center@1.png') no-repeat;
  //     opacity: 0.2;
  //   }
  //   75% {
  //     left: -200 * $width;
  //     top: 50 * $height;
  //     transform: perspective(800px) rotateY(20deg) scale(0.4, 0.8);
  //     opacity: 0.5;
  //   }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.2;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    left: -300 * $width;
    top: 60 * $height;
    transform: perspective(1000px) rotateY(30deg) scale(0.3, 0.75);
    background: url('../assets/images/ca_aside@2.png') no-repeat;
    background-size: contain;
    opacity: 1;
  }
}
@keyframes carousel-scroll-left {
  0% {
    left: -300 * $width;
    top: 60 * $height;
    transform: perspective(1000px) rotateY(30deg) scale(0.3, 0.75);
    background: url('../assets/images/ca_aside@2.png') no-repeat;
    background-size: contain;
    opacity: 1;
  }
  12% {
    opacity: 0.5;
    transform: perspective(1200px) rotateY(25deg) scale(0.3, 0.75) translateZ(-100px);
  }
  25% {
    opacity: 0.3;
    transform: perspective(1200px) rotateY(20deg) scale(0.3, 0.75) translateZ(-200px);
  }
  50% {
    opacity: 0.1;
    transform: perspective(1800px) rotateY(0deg) scale(0.3, 0.75) translateZ(-600px);
  }
  75% {
    opacity: 0.3;
    transform: perspective(1200px) rotateY(-10deg) scale(0.3, 0.75) translateZ(-200px);
  }
  87% {
    opacity: 0.5;
    transform: perspective(1200px) rotateY(-20deg) scale(0.3, 0.75) translateZ(-100px);
  }
  100% {
    // right: -300 * $width;
    left: 1120 * $width;
    top: 60 * $height;
    transform: perspective(1000px) rotateY(-30deg) scale(0.3, 0.75);
    background: url('../assets/images/ca_aside@2.png') no-repeat;
    background-size: contain;
    opacity: 1;
  }
}
@keyframes carousel-scroll-right {
  0% {
    right: -300 * $width;
    top: 60 * $height;
    transform: perspective(1000px) rotateY(-30deg) scale(0.3, 0.75);
    background: url('../assets/images/ca_aside@2.png') no-repeat;
    background-size: contain;
    opacity: 1;
  }
  25% {
    right: -700 * $width;
    opacity: 0.5;
    transform: perspective(1000px) rotateY(-20deg) scale(0.5, 0.8) translateZ(-500px);
  }
  50% {
    right: -1000 * $width;
    opacity: 0.2;
    transform: perspective(1000px) rotateY(-10deg) scale(0.7, 0.9) translateZ(-300px);
  }
  //   75% {
  //     right: 410 * $width;
  //     opacity: 0.5;
  //     transform: perspective(1000px) rotateY(0deg) scale(0.9, 1) translateZ(-50px);
  //   }
  100% {
    top: 30 * $height;
    right: 410 * $width;
    background: url('../assets/images/ca_center@1.png') no-repeat;
    background-size: contain;
    transform: perspective(0px) rotateY(0deg) scale(1) translateZ(0px);
    opacity: 1;
  }
}
</style>
