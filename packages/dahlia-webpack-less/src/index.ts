import { addLessLoader } from 'customize-cra'

const less = options => config => {
  return addLessLoader(options)(config)
}

export default less
