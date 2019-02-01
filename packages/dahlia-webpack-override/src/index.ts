export default function override(config: any) {
  return {
    pipe: (...args: any[]) => {
      for (const fn of args) {
        config = fn(config)
      }
      return config
    },
  }
}
