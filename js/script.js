// alertas
const ofertasAlert = document.querySelector('.btn-ofertas');
ofertasAlert.addEventListener("click", function(){
    alert("Não temos ofertas disponíveis no momento, aguarde por novidades.")
})
const ofertasAlert2 = document.querySelector('.btn-ofertas-2');
ofertasAlert2.addEventListener("click", function(){
    alert("Não temos ofertas disponíveis no momento, aguarde por novidades.")
})
const ofertasAlert3 = document.querySelector('.btn-ofertas-3');
ofertasAlert3.addEventListener("click", function(){
    alert("Não temos ofertas disponíveis no momento, aguarde por novidades.")
})

let enviarDados = document.querySelector("#enviarDados");

enviarDados.addEventListener("click", function(){
    let inputDados = document.querySelector("#inputContato").value;
    if(inputDados === ''){
        alert("Preencha os campos necessários!")
    } else{
        alert("Sua mensagem foi enviada com sucesso!")
    }
    document.querySelector("#inputContato").value = '';
})

// ViaCEP API
function consultaCep() {
    let cep = document.querySelector("#cep").value;
    if(cep.length != 8){
      alert("CEP inválido, digite um CEP correto.");
      return;
}

    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url).then(function(response){
        response.json().then(function(data){
            mostrarLocalizacao(data);
        })
    })
}

function mostrarLocalizacao(data){
    let localizacao = document.querySelector(".localizacao");
    if(data.erro){
        localizacao.innerHTML = "CEP INVÁLIDO"
    } else {
        localizacao.innerHTML = data.localidade;
    }
}
