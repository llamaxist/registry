// run this script with `bun`:
// bun run local.ts
await fetch("https://llamaxist.github.io/registry/manifest.json")
    .then(response => response.json())
    .then(data => { console.log(data); })
