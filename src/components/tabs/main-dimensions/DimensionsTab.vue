<script setup lang="ts">
import {
    getDimensionsMultiplier,
    getDimensionsAmount,
    getDimensionsCost,
    buyable,
    buyDimensions,
    buyAllDim
} from '../../../game/dimensions/dimensions'
import { usePlayerData } from '../../../lib/composables/usePlayerData'
import { format } from '../../../lib/format-omeganum'
import { autoString, changeAuto } from '../../../game/automatechange'
import { hasMM3upgrade } from '../../../game/mm3-upgrades'

const A1to8 = [1, 2, 3, 4, 5, 6, 7, 8]
const randomerPl = usePlayerData((player) => player.randomer)
getDimensionsMultiplier(1)
</script>

<template>
    <div class="text-center">
        <button class="btn" @click="buyAllDim()">购买最大</button>
    </div>
    <div v-for="dim in A1to8" :key="dim" class="text-center">
        第{{ dim }}维度&nbsp;+{{ format(getDimensionsAmount(dim - 1)) }}&nbsp;×{{
            format(getDimensionsMultiplier(dim - 1))
        }}&nbsp;^1.0000&nbsp;
        <button class="btn" :disabled="!buyable(dim - 1)" @click="buyDimensions(dim - 1)">
            价格: {{ format(getDimensionsCost(dim - 1)) }} mm<sup>4</sup>
        </button>
        <button v-if="hasMM3upgrade(0)" class="btn" @click="changeAuto(dim - 1)">
            自动：{{ autoString(dim - 1) }}
        </button>
        <!-- <button class="btn" :disabled="!buyable(dim.id)" @click="buydim(dim.id)">
                Cost: <span v-html="format(player.dimensions[DIMENSIONS_COST][dim.id
                    - 1])"></span>
            </button>
        <button class="btn" v-if="hasMM3Upg(2)" @click="toggleAutobuyer(dim.id)">
            {{glt("automationcolon")}}{{player.auto.includes(dim.id) ? "开" :
            "关"}}
        </button>-->
    </div>
    <span style="display: none">{{ randomerPl }}</span>
</template>

<style scoped></style>
