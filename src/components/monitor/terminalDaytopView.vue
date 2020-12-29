<template>
  <div class="termi-day-top-view-box">
    <div class="termi-runing">
      <ul>
        <li class="runing-num">
          <span class="label">运行终端</span>
          <span class="num">{{ labeldata.run_terminal }}<i>个</i> </span>
        </li>
        <li class="runing-rate">
          <span class="label">占比</span>
          <span class="num num-rote">{{ labeldata.run_perent }}%</span>
        </li>
      </ul>
    </div>
    <div class="termi-other">
      <ul>
        <li class="free-num">
          <span class="label">空闲终端</span>
          <span class="num num-free">{{ labeldata.free_terminal }} <i>个</i></span>
        </li>
        <li class="exception-num">
          <span class="label">异常终端</span>
          <span class="num num-ex">{{ labeldata.exc_terminal }} <i>个</i></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    labeldata: {
      type: Object,
      required: false
    }
  },
  data() {
    return {}
  },
  created() {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
.termi-day-top-view-box {
  height: 156 * $height;
  margin-top: 2 * $height;
  padding: 20 * $height 20 * $width;
  display: flex;
  & > div {
    border: 2px solid rgba(6, 62, 95, 0.726);
    background-color: rgba(130, 196, 201, 0.089);
    border-radius: 6px;
    display: flex;
    align-items: center;
    padding-left: 20 * $width;
    padding-right: 10 * $width;
    ul {
      width: 100%;
    }
    li {
      display: flex;
      width: 100%;
      line-height: 35 * $height;
      span {
        flex: 1;
      }
      .label {
        font-size: 16 * $font;
        font-weight: bold;
      }
      .num {
        font-size: 24 * $font;
        font-weight: bold;
        i {
          font-size: 13 * $font;
          font-weight: bold;
        }
      }
    }
  }
  .termi-runing {
    flex: 1;
    .num-rote {
      font-size: 26 * $font;
    }
  }
  .termi-other {
    flex: 1;
    margin-left: 20 * $width;
    padding-left: 50 * $width;

    .num-ex {
      color: #ff3430;
    }
    .num-free {
      color: #1cd0a2;
    }
    li {
      position: relative;
      &::before {
        content: '';
        display: block;
        width: 16 * $width;
        height: 16 * $height;
        border-radius: 2 * $width;
        position: absolute;
        left: -32 * $width;
        top: 8 * $height;
      }
    }
    li.exception-num::before {
      background-color: #ff3430;
    }
    li.free-num::before {
      background-color: #1cd0a2;
    }
  }
}
</style>
