const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const modal = $('.modal')
$('.secure').maxLength = 8
const input = $('.secure')
const notice = $('.notice')
const headingNotice = $('.secure-notice')

function showNotice() {
    modal.style.display = 'flex'
    modal.style.justifyContent = 'center'
    modal.style.alignItems = 'center'
    headingNotice.textContent = ''
    notice.style.animation = 'none'
    notice.style.backgroundImage = 'linear-gradient(45deg, rgb(6, 41, 16), rgb(4, 29, 49))'
    input.value = ''
}

function hideNotice() {
    modal.style.display = 'none'
}

function stopHideNotice() {
    input.onclick = (e) => {
        e.stopPropagation()
        e.preventDefault()
    }
}

function checkPassword() {
    input.onkeyup = () => {
        console.log(input.value)
        if (input.value.length == 8) {
            if (input.value == '04022003') {
                notice.style.animation = 'none'
                notice.style.backgroundImage = 'linear-gradient(45deg, rgb(16, 66, 30), rgb(12, 114, 38))'
                headingNotice.textContent = 'Mật mã chính xác'
                setTimeout(() => {
                    window.close("./index.html")
                    window.open("./luckyNumber.html")
                }, 2000)
            }
            else {
                notice.style.animation = 'warning 1s 0s infinite'
                headingNotice.textContent = 'Mật mã không chính xác'
            }
        }
    }
}

stopHideNotice()
checkPassword()