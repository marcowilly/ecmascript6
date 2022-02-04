class Bd{

    constructor(){
        let id = localStorage.getItem('id')

        if(id === null) localStorage.setItem('id', 0)
    }

    getNextId(){
        return parseInt(localStorage.getItem('id'))+1
    }

    salvar = (despesa) => {
        localStorage.setItem(this.getNextId(), JSON.stringify(despesa))
        localStorage.setItem('id', this.getNextId())
    }

    recuperarRegistros(){
        let id = localStorage.getItem('id')
        let despesas = Array()
        for(let i = 1; i <= id; i++){
            let despesa = JSON.parse(localStorage.getItem(i))
            if(!isEmpty(despesa)){
                despesa.id = i
                despesas.push(despesa)
            }
        }
        return despesas
    }

    pesquisar(despesa){
        let despesas = this.recuperarRegistros()
        if(!isEmpty(despesa.ano)) despesas = despesas.filter((d) => d.ano == despesa.ano)
        if(!isEmpty(despesa.mes)) despesas = despesas.filter((d) => d.mes == despesa.mes)
        if(!isEmpty(despesa.dia)) despesas = despesas.filter((d) => d.dia == despesa.dia)
        if(!isEmpty(despesa.tipo)) despesas = despesas.filter((d) => d.tipo == despesa.tipo)
        if(!isEmpty(despesa.descricao)) despesas = despesas.filter((d) => d.descricao == despesa.descricao)
        if(!isEmpty(despesa.valor)) despesas = despesas.filter((d) => d.valor == despesa.valor)
        return despesas
    }

    remover = (id) => {
        localStorage.removeItem(id)
    }
}