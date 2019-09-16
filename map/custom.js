var mapa_carro = {};

function registra_carro(){
	
var id_carro = document.getElementById('id_carro').value; // seleciona o valor de nosso input
var nome_carro = document.getElementById ('nome_carro').value; // seleciona o valor de nosso input

if(id_carro == '' || nome_carro == ''){ // checa se o usuário preencheu os campos antes de efetuar o registro
	alert('Insira todos os valores para completar o registro!');
	}else{
		mapa_carro[id_carro] = nome_carro; // Insere os valores em nosso map
		alert('Registrado com sucesso!');
}

}

function pesquisa_carro(){
	var id_busca = document.getElementById('carro_show').value;
	if(mapa_carro[id_busca] != null){ // Verifica se o posicionamento solicitado possui algo registrado
		alert('Carro encontrado: '+mapa_carro[id_busca]+''); // Escreve nosso carro em um alert
	}else{
		alert('Carro não encontrado!');
	}
	return false;
}