// import { getActiveEffect } from './effect'

// let bucket = new Set()
// export function reactive(target: object) {
//   const obj = new Proxy(target, {
//     get(target, key) {
//       // need to know status of effect!!
//       bucket.add(getActiveEffect())
//       return target[key]
//     },
//     set(target, key, val) {
//       target[key] = val
//       bucket.forEach(fn => fn())
//       return true
//     }
//   })

//   return obj
// }
import {
  mutableHandlers,
  shallowReactiveHandlers
} from './baseHandlers'

export const reactiveMap = new WeakMap()

export function reactive(target) {
  return createReactiveObject(target, reactiveMap, mutableHandlers)
}

export function shallowReactive(target) {
  // createReactiveObject
}

export function createReactiveObject(target, proxyMap, proxyHandlers) {
  if(typeof target !== 'object') {
    console.warn(`${target} must be object!`)
    return target
  }

  const existingProxy = proxyMap.get(target)
  if(existingProxy) {
    return existingProxy
  }
  const proxy = new Proxy(target, proxyHandlers)
  proxyMap.set(target, proxy)
  return proxy
}