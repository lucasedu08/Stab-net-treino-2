
var imagens = document.getElementById('imagem');
var modal = document.querySelector('.modal');
var modalImg = document.querySelector('.modal-content img ');
var closeButton = document.querySelector('.close-button');

imagens.addEventListener('click', function(){
  modalImg.src = this.src
  modal.classList.add('active')
})

closeButton.addEventListener('click', function(){

  modal.classList.remove('active')
})



// calculadora: execicio ao sucesso


var operacao = ''
var numero1 = 0
var numero2 = 0

function adicionarNumero(numero) {
    const resultado = document.getElementById('entrada')
    resultado.value += numero
}

function adicionarOperacao(op) {
    const resultado = document.getElementById('entrada')
    operacao = op
    numero1 = parseFloat(resultado.value)
    resultado.value = ''
}

function limpar() {
    const resultado = document.getElementById('entrada')
    resultado.value = ''
    operacao = ''
    numero1 = 0
    numero2 = 0
}

function calcular() {
    const resultado = document.getElementById('entrada')
    numero2 = parseFloat(resultado.value)
    let resultadoFinal = ''

    switch (operacao) {
case '+':
   resultadoFinal = numero1 + numero2
break
case '-':
resultadoFinal = numero1 - numero2    
break
case '*':
resultadoFinal = numero1 * numero2    
break
case '/':
resultadoFinal = numero1 / numero2    
break
    }
    resultado.value = resultadoFinal
}
function changeBackground() {
    document.body.classList.toggle('cor-fundo');
  }

function active() {
  let menu = document.getElementById('menu')

  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block'
}



function enter() {
  var entrar = document.querySelector('.a1 a')

  entrar.style.color = 'black'
  entrar.innerHTML = 'criar conta'
}


function leave() {
  var link = document.querySelector('.a1 a');
  link.innerHTML = 'não logado ❌';
}









  // Recuperar a referência dos elementos HTML
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const removeTaskbtn = document.getElementById('removeTaskBtn')
// Verificar se já existem tarefas salvas no localStorage e, em caso afirmativo, carregá
const valedtask = localStorage.getItem('tasks')
if (valedtask) {
  taskList.innerHTML = valedtask
  }

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value
  if (taskText) {
   const taskitem = document.createElement('li')
   taskitem.textContent = taskText
    taskInput.value = ''
    taskList.appendChild(taskitem)
  }
  localStorage.setItem('tasks', taskList.innerHTML)
})




















































function openTab(tabName) {
  var tabs = document.getElementsByClassName('tab');
  var tabContents = document.getElementsByClassName('tab-content');

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
    tabContents[i].classList.remove('active');
  }

  document.getElementById('tab-' + tabName).classList.add('active');
  document.getElementById(tabName).classList.add('active');

  window.location.hash = tabName;
}

window.addEventListener('DOMContentLoaded', function () {
  if (window.location.hash) {
    var activeTab = window.location.hash.replace('#', '');
    openTab(activeTab);
  }
});


document.addEventListener("DOMContentLoaded", function() {
  // Obtém todas as guias e seus respectivos conteúdos
  const tabs = Array.from(document.querySelectorAll(".tab"));
  const tabContents = Array.from(document.querySelectorAll(".tab-content"));

  // Função para alternar entre as guias
  function openTab(tabName) {
    // Remove a classe "active" de todas as guias e conteúdos
    tabs.forEach(tab => tab.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    // Adiciona a classe "active" à guia selecionada e seu conteúdo correspondente
    const selectedTab = document.getElementById("tab-" + tabName);
    const selectedTabContent = document.getElementById(tabName);
    selectedTab.classList.add("active");
    selectedTabContent.classList.add("active");
  }

  // Adiciona o evento de clique a cada guia
  tabs.forEach(tab => {
    tab.addEventListener("click", function() {
      const tabName = this.id.replace("tab-", "");
      openTab(tabName);
    });
  })});


















  history.replaceState(null, null, location.href);


  function clicar() {
    var e = document.getElementById('iemail');
    var s = document.getElementById('isenha');
    
    if (e.value === '' && s.value === '') {
      window.alert('[ERRO] Insira os dados para criar a conta!');
      return false;
    }
  
    if (e.value === '') {
      window.alert('Insira o email para criar a conta');
      return false;
    }
    
    if (s.value === '') {
      window.alert('Insira a senha para criar a conta');
      return false;
    }
  
    return true;
  }
  