<!--  -->
<template>
  <div>
    三角形
    <div class="triangle"></div>
    等边三角形(高是(边长1/2)的√3／3倍,即tan(30)=(边/2)/高=√3／3)
    <div class="EqTriangle"></div>
    0.5px直线
    <div class="line05"></div>
    1px直线
    <div class="line10"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang='scss' scoped>
.triangle {
  width: 0px;
  height: 0px;
  border: 50px solid;
  border-color: transparent transparent red transparent;
}
.EqTriangle {
  border-left: 23px solid red;
  border-right: 23px solid blue;
  border-bottom: 40px solid lightblue;
  width: 0px;
  height: 0px;
}
.line05 {
  height: 1px;
  transform: scaleY(0.5);
  background-color: black;
}
.line10 {
  height: 1px;
  background-color: black;
}
</style>
