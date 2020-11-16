<template>
  <div class="carousel-item-right">
    <div class="top">
      <div class="top-left">
        <ItemRightLight></ItemRightLight>
      </div>
      <div class="top-right">
        <ItemRighPath></ItemRighPath>
      </div>
    </div>
    <div class="bottom">
      <ul class="list list1">
        <li class="item">
          <div class="title">
            <div class="icon-box icon1"></div>
            <div class="text">无人值守</div>
          </div>
          <div class="desc">后台部署，云端运行</div>
        </li>
        <li class="item">
          <div class="title">
            <div class="icon-box icon2"></div>
            <div class="text">有人值守</div>
          </div>
          <div class="desc">前台应用，人机交互</div>
        </li>
        <li class="item">
          <div class="title">
            <div class="icon-box icon3"></div>
            <div class="text">高效准确</div>
          </div>
          <div class="desc">业务操作准确性高达100%</div>
        </li>
        <li class="item">
          <div class="title">
            <div class="icon-box icon4"></div>
            <div class="text">灵活轻量</div>
          </div>
          <div class="desc">轻量的自动化工具，快速开发、部署</div>
        </li>
        <li class="item">
          <div class="title">
            <div class="icon-box icon5"></div>
            <div class="text">安全合规</div>
          </div>
          <div class="desc">基于规则设计，符合业务规范</div>
        </li>
      </ul>
      <ul class="list list2">
        <li class="item">
          <div class="title">
            <div class="icon-box icon6"></div>
            <div class="text">操作可追溯</div>
          </div>
          <div class="desc">具备机器人操作日志，执行情况全记录</div>
        </li>
        <li class="item">
          <div class="title">
            <div class="icon-box icon7"></div>
            <div class="text">开放智能</div>
          </div>
          <div class="desc">可集成OCR、NLP等各类AI能力</div>
        </li>
        <li class="item">
          <div class="title">
            <div class="icon-box icon8"></div>
            <div class="text">非侵入模式</div>
          </div>
          <div class="desc">零接口，不改变现有系统</div>
        </li>
        <li class="item">
          <div class="title">
            <div class="icon-box icon9"></div>
            <div class="text">无时间限制</div>
          </div>
          <div class="desc">可实现7*24小时无休工作</div>
        </li>
        <li class="item">
          <div class="title">
            <div class="icon-box icon10"></div>
            <div class="text">无地域限制</div>
          </div>
          <div class="desc">
            不受员工所在地限制，机器人远程协助
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import ItemRightLight from '@/components/carouIndex/item.right.light.vue'
import ItemRighPath from '@/components/carouIndex/item.right.path.vue'
export default {
  data() {
    return {}
  },
  created() {},
  components: {
    ItemRightLight,
    ItemRighPath
  },
  computed: {},
  methods: {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
.carousel-item-right {
  height: 100%;
  .top {
    height: 50%;
    display: flex;
    .top-left {
      width: 25%;
      height: 100%;
    }
    .top-right {
      flex: 1;
      height: 100%;
    }
  }
  .bottom {
    height: 50%;
    padding: 0 55 * $width;
    .list {
      height: 45%;
      display: flex;
      .item {
        flex: 1;
        height: 100%;
        margin-left: 2%;
        font-size: 15 * $font;
        &:nth-child(1) {
          margin-left: 0;
        }
        .title {
          height: 38 * $height;
          border-radius: 3 * $width;
          box-shadow: inset 0px 0px 15px 5px rgba(25, 125, 240, 0.349);
          display: flex;
          align-items: center;
          font-size: 16 * $font;
          .icon-box {
            margin-left: 10 * $width;
            width: 24 * $width;
            height: 24 * $height;
            background: url('../../assets/images/indexright/css_sprites.png');
            background-size: 117 * $width 90 * $height;
          }
          .icon1 {
            background-position: -4 * $width -4 * $height;
          }
          .icon2 {
            background-position: -34 * $width -4 * $height;
          }
          .icon3 {
            background-position: -64 * $width -4 * $height;
          }
          .icon4 {
            background-position: -94 * $width -4 * $height;
          }
          .icon5 {
            background-position: -4 * $width -34 * $height;
          }
          .icon6 {
            background-position: -34 * $width -34 * $height;
          }
          .icon7 {
            background-position: -64 * $width -34 * $height;
          }
          .icon8 {
            background-position: -94 * $width -34 * $height;
          }
          .icon9 {
            background-position: -4 * $width -64 * $height;
          }
          .icon10 {
            background-position: -34 * $width -64 * $height;
          }
          .text {
            flex: 1;
            padding-left: 5 * $font;
            height: 30 * $height;
            line-height: 30 * $height;
            font-weight: bold;
          }
        }
        .desc {
          height: 90 * $height;
          line-height: 22 * $font;
          padding: 15 * $width 15 * $height;
        }
      }
    }
  }
}
</style>
