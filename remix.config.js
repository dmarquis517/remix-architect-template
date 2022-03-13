/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/_static/build/",
  serverBuildPath: "server/build",
  devServerPort: 8002,
  ignoredRouteFiles: [".*"],
  serverBuildTarget: "arc"
};
