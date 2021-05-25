"use strict";

var forma = document.getElementById("forma"),
txtFecha = forma["fecha"],
salidaBoleta = document.getElementById("salidaBoleta"),
salidaNombre = document.getElementById("salidaNombre"),
salidaGrupo = document.getElementById("salidaGrupo"),
salidaMateria = document.getElementById("salidaMateria"),
salidaFecha = document.getElementById("salidaFecha");


function pantalla(){
    var fechaValueAsDate = txtFecha.valueAsDate,
    fecha = new Date(txtFecha.value),
    Boleta = forma["boleta"].value,
    Nombre = forma["nombre"].value,
    Grupo = forma["grupo"].value,
    Materia = forma["materia"].value,
    MiFecha;

    MiFecha = (fecha.getDate() + 1) + "/" + (fecha.getMonth()+1)+  "/"+fecha.getFullYear();
    salidaFecha.textContent = txtFecha.type + " | " 
    +  MiFecha;
    salidaBoleta.textContent = "Boleta: "+ Boleta;
    salidaNombre.textContent = "Nombre: "+ Nombre;
    salidaGrupo.textContent = "Grupo: "+ Grupo;
    salidaMateria.textContent = "Materia: "+ Materia; 
}

function alerta(){
    var fechaValueAsDate = txtFecha.valueAsDate,
    fecha = new Date(txtFecha.value),
    Boleta = forma["boleta"].value,
    Nombre = forma["nombre"].value,
    Grupo = forma["grupo"].value,
    Materia = forma["materia"].value,
    MiFecha;
    
    MiFecha = (fecha.getDate() + 1) + "/" + (fecha.getMonth()+1)+  "/"+fecha.getFullYear();
    salidaFecha.textContent = txtFecha.type + " | " 
    +  MiFecha;
    alert("Boleta:"+ Boleta + "| Nombre:" + Nombre + " | Grupo:" + Grupo + " | Matera: " + Materia + " | Fecha: " + MiFecha );
}