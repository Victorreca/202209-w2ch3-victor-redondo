let valuesArray = [];
let result = [];
let addNumber;
let numberCalculator = 1;

const enterNumber = () => {
    do{
        addNumber = prompt("Ingrese un número. En caso de no querer introducir más, pulse cancelar.");
        if(addNumber !== "" && isNaN(addNumber)){
            alert("Escriba solamente números")
            enterNumber();
        }
        if(addNumber === null){
            console.log("Bye!")
        }
        else if (addNumber === ""){
            results();
        }
        else {
            addNumber = Number(addNumber);
            valuesArray.push(addNumber);
            enterNumber();
        }
    }
    while(addNumber !== null);
}

const results = () => {
    if(valuesArray.length === 1){
        if(valuesArray[0] < 0){
            alert("No se puede realizar raiz cuadrada con números negativos");
        }
        else{
            result.push(`****** Operacion número: ${numberCalculator} ******`);
            result.push(`Raíz cuadrada: ${squareRoot()}`);

            resultPush();
            continueCalculate(); 
        }
    } else {
        result.push(`****** Operacion número: ${numberCalculator} ******`);
        result.push(`Suma: ${suma()}`); 
        result.push(`Resta: ${resta()}`);
        result.push(`Multiplicación: ${multiplicacion()}`);
        result.push(`División: ${division()}`);

        resultPush();
        continueCalculate();
    }
}

const resultPush = () => {
    for(let i = 0; i < result.length; i++){
        console.log(`${result[i]}`)
    } 
    numberCalculator++ 
}

const askContinue = () => {
    addNumber = prompt("Si desea añadir más número escriba si, en caso contrario escriba no");
    return addNumber; 
 }

const continueCalculate = () => {
    let askValidate = askContinue();
    askValidate = askValidate.toLowerCase();
    switch (askValidate){
        case "si":
            valuesArray = [];
            enterNumber();
            break;

        case 'no':
            console.log("Bye");
            break;
        
        default:
            alert("Escribe si o no")
            return continueCalculate();           
    }
}

const squareRoot = () => {
    return Math.sqrt(valuesArray[0]).toFixed(3);
}

const suma = () => {
    let acc = 0;
    for (num in valuesArray) {
        acc += valuesArray[num];
      }
      acc = acc.toFixed(3);
      return acc;
}

const resta = () => {
    let acc = valuesArray[0];
    for(let i = 1; i < valuesArray.length; i++){
        acc = acc - valuesArray[i];   
    }
    acc = acc.toFixed(3)
    return acc;
}

const multiplicacion = () => { 
    let acc = valuesArray[0];
    for(let i = 1; i < valuesArray.length; i++){
        acc = acc * valuesArray[i];
    }
    return acc.toFixed(3);
}

const division = () => {
    if(valuesArray.includes(0)){
        return "No se puede divir por 0";
    }
    else{
        let acc = valuesArray[0];
        for(let i = 1; i < valuesArray.length; i++){
            acc = acc / valuesArray[i];
        }
        return acc.toFixed(3);
    }
}
enterNumber();