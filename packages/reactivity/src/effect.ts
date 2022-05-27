
let activeEffect: Function | null = null
export function getActiveEffect() {
  return activeEffect
}
export function effect(fn: Function) {
  activeEffect = fn
  fn()     // fn() trigger .get!
}