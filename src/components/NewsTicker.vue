<script setup lang="ts">
var textslength: number = 0

interface newsTextInterface {
    text: string
    unlocked?: () => string
}

var texts: Array<newsTextInterface> = [
    {
        text: '这是一条新闻'
    },
    {
        text: '史上平衡最差的增量游戏是什么？IMR, IDR和WSC算什么，MDVI才是真神'
    }
]
textslength = texts.length
let rand
var updatenews = function () {
    let e = document.getElementById('newsText')
    if (e == null || e.parentElement == null) {
        setTimeout(updatenews, 1000)
        return
    }
    /*  */
    //if (!player.options.showNewsTicker) return
    do {
        rand = Math.floor(Math.random() * textslength)
    } while (checkRand(rand))
    /*if (typeof dev != "undefined") {
        if (dev.devmode) rand = textslength-1
    }if (rand == 56 && repeatN56times == 0) repeatN56times = Math.round(3+Math.random()*(5-2))
    if (repeatN56times > 0) repeatN56times--
    if (repeatN56times > 0) rand = 56*/
    let msg = texts[rand].text
    e.innerHTML = msg
    let textWidth = e.clientWidth
    let parentWidth = e.parentElement.clientWidth
    e.style.transition = ''
    e.style.transform = 'translateX(' + (parentWidth + 10) + 'px)'
    let dist = parentWidth + e.clientWidth
    let rate = 150
    let transformDuration = dist / rate
    e.style.transition = 'transform ' + transformDuration + 's linear'
    e.style.transform = 'translateX(-' + textWidth + 'px)'
    e.addEventListener('transitionend', onNewsEnd)
}
var onNewsEnd = function () {
    let e = document.getElementById('newsText')
    if (e !== null) e.removeEventListener('transitionend', onNewsEnd)
    setTimeout(updatenews, 1000)
}
function checkRand(rand: number) {
    if (texts[rand].unlocked === undefined) return false
    else if (texts[rand].unlocked) return false
    else return true
}
setTimeout(updatenews, 1000)
</script>

<template>
    <div id="news"><p id="newsText"></p></div>
</template>

<style scoped></style>
