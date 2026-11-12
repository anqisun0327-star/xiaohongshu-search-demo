// The GitHub repository keeps index.html at its root. Publish only that page.
import { mkdir, copyFile } from "node:fs/promises";
await mkdir("public", { recursive: true });
await copyFile("index.html", "public/index.html");
console.log("Prepared public/index.html from the editable single-file demo.");
