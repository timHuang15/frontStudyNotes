<!--  -->
<template>
  <div class="contain">
    <p>aaaaaaa</p>
    <div class="relative1">
      <div class="relative2">
        <div class="absolute">this is absolute</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}
</script>
<style lang='scss' scoped>
.contain {
  margin: 20px;
}
.relative1 {
  position: relative;
  width: 600px;
  height: 300px;
  border: 1px solid rgb(243, 6, 6);
}
.relative2 {
  position: relative;
  width: 400px;
  height: 200px;
  border: 1px solid #ccc;

  top: 50px;
  left: 100px;
}
.absolute {
  position: absolute;
  width: 200px;
  height: 100px;
  border: 1px solid blue;

  top: 100px;
  left: 600px;
}
</style>
