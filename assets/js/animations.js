
function incorrectField(element) {
    element.style.borderColor = 'red'
    setTimeout(() => {
        element.style.borderColor = '#333333'
    }, 2700);
}

export {incorrectField}