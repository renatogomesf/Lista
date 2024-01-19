//entrada
const add_tarefa = document.querySelector("#add_tarefa")
const btn_adicionar = document.querySelector(".btn_adicionar")

//lista
const lista = document.querySelector(".lista")
const descrição_da_tarefa = document.querySelector(".descrição_da_tarefa")
const apagar = document.querySelector(".apagar")

let array_tarefas = []

function criarTarefa(){
    const tarefa = add_tarefa.value


    const div_caixaTarefa =document.createElement("div")
    div_caixaTarefa.setAttribute("class","caixa_tarefa")


    const div_tarefa = document.createElement("div")
    div_tarefa.setAttribute("class","tarefa")


    const input_checkbox = document.createElement("input")
    input_checkbox.setAttribute("type","checkbox")
    input_checkbox.setAttribute("name","checkbox")
    input_checkbox.setAttribute("id","checkbox")


    const label_descriçao = document.createElement("label")
    label_descriçao.setAttribute("class","descrição_da_tarefa")


    // const button_apagar = document.createElement("button")
    // button_apagar.setAttribute("class","apagar")


    const img_lixeira = document.createElement("img")
    img_lixeira.setAttribute("class","apagar")
    img_lixeira.setAttribute("src","img/lixeira.png")
    img_lixeira.setAttribute("alt","lixeira")

    // button_apagar.appendChild(img_lixeira)

    div_caixaTarefa.appendChild(div_tarefa)
    div_caixaTarefa.appendChild(img_lixeira)

    div_tarefa.appendChild(input_checkbox)
    div_tarefa.appendChild(label_descriçao)

    label_descriçao.innerHTML = tarefa

    lista.appendChild(div_caixaTarefa)

    array_tarefas.push(div_caixaTarefa)
    array_tarefas.map((ele)=>{
        console.log(ele.lastChild)
        ele.lastChild.addEventListener("click",(e)=>{
            lista.removeChild(e.target.parentNode)
        })
    })

    console.log("---------------------")
    add_tarefa.value = ""
    add_tarefa.focus()
}

btn_adicionar.addEventListener("click",()=>{
    if(add_tarefa.value == ""){
        alert("Digite algo para adicionar")
    }else{
        criarTarefa()
    }
})