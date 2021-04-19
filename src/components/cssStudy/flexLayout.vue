<!--  -->
<template>
  <div>
    <div class="box">
      <span class="item"></span>
      <span class="item"></span>
      <span class="item"></span>
    </div>
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
.box {
  width: 200px;
  height: 200px;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 20px;

  display: flex;
  justify-content: space-between;
}

.item {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #666;
}
.item:nth-child(2) {
  align-self: center;
}
.item:nth-child(3) {
  align-self: flex-end;
}
</style>
