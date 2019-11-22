import md5 from 'md5'

export function encryption (data) {
  return md5(data + 'dXiN666')
}
