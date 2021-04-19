<!-- css目录树 -->
<template>
  <div>
    <el-row>
      <el-col :span="4"
        ><el-input placeholder="输入关键字进行过滤" v-model="filterText">
        </el-input>

        <el-tree
          class="filter-tree"
          :data="data"
          :props="defaultProps"
          default-expand-all
          :filter-node-method="filterNode"
          ref="tree"
          @node-click="nodeClick"
        >
        </el-tree
      ></el-col>
      <el-col :span="20"
        ><router-view />
        <component :is="showComp"></component>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import shape from '../../cssStudy/shape'
import threesomeWingLayout from '../../cssStudy/threesomeWingLayout'
import flexLayout from '../../cssStudy/flexLayout'
import position from '../../cssStudy/position'

export default {
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    nodeClick(n, e) {
      const me = this
      me.showComp = n.comp
    }
  },

  data() {
    return {
      showComp: shape,
      filterText: '',
      data: [
        {
          id: 1,
          label: '形状',
          comp: shape,
          children: []
        },
        {
          id: 2,
          label: '双飞翼布局',
          comp: threesomeWingLayout,
          children: []
        },
        {
          id: 3,
          label: 'flex布局',
          comp: flexLayout,
          children: []
        },
        {
          id: 4,
          label: '定位',
          comp: position,
          children: []
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
