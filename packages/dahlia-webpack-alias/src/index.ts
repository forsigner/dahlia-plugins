import { addWebpackAlias } from 'customize-cra'

const alias = (options?: any) => config => {
  return addWebpackAlias(options || {})(config)
}

export default alias
