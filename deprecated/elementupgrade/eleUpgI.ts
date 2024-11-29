export var elementOptions = {
    maps: [
        `
    x_________________xv
    xx___________xxxxxxv
    xx___________xxxxxxv
    xx_xxxxxxxxxxxxxxxxv
    xx_xxxxxxxxxxxxxxxxv
    xx1xxxxxxxxxxxxxxxxv
    xx2xxxxxxxxxxxxxxxxv
    _v
    __3xxxxxxxxxxxxxx__v
    __4xxxxxxxxxxxxxx__`.replace(/\s/g, '')
    ],

    la: [null, '*', '**', '*', '**'],
    exp: [0, 118, 218, 362, 558, 814, 1138],
    max_hsize: [19],
    names: [
        null,
        'H',
        'He',
        'Li',
        'Be',
        'B',
        'C',
        'N',
        'O',
        'F',
        'Ne',
        'Na',
        'Mg',
        'Al',
        'Si',
        'P',
        'S',
        'Cl',
        'Ar',
        'K',
        'Ca',
        'Sc',
        'Ti',
        'V',
        'Cr',
        'Mn',
        'Fe',
        'Co',
        'Ni',
        'Cu',
        'Zn',
        'Ga',
        'Ge',
        'As',
        'Se',
        'Br',
        'Kr',
        'Rb',
        'Sr',
        'Y',
        'Zr',
        'Nb',
        'Mo',
        'Tc',
        'Ru',
        'Rh',
        'Pd',
        'Ag',
        'Cd',
        'In',
        'Sn',
        'Sb',
        'Te',
        'I',
        'Xe',
        'Cs',
        'Ba',
        'La',
        'Ce',
        'Pr',
        'Nd',
        'Pm',
        'Sm',
        'Eu',
        'Gd',
        'Tb',
        'Dy',
        'Ho',
        'Er',
        'Tm',
        'Yb',
        'Lu',
        'Hf',
        'Ta',
        'W',
        'Re',
        'Os',
        'Ir',
        'Pt',
        'Au',
        'Hg',
        'Tl',
        'Pb',
        'Bi',
        'Po',
        'At',
        'Rn',
        'Fr',
        'Ra',
        'Ac',
        'Th',
        'Pa',
        'U',
        'Np',
        'Pu',
        'Am',
        'Cm',
        'Bk',
        'Cf',
        'Es',
        'Fm',
        'Md',
        'No',
        'Lr',
        'Rf',
        'Db',
        'Sg',
        'Bh',
        'Hs',
        'Mt',
        'Ds',
        'Rg',
        'Cn',
        'Nh',
        'Fl',
        'Mc',
        'Lv',
        'Ts',
        'Og'
    ],
    fullNames: [
        null,
        'Hydrogen',
        'Helium',
        'Lithium',
        'Beryllium',
        'Boron',
        'Carbon',
        'Nitrogen',
        'Oxygen',
        'Fluorine',
        'Neon',
        'Sodium',
        'Magnesium',
        'Aluminium',
        'Silicon',
        'Phosphorus',
        'Sulfur',
        'Chlorine',
        'Argon',
        'Potassium',
        'Calcium',
        'Scandium',
        'Titanium',
        'Vanadium',
        'Chromium',
        'Manganese',
        'Iron',
        'Cobalt',
        'Nickel',
        'Copper',
        'Zinc',
        'Gallium',
        'Germanium',
        'Arsenic',
        'Selenium',
        'Bromine',
        'Krypton',
        'Rubidium',
        'Strontium',
        'Yttrium',
        'Zirconium',
        'Niobium',
        'Molybdenum',
        'Technetium',
        'Ruthenium',
        'Rhodium',
        'Palladium',
        'Silver',
        'Cadmium',
        'Indium',
        'Tin',
        'Antimony',
        'Tellurium',
        'Iodine',
        'Xenon',
        'Caesium',
        'Barium',
        'Lanthanum',
        'Cerium',
        'Praseodymium',
        'Neodymium',
        'Promethium',
        'Samarium',
        'Europium',
        'Gadolinium',
        'Terbium',
        'Dysprosium',
        'Holmium',
        'Erbium',
        'Thulium',
        'Ytterbium',
        'Lutetium',
        'Hafnium',
        'Tantalum',
        'Tungsten',
        'Rhenium',
        'Osmium',
        'Iridium',
        'Platinum',
        'Gold',
        'Mercury',
        'Thallium',
        'Lead',
        'Bismuth',
        'Polonium',
        'Astatine',
        'Radon',
        'Francium',
        'Radium',
        'Actinium',
        'Thorium',
        'Protactinium',
        'Uranium',
        'Neptunium',
        'Plutonium',
        'Americium',
        'Curium',
        'Berkelium',
        'Californium',
        'Einsteinium',
        'Fermium',
        'Mendelevium',
        'Nobelium',
        'Lawrencium',
        'Rutherfordium',
        'Dubnium',
        'Seaborgium',
        'Bohrium',
        'Hassium',
        'Meitnerium',
        'Darmstadium',
        'Roeritgenium',
        'Copernicium',
        'Nihonium',
        'Flerovium',
        'Moscovium',
        'Livermorium',
        'Tennessine',
        'Oganesson'
    ]
}
type stringorfunction = string | (() => string)
export interface elementUpgrade {
    desc: stringorfunction
    cost: any
    effect?: any
    effDesc?: (x: any) => string
}

