window.onload = function(){

		document.getElementById("resultado");
		nome = localStorage.getItem("Nome")
		idade = localStorage.getItem("idade");
		fone = localStorage.getItem("fone");
		endereco = localStorage.getItem("endereco");
		numero = localStorage.getItem("numero");
		cidade = localStorage.getItem("cidade");
		estado = localStorage.getItem("Estados");
		genero = localStorage.getItem("genero");
		produto = localStorage.getItem("Produto");
    
        
        document.getElementById("resultado").innerHTML = ("Nome: "+ nome + "<br>" 
        + "Idade: " + idade + "<br>" 
        + "Telefone: " + fone + "<br>" 
        + "Endereço: " + endereco + "<br>" 
        + "Nº: " + numero + "<br>"
        + "Cidade: " + cidade + "<br>"
        + "Estado: " + estado + "<br>"
        + "Sexo: " + genero + "<br>"
        + "Produtos: " + produto )
    }