import { DC } from '../constants'
import { player } from '../player'
import { elementUpgrade } from './eleUpgI'

export const eleUpgs: Array<elementUpgrade> = [
    {
        desc: '每次购买维度乘数+0.6',
        cost: DC.D1E20
    }
]

export function eleHas(x: number): boolean {
    return player.eleUpgBought.includes(x)
}

export function eleCannotAfford(x: number): boolean {
    return false
}

export function eleCanbuy(x: number): boolean {
    if (eleHas(x)) return false

    let u = eleUpgs[x]
    if (player.volumes.lt(u.cost)) return false
    return !eleCannotAfford(x)
}

export function eleBuy(x: number): boolean {
    if (!eleCanbuy(x)) return false

    let u = eleUpgs[x]
    player.volumes = player.volumes.sub(u.cost).max(0)
    player.eleUpgBought.push(x)
    return true
}
