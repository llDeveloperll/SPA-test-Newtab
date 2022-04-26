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


const validations = [

    function(id,value) { // field it's empty.

        if (value == '' || !value) {
            
            return ["valueInvalid", 'Preencha o campo  "' + getName(id) + '".', id]

        } else {

            return ['', '', id]

        }
    },

]

function incorrectField(element) {
    element.style.borderColor = 'red'
    setTimeout(() => {
        element.style.borderColor = '#333333'
    }, 2700);
}


getElement('form').onsubmit = function(p) {
    p.preventDefault();

    let datasID = ['transaction_type','merch_name','merch_value']

    const statement = []

    for (let i = 0; i < datasID.length ; i++) {

        let datasValue = getValues(datasID[i])

        for (let validate of validations) {

            let s = validate(datasID[i],datasValue)
            if (s) {statement.push(s)}
            
        }
        
    }
    
    for (let st of statement) {

        let element = getElement(st[2]);

        if (st[0] == "valueInvalid") {
            //element.style.borderColor = 'red'
            //element.autofocus

            incorrectField(element)
            
            return alert(st[1])

        } 

    }

    console.log(statement)

}

