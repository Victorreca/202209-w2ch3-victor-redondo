let flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
  ];

let userName;
let flightsScale = 0;
let addFlight;
let role;
let newFlight;

const showFlights = () => {
    console.log("*******FLIGHTS*******");
    flights.forEach((flight) =>
      console.log(
        `Id: ${flight.id} Destino: ${flight.to} Origen: ${flight.from} Coste: ${flight.cost} Escala: ${flight.scale}`
      )
    );
    console.log("**********************");
};

const askUser = () => {
    do{
        userName = prompt("Inserte su nombre de usuario");
    }while(typeof userName != "string" || userName === "" );
    console.log(`Bienvenido/a ${userName}`);
};

const scaleFlight = () => {
    for(let i = 0; i < flights.length; i++){
        
        if(flights[i].scale === true){
            console.log(`El vuelo con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y realiza escala`);
            flightsScale += 1;
        }
        else{
            console.log(`El vuelo con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y no realiza escala`);
        }
    }
    averagePrice();
    console.log(`El total de vuelos con escala son ${flightsScale}`);
};

const averagePrice = () => {
    let costFlights = 0;
    for(let i = 0; i < flights.length; i++ ){
        costFlights += flights[i].cost;
    }
    let averagePriceFlights = (costFlights/flights.length);
    return console.log("El precio media de los vuelos es " + averagePriceFlights);
};

const availableFlights = () =>{
    scaleFlight();
};

const lastFiveFlights = () => {
    let lastFive = flights.length - 5; //lastFive = 5
    console.log(`Últimos 5 vuelos: `);
    
    for(let j = flights.length - 1; j >= 5; j--){ //9, 8, 7, 6
        console.log(`Vuelo a ${flights[j].to}`); // 
    }  
};

const askForRole = () => {
    let role = prompt(`¿Cuál es su rol (user/admin)?`)
    role = role.toLowerCase();
    switch (role) {
        case "admin":
            askForAdminActions();
            break;
        case "user":
            showPricesFlights();
            break;
        default:
            console.log("Escriba admin o user.")
            askForRole();
            break;
    }
}

const showPricesFlights = () => {
    const lookPriceFlight = +prompt(`Inserte el precio máximo de los vuelos que desea buscar`);
    console.log("Los vuelos con el precio buscado o inferior son:");
    for(let i = 0; i < flights.length; i++){
        if(flights[i].cost <= lookPriceFlight){
            console.log(`De ${flights[i].from} a ${flights[i].to} por ${flights[i].cost}`)
        }
    }
    if(isNaN(lookPriceFlight) || lookPriceFlight <= 0){
        alert(`Por favor introduzca número válidos y mayores que 0`);
        showPricesFlights();
    }
};

const askForAdminActions = () => {
    let action = prompt(`¿Qué desea hacer? ¿Crear o eliminar vuelos? (create/delete)`);
    action = action.toLowerCase();
    switch (action) {
        case "create":
            
            adminCreate();
            
            break;
        case "delete":
            
            adminDelete();
            
            break;
        default:
            console.log("Escriba create o delete.");
            askForAdminActions();
            break;
    }
}

const adminCreate = () => { 
        do{
            newFlight = {};
            newFlight.id = flights.length;
            newFlight.to = prompt(`Indique el destino`);
            newFlight.from = prompt(`Indique el origen`);
            
            askCostFlight();
            askScaleFlight();
        
            flights.push(newFlight);
            showFlights();
                  
            if(flights.length <= 14){
            addFlight = prompt(`Si desea añadir más vuelos escriba "si", de lo contrario pulse cancelar`);
                
            }
            if(addFlight.toLowerCase()  !== "si" && typeof addFlight === "string"){
                alert("Escriba correctamente 'si' o de lo contrario pulse cancelar");
                addFlight = prompt(`Si desea añadir más vuelos escriba "si", de lo contrario pulse cancelar`);
            }
            if(addFlight === null){
                return;
            }
        }    
        while(addFlight.toLowerCase() === "si" && flights.length <= 14);
        if(flights.length >= 14){
            alert("Ha alcanzado el número máximo de vuelos creados");
        }  
}
const askCostFlight = () => {
    newFlight.cost = +prompt(`Indique el coste (sin indicar la moneda)`);
    if(isNaN(newFlight.cost) || newFlight.cost <= 0){
        alert("Introduce un número válido");
        askCostFlight();
    }

}

const askScaleFlight = () => {
    newFlight.scale = prompt(`Indique si hace escala, si tiene escala escriba si, en caso de no tener escala escriba no`);
    newFlight.scale = newFlight.scale.toLowerCase();
    switch (newFlight.scale){
        case "si":
            newFlight.scale = true;
            break;
        case "no":
            newFlight.scale = false;
            break;
        default:
            alert("Escriba si o no");
            askScaleFlight();
            break;
    }
}

const adminDelete = () => {
    
        showFlights();
        const idToDelete = +prompt("Introduzca ID para eliminar");
        flights = flights.filter((flight) => flight.id !== idToDelete);
        showFlights();     
}

const adminAction = () =>{    
    adminCreate();
    showFlights();
    adminDelete(); 
};

const allFunctions = () =>{
    askUser();
    availableFlights();
    lastFiveFlights();
    askForRole();
};
  
allFunctions();