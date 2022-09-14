const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const dependencies = require("./package.json").dependencies;
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "IL";
  const projectName = "train";
  const filename = `${orgName}-${projectName}`;
  const isProduction = argv.p || argv.mode === "production";

  return {
    mode: isProduction ? "production" : "development",
    entry: path.resolve(process.cwd(), `src/IL-train`),
    output: {
      filename: `${filename}.js`,
      path: path.resolve(process.cwd(), "dist"),
      uniqueName: projectName,
      devtoolNamespace: `${projectName}`,
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: {
            loader: require.resolve("babel-loader", { paths: [__dirname] }),
          },
        },
        {
          test: /\.(bmp|png|svg|jpg|jpeg|gif|webp)$/i,
          exclude: /node_modules/,
          type: "asset/resource",
        },
        {
          test: /\.html$/i,
          exclude: [/node_modules/, /\.vue\.html$/],
          type: "asset/source",
        },
        {
          test: /\.css$/i,
          type: "asset/source",
          use: ["style-loader", "css-loader"]
        },
      ],
    },
    devtool: "source-map",
    devServer: {
      port: 3002,
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      client: {
        webSocketURL: {
          hostname: "localhost",
        },
      },
      allowedHosts: "all",
    },
    plugins: [
      webpackConfigEnv.analyze
        ? false
        : new ForkTsCheckerWebpackPlugin({
            typescript: {
              mode: "write-references",
            },
          }),
      new ModuleFederationPlugin({
        name: projectName,
        filename: `${filename}-remote.js`,
        library: { type: "var", name: projectName },
        exposes: {
          ".": `./src/IL-train`,
        },
        remotes: {},
        shared: {
          ...dependencies,
          react: {
            singleton: true,
            requiredVersion: dependencies["react"],
          },
          "react-dom": {
            singleton: true,
            requiredVersion: dependencies["react-dom"],
          },
        },
      }),
    ].filter(Boolean),
    resolve: {
      extensions: [".mjs", ".js", ".jsx", ".wasm", ".json", ".ts", ".tsx"],
    },
  };
};


