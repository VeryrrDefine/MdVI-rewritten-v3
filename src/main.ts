import { createApp } from 'vue'
import App from './App.vue'
import { startLoops } from '@/game/loop/mainLoop'
import { Events } from '@/lib/util/events'
import { EVENT } from '@/game/enum/eventTypes'
import { load, save } from '@/lib/options/storage'
import { player } from './game/player'
import OmegaNum from 'omega_num.js'
import { format, formatWhole, formatSmall } from '@/lib/format-omeganum'

import './style.css'
import './style2.scss'




createApp(App).mount('#app')

load()
startLoops()

/*
window.player = player;
window.OmegaNum = OmegaNum;
window.format = format;
window.formatSmall = formatSmall;
window.formatWhole = formatWhole;
*/

Events.on(EVENT.SAVE_GAME, save)
