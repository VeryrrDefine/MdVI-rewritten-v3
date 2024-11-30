<script setup lang="ts">
import { player } from './game/player'
import { usePlayerData } from './lib/composables/usePlayerData'

import { tabshow } from './game/tab/tabshow'

import { format } from './lib/format-omeganum'
import DimensionsTab from './components/tabs/main-dimensions/DimensionsTab.vue'
import AboutTab from './components/tabs/about-tab/AboutTab.vue'
import NewsTicker from './components/NewsTicker.vue'
import MM3UpgradeTab from './components/tabs/mm3upgrade-tab/MM3UpgradeTab.vue'

import { PL1reset } from './game/mm3'

const volumeGetter = usePlayerData((player) => player.volumes)
const mm3Getter = usePlayerData((player) => player.PL1pts)
const pageId = usePlayerData((player) => player.currentPage)
const randomerPl = usePlayerData((player) => player.randomer)

function switchpage(id: number) {
    player.currentPage = id
}

function inpage(id: number) {
    return player.currentPage == id
}
</script>

<template>
    <div style="padding-top: 8px; top: 0" class="sticky">
        <news-ticker></news-ticker>
        <div class="text-center">
            你有 <span class="vol-dis">{{ format(volumeGetter) }}</span> mm<sup>4</sup> 4维体积
        </div>
        <div class="text-center mm3text" v-if="player.hasUnlockedPL1">
            你有 {{ format(mm3Getter) }} mm<sup>3</sup> 3维体积
        </div>
        <div class="text-center">This is just a test.</div>
    </div>
    <button class="PL1button" @click="PL1reset()">
        3维体积重置:
        <span v-if="player.volumes.lt(1.157920892373162e77)"
            >需要{{ format(1.157920892373162e77) }}mm<sup>4</sup>4维体积</span
        >
        <span v-else>获得{{ format(player.volumes.root(256).floor()) }}mm<sup>3</sup>3维体积</span>
    </button>

    <div class="text-center">
        <button @click="switchpage(1)" :disabled="tabshow.main.inTab()" class="btn">主要</button>
        <button
            @click="switchpage(4)"
            :disabled="tabshow.mm3.inTab()"
            v-if="tabshow.mm3.unlocked()"
            class="btn mm3"
        >
            3维体积
        </button>
        <button @click="switchpage(2)" :disabled="tabshow.others.inTab()" class="btn">杂项</button>
    </div>
    <div class="text-center">
        <button
            @click="switchpage(1)"
            v-if="tabshow.main.dimensions.unlocked()"
            class="btn"
            :disabled="tabshow.main.dimensions.inTab()"
        >
            维度
        </button>
        <button
            @click="switchpage(2)"
            v-if="tabshow.others.options.unlocked()"
            class="btn"
            :disabled="tabshow.others.options.inTab()"
        >
            选项
        </button>
        <button
            @click="switchpage(3)"
            v-if="tabshow.others.about.unlocked()"
            class="btn"
            :disabled="tabshow.others.about.inTab()"
        >
            关于
        </button>
    </div>
    <div v-if="inpage(1)">
        <dimensions-tab></dimensions-tab>
    </div>
    <div v-if="inpage(2)">
        <button class="btn mm5">test</button>
        <button class="btn mm6">test</button>
        <button class="btn mm7">test</button>
        <button class="btn mm8">test</button>
        <button class="btn mm9">test</button>
        <button class="btn mm10">test</button>
    </div>
    <div v-if="inpage(3)">
        <about-tab></about-tab>
    </div>
    <div v-if="inpage(4)">
        <m-m3-upgrade-tab></m-m3-upgrade-tab>
    </div>
    <span style="display: none">{{ randomerPl }}</span>
</template>

<style scoped></style>
