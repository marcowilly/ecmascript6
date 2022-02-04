class Despesa{

    constructor(ano,mes,dia,tipo,descricao,valor){
        this.ano = ano,
        this.mes = mes,
        this.dia = dia,
        this.tipo = tipo,
        this.descricao = descricao,
        this.valor = valor
    }

    isDadosPreenchidos(){
        for(let i in this){
            if(isEmpty(Object.values(this[i]))){
                return false
            }
        }
        return true
    }
}