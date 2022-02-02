const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const choices = $$('.choice-item')
const quotes = $$('.quote')
const continueBtn = $('.btn-continue')
const modal = $('.modal')
const notice = $('.notice')
const app = {
    isClickedPic1: false,
    isClickedPic2: false,
    isClickedPic3: false,
    isClickedPic4: false,
    choiceActive: function(choice) {
        choices.forEach((newChoice) => {
            if (newChoice.classList.contains('active'))
                newChoice.classList.remove('active')
        })
        choice.classList.add('active')
    },

    quoteActive: function(index) {
        quotes.forEach((newQuote) => {
            if (newQuote.classList.contains('active'))
                newQuote.classList.remove('active')
        })
        quotes[index].classList.add('active')
    },

    setClicked: function(index) {
        if (index == 0)
            this.isClickedPic1 = true
        else if (index == 1)
            this.isClickedPic2 = true
        else if (index == 2) 
            this.isClickedPic3 = true
        else
            this.isClickedPic4 = true
    },

    checkClicked: function() {
        return this.isClickedPic1 && this.isClickedPic2 && this.isClickedPic3 && this.isClickedPic4
    },

    renderImage: function() {
        var _this = this
        choices.forEach((choice, index) => {
            choice.onclick = () => {
                _this.choiceActive(choice)
                _this.quoteActive(index)
                _this.setClicked(index)
            }
        })
    },

    skipNextPage: function() {
        var _this = this
        continueBtn.onclick = () => {
            if (_this.checkClicked()) {
                window.close("./luckyNumber.html")
                window.open("./final.html")
            }
            else {
                modal.style.display = 'flex'
            }
        }
    },

    exitModal: function() {
        modal.onclick = () => {
            modal.style.display = 'none'
        }
        notice.onclick = (e) => {
            e.stopPropagation()
            e.preventDefault()
        }
    },

    start: function() {
        this.renderImage()
        this.skipNextPage()
        this.exitModal()
    }
}

app.start()