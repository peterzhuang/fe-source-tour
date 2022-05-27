import { getActiveEffect } from './effect'

let bucket = new Set()
export function reactive(target: object) {
  const obj = new Proxy(target, {
    get(target, key) {
      // need to know status of effect!!
      bucket.add(getActiveEffect())
      return target[key]
    },
    set(target, key, val) {
      target[key] = val
      bucket.forEach(fn => fn())
      return true
    }
  })

  return obj
}