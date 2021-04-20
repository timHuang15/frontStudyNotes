<template>
  <div class="contain">
    <h1>圣杯布局</h1>
    <div id="header">this is header</div>
    <div id="container"
         class="clearfix">
      <div id="center"
           class="column">this is center</div>
      <div id="left"
           class="column">this is left</div>
      <div id="right"
           class="column">this is right</div>
    </div>
    <div id="footer">this is footer</div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () { },
  methods: {}
}
</script>
<style lang='scss' scoped>
.contain {
  min-width: 550px;
}
#header {
  text-align: center;
  background-color: #f1f1f1;
}

#container {
  padding-left: 200px;
  padding-right: 150px;
}
#container .column {
  float: left;
}

#center {
  background-color: #ccc;
  height: 200px;
  width: 100%;
}
#left {
  position: relative;
  background-color: yellow;
  width: 200px;
  margin-left: -100%;
  right: 200px;
  height: 200px;
}
#right {
  background-color: red;
  width: 150px;
  margin-right: -150px;
  height: 200px;
}

#footer {
  text-align: center;
  background-color: #f1f1f1;
}

/* 手写 clearfix */
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
</style>
