const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const Icons = require("unplugin-icons/webpack");

const IconsResolver = require("unplugin-icons/resolver");

module.exports = defineConfig(() => {
  return {
    transpileDependencies: true,

    configureWebpack: {
      plugins: [
        // unplugin体系
        AutoImport({
          dts: "./auto-imports.d.ts",
          eslintrc: {
            enabled: true,
            globalsPropValue: "readonly",
          },
          imports: ["vue"],
          sourceMap: true,
          resolvers: [],
        }),
        Components({
          resolvers: [IconsResolver()],
        }),
        Icons({ scale: 1, compiler: "vue3" }),
      ],
    },
  };
});
