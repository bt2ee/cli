import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'

export default {
  banner: '#!/usr/bin/env node',
  input: './bin/index.js',
  plugins: [
    replace({
      delimiters: ['', ''],
      '#!/usr/bin/env node': ''
    }),
    babel({
      presets: [
        [
          '@babel/preset-env',
          {
            targets: { node: '8' },
            modules: false,
            loose: true
          }
        ]
      ]
    }),
    terser({
      output: { comments: false }
    }),
    process.env.NODE_ENV === 'production' && uglify()
  ],
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true
    }
  ]
}
