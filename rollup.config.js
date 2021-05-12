import resolve from '@rollup/plugin-node-resolve'
import image from '@rollup/plugin-image'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'

export default {
  input: './index.ts', // entry point
  output: [
    {
      dir: 'dist', // output directiory
      format: 'esm', // esm, cjs, umd
      exports: 'named',
      sourcemap: true
    }
  ],
  preserveModules: true,
  plugins: [
    peerDepsExternal(),
    image(),
    resolve(),
    commonjs({
      include: /node_modules/ // trasfile cjs to es6 then rollup can handle it
    }),
    // babel({
    //   babelHelpers: 'runtime',
    //   exclude: 'node_modules/**',
    //   extensions: ['.ts', '.tsx']
    // }),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extract: false,
      modules: true,
      use: ['sass']
    })
  ]
}
