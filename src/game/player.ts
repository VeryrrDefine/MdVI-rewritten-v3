import { DC } from './constants'

export const initialPlayer = () => ({
    volumes: DC.D10,
    options: {},

    lastTick: Date.now(),
    currentPage: 1,
    randomer: 'parler à?',
    dimensions: {
        amounts: [...Array(8).fill(DC.D0)],
        bought: [...Array(8).fill(DC.D0)]
    },

    PL1pts: DC.D0,
    hasUnlockedPL1: false,
    PL1upgrades: [-1],
    automations: [-1]
})

export type Player = ReturnType<typeof initialPlayer>

export const player = initialPlayer()
