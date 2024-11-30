import OmegaNum from 'omega_num.js'

function deepFreeze(obj: any) {
    Object.keys(obj).forEach((prop) => {
        const reference = obj[prop]
        if (typeof reference === 'object') deepFreeze(reference)
    })
    return Object.freeze(obj)
}

export const DC = deepFreeze({
    // Naming Scheme:
    // MxxxEyyy: -xxx*10^yyy
    // xxxEyyy: xxx*10^yyy
    // Eyyy: 10^yyy
    // ExxxEyyy:10^(xxx*10^yyy)
    // Fyyy:10^^yyy
    // if variable starts at a number, using D
    D0: new OmegaNum(0),
    D1: new OmegaNum(1),
    D2: new OmegaNum(2),
    D3: new OmegaNum(3),
    D7: new OmegaNum(7),
    D10: new OmegaNum(10),
    D1E20: new OmegaNum(1e20),
    POSITIVE_INFINITY: new OmegaNum(Infinity)
})
