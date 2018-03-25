<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <todo></todo>
    <Footer></Footer>
  </div>
</template>

<script>
import './assets/css/global.css';
import Header from './todo/header.vue';
import Footer from './todo/footer.vue';
import todo from './todo/todo.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    todo,
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  left:0;
  top:0;
  bottom: 0;
  width: 100%;
}
#cover{
  position: absolute;
  left:0;
  top:0;
  right:0;
  bottom: 0;
  background-color: #999;
  opacity: .75;
  z-index:-1;
  width: 100%;
}
</style>
