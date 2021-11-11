const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totaltime= 7500
const breatheTime = (totaltime / 5)*2
const holdtime = totaltime/5


breatheAnimation()


function breatheAnimation() {
    text.innerHTML = 'Breath In!';
    container.className = ' container grow'


    setTimeout(() => {
    text.innerHTML = 'Hold'

    setTimeout(() => {
     text.innerHTML = 'Breath Out!'
     container.className = 'container shrink'
    }, holdtime)
    }, breatheTime)
}

setInterval(breatheAnimation, totaltime)