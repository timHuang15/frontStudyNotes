<template>
  <div>
      <h1>水平对齐</h1>
    <div class="container container-1">
        <span>一段文字</span>
    </div>

    <div class="container container-2">
        <div class="item">
            this is block item
        </div>
    </div>

    <div class="container container-3">
        <div class="item">
            this is absolute item
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {

  }
}

</script>
<style scoped>
.container {
    border: 1px solid #ccc;
    margin: 10px;
    padding: 10px;
}
.item {
    background-color: #ccc;
}

.container-1 {
    text-align: center;
}

.container-2 .item {
    width: 500px;
    margin: auto;
}

.container-3 {
    position: relative;
    height: 100px;
}
.container-3 .item {
    width: 300px;
    height: 100px;
    position: absolute;
    left: 50%;
    margin-left: -150px;
}
</style>
