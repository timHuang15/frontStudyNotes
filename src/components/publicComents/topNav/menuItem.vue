<!--  -->
<template>
  <el-menu-item :index="nav.id + ''" @click="changeRouter(nav)">{{
    nav.label
  }}</el-menu-item>
</template>

<script>
export default {
  props: {
    nav: { type: Object, required: true },
    changeRouter: { type: Function }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang='scss' scoped>
</style>
