<template>
  <div class="main">
    <div class="flex-container">
      <div class="flex-item">
        <h3>Input</h3>
        <textarea
          v-model="inputTracklist"
          placeholder="Paste a CSV..."
          class="textbox"
        />
      </div>
      <div class="flex-item">
        <h3>Output</h3>
        <p class="textbox output">{{ outputTracklist }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTracklist } from "../util/formatter.js";

export default {
  name: "MainView",
  data() {
    return {
      inputTracklist: "",
    };
  },
  computed: {
    outputTracklist() {
      if (this.inputTracklist === "") {
        return "";
      }
      return formatTracklist(this.inputTracklist);
    },
  },
};
</script>

<style scoped>
.main {
  box-sizing: border-box;
  height: 100%;
  min-height: 100%;
  padding: 1em;
  width: 100%;
}

.flex-container {
  display: flex;
  flex-direction: row;
  gap: 1em;
}

.flex-item {
  flex: 50%;
}

.textbox {
  box-sizing: border-box;
  height: 100%;
  padding: 1em;
  text-align: left;
  white-space: pre-line;
  width: 100%;
}

.output {
  background-color: #eee;
}
</style>
