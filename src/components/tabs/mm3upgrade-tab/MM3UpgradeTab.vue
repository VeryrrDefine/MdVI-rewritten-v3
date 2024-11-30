<script setup lang="ts">
import { usePlayerData } from '../../../lib/composables/usePlayerData'
import { MM3upgrades, hasMM3upgrade, buyMM3upgrade } from '../../../game/mm3-upgrades'
import { format } from '../../../lib/format-omeganum'
import { classnoyes } from '../../../lib/classnoyes'

const randomerPl = usePlayerData((player) => player.randomer)

const A1to4 = [1, 2]
</script>

<template>
    <table align="center">
        <tbody>
            <tr>
                <td v-for="id in A1to4" :key="id">
                    <button
                        :class="classnoyes('mm3upg', hasMM3upgrade(id - 1))"
                        @click="buyMM3upgrade(id - 1)"
                    >
                        <span v-html="MM3upgrades[id - 1].desc"></span><br />花费：{{
                            format(MM3upgrades[id - 1].cost)
                        }}mm<sup>3</sup>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
    <span style="display: none">{{ randomerPl }}</span>
</template>

<style scoped></style>
