export const getAssetUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href
}
