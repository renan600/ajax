const btnCep = document.querySelector('#btnCep')
btnCep.addEventListener('click', clicou =>{
    const inputCep = document.querySelector('#cep')
    const cep = inputCep.value.replace('-','')
    const url = `https://viacep.com.br/ws/${cep}/json`
    const xhr = new XMLHttpRequest(); xhr.open('GET', url, true);
    
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200) preencherFormulario(JSON.parse(xhr.responseText))
        }
    }
    xhr.send(url)
})

function preencherFormulario(json){
    document.querySelector('#cidade').value = json.localidade
    document.querySelector('#uf').value = json.uf
}