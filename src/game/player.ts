import { DC } from "./constants";

export const initialPlayer = () => ({
    volumes: DC.D0,
    options: {
    },

    lastTick: Date.now(),
    currentPage: 1,
});

export type Player = ReturnType<typeof initialPlayer>;

export const player = initialPlayer();
