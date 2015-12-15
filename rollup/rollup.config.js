import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import npm from 'rollup-plugin-npm'

export default {
  entry: './shared/main',
  dest: './build/bundle.rollup.js',
	plugins: [
    npm({
      jsmain: true,
      main: true
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  format: 'iife'
}
