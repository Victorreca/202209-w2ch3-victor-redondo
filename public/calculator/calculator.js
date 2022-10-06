let valuesArray = [];
const result = [];
let addNumber;
let numberCalculator = 1;

const askContinue = () => {
  addNumber = prompt(
    "Si desea añadir más número escriba si, en caso contrario escriba no"
  );
  return addNumber;
};

const resultPush = () => {
  for (let i = 0; i < result.length; i += 1) {
    console.log(`${result[i]}`);
  }
  numberCalculator++;
};

const squareRoot = () => Math.sqrt(valuesArray[0]).toFixed(3);

const suma = () => {
  let acc = 0;
  for (let i = 0; i < valuesArray.length; i += 1) {
    acc += valuesArray[i];
  }
  acc = acc.toFixed(3);
  return acc;
};

const resta = () => {
  let acc = valuesArray[0];
  for (let i = 1; i < valuesArray.length; i += 1) {
    acc -= valuesArray[i];
  }
  acc = acc.toFixed(3);
  return acc;
};

const multiplicacion = () => {
  let acc = valuesArray[0];
  for (let i = 1; i < valuesArray.length; i += 1) {
    acc *= valuesArray[i];
  }
  return acc.toFixed(3);
};

const division = () => {
  if (valuesArray.includes(0)) {
    return "No se puede divir por 0";
  }

  let acc = valuesArray[0];
  for (let i = 1; i < valuesArray.length; i += 1) {
    acc /= valuesArray[i];
  }
  return acc.toFixed(3);
};

const results = () => {
  if (valuesArray.length === 1) {
    if (valuesArray[0] < 0) {
      return "No se puede realizar raiz cuadrada con números negativos";
    }
    result.push(`****** Operacion número: ${numberCalculator} ******`);
    result.push(`Raíz cuadrada: ${squareRoot()}`);

    resultPush();
    continueCalculate();
  } else {
    result.push(`****** Operacion número: ${numberCalculator} ******`);
    result.push(`Suma: ${suma()}`);
    result.push(`Resta: ${resta()}`);
    result.push(`Multiplicación: ${multiplicacion()}`);
    result.push(`División: ${division()}`);

    resultPush();
    continueCalculate();
  }
};

const enterNumber = () => {
  do {
    addNumber = prompt(
      "Ingrese un número. En caso de no querer introducir más, pulse cancelar."
    );
    if (addNumber !== "" && Number.isNaN(addNumber)) {
      document.write("Escriba solamente números");
      enterNumber();
    }
    if (addNumber === null) {
      console.log("Bye!");
    } else if (addNumber === "") {
      results();
    } else {
      addNumber = Number(addNumber);
      valuesArray.push(addNumber);
      enterNumber();
    }
  } while (addNumber !== null);
};

const continueCalculate = () => {
  let askValidate = askContinue();
  askValidate = askValidate.toLowerCase();
  switch (askValidate) {
    case "si":
      valuesArray = [];
      enterNumber();
      break;

    case "no":
      console.log("Bye");
      break;

    default:
      alert("Escribe si o no");
      return continueCalculate();
  }
};

enterNumber();
