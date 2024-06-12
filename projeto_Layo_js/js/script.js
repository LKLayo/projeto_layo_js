var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função somar
  indentificarletra();

});


//Função somar
function indentificarletra() {

  //Captura o que está dentro do primeiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let letra = (document.getElementById("letra")).value;

  let letraMaiuscula = letra.toUpperCase();


  if(letra == letraMaiuscula){
    document.getElementById("resultado_soma").value = "Maiuscula";
  } else {
    document.getElementById("resultado_soma").value = "Minuscula";
  }

  //Aqui vai escrever no input "resultado_soma" o valor que está armazenado na variável "resultado_soma"



}
