<template>
  <div id="app">
    <router-link to="/example1">example1</router-link>
    <router-link to="/example2">example2</router-link>
    <router-link to="/example3">example3</router-link>
    <router-link to="/example4">example4</router-link>
    <router-link to="/example5">example5</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
