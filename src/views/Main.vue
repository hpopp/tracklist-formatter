<template>
  <div class="main">
    <div class="flex-container">
      <div class="flex-item">
        <h3>Input</h3>
        <textarea
          v-model="inputContent"
          placeholder="Paste a CSV..."
          class="textbox"
        />
      </div>
      <div class="flex-item">
        <h3>Output</h3>
        <p class="textbox output">{{ outputContent }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Papa from "papaparse";

export default {
  name: "MainView",
  data() {
    return {
      inputContent: "",
      outputContent: "",
    };
  },
  watch: {
    inputContent(newContent, _oldContent) {
      // VDJ puts a weird prefix on exports.
      let formatted = newContent.trim().replace(/^(sep=,\n)/, "");

      let result = Papa.parse(formatted, { header: true });
      if (result.errors.length > 0) {
        let errors = result.errors
          .map((x) => `Track ${x["row"]}: ${x["message"]}`)
          .join("\n");
        this.outputContent = errors;
        return;
      }

      let data = result.data
        .map((x) => {
          if (x["Artist"] == "") {
            return x["Title"];
          }
          return `${x["Artist"]} - ${x["Title"]}`;
        })
        .join("\n");

      this.outputContent = data;
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
