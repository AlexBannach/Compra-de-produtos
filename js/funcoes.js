	var botao = document.getElementById("btn");

	botao.addEventListener("click", function () {
		var nome = document.getElementById("nome").value.toUpperCase();
		localStorage.setItem("Nome", nome);
		var idade = document.getElementById("idade").value;
		localStorage.setItem("idade", idade);
		var fone = document.getElementById("fone").value;
		localStorage.setItem("fone", fone);
		var end = document.getElementById("end").value.toUpperCase();
		localStorage.setItem("endereco", end);
		var num = document.getElementById("num").value;
		localStorage.setItem("numero", num);
		var cidade = document.getElementById("cidade").value.toUpperCase();
		localStorage.setItem("cidade", cidade);
		var Estados = document.getElementById("Estados");
		localStorage.setItem("Estados", Estados[Estados.selectedIndex].text.toUpperCase());
		var sexo = document.getElementsByName("genero");
		for (var x = 0; x < sexo.length; x++) {
			if (sexo[x].checked) {
				var result = sexo[x].value;
				localStorage.setItem("genero", result.toUpperCase());
			}
		}

		
		var compras = '';

		for (var x = 1; x <= 5; x++) {
			var checkbox = document.getElementById(x);
			if (checkbox.checked) {
				compras += checkbox.value + ","
				localStorage.setItem("Produto", compras.toUpperCase());
			}
		}

	});