export const MAX_ELEM_TIERS = 1

export function getElementId(x: number) {
    let log = Math.floor(Math.log10(x))
    let list = ['n', 'u', 'b', 't', 'q', 'p', 'h', 's', 'o', 'e']
    let r = ''
    for (var i = log; i >= 0; i--) {
        let n = Math.floor(x / Math.pow(10, i)) % 10
        if (r == '') r = list[n].toUpperCase()
        else r += list[n]
    }
    return r
}

export function getElementName(x: number) {
    if (x <= 118) return elementOptions.fullNames[x]
    let log = Math.floor(Math.log10(x))
    let listF = ['Nil', 'Un', 'Bi', 'Tri', 'Quad', 'Pent', 'Hex', 'Sept', 'Oct', 'Enn']
    let list = ['nil', 'un', 'bi', 'tri', 'quad', 'pent', 'hex', 'sept', 'oct', 'enn']
    let r = ''
    for (var i = log; i >= 0; i--) {
        let n = Math.floor(x / Math.pow(10, i)) % 10
        if (r == '') r = listF[n]
        else r += list[n]
        if (i == 0) r += n != 2 && n != 3 ? 'ium' : 'um'
    }
    return r
}

export function WE(a: number, b: number) {
    return 2 * (a ** 2 - (a - b) ** 2)
}

for (let x = 1; x <= MAX_ELEM_TIERS; x++) {
    let [ts, te] = [elementOptions.exp[x - 1], elementOptions.exp[x]]

    if (x > 1) {
        elementOptions.max_hsize[x - 1] = 11 + 4 * x

        let m = 'xx1xxxxxxxxxxxxxxxxvxx2xxxxxxxxxxxxxxxxv_v'

        for (let y = x; y >= 1; y--) {
            let k = 10 + 4 * y
            m += '1' + 'x'.repeat(k) + 'v'
            m += '2' + 'x'.repeat(k)
            if (y > 1) m += 'v_v'
        }

        for (let y = ts + 1; y <= te; y++) {
            elementOptions.names.push(getElementId(y))
            elementOptions.fullNames.push(getElementName(y))
        }

        elementOptions.maps.push(m)
    }
}

export function mapDeserialize(map:string){
    /*
    
    `
    x_________________xv
    xx___________xxxxxxv
    xx___________xxxxxxv
    xx_xxxxxxxxxxxxxxxxv
    xx_xxxxxxxxxxxxxxxxv
    xx1xxxxxxxxxxxxxxxxv
    xx2xxxxxxxxxxxxxxxxv
    _v
    __3xxxxxxxxxxxxxx__v
    __4xxxxxxxxxxxxxx__`.replace(/\s/g, '')

    */

    let elementid = 0;
    
    var deserializedMap = [];
    
    var deserializedMapRow = [];

    let temp1 = map.split("");

    let i = 0;

    for (;i<map.length;i++){
        let temp2 = temp1[i]//读取到的字符
        switch(temp2){
            case "x": // 一个元素
                elementid++
                deserializedMapRow.push({
                    id: elementid,
                    type: "element"
                })
                break;
            case "_": // 空格
                deserializedMapRow.push({
                    id: NaN,
                    type: "blank"
                })
                break;
            case "v": //换行符
                deserializedMap.push(deserializedMapRow);
                deserializedMapRow = [];
                break;
                
            
        }
    }
    return deserializedMap;

}

export const deserializedTier1Map = mapDeserialize(elementOptions.maps[0]);