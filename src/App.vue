<template>
  <AppHeader />
  <MainView />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import MainView from "./views/MainView.vue";

export default {
  name: "App",
  components: {
    AppHeader,
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
</style>
