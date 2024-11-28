<script setup lang="ts">
import { player } from "./game/player";
import { usePlayerData } from "./lib/composables/usePlayerData";
import { format } from "./lib/format-omeganum";
import DimensionsTab from "./components/tabs/main-dimensions/DimensionsTab.vue";
import NewsTicker from "./components/NewsTicker.vue";

const volumeGetter = usePlayerData((player)=>player.volumes);
const pageId = usePlayerData((player)=>player.currentPage);

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
        <button class="btn" disabled>主要</button>
    </div>
    <div class="text-center">
        <button class="btn" disabled>维度</button>
    </div>
    <div>
        <dimensions-tab></dimensions-tab>
    </div>
</template>

<style scoped>
</style>
