import OmegaNum from 'omega_num.js'
import { DC } from '../constants'
import { player } from '../player'

// all these id 0-7;
export function getDimensionsScale(id: number) {
    return OmegaNum.pow(DC.D10, id + 1)
}
export function buyDimensions(id: number) {

    if (player.volumes.gte(getDimensionsCost(id))) {
        const dimscale = getDimensionsScale(id)
        const temp1 = player.volumes.logBase(dimscale)
        const temp2 = getDimensionsCost(id).logBase(dimscale)
        //let bought_now = getDimensionsBought(id);
        let buycount = temp1.sub(temp2).ceil()
        //let temp3 = buycount.clone();

        if (buycount.lt(1)) {
            buycount = DC.D1
        }
        player.dimensions.bought[id] = player.dimensions.bought[id].add(buycount)
        player.dimensions.amounts[id] = player.dimensions.amounts[id].add(buycount.mul(DC.D10))
    }
}

export function buyAllDim(){
    for (let i=0;i<8;i++){
        if (buyable(i)) buyDimensions(i);
    }
}

export function buyable(id: number) {
    return player.volumes.gte(getDimensionsCost(id))
}
export function getDimensionsAmount(id: number) {
    return player.dimensions.amounts[id]
}

export function getDimensionsBought(id: number) {
    return player.dimensions.bought[id]
}

export function getDimensionsBuy10Multiplier() {
    let temp1 = DC.D2

    return temp1
}

export function getDimensionsMultiplier(id: number) {
    let temp1 = DC.D2.pow(getDimensionsBought(id))

    return temp1
}
export function getDimensionsCost(id: number) {
    return getDimensionsScale(id).pow(getDimensionsBought(id).add(1))
}
export function dimensionLoop(diff: number) {
    if (player.volumes.lt(DC.D10) && getDimensionsAmount(0).eq(DC.D0)) {
        player.volumes = DC.D10
    }
    
    for (let i = 0; i < 7; i++) {
        player.dimensions.amounts[i] = player.dimensions.amounts[i].add(
            getDimensionsMultiplier(i + 1)
                .mul(getDimensionsAmount(i + 1))
                .mul(diff)
        )
    }
    player.volumes = player.volumes.add(
        getDimensionsAmount(0).mul(getDimensionsMultiplier(0)).mul(diff)
    )
}
