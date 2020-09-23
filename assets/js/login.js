const toggleVisibility = () => {
    const eye = document.querySelector('.eye')
    const password = document.querySelector('#password')

    eye.addEventListener('click', () => {
        if(password.type == 'password') {
            password.type = 'text'
        } else {
            password.type = 'password'
        }
    })
}

const inputs = document.querySelectorAll('input')
const button = document.querySelector('button')
Array.from(inputs).forEach(input => {
    input.addEventListener('input', () => {
        const check = Array.from(inputs).every(input => input.value != "")
    
        if(check) {
            button.classList.add('active')
        } else {
            button.classList.remove('active')
        }
    })
})

const onUserStart = () => {
    const icon = document.querySelector('.person')
    icon.classList.add('active')
}

const onUserEnd = () => {
    const icon = document.querySelector('.person')
    icon.classList.remove('active')
}

const onEmailStart = () => {
    const icon = document.querySelector('.mail')
    icon.classList.add('active')
}

const onEmailEnd = () => {
    const icon = document.querySelector('.mail')
    icon.classList.remove('active')
}

const onPasswordStart = () => {
    const icon = document.querySelector('.lock')
    icon.classList.add('active')
}

const onPasswordEnd = () => {
    const icon = document.querySelector('.lock')
    icon.classList.remove('active')
}

toggleVisibility()