import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

const config = {
  entry: {
    popup: {
      import: "./src/popup.ts",
    },
    content: {
      import: "./src/content.ts",
    },
    background: {
      import: "./src/background.ts",
    },
  },
  output: {
    filename: "[name].js",
    path: path.resolve(process.cwd(), "dist"),
    publicPath: "/",
    clean: true,
  },
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      filename: "[name].html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/manifest.json", to: "manifest.json" },
        { from: "./src/icons", to: "icons" },
      ],
    }),
  ],
  optimization: {
    usedExports: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};

export default config;
