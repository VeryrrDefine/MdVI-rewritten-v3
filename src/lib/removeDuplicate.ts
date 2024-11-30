export function removeDuplicate<T>(x: Array<T>) {
    return [...new Set(x)]
}
