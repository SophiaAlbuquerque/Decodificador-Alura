var btn_cript = document.querySelector('#btn-criptografar');
var btn_descript = document.querySelector('#btn-descriptografar');
var btn_copy = document.querySelector('#btn-copiar');

btn_cript.addEventListener('click', function(){
  var text = document.getElementById('text').value;
  console.log(text);
  
  var resultado = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")
  
  document.getElementById('result').value = resultado;
  
});

btn_descript.addEventListener('click', function(){
  var text = document.getElementById('text').value;
  console.log(text);
  
  var resultado = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")
  
  document.getElementById('result').value = resultado;
  
});

btn_copy.addEventListener('click', function(){

  document.getElementById('result').select()
  document.execCommand('copy')
  
});