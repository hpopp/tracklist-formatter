<template>
  <nav class="navbar">
    <strong>Tracklist Formatter</strong>
  </nav>
  <MainView />
</template>

<script>
import MainView from "./views/Main.vue";

export default {
  name: "App",
  components: {
    MainView,
  },
};
</script>

<style>
html,
body {
  margin: 0;
}

#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

.navbar {
  background-color: #222;
  color: white;
  padding: 1em;
  text-align: left;
}
</style>
