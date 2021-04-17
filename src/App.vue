<template>
  <div id="app">
    <TopNav :nav="nav" :changeRouter="changeRouter" />
    <router-view />
  </div>
</template>
<script>
import TopNav from '@/components/publicComents/topNav/topNav.vue'
export default {
  components: {
    TopNav
  },
  data() {
    return {
      nav: []
    }
  },
  created() {
    this.createNav()
  },
  mounted() {},
  methods: {
    createNav() {
      const me = this
      const tempNav = [
        { id: '1', label: 'Css', path: '/css' },
        {
          id: '2',
          label: 'Es',
          path: '',
          children: [{ id: '2-1', label: 'setTime', path: '/esTest' }]
        }
      ]
      me.nav = tempNav
    },
    changeRouter(nav) {
      console.log(nav)
      this.$router.push(nav.path)
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
