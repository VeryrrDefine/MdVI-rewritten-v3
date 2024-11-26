import OmegaNum from "omega_num.js";
import { player } from "@/game/player";
import gameConfig from "@/gameConfig";

export const save = () => {
    localStorage.setItem(gameConfig.gameId, btoa(JSON.stringify(player)));
};
function isOmegaNumObject(object: any){
    if (object.array && object.sign){
        return true
    }

}

function transformToO (object : any) {
    
    for(let key in object) {
        if(isOmegaNumObject(object[key])) {
            object[key] = new OmegaNum(object[key]);
        }
        
        if(typeof object[key] === "object") {
            transformToO(object[key]);
        }
    }
}

function deepCopyProps(source : any,target : any) {
    for (let key in source) {  
        if (source.hasOwnProperty(key)) {  
            // 如果源对象的属性是对象或数组，则递归复制  
            if ((typeof source[key] === 'object' && !(source[key] instanceof OmegaNum)) && source[key] !== null) {  
                // 如果目标对象没有这个属性，或者属性是null，则创建一个新的  
                if (!target.hasOwnProperty(key) || target[key] == null || Array.isArray(source[key]) !== Array.isArray(target[key])) {  
                    target[key] = Array.isArray(source[key]) ? [] : {};  
                }  
                // 递归复制属性  
                deepCopyProps(source[key], target[key]);  
            } else {  
                // 如果属性不是对象或数组，则直接复制  
                target[key] = source[key];  
            }  
        }  
    }  
}

export const load = () => {
    const save = localStorage.getItem(gameConfig.gameId);
    if (save) {
        const parsedSave = JSON.parse(atob(save));
        transformToO(parsedSave);

        deepCopyProps(parsedSave, player);


        /*

        
        if (loadplayer != null){
            let loadplayer = formatsave.decode(localStorage.getItem("vol-inc-rew-testPowiainaNum"));
            transformToE(loadplayer);
            deepCopyProps(loadplayer, player);
            fixOldSave();
            player.offlinedTime += (Date.now()-player.time)/1000
        }

        */
    }
};