const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: false,
  productionSourceMap: false,
  configureWebpack: {},
  pages: {
    index: {
      title: "The Loam Rangers",
      entry: "src/main.ts",
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import 'primevue/resources/themes/aura-light-green/theme.css';
        @import "@theinsideline/common/style.css";
        @import "@theinsideline/common/scss/main.scss";
          `,
      },
    },
  },
});