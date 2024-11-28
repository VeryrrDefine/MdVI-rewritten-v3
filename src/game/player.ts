import { DC } from "./constants";

export const initialPlayer = () => ({
    volumes: DC.D0,
    options: {
    },

    lastTick: Date.now(),
    currentPage: 1,
    randomer: "把河列啊？",
    dimensions: {
        amounts: [...Array(8).fill(DC.D0)],
        bought: [...Array(8).fill(DC.D0)],
    }
});

export type Player = ReturnType<typeof initialPlayer>;

export const player = initialPlayer();
