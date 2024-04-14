let opcion= parseInt(prompt("Bienvenido al menú de la immobiliaria\nEliga Opción:\n1- Cargar propiedad\n2- Consultar Gastos en base a precio de alquiler\n3- Salir"));
while(opcion!=3){
    if(opcion==1){
        cargarPropiedad();
    }
    else if (opcion==2){
        consultarGastos();
    }
    else break;
    opcion= parseInt(prompt("Bienvenido al menú de la immobiliaria\nEliga Opción:\n1- Cargar propiedad\n2- Consultar Gastos en base a precio de alquiler\n3- Salir"));
}


function cargarPropiedad(){
    let opcionDeCarga=  Boolean;
    let direccion= prompt("Ingrese la dirección");
    let valor= parseInt(prompt("Valor: "));
    let tipo= parseInt(prompt("1- Alquiler\n2- Venta"));
    opcionDeCarga= tipoOperación(tipo);
    if(opcionDeCarga) alert("Ha ingresado correctamente su alquiler:\nDirección: "+direccion+"\nValor: $"+valor);
    else alert("Ha ingresado correctamente su venta:\nDirección: "+direccion+"\nValor: $"+valor);
}

function tipoOperación(num){
    if (num==1){
        opcion = true;
    }
    else opcion = false;
    return opcion;
}

function consultarGastos(){
    let monto= parseInt(prompt("Ingrese el monto del alquiler: "));
    let total= monto*24*0.04;
    alert("Los gastos son los siguientes\nUn mes pago por adelantado: "+ monto+"\nUn mes de depósito: "+monto+
    "\nHonorarios inmobiliarios 4% del total del contrato (2 años): "+ total+"\nTotal: "+(total+(monto*2)));
}