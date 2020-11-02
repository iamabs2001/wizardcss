module.exports = [{
  entry: ['./src/wizardcss.scss'],
  module: {
    rules: [{
        test: /\.scss$/,
        use: [{
            loader: 'file-loader', options: { name: 'wizardcss.min.css' },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
    }]
  },
}];