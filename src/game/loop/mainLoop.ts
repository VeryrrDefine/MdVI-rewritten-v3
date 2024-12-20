import { EVENT } from '@/game/enum/eventTypes'
import { player } from '@/game/player'
import { Events } from '@/lib/util/events'
import { dimensionLoop } from '../dimensions/dimensions'
export const startLoops = () => {
    const loop = () => {
        const now = Date.now()
        const diff = now - player.lastTick

        Events.dispatch(EVENT.GAME_TICK, diff)

        player.randomer = Math.random().toString().slice(1, 3)
        dimensionLoop(diff / 1000)

        player.lastTick = now
    }

    setInterval(loop, 30)
    setInterval(() => Events.dispatch(EVENT.LONG_UPDATE), 1000)
    setInterval(() => Events.dispatch(EVENT.SAVE_GAME), 3000)
}
