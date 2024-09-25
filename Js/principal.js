var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var pacientes=document.querySelectorAll(".paciente")
for (var i= 0; 1 < pacientes.length; i++) {

    var paciente = pacientes [i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent
    var tdIMc = paciente.querySelector(".info-imc"); 
}