var flag = 0;

function limpa(){
	document.calculadora.visor.value= "";
}
function calcula(){
	var resultado = eval(document.calculadora.visor.value);
	document.calculadora.visor.value = resultado;
	flag = 1;
}
function mvisor(valor){
	if(flag == 1){
		if(valor=='/' || valor=='*' || valor=='+' || valor=='-'){
			flag = 0;
			var atual = document.calculadora.visor.value;
			document.calculadora.visor.value = atual+valor;
		}else{
			limpa();
			flag = 0;
			var atual = document.calculadora.visor.value;
			document.calculadora.visor.value = atual+valor;
		}	
	}else{
		var atual = document.calculadora.visor.value;
		document.calculadora.visor.value = atual+valor;
	}
	
}