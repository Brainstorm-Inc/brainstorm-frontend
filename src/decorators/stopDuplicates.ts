function redefineAccessorProperty(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
): void {
  Object.defineProperty(target, propertyKey, {
    configurable: descriptor.configurable,
    enumerable: descriptor.enumerable,
    set(value) {
      if (!descriptor.set) {
        throw new Error(`Property ${propertyKey} doesn't have a setter and cannot be written`)
      }
      if (!descriptor.get) {
        throw new Error(`Property ${propertyKey} doesn't have a getter and cannot be read`)
      }
      if (value === descriptor.get.call(this)) {
        return
      }
      descriptor.set.call(this, value)
    },
    get(): any {
      if (!descriptor.get) {
        throw new Error(`Property ${propertyKey} doesn't have a getter and cannot be read`)
      }
      return descriptor.get.call(this)
    }
  })
}

/**
 * Blocks Call of Setter if the new value is the same with the one returned by the Getter
 * **DOES NOT COVER EVERY CASE! MADE SPECIFICALLY TO WORK WITH BindObservable**
 * @example
 *   ​@StopDuplicates()
 *   ​@BindObservable()
 *   organization: string | null = null;
 *   organization$!: Observable<string | null>;
 * @constructor
 */
export function StopDuplicates() {
  return (target: any, propertyKey: string) => {
    const descriptor = Reflect.getOwnPropertyDescriptor(target, propertyKey)
    if (descriptor != null) {
      redefineAccessorProperty(target, propertyKey, descriptor)
    }
  }
}
