var btnSolicitar = document.getElementById("btnSolicitar");
var autor = document.getElementById("autor");
var titulo = document.getElementById("titulo");

// Evento de Click pra criação de elementos e deletar elementos

btnSolicitar.addEventListener("click", function (event) {
  event.preventDefault();

  var frmSolicitar = document.getElementById("frmSolicitar");
  const select = document.getElementById("select");

  const indice = select.selectedIndex;
  const text = select.options[indice].text;

  //Cria o elemento tr
  var linhaTabela = document.createElement("tr");

  //Cria os elementos td
  var colunaVinculo = (document.createElement("td"));
  var colunaTitulo = (document.createElement("td"));
  var colunaAutor = (document.createElement("td"));
  var colunaEdicao = (document.createElement("td"));
  var colunaISSN = (document.createElement("td"));
  var colunaAno = (document.createElement("td"));
  var colunaEditora = (document.createElement("td"));

  var btnDeleta = document.createElement("button");

  btnDeleta.innerHTML = "Deletar";

  //Adicionar o conteudo de cada celular
  colunaVinculo.textContent = text;
  colunaTitulo.textContent = frmSolicitar.titulo.value;
  colunaAutor.textContent = frmSolicitar.autor.value;
  colunaEdicao.textContent = frmSolicitar.edicao.value;
  colunaISSN.textContent = frmSolicitar.issn.value;
  colunaAno.textContent = frmSolicitar.ano.value;
  colunaEditora.textContent = frmSolicitar.editora.value;

  //Obtendo referencia da tabela solicitar
  var tabelaSolicita = document.getElementById("table").querySelector("tbody");

  //inserindo todas as celulas dentro da linha
  tabelaSolicita.appendChild(colunaVinculo).ondblclick = myfunction();
  tabelaSolicita.appendChild(colunaTitulo).ondblclick = myfunction();
  tabelaSolicita.appendChild(colunaAutor).ondblclick = myfunction();
  tabelaSolicita.appendChild(colunaEdicao).ondblclick = myfunction();
  tabelaSolicita.appendChild(colunaISSN).ondblclick = myfunction();
  tabelaSolicita.appendChild(colunaAno).ondblclick = myfunction();
  tabelaSolicita.appendChild(colunaEditora).ondblclick = myfunction();
  tabelaSolicita.appendChild(btnDeleta).ondblclick = myfunction();

  tabelaSolicita.appendChild(linhaTabela);
 
});
// fim do bloco de criação de elementos

// Bloqueia os inputs do formulario
function block() {
  document.querySelector("select").disabled = true;
  document.getElementById("autor").disabled = true;
  document.getElementById("titulo").disabled = true;
  document.getElementById("issn").disabled = true;
  document.getElementById("editora").disabled = true;
  document.getElementById("edicao").disabled = true;
  document.getElementById("ano").disabled = true;
}

// validados campos autor, titulo e ano
var invalidationForm = document.getElementById("btnSolicitar");
invalidationForm.addEventListener("click", function (e) {
  e.preventDefault();
  var ano = document.getElementById("ano");

  if (frmSolicitar.ano.value < 1900 || frmSolicitar.ano.value > 2019) {
    alert("Digite um ano entre 1900 e 2019");
  }
  if (frmSolicitar.autor.value == "" || frmSolicitar.titulo.value == "") {
    alert("Digite um Autor e Titulo");
  } else {
    return true;
  }
});

//Inicio Contador regressivo
function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;

  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    } else if (timer == 0) {
      block();
      alert("Tempo esgotado");
    }
  }, 1000);
}

window.onload = function () {
  var duration = 3599 * 1; // Conversão para segundos
  var display = document.querySelector("#time");

  startTimer(duration, display);
  if (duration == 0) {
    var duration = 0; // Conversão para segundos
    var display = document.querySelector("#time");
    alert("Tempo esgotado");
    return false;
  }
};
//Fim Contador regressivo 3599
