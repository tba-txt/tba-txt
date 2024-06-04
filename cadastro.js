
                       //variaveis pertecentes a interatividade (mostrar senha) \\

let btnsenha = document.getElementById('versenha');
let btnconfirm = document.getElementById('verconfirmesenha');


let inputsenha = document.querySelector('#senha');
let inputconfirmesenha = document.querySelector('#confsenha');

                    // variaveis pertecentes a interatividade (validação do usuario) \\

let nome = document.querySelector('#nome');
let labelnome = document.querySelector('#label-nome');
let validnome = false;

let usuario = document.querySelector('#usuario');
let labelusuario = document.querySelector('#label-usuario');
let validusuario = false;

let senha = document.querySelector('#senha');
let labelsenha = document.querySelector('#label-senha');
let validsenha = false;

let revermesenha= document.querySelector('#confsenha');
let labelreversenha = document.querySelector('#label-confimsenha');
let validreversenha = false;



                          // validação do usuario () \\ 

nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){
        labelnome.setAttribute('style','color:red')
        labelnome.innerHTML = 'Nome *insira no minimo 3 caracteres'
        validnome = false;

    }else {
        labelnome.setAttribute('style','color:green')
        labelnome.innerHTML = 'Nome'
        validnome = true; 

    }
})
usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 4){
        labelusuario.setAttribute('style','color:red')
        labelusuario.innerHTML = 'usuario *insira no minimo 5 caracteres'
        validusuario = false;

    }else {
        labelusuario.setAttribute('style','color:green')
        labelusuario.innerHTML = 'usuario'
        validusuario = true; 

    }
})
senha.addEventListener('keyup', () => {
    if(senha.value.length <= 4){
        labelsenha.setAttribute('style','color:red')
        labelsenha.innerHTML = 'senha *insira no minimo 5 caracteres'
        validsenha = false;

    }else {
        labelsenha.setAttribute('style','color:green')
        labelsenha.innerHTML = 'senha' 
        validsenha = true;

    }
})
revermesenha.addEventListener('keyup', () => {
    if(senha.value != revermesenha.value){
        labelreversenha.setAttribute('style','color:red')
        labelreversenha.innerHTML = '  as senhas não conferem'
        validreversenha = false;
        

    }else {
        labelreversenha.setAttribute('style','color:green')
        labelreversenha.innerHTML = 'confirme senha'
        validreversenha = true; 

    }
})
                             // armazenamento de dados no localStorage
 
function cadastrar() {
    if (validnome && validusuario && validsenha && validreversenha) {
        // Verificamos se há alguma entrada na lista de usuários, se não houver, inicializamos como um array vazio
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        listaUser.push({
            nomeCadastrado: nome.value,
            userCadastrado: usuario.value,
            senhaCadastada: senha.value
        });

        // Convertendo a lista atualizada para JSON e armazenando no localStorage
        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        // Redirecionar para outra página após o cadastro (adicionei aqui)
        window.location.href = "index.html";

        alert("Usuário cadastrado");
    } else {
        alert('Campos não preenchidos');
    }
}



                                 // interatividade para (mostrar senha) \\
                    
btnsenha.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha');
    
    if(inputSenha.getAttribute('type') == 'password'){
      inputSenha.setAttribute('type', 'text');
    } else {
      inputSenha.setAttribute('type', 'password');
    }
  })
  
  btnconfirm.addEventListener('click', ()=>{
    let inputConfirmSenha = document.querySelector('#confsenha');
    
    if(inputConfirmSenha.getAttribute('type') == 'password'){
      inputConfirmSenha.setAttribute('type', 'text');
    } else {
      inputConfirmSenha.setAttribute('type', 'password');
    }
  })

  
  




    
    

    
    