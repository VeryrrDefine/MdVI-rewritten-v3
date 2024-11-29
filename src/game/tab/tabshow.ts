import { player } from '../player'

export const tabshow = {
    main: {
        inTab(): boolean {
            return [1].includes(player.currentPage)
        },
        dimensions: {
            inTab(): boolean {
                return player.currentPage == 1
            },
            unlocked(): boolean {
                return [1].includes(player.currentPage)
            }
        }
    },
    mm3: {
        inTab(): boolean {
            return [4].includes(player.currentPage);
        },
        upgrades: {
            inTab(): boolean {
                return player.currentPage == 4
            },
            unlocked(): boolean {
                return [4].includes(player.currentPage)
            }

        },
        unlocked() :boolean{
            return player.hasUnlockedPL1
        }
    },
    others: {
        inTab(): boolean {
            return [2, 3].includes(player.currentPage)
        },
        options: {
            inTab(): boolean {
                return player.currentPage == 2
            },
            unlocked(): boolean {
                return [2, 3].includes(player.currentPage)
            }
        },
        about: {
            inTab(): boolean {
                return player.currentPage == 3
            },
            unlocked(): boolean {
                return [2, 3].includes(player.currentPage)
            }
        }
    },
    showTheSecondLine(): boolean {
        return false
    }
}
