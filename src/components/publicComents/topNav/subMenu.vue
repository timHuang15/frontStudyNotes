<!--  -->
<template>
  <el-submenu :index="nav.index + ''">
    <template slot="title">{{ nav.label }}</template>
    <template v-for="n in nav.children">
      <subMenu
        v-if="n.children && n.children.length > 0"
        :key="n.id"
        :nav="n"
        :changeRouter="changeRouter"
      />
      <menuItem v-else :key="n.id" :nav="n" :changeRouter="changeRouter" />
    </template>
  </el-submenu>
</template>

<script>
import menuItem from '../topNav/menuItem'
export default {
  name: 'subMenu',
  props: {
    nav: { type: Object, required: true },
    changeRouter: { type: Function }
  },
  components: {
    menuItem
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang='scss' scoped>
</style>
