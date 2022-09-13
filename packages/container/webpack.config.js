const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { webpackLoadRemote } = require("../../webpack-load-remote");
const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  // const orgName = "IL";
  // const defaultConfig = singleSpaDefaults({
  //   orgName,
  //   projectName: "root-config",
  //   webpackConfigEnv,
  //   argv,
  //   disableHtmlGeneration: true,
  // });
  // console.log(webpackConfigEnv)
  // console.log(argv)
  // console.log(defaultConfig.module.rules)

  // const mergeRes=  merge(defaultConfig, {
  //   output: {
  //     publicPath: 'http://localhost:3000/',
  //   },
  //   // modify the webpack config however you'd like to by adding to this object
  //   plugins: [
  //     new HtmlWebpackPlugin({
  //       inject: false,
  //       template: "src/index.ejs",
  //       templateParameters: {
  //         isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
  //         orgName,
  //       },
  //     }),
  //     new ModuleFederationPlugin({
  //       name: 'root-config',
  //       library: { type: 'var', name: 'root-config' },
  //       filename: 'remoteEntry.js',
  //       remotes: {"@IL/classification": webpackLoadRemote("classification", 3001)},
  //       exposes: {},
  //       shared: [],
  //     }),
  //   ],
  // });
  // console.log(mergeRes)
  // return mergeRes
  const orgName = "IL";
  const projectName = "root-config";
  const filename = `${orgName}-${projectName}`;
  const isProduction = argv.p || argv.mode === "production";

  return {
    mode: isProduction ? "production" : "development",
    entry: {
      [filename]: path.resolve(process.cwd(), `src/${filename}`),
    },
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
      ],
    },
    devtool: "source-map",
    devServer: {
      port: 3000,
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
      proxy: {
        "/api": {
          target: "https://my-api.com",
          pathRewrite: {
            "^/api": "",
          },
          changeOrigin: true,
        },
      },
    },
    plugins: [
      webpackConfigEnv.analyze
        ? false
        : new ForkTsCheckerWebpackPlugin({
            typescript: {
              mode: "write-references",
            },
          }),
      new HtmlWebpackPlugin({
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
      new ModuleFederationPlugin({
        name: projectName,
        library: { type: "var", name: projectName },
        remotes: {
          "@IL/classification": webpackLoadRemote("classification", 3001),
          "@IL/train": webpackLoadRemote("train", 3002),
          "@IL/header": webpackLoadRemote("header", 3003),
          // "@my-org/reports": webpackLoadRemote("reports", 3003),
        },
        shared: {},
      }),
    ].filter(Boolean),
    resolve: {
      extensions: [".mjs", ".js", ".jsx", ".wasm", ".json", ".ts"],
    },
  };
};
