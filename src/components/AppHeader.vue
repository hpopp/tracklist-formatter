<template>
  <nav class="navbar">
    <img src="~@/assets/stormdrain.jpg" width="44" />
    <span class="navbar-text">Tracklist Formatter</span>
    <span class="navbar-text gray">v0.2.1</span>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style>
.navbar-text {
  font-size: 1.2em;
  line-height: 44px;
  text-align: center;
}

.gray {
  color: #aaa;
}

.navbar {
  background-color: #222;
  color: #fff;
  display: flex;
  flex-direction: row;
  gap: 1em;
}
</style>
