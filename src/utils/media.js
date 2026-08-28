export function getMediaFilename(src) {
  if (!src) return ''
  const path = src.split('?')[0]
  return path.split('/').pop() || path
}
