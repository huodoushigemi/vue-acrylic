export function mapValues<T extends object, V>(obj: T, cb: (val: T[keyof T]) => V) {
  const ret = {} as Record<string, V>
  for (const key in obj) {
    ret[key] = cb(obj[key])
  }
  return ret
}
