function cadastrar(){
    let ano = getElementValue('ano')
    let mes = getElementValue('mes')
    let dia = getElementValue('dia')
    let tipo = getElementValue('tipo')
    let descricao = getElementValue('descricao')
    let valor = getElementValue('valor')

    let despesa = new Despesa(ano,mes,dia,tipo,descricao,valor)
    if(despesa.isDadosPreenchidos()){
        new Bd().salvar(despesa)
        clearElements('ano','mes','dia','tipo','descricao','valor')
        exibirModal('modal', true, 'Sucesso', 'Dados salvos com sucesso!')
    }else{
        exibirModal('modal', false, 'Erro', 'Preencha todos os dados!')
    }
}

function pesquisarDespesa(){
    let ano = getElementValue('ano')
    let mes = getElementValue('mes')
    let dia = getElementValue('dia')
    let tipo = getElementValue('tipo')
    let descricao = getElementValue('descricao')
    let valor = getElementValue('valor')

    let despesa = new Despesa(ano,mes,dia,tipo,descricao,valor)
    clearTableDespesas()
    new Bd().pesquisar(despesa).forEach(carregarTabela)
}

function clearTableDespesas(){
    let listaDespesas = getElement('listaDespesas')
    listaDespesas.innerHTML = ''
}

function carregarTabela(e){
    let listaDespesas = getElement('listaDespesas')
    let linha = listaDespesas.insertRow()
    linha.insertCell(0).innerHTML = `${e.dia}/${e.mes}/${e.ano}`
    switch (parseInt(e.tipo)){
        case 1:
            e.tipo = 'Alimentação'
            break
        case 2:
            e.tipo = 'Educação'
            break
        case 3:
            e.tipo = 'Lazer'
            break
        case 4:
            e.tipo = 'Saúde'
            break
        case 5:
            e.tipo = 'Transporte'
            break
    }
    linha.insertCell(1).innerHTML = e.tipo
    linha.insertCell(2).innerHTML = e.descricao
    linha.insertCell(3).innerHTML = e.valor

    let btn = createElement('button')
    btn.className = 'btn btn-danger'
    btn.innerHTML = '<i class="fas fa-times"></i>'
    btn.id = `id_despesa${e.id}`
    btn.onclick = function(){
        new Bd().remover(this.id.replace('id_despesa',''))
        exibirModal('modal', true, 'Sucesso', 'Dados removidos com sucesso!')
    }
    linha.insertCell(4).append(btn) 
}

function carregarDespesas(){
    clearTableDespesas()
    new Bd().recuperarRegistros().forEach(carregarTabela)
}

function exibirModal(element, isSuccess, title, message){
    let modal = getElement(element)
    if(!isEmpty(modal)){
        let modalTitle = modal.getElementsByClassName('modal-title')[0]
        let modalBody = modal.getElementsByClassName('modal-body')[0]
        let modalButton = modal.getElementsByClassName('btn')[0]
        
        if(isSuccess == true){
            modalTitle.className = 'modal-title text-success'
            modalButton.className = 'btn btn-success'
        }else{
            modalTitle.className = 'modal-title text-danger'
            modalButton.className = 'btn btn-danger'
        }
        modalTitle.innerHTML = title
        modalBody.innerHTML = message
        modalButton.innerHTML = 'Voltar'

        $('#'+element).modal('show')
    }
}