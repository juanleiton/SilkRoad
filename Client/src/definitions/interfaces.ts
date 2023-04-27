import HtmlWebpackPlugin from 'html-webpack-plugin'

export interface Iresolve {
  extensions: string[]
}

export interface Ioutput {
  filename: string
  path: string
}

export interface Irule {
  test: RegExp
  exclude?: RegExp
}

export interface Imodule {
  rules: Irule[]
}

export interface Idevserver {
  open: boolean
  hot: boolean
  liveReload: boolean
  static: string[]
  port: number
  compress: boolean
}

export interface IWebpackConfig {
  entry: String
  resolve: Iresolve
  output: Ioutput
  plugins: HtmlWebpackPlugin[]
  module: Imodule
  devServer: Idevserver
}
