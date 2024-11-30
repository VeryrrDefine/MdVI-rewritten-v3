import { DC } from './constants'
import { player } from './player'

interface _mm3upgrade {
    desc: string
    cost: any
}

export const MM3upgrades: Array<_mm3upgrade> = [
    {
        desc: '解锁自动购买1-8维度',
        cost: DC.D1
    },
    {
        desc: '基于3维体积提升1-8维度',
        cost: DC.D3
    }
]

export function hasMM3upgrade(id: number): boolean {
    return player.PL1upgrades.includes(id)
}

export function buyMM3upgrade(id: number): boolean {
    if (hasMM3upgrade(id)) return false
    if (MM3upgrades[id].cost.gt(player.PL1pts)) return false

    player.PL1pts = player.PL1pts.sub(MM3upgrades[id].cost).max(0)
    player.PL1upgrades.push(id)

    return true
}
