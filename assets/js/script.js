const navSlide = () => {
    const burger = document.querySelector('.hamburger')
    const sidenav = document.querySelector('#sidenav')
    const nav = document.querySelector('nav')
    burger.addEventListener('click', () => {
        sidenav.classList.toggle('active')
        if(sidenav.classList.contains('active')) {
            document.body.style.backgroundColor = '#b6b4b4'
            nav.style.borderRadius = '0'
        } else {
            document.body.style.backgroundColor = '#FAFCFF'
            nav.style.borderRadius = '0 0 24px 24px'
        }
    })
}

const notification = () => {
    const bell = document.getElementById('bell')
    const content = document.querySelector('.content-notification')
    const topPanel = document.getElementById('top-panel')
    bell.addEventListener('click', () => {
        content.classList.toggle('visible')
        if(topPanel) {
            topPanel.classList.toggle('active')
        }
    })
}

navSlide()
notification()