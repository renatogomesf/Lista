const add_tarefa = document.querySelector("#add_tarefa")
const btn_adicionar = document.querySelector(".btn_adicionar")

const lista = document.querySelector(".lista")
const descrição_da_tarefa = document.querySelector(".descrição_da_tarefa")
const apagar = document.querySelector(".apagar")

// ARRAY QUE ARMAZENA CADA INTEM DA LISTA.
let array_tarefas = []

// FUNÇÃO QUE CRIA A LISTA E CADA ITEM.
function criarTarefa(){

    // PEGA O QUE ESTIVER NO INPUT E POE NUMA VARIÁVEL.
    const tarefa = add_tarefa.value


    // CRIA A DIV QUE CAI CONTER O ITEM DA LISTA E SUAS FUNÇÕES.
    const div_caixaTarefa =document.createElement("div")
    div_caixaTarefa.setAttribute("class","caixa_tarefa")


    // CRIA A DIV DO ITEM EM SI.
    const div_tarefa = document.createElement("div")
    div_tarefa.setAttribute("class","tarefa")


    // CRIA UMA CHECBOX PARA CADA ITEM DA LISTA.
    const input_checkbox = document.createElement("input")
    input_checkbox.setAttribute("type","checkbox")
    input_checkbox.setAttribute("name","checkbox")
    input_checkbox.setAttribute("id","checkbox")


    // CRIA O LABEL QUE VAI CONTER A STRING DIGITADA PELO USUÁRIO E MOSTRAR NA LISTA.
    const label_descriçao = document.createElement("label")
    label_descriçao.setAttribute("class","descrição_da_tarefa")


    // CRIA O ÍCONE DE LIXEIRA PARA PODER APGAR CADA ITEM DA LISTA.
    const img_lixeira = document.createElement("img")
    img_lixeira.setAttribute("class","apagar")
    img_lixeira.setAttribute("src","img/lixeira.png")
    img_lixeira.setAttribute("alt","lixeira")


    // INSERÇÃO DAS DIVS CRIADAS EM SEUS RESPECTIVOS LUGARES.
    div_caixaTarefa.appendChild(div_tarefa)
    div_caixaTarefa.appendChild(img_lixeira)

    div_tarefa.appendChild(input_checkbox)
    div_tarefa.appendChild(label_descriçao)

    // LABEL RECEBE O QUE FOI DIGITADO PELO USUÁRIO.
    label_descriçao.innerHTML = tarefa

    // FAZ A INSERÇÃO DE CADA ITEM CRIADO NA DIV "LISTA" JÁ DEFINIDA NO HTML.
    lista.appendChild(div_caixaTarefa)

    // FAZ UM PUSH DE CADA INEM CRIADO NO ARRAY TAREFAS
    array_tarefas.push(div_caixaTarefa)

    // PERCORRE O ARRAY VERIFICANDO QUAL ÍCONE DE LIXEIRA FOI CLICADO E APAGA O ITEM RELACIONADO.
    array_tarefas.map((ele)=>{
        ele.lastChild.addEventListener("click",(e)=>{
            lista.removeChild(e.target.parentNode)
        })
    })

    // APAGA O CONTEÚDO DO INPUT.
    add_tarefa.value = ""

    // SELECIONA AUTOMATICAMENTE O INPUT ARA DIGITAR ALGO NOVAMENTE.
    add_tarefa.focus()
}

// CHAMA A FUNÇÃO QUE CRIA TODO O CONTEÚDO DA LISTA.
btn_adicionar.addEventListener("click",()=>{

    // VERIFICA SE O INPUT ESTÁ VAZIO OU NÃO E CHAMA A FUNÇÃO.
    if(add_tarefa.value == ""){
        alert("Digite algo para adicionar")
    }else{
        criarTarefa()
    }
})