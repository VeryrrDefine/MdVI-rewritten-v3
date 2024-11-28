import OmegaNum from "omega_num.js";
import { DC } from "../constants";
import { player } from "../player";

// all these id 0-7;
export function getDimensionsScale(id: number){
    return OmegaNum.pow(DC.D10, id+1);
}
export function buyDimensions(id: number){
    /*
    if (player.volumes.gte(player.dimensions[DIMENSIONS_COST][dim - 1])) {
        let temp1 = player.volumes.logarithm(tmp.dimension.getDimScale(dim))
        let temp2 = (player.dimensions[DIMENSIONS_COST][dim - 1]).logarithm(tmp.dimension.getDimScale(dim))
        let bought_now = player.dimensions[DIMENSIONS_BOUGHT][dim - 1];
        let buycount = temp1.sub(temp2).ceil();
        let temp3 = buycount.clone();

        if (buycount.lt(1)) {
            buycount = E(1)
        }
        player.dimensions[DIMENSIONS_BOUGHT][dim - 1] = player.dimensions[DIMENSIONS_BOUGHT][dim - 1].add(buycount);
        player.dimensions[DIMENSIONS_POINTS][dim - 1] = player.dimensions[DIMENSIONS_POINTS][dim - 1].add(buycount.mul(10)); //     player.volumes = player.volumes.sub(E.pow(10,temp1.mul(dim).ceil()))


        return true
    }*/

    if (player.volumes.gte(getDimensionsCost(id))){
        let dimscale = getDimensionsScale(id);
        let temp1 = player.volumes.logBase(dimscale)
        let temp2 = getDimensionsCost(id).logBase(dimscale)
        //let bought_now = getDimensionsBought(id);
        let buycount = temp1.sub(temp2).ceil();
        //let temp3 = buycount.clone();

        if (buycount.lt(1)) {
            buycount = DC.D1;
        }
        player.dimensions.bought[id] = player.dimensions.bought[id].add(buycount);
        player.dimensions.amounts[id] = player.dimensions.amounts[id].add(buycount.mul(DC.D10));


    }
}
export function buyable(id:number){
    return player.volumes.gte(getDimensionsCost(id));
}
export function getDimensionsAmount(id:number){
    return player.dimensions.amounts[id];
}

export function getDimensionsBought(id:number){
    return player.dimensions.bought[id];
}

export function getDimensionsMultiplier(id: number){
    return DC.D2.pow(getDimensionsBought(id))
}
export function getDimensionsCost(id: number){
    return getDimensionsScale(id).pow(getDimensionsBought(id).add(1))
}
export function dimensionLoop(diff: number){
    if (player.volumes.lt(DC.D10) && getDimensionsAmount(0).eq(DC.D0)){
        player.volumes = DC.D10
    }
    /*
    for (let i = 0; i < 7; i++) {
        player.dimensions[DIMENSIONS_POINTS][i] = player.dimensions[DIMENSIONS_POINTS][i]
            .add(
                doubleExponentMult(
                    (player.dimensions[DIMENSIONS_POINTS][i + 1]
                    .mul(player.dimensions[DIMENSIONS_MULTI][i + 1])
                    .pow(player.dimensions[DIMENSIONS_EXPONENT][i + 1]))
                    
                    ,
                        player.dimensions[DIMENSIONS_DBEXPONENT][i + 1]
                    )
                    
                    .mul(diff)
            );
        if (player.dimensions[DIMENSIONS_POINTS][i].isNaN()) {
            player.dimensions[DIMENSIONS_POINTS][i] = E(0);
        }
    }
    */
    for (let i = 0; i < 7; i++){
        player.dimensions.amounts[i] = player.dimensions.amounts[i].add(
            getDimensionsMultiplier(i+1).mul(getDimensionsAmount(i+1)).mul(diff)
        )
    }
    player.volumes = player.volumes.add(
        getDimensionsAmount(0).mul(getDimensionsMultiplier(0)).mul(diff)
    )
}