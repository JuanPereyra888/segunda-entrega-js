// function ingresarNombre(){
//     nombreIngresado= prompt("Ingrese su nombre.");
//     console.log(nombreIngresado);
//     alert("Bienvenido "+nombreIngresado+", en esta web vas a poder calcular tu sueldo.");
// }
 let horas=0;
 let valor=0;
    let entrada= prompt("Tocar cualquier letra para ingresar.\n '888' para salir.");
    while(entrada!=888){
        nombre= prompt("Ingrese su nombre.");
        // console.log(nombreIngresado);
        alert("Bienvenido "+nombre+", en esta web vas a poder calcular tu sueldo.");
        do{ 
            horas=prompt("ingresar la cantidad de horas trabajadas.");
            // console.log(horas);
        }while(parseInt(horas)<0 ||parseInt(horas)==0)
        do{
            valor=prompt("ingresar cuanto le pagan por hora: ")
            // console.log(valor);
        }while(parseInt(valor)<0 ||parseInt(valor)==0)
        sueldo=horas*valor
        // console.log(sueldo);
        if(horas<192){
            alert("Su sueldo es de: "+ sueldo+" pesos"+"\nlas horas que trabajas mensualmente estan dentro de lo que establece la ley.")
        }
        else{
            alert("Su sueldo es de: "+sueldo+" pesos "+"\nlas horas que trabajas mensualmente NO estan dentro de lo que establece la ley .")
        }
        entrada=prompt("Volver a calcular sueldo.\n'888' Para salir.")
    }
const personas=[
        {nombre:nombre, horas:horas,valor:valor,sueldo:sueldo},
        {nombre:'Juan', horas:100,valor:200,sueldo:20000},
        {nombre:'Natalia', horas:200,valor:30,sueldo:6000},
        {nombre:'Jose', horas:200,valor:100,sueldo:20000},
]
 console.log(personas.some((elemento) => elemento.nombre=="Jorguito"));
for (const persona of personas ){
console.log("--------------------------");
console.log(persona.nombre);
console.log(persona.horas);
console.log(persona.valor);
console.log(persona.sueldo);
}
const genterandom=[]
genterandom.push({nombre,horas,valor,sueldo})
genterandom.forEach ((personasrandom) => {
    alert(`la persona ${personasrandom.nombre} trabaja ${personasrandom.horas} horas y su sueldo es ${personasrandom.sueldo}`)
});
alert("Muchas gracias por elegirnos.");

