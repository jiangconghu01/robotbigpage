<template>
  <div class="carousel-item-left">
    <ul class="year-list">
      <li class="item current">
        <span class="circle"
          ><img src="../../assets/images/circle_point@2.png" alt="" />
          <span class="label">初步尝试</span>
        </span>
        <span class="year">{{ yearlist[0] }}</span>
        <span class="line"></span>
      </li>
      <li class="item next">
        <span class="circle"
          ><img src="../../assets/images/circle_point@2.png" alt="" />
          <span class="label">自主研发</span>
        </span>
        <span class="year">{{ yearlist[1] }}</span>
        <span class="line"></span>
      </li>
      <li class="item future">
        <span class="circle"
          ><img src="../../assets/images/circle_point@2.png" alt="" />
          <span class="label">全面推广</span>
        </span>
        <span class="year">{{ yearlist[2] }}</span>
        <span class="line"></span>
      </li>
    </ul>
    <ul class="circle-list">
      <li class="item current">
        <div class="out-text"><img src="../../assets/images/out-circle-text@2.png" alt="" /></div>
        <div class="circle"></div>
        <div class="arrow">
          <div class="layout layout-1"></div>
          <div class="layout layout-2"></div>
        </div>
        <div class="inner-box">
          <ItemLeftLight></ItemLeftLight>
        </div>
        <div class="desc-text">
          <p>全国范围内</p>
          <p>500余个机器人客户端</p>
          <p>10大类财务机器人</p>
        </div>
      </li>
      <li class="item next">
        <div class="out-text"><img src="../../assets/images/out-circle-text@2.png" alt="" /></div>
        <div class="circle"></div>
        <div class="arrow">
          <div class="layout layout-1"></div>
          <div class="layout layout-2"></div>
        </div>
        <div class="inner-box">
          <ItemLeftLight :robot-number="7"></ItemLeftLight>
        </div>
        <div class="desc-text">
          <p>探索自主研发模式</p>
          <p>支持全网财务类需求</p>
        </div>
      </li>
      <li class="item future">
        <div class="out-text"><img src="../../assets/images/out-circle-text@2.png" alt="" /></div>
        <div class="circle">
          <img src="../../assets/images/innder_circle_text@2.png" alt="" />
          <div class="inner-circle"></div>
        </div>
        <div class="arrow">
          <div class="layout layout-1"></div>
          <div class="layout layout-2"></div>
        </div>
        <div class="inner-box">
          <ItemLeftLight :robot-number="8"></ItemLeftLight>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import ItemLeftLight from '@/components/carouIndex/item.left.ligth.vue'
export default {
  data() {
    return {
      yearlist: []
    }
  },
  created() {
    this.getYearList()
  },
  components: {
    ItemLeftLight
  },
  computed: {},
  methods: {
    getYearList() {
      const date = new Date()
      this.yearlist = [date.getFullYear(), date.getFullYear() + 1, '未来']
    }
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
.carousel-item-left {
  font-size: 22 * $font;
  padding-top: 80 * $height;
  .year-list {
    display: flex;
    // margin: 0 auto;
    margin-left: 120 * $width;
    width: 930 * $width;
    .item {
      display: flex;
      align-items: center;
      height: 30 * $height;
      margin-left: 20 * $width;
      .circle {
        position: relative;
        img {
          width: 24 * $width;
        }
        .label {
          background-image: url('../../assets/images/index_left_label2.png');
          background-repeat: no-repeat;
          background-size: contain;
          font-weight: 700;
        }
      }

      .year {
        margin-left: 15 * $width;
        font-weight: bold;
      }
      .line {
        margin-left: 15 * $width;
        height: 2px;
        background-color: #1ea9ff;
        flex: 1;
      }
      .label {
        position: absolute;
        top: 40 * $height;
        left: -20 * $width;
        font-size: 18 * $font;
        width: 116 * $width;
        height: 59 * $height;
        line-height: 65 * $height;
        text-align: center;
      }
    }
    .current {
      width: 360 * $width;
      //   .circle .label {
      //     background-image: url('../../assets/images/index_left_label.png');
      //   }
      //   .label {
      //     position: absolute;
      //     left: -40 * $width;
      //     width: 173 * $width;
      //   }
    }
    .next {
      width: 360 * $width;
    }
  }
  .circle-list {
    display: flex;
    margin-top: 120 * $height;
    .item {
      width: 270 * $width;
      height: 270 * $height;
      position: relative;
      & > div {
        @include center;
      }
      .out-text {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          margin-top: 24 * $height;
        }
        animation: rotate 20s linear infinite;
      }
      .circle {
        width: 88%;
        height: 88%;
        border-radius: 50%;
        border: 2px solid #05e5ff;
      }
      .arrow {
        width: 88%;
        height: 88%;
        animation: rotate 15s linear infinite;
        .layout {
          position: absolute;
          width: 100%;
          height: 100%;
          &::before,
          &::after {
            box-sizing: border-box;
            content: '';
            width: 6 * $width;
            height: 10 * $height;
            display: block;
            // background-color: #4ebafd;
            border-right: 6 * $width solid transparent;
            border-left: 6 * $width solid transparent;
            border-top: 10 * $width solid transparent;
            border-bottom: 10 * $width solid #4ebafd;
          }
        }
        .layout-1 {
          &::before {
            @include Ycenter;
            left: -4 * $width;
          }
          &::after {
            @include Ycenter;
            right: -4 * $width;
            border-right: 6 * $width solid transparent;
            border-left: 6 * $width solid transparent;
            border-top: 10 * $width solid #4ebafd;
            border-bottom: 10 * $width solid transparent;
          }
        }
        .layout-2 {
          &::before {
            @include Xcenter;
            top: -4 * $width;
            width: 10 * $width;
            height: 6 * $height;
            border-right: 10 * $width solid transparent;
            border-left: 10 * $width solid #4ebafd;
            border-top: 6 * $width solid transparent;
            border-bottom: 6 * $width solid transparent;
          }
          &::after {
            @include Xcenter;
            bottom: -4 * $width;
            width: 10 * $width;
            height: 6 * $height;
            border-right: 10 * $width solid #4ebafd;
            border-left: 10 * $width solid transparent;
            border-top: 6 * $width solid transparent;
            border-bottom: 6 * $width solid transparent;
          }
        }
      }
      .inner-box {
        width: 65%;
        height: 80%;
        display: flex;
        align-items: flex-end;
      }
      .desc-text {
        width: 80%;
        height: 30%;
        line-height: 20 * $font;
        font-size: 16 * $font;

        position: absolute;
        transform: translateY(0) translateX(0);
        top: 20%;
        left: 10%;
        p {
          text-align: center;
        }
      }
    }
    .current {
      margin-left: 50 * $width;
      .circle {
        border: 2px dashed #05e5ff;
      }
    }
    .next {
      margin: 0 95 * $width;
    }
    .future {
      margin-right: 50 * $width;
      .circle {
        img {
          width: 80%;
          @include center;
          animation: rotate 35s linear infinite;
        }
        .inner-circle {
          width: 70%;
          height: 70%;

          @include center;
          border-radius: 50%;
          border: 2px solid #05e5ff;
        }
      }
      .inner-box {
        width: 58%;
        height: 80%;
        align-items: center;
      }
    }
  }
}
@keyframes rotate {
  0% {
    transform: translateY(-50%) translateX(-50%) rotate(0);
  }
  100% {
    transform: translateY(-50%) translateX(-50%) rotate(360deg);
  }
}
</style>
