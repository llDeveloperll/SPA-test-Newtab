var datas = []

const btnClear = getElement('clearDatas')
btnClear.onclick = (e)=> {

    e.preventDefault()
    let rsp = confirm('Deseja apagar todos os dados?')
    //if(rsp) ts.clear()
}