const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // base: "/frontend-mentor-first/",
  transpileDependencies: true,
  publicPath:
    process.env.NODE_ENV === "production" ? "/frontend-mentor-first/" : "/",
});
