import pkg from './package.json';
import tsPlugin from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'esm',
    },
  ],
  external: ['react'],
  plugins: [
    tsPlugin(),
    babel({
      babelHelpers: 'bundled',
    }),
    resolve({
      moduleDirectories: ['node_modules'],
    }),
  ],
};
