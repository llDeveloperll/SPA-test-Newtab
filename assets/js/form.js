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

        if (value == '' || !value || !value.replace(/\s/g, '').length) {
            
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


function inputHandler(masks, max, event) {
	var c = event.target;
	var v = c.value.replace(/\D/g, '');
	var m = c.value.length > max ? 1 : 0;
	VMasker(c).unMask();
	VMasker(c).maskPattern(masks[m]);
	c.value = VMasker.toPattern(v, masks[m]);
}

var moneyMask = ['99,99', '99,999,99'];
var element = getElement('merch_value');
VMasker(element).maskPattern(moneyMask[0]);
element.addEventListener('input', inputHandler.bind(undefined, moneyMask, 4), false);
