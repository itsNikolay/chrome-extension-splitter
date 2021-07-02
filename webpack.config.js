import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config = {
  mode: "development",
  entry: {
    popup: {
      import: "./src/popup.ts",
      dependOn: "shared",
    },
    shared: "lodash",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(process.cwd(), "dist"),
    publicPath: "/",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      filename: "[name].html",
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
