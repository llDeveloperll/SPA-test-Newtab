import {getElement,getValues,getName} from "./utils.js";
import {incorrectField} from "./animations.js";

var key = 'datas'

if (localStorage.getItem(key)) 
    var datas = [localStorage.getItem(key)]
else 
    var datas = []


console.log(datas)

const validations = [

    function(id,value) { // field it's empty.

        if (value == '' || !value || !value.replace(/\s/g, '').length) {
            
            return ["valueInvalid", 'Preencha o campo  "' + getName(id) + '".', id]

        } else {

            return ['', '', id]

        }
    },

]

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

            incorrectField(element)
            
            return alert(st[1])

        } 
  

    }

    localStorage.setItem(key,JSON.stringify([]))

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
