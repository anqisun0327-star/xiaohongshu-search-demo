import { defineConfig } from "cf/config";

export default defineConfig({
  accountId: "75035cd34be45301cd10b74c63cc733c",
  worker: {
    name: "xiaohongshu-search-demo",
    compatibilityDate: "2026-11-13",
    workersDev: true,
    domains: ["anqisun.cloud"],
    assets: { htmlHandling: "auto-trailing-slash", notFoundHandling: "single-page-application" },
  },
});
