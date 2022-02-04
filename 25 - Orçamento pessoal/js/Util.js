let getValue = (arg) => {
    let value;
    try{
        value = arg.value
    }catch(e){
        value = ''
    }
    return value
}

let getElementValue = (arg) => getValue(getElement(arg))

let getElement = (arg) => document.getElementById(arg)

let clearElements = (...elements) => elements.forEach((element) => getElement(element).value = '')

let isEmpty = (arg) => (arg == undefined || arg == null || arg == [] || arg == '')

let log = (arg) => console.log(arg)

let createElement = (arg) => document.createElement(arg)

let reload = () => window.location.reload()