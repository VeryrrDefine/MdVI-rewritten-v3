<script setup lang="ts">
const A1to8 = [1, 2, 3, 4, 5, 6, 7, 8]
</script>

<template>
    <div v-for="dim in A1to8" :key="dim" class="text-center">
        第{{dim}}维度
        <span>+0.0000
        </span>
        <span>×1.0000
        </span>
        <span>^1.0000</span>
        <button class="btn" disabled>
            价格: 0.0000 mm<sup>4</sup>
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
</template>

<style scoped>
</style>
