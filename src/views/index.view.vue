<template>
  <div class="all-view">
    <div class="view-desc">
      <div class="item t1">
        <div class="title">
          <span class="icon">
            <img src="../assets/images/t1_new@2.png" alt="" />
          </span>
          <span class="t-text">赋能效率提升的自动化工具</span>
        </div>
        <ul class="desc">
          <li class="line point">RPA（ Robotic Process Automation ，机器人流程自动化）是一种自动化工具，通过机器人模拟人工进行某些操作，辅助企业员工完成重复密集的工作。</li>
          <li class="line point">RPA作为自动化工具，显著提高业务操作的精确度、缩短处理周期，赋能业务发展，有效提升业务处理效率。</li>
        </ul>
      </div>
      <div class="item t2">
        <div class="title">
          <span class="icon">
            <img src="../assets/images/t2_new@2.png" alt="" />
          </span>
          <span class="t-text">依托ERP集中化系统的智能化平台</span>
        </div>
        <ul class="desc">
          <li class="line point">
            当前，ERP系统已实现全集团各单位统一建设、集中管理，集中化建设带来业务规则协同一致、系统功能标准统一，在此基础上，引入机器人流程自动化技术（RPA），打造了全集团财务领域共享、创新、轻量的财务机器人智能化平台，是落实集团公司“三融三力”理念的有效举措
          </li>
        </ul>
      </div>
      <div class="item t3">
        <div class="title">
          <span class="icon">
            <img src="../assets/images/t3_new@2.png" alt="" />
          </span>
          <span class="t-text">替代财务人员操作的虚拟员工</span>
        </div>
        <ul class="desc">
          <li class="line point">
            “重复性高”、“出错率高”、“跨系统操作频繁”的财务工作是基层财务人员经常面临的业务痛难点，RPA技术的引入充分响应集团公司“降本增效”号召，实现了财务领域的“IT换人”，可突破人工限制，实现24小时无人值守，操作准确性高达100%，是优秀的数字化劳动力。
          </li>
        </ul>
      </div>
      <div class="item t4">
        <div class="title">
          <span class="icon">
            <img src="../assets/images/t4_new@2.png" alt="" />
          </span>
          <span class="t-text">助力财务职能转型的数字引擎</span>
        </div>
        <ul class="desc">
          <li class="line point">
            中国移动“力量大厦”的建设重点强调转型升级和改革创新，财务领域响应号召，积极引入数字化技术，向集中化、数字化、标准化、价值型财务转型。
          </li>
          <li class="line point">
            RPA技术的推广使用，可推动财务团队的能力与价值发挥，提升财务运营质量与效率，实现人员结构调优，是财务职能转型重要的推手和引擎。
          </li>
        </ul>
      </div>
    </div>
    <div class="view-carousel">
      <img src="../assets/images/carousel_bg_new@2.png" />
      <div class="left-arrow arrow">
        <arrowMove></arrowMove>
      </div>
      <div class="right-arrow arrow">
        <arrowMove></arrowMove>
      </div>
      <!-- 这里的左右和left,right是反的，代码写乱了不知道为啥讲究用 -->
      <div class="carousel-item" @mouseover="ishover('right')" @mouseleave="out" :class="carousels[0]"><carouselLeft></carouselLeft></div>
      <div class="carousel-item import-page-box" :class="carousels[1]">
        <div class="import-page" @mouseover="ishover('center')" @mouseleave="out" :style="{ opacity: importPageOpac }"><singlePage></singlePage></div>
      </div>
      <div class="carousel-item" @mouseover="ishover('left')" @mouseleave="out" :class="carousels[2]"><carouselRight></carouselRight></div>
    </div>
  </div>
</template>
<script>
import singlePage from '@/views/index.single.view.new.vue'
import carouselLeft from '@/components/carouIndex/carousel.item.left.vue'
import carouselRight from '@/components/carouIndex/carousel.item.right.vue'
import arrowMove from '@/components/index/arrowMove.vue'
export default {
  name: 'Index',
  data() {
    return {
      carousels: ['left', 'center', 'right'],
      //   carousels: ['left', 'right', 'center'], //这个是嵌入页面显示的
      //   carousels: ['right', 'center', 'left'],
      //   carousels: ['center', 'left', 'right'],
      importPageOpac: 0,
      ishoverCenterItem: false
    }
  },
  created() {},
  components: {
    carouselLeft,
    carouselRight,
    singlePage,
    arrowMove
  },
  computed: {},
  methods: {
    out() {
      this.ishoverCenterItem = false
    },
    ishover(p) {
      console.log(this.carousels[0], p)
      this.ishoverCenterItem = this.carousels[0] === p
    },
    carouselsPage() {
      const copy = this.carousels.slice(0)
      copy.unshift(copy[copy.length - 1])

      copy.length = copy.length - 1
      if (!this.ishoverCenterItem) {
        this.carousels = copy
      }
      setTimeout(() => {
        this.carouselsPage()
      }, 8000)
    }
  },
  mounted() {
    this.carouselsPage()
    setTimeout(() => {
      this.importPageOpac = 1
    }, 500)
  }
}
</script>
<style lang="scss" scoped>
.all-view {
  width: 100%;
  margin-top: 25 * $height;
  .view-desc {
    height: 258 * $height;
    padding-top: 25 * $height;
    padding-left: 20 * $width;
    padding-right: 20 * $width;
    background: url('../assets/images/all_textbg_new@2.png') no-repeat;
    background-size: cover;
    display: flex;
    align-items: flex-start;
    .item {
      width: 29%;
      margin-left: 2.5%;
      position: relative;
      &::before {
        content: '';
        display: block;
        position: absolute;
        height: 250 * $height;
        width: 2 * $width;
        background-image: linear-gradient(0deg, rgba(5, 255, 255, 0), rgba(5, 255, 255, 0.2), rgba(5, 255, 255, 0.8), rgba(5, 255, 255, 0.2), rgba(5, 255, 255, 0));
        left: -20 * $width;
        top: -20 * $height;
      }
      &:nth-child(1) {
        margin-left: 0.7%;
      }
      &:nth-child(1)::before {
        display: none;
      }
      .title {
        display: flex;
        height: 40 * $height;
        .t-text {
          height: 26 * $height;
          line-height: 26 * $height;
          font-size: 23 * $font;
          margin-left: 10 * $width;
          font-weight: bold;
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
          line-height: 27 * $height;
          font-size: 17 * $font;
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
  .view-carousel {
    margin-top: 24 * $height;
    height: 660 * $height;
    position: relative;
    img {
      position: absolute;
      left: -5%;
      top: -10%;
      width: 110%;
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
    .import-page-box {
      //   position: relative;
      padding-top: 30 * $height;
      .import-page {
        transform: scale(0.57);
        transform-origin: left top;
        // position: absolute;
        // left: 0;
        // top: 0;
      }
    }
    .center {
      left: 410 * $width;
      background: url('../assets/images/ca_center@1.png') no-repeat;
      background-size: contain;
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
    cursor: pointer;
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
    cursor: pointer;
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
