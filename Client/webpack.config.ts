import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const typescriptRule = {
  test: /\.tsx$/,
  loader: 'babel-loader',
  options: {
    presets: [
      '@babel/preset-env',
      [
        '@babel/preset-react',
        {
          runtime: 'automatic'
        }
      ],
      '@babel/preset-typescript'
    ]
  }
}

const cssRule = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}

export default (_env: any, argv: any): any => { // args and return types should not be 'any'
  const { mode } = argv
  const isProduction = mode === 'production'
  return {
    entry: './src/index.tsx',
    resolve: {
      extensions: ['.tsx', '...']
    },
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build')
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './public/index.html' })
    ],
    module: {
      rules: [typescriptRule, cssRule]
    },
    devServer: {
      open: true,
      port: 3000,
      compress: true
    }
  }
}
