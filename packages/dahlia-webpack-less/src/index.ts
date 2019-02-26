import { addLessLoader } from './addLessLoader'

const less = (options?: any) => config => {
  return addLessLoader(options)(config)
}

export default less
