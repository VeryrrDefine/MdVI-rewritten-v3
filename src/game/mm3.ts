import { DC } from './constants'
import { player } from './player'

function norewardPL1reset() {
    player.volumes = DC.D10
    for (let i = 0; i < 8; i++) {
        player.dimensions.amounts[i] = DC.D0
        player.dimensions.bought[i] = DC.D0
    }
}

export function PL1reset() {
    if (player.volumes.root(256).lt(2)) return false
    player.PL1pts = player.PL1pts.add(player.volumes.root(256).floor())
    norewardPL1reset()
    player.hasUnlockedPL1 = true
}
