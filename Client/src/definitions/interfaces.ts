import HtmlWebpackPlugin from 'html-webpack-plugin'

export interface Irule {
  test: RegExp
  exclude?: RegExp
}

export interface IWebpackConfig {
  entry: String
  resolve: {
    extensions: string[]
  }
  output: {
    filename: string
    path: string
  }
  plugins: HtmlWebpackPlugin[]
  module: {
    rules: Array<{ test: RegExp, exclude?: RegExp }>
  }
  devServer: {
    open: boolean
    hot: boolean
    liveReload: boolean
    static: string[]
    port: number
    compress: boolean
  }
}
