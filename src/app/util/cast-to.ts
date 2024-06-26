export function castTo<T>(): (t: T) => T {return (t) => t as T}
