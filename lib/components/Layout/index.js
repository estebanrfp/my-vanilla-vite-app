export default async () => {
  await import('../App'/* webpackChunkName:"app" */).then(module => module.default())
}
