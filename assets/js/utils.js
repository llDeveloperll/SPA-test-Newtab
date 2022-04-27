function getElement(id) {
    return document.getElementById(id)
}
 
function getValues(id){
    if (getElement(id)) {
        return getElement(id).value
    }
    return false
}

function getName(id) {
    if (getElement(id)) {
        return getElement(id).getAttribute('name')
    }
}


export {getElement,getValues,getName}