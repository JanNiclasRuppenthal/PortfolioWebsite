<template>
  <Header/>
</template>

<script>
import Header from './components/Header.vue'


export default {
  name: 'App',
  components: {
    Header,
}
}
</script>

<style>
#app, body, html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #121212;
  margin-top: 0px;
  min-height: 100%;

  margin-left: 5%;
  margin-right: 5%;
}

</style>
