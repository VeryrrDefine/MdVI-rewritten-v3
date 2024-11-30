export function classnoyes(baseClass: string, status: boolean): string {
    return `${baseClass}${status ? 'yes' : 'no'}`
}
