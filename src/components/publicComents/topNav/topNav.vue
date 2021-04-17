<!--  -->
<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect()"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <template v-for="n in nav">
        <subMenu
          v-if="n.children && n.children.length > 0"
          :key="n.id"
          :nav="n"
          :changeRouter="changeRouter"
        />
        <menuItem v-else :key="n.id" :nav="n" :changeRouter="changeRouter" />
      </template>
    </el-menu>
  </div>
</template>

<script>
import subMenu from '../topNav/subMenu'
import menuItem from '../topNav/menuItem'
export default {
  name: 'topNav',
  props: {
    nav: {
      type: Array,
      required: true
    },
    changeRouter: {
      type: Function
    }
  },
  components: {
    subMenu,
    menuItem
  },
  data() {
    return {
      activeIndex: '1'
    }
  },
  mounted() {
    // console.log(2)
    // console.log(this.nav)
  },
  methods: {
    handleSelect(key, keyPath) {}
  }
}
</script>
<style lang='scss' scoped>
</style>
