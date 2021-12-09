module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [
            ".ios.js",
            ".android.js",
            ".js",
            ".ts",
            ".tsx",
            ".json",
            ".ttf",
          ],
          alias: {
            "@components": "./src/components",
            "@assets": "./src/assets",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@shared": "./src/shared",
            "@store": "./src/store",
          },
        },
      ],
    ],
  };
};
