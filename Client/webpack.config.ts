import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { IWebpackConfig } from './src/definitions/interfaces'

const typescriptRule = {
  test: /\.tsx$/,
  exclude: /node_modules/,
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
    ],
    plugins: [
      '@babel/plugin-transform-runtime'
    ]
  }
}

const cssRule = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader', 'postcss-loader']
}

// const postcssRule = {
//   test: /\.css$/,
//   loader: 'postcss-loader',
//   options: {
//     plugins: [
//       'postcss-preset-env',
//       'tailwindcss'
//     ]
//   }
// }

export default (_env: unknown, argv: { mode: string }): IWebpackConfig => {
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
      hot: true,
      liveReload: true,
      static: ['./public'],
      port: 3000,
      compress: true
    }
  }
}
