<template>
  <div>
    <h1>margin负值问题</h1>

    <el-row>
      <el-col :span="8"><p>用于测试 margin top bottom 的负数情况</p></el-col>
      <el-col :span="8"><el-input v-model="mgTop" placeholder="margin-top"></el-input></el-col>
      <el-col :span="8"><el-input v-model="mgBottom" placeholder="margin-bottom"></el-input></el-col>
    </el-row>
    <div class="container">
        <div class="item border-blue">
            this is item 1
        </div>
        <div class="item border-red" :style="{'margin-top':mgTop+'px','margin-bottom':mgBottom+'px'}">
            this is item 2
        </div>
    </div>
    <el-row>
      <el-col :span="8"><p>用于测试 margin left right 的负数情况</p></el-col>
      <el-col :span="8"><el-input v-model="mgLeft" placeholder="margin-left"></el-input></el-col>
      <el-col :span="8"><el-input v-model="mgRight" placeholder="margin-right"></el-input></el-col>
    </el-row>
    <div class="container clearfix">
        <div class="item border-blue float-left" :style="{'margin-right':mgRight+'px'}">
            this is item 3
        </div>
        <div class="item border-red float-left" :style="{'margin-left':mgLeft+'px'}">
            this is item 4
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mgTop: '',
      mgBottom: '',
      mgLeft: '',
      mgRight: ''
    }
  },
  mounted() {

  },
  methods: {

  }
}

</script>
<style scoped>
.float-left {
            float: left;
        }
        .clearfix:after {
            content: '';
            display: table;
            clear: both;
        }

        .container {
            border: 1px solid #ccc;
            padding: 10px;
        }
        .container .item {
            width: 100px;
            height: 100px;
        }
        .container .border-blue {
            border: 1px solid blue;
        }
        .container .border-red {
            border: 1px solid red;
        }
</style>
