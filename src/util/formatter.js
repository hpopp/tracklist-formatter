import Papa from "papaparse";

function formatTracklist(input) {
  let trimmed = stripLeadingVDJGarbage(input);

  let result = Papa.parse(trimmed, { header: true });
  if (result.errors.length > 0) {
    return concatErrors(result.errors);
  }

  return result.data.map((x) => formatLine(x)).join("\n");
}

function stripLeadingVDJGarbage(input) {
  // VDJ puts a weird prefix on exports.
  return input.trim().replace(/^(sep=,\n)/, "");
}

function concatErrors(errors) {
  return errors.map((x) => `Track ${x["row"]}: ${x["message"]}`).join("\n");
}

function formatLine(data) {
  if (data["Artist"] == "") {
    return data["Title"] || data["Track Title"];
  }
  return `${data["Artist"]} - ${data["Title"] || data["Track Title"]}`;
}

export { formatTracklist };
