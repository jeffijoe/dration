import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

const tsOpts = {
  cacheRoot: './node_modules/.rpt2',
  typescript: require('typescript'),
  tsconfig: 'tsconfig.build.json',
  tsconfigOverride: {
    compilerOptions: {
      // Don't emit declarations, that's done by the regular build.
      declaration: false,
      module: 'ESNext'
    }
  }
}

export default [
  // Build 1: ES6 modules for Node.
  {
    input: 'src/index.ts',
    treeshake: { pureExternalModules: true },
    output: [
      {
        file: 'lib/dration.module.js',
        format: 'es'
      }
    ],
    plugins: [typescript(tsOpts)]
  },
  // Build 2: ES modules + UMD for browser builds.
  {
    input: 'src/index.ts',
    treeshake: { pureExternalModules: true },
    output: [
      {
        name: 'Duration',
        file: 'lib/dration.browser.js',
        format: 'es'
      },
      {
        name: 'Duration',
        file: 'lib/dration.umd.js',
        format: 'umd'
      }
    ],
    plugins: [
      typescript(
        Object.assign({}, tsOpts, {
          tsconfigOverride: {
            compilerOptions: {
              target: 'es5',
              declaration: false,
              noUnusedLocals: false,
              module: 'ESNext'
            }
          }
        })
      ),
      resolve(),
      commonjs()
    ]
  }
]
