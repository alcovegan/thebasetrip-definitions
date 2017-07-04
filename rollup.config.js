import buble from 'rollup-plugin-buble';

export default {
  entry: 'src/index.js',
  moduleName: 'thebasetrip-definitions',
  plugins: [
    buble()
  ],
  format: process.env.format,
  dest: `dist/index.${process.env.format}.js`
};