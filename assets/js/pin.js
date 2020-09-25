const requiredNumber = (e) => {
    const value = e.value
    if(isNaN(parseInt(value))) {
        return e.value = ""
    } 

    const inputs = document.getElementsByTagName('input')
    for (let i = 0; i < inputs.length; i++) {
       if(inputs[i].value && i != inputs.length-1) {
           inputs[i+1].focus()
       }

       if(!inputs[i].value) {
            inputs[i].addEventListener('keydown', e => {
                if(e.key == 'Backspace' || e.key == 'Delete') {
                    if(i == inputs.length-1 && inputs[i].value) {
                        inputs[i].value = ""
                    } else if(inputs[i].value) {
                        inputs[i].value = ""
                    } else {
                        inputs[i-1].focus()
                    }
                }
            })
       }
    }
}

