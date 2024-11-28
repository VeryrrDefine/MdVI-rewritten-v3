<script setup lang="ts">
import { player } from "./game/player";
import { usePlayerData } from "./lib/composables/usePlayerData";

import { tabshow } from './game/tab/tabshow';

import { format } from "./lib/format-omeganum";
import DimensionsTab from "./components/tabs/main-dimensions/DimensionsTab.vue";
import AboutTab from './components/tabs/about-tab/AboutTab.vue';
import NewsTicker from "./components/NewsTicker.vue";

const volumeGetter = usePlayerData((player)=>player.volumes);
const pageId = usePlayerData((player)=>player.currentPage);
const randomerPl = usePlayerData((player)=>player.randomer);

function switchpage(id :number){
    player.currentPage = id;
}

function inpage(id :number){
    return player.currentPage==id;
}
</script>

<template>
    <div style="padding-top: 8px; top: 0;" class="sticky">
        <news-ticker></news-ticker>
        <div class="text-center">
            你有 <span class="vol-dis">{{ format(volumeGetter) }}</span> mm<sup>4</sup> 4维体积
        </div>
        <div class="text-center">This is just a test.</div>
    </div>
    <div class="text-center">
        <button @click="switchpage(1)" :disabled="tabshow.main.inTab()" class="btn">主要</button>
        <button @click="switchpage(2)" :disabled="tabshow.others.inTab()" class="btn">杂项</button>
    </div>
    <div class="text-center">
        <button @click="switchpage(1)" v-if="tabshow.main.dimensions.unlocked()" class="btn" :disabled="tabshow.main.dimensions.inTab()">维度</button>
        <button @click="switchpage(2)" v-if="tabshow.others.options.unlocked()" class="btn" :disabled="tabshow.others.options.inTab()">选项</button>
        <button @click="switchpage(3)" v-if="tabshow.others.about.unlocked()" class="btn" :disabled="tabshow.others.about.inTab()">关于</button>
    </div>
    <div v-if="inpage(1)">
        <dimensions-tab></dimensions-tab>
    </div>
    <div v-if="inpage(2)">
    </div>
    <div v-if="inpage(3)">
        <about-tab></about-tab>
    </div>
    <span style="display: none">{{ randomerPl }}</span>
</template>

<style scoped>
</style>
