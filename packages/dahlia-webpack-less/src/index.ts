import { addLessLoader } from 'customize-cra'

const less = (options?: any) => config => {
  return addLessLoader(options)(config)
}

export default less
