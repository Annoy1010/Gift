const $ = document.querySelector.bind(document)

const flame = $('.flame')
const modal = $('.modal')
const notice = $('.notice')
const audio = $('audio')

function playAudio() {
    audio.play()
}

function showModal() {
    modal.style.display = 'flex'
}

function hideModal() {
    modal.style.display = 'none'
}

function disableFlame() {
    flame.style.display = 'none'
    playAudio()
    showModal()
}
 
function stopPropagationModal() {
    notice.onclick = (e) => {
        e.stopPropagation()
        e.preventDefault()
    }
}


stopPropagationModal()


