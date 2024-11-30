import { removeDuplicate } from '@/lib/removeDuplicate'
import { player } from '../game/player'

export function changeAuto(i: number) {
    let temp1 = player.automations.indexOf(i)
    if (temp1 == -1) {
        player.automations.push(i)
    } else {
        player.automations.splice(temp1, 1)
    }
}

export function autoString(i: number) {
    player.automations = removeDuplicate(player.automations)
    return player.automations.includes(i) ? '开' : '关'
}
