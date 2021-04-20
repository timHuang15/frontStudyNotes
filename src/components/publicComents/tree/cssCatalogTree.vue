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
import grailLayout from '../../cssStudy/grailLayout'
import threesomeWingLayout from '../../cssStudy/threesomeWingLayout'
import flexLayout from '../../cssStudy/flexLayout'
import position from '../../cssStudy/position'
import horizontalAlignment from '../../cssStudy/horizontalAlignment'
import verticalAlignment from '../../cssStudy/verticalAlignment'
import marginNegative from '../../cssStudy/marginNegative'

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
          label: '圣杯布局',
          comp: grailLayout,
          children: []
        },
        {
          id: 4,
          label: 'flex布局',
          comp: flexLayout,
          children: []
        },
        {
          id: 5,
          label: '定位',
          comp: position,
          children: []
        },
        {
          id: 6,
          label: '水平对齐',
          comp: horizontalAlignment,
          children: []
        },
        {
          id: 7,
          label: '垂直对齐',
          comp: verticalAlignment,
          children: []
        },
        {
          id: 8,
          label: 'margin负值问题',
          comp: marginNegative,
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
