import OmegaNum from 'omega_num.js';

function deepFreeze(obj:any) {
    Object.keys(obj).forEach(prop => {
        const reference = obj[prop];
        if (typeof reference === "object") deepFreeze(reference);
    });
    return Object.freeze(obj);
}

export const DC = deepFreeze({
    // Naming Scheme:
    // MxxxEyyy: -xxx*10^yyy
    // xxxEyyy: xxx*10^yyy
    // Eyyy: 10^yyy
    // ExxxEyyy:10^(xxx*10^yyy)
    // Fyyy:10^^yyy
    // if variable starts at a number, using D
    D0:                     new OmegaNum(0),
    D7:                     new OmegaNum(7)

});