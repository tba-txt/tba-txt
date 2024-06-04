let btn = document.querySelector('.fa-eye');

// Adicionando um evento de interatividade com o olho
btn.addEventListener('click', () => {
    let inputsenha = document.querySelector('#senha');
    
    if (inputsenha.getAttribute('type') === 'password') {
        inputsenha.setAttribute('type', 'text');
    } else {
        inputsenha.setAttribute('type', 'password');
    }
});
    

function entrar (){
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let listaUser = []

    let userValide = {
      nome: '',
      user: '',
      senha:'',
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    listaUser.forEach((item) => {
        if(usuario.value == item.userCadastrado && senha.value == item.senhaCadastada)
        
        userValide = {
            nome: item.nomeCadastrado,
            user: item.userCadastrado,
            senha: item.senhaCadastada
        }

    })

    if(usuario.value == userValide.user && senha.value == userValide.senha){
        window.location.href='home.html'
    }else{
        userLabel.setAttribute('style','color:red')
        senhaLabel.setAttribute('style','color:red')
        alert('usuário ou senha errados')
        
       
       
        
        
        

    }




}