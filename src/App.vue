<template>
  <div id="app">
    <v-row>
      <v-col md="auto">
        <SideMenu/>
      </v-col>
      <v-col>
        <router-view/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu'
export default {
  name: 'App',
  components: {
    SideMenu
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
