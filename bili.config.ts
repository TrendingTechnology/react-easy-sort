import { Config } from 'bili'

const config: Config = {
  input: {
    index: 'src/index.tsx',
  },
  output: {
    format: ['cjs', 'umd', 'umd-min', 'esm'],
    moduleName: 'ReactEasySort',
    sourceMap: true,
  },
  globals: {
    react: 'React',
  },
  extendConfig(config, { format }) {
    if (format.startsWith('umd')) {
      config.output.fileName = 'umd/react-easy-sort[min].js'
    }
    if (format === 'esm') {
      config.output.fileName = '[name].module.js'
    }
    return config
  },
  env: {
    NODE_ENV: 'production',
  },
}

export default config
