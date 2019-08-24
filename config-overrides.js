/* eslint-disable */
const webpack = require('webpack');

module.exports = (config, env) => {
  config.plugins.push(
    new webpack.ProvidePlugin({
      WaveSurfer: 'wavesurfer.js'
    })
  );
  config.resolve.alias.wavesurfer = require.resolve('wavesurfer.js');
  return config
}