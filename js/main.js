
// Para maior facilidade em acompanhar o desenvolvimento do código: F12 > Console 
     
// PARTE 1 - Introdução ao JavaScript_____________________________________________________________

var nome = "Henrique"
var idade = 50
var idade2 = 30
var frase = "Brasil, América do Norte"
//alert(idade + idade2 + nome) // é o pop-up da página
console.log(nome)
console.log(nome + idade + idade2) // não soma, somente exibe
console.log(frase)
console.log(frase.toUpperCase(frase)) // coloca em CAPS LOCK
console.log(frase.toLowerCase(frase)) // tira o CAPS LOCK
console.log(frase.replace("Norte", "Sul")) // troca um valor por outro
console.log(frase.replace("Norte", "Sul").toUpperCase(frase))
console.log(frase.replace("Norte", "Sul").toLowerCase(frase))
console.log(idade * idade2)


// PARTE 2 - Array e Dicionário__________________________________________________________________


var lista = ["banana", "maca", "abacaxi"]
console.log(lista)
console.log(lista[0])
console.log(lista[1])
console.log(lista[2])

lista.pop() // tirar ultimo elemento
lista.push("uva") // colocar após o utlimo elemento
console.log(lista)
console.log(lista[0]) // Arrays começam com 0 e não 1
console.log(lista[1])
console.log(lista[2])
console.log(lista.length) // imprime o tamanho da lista
console.log(lista.reverse()) // reverta a ordem do array
console.log(lista.toString()) // converte o tipo da variável para tipo String
console.log(lista.toString()[0]) // imprime o primeiro caractere
console.log(lista.join(" - ")) // mudar "," por outro caractere

var fruta = {nome:"banana", cor: "amarela"} // Object jason / Dicionário
console.log(fruta)
console.log(fruta.nome) // imprime o atributo
console.log(fruta.cor)
//alert(fruta.cor)
var frutas = [{nome:"banana", cor: "amarela"}, {nome:"uva", cor: "roxa"}] // lista de objetos/dicionários
console.log(frutas[1]) // imprime o Objeto de acordo com a posição
console.log(frutas[1].nome)
console.log(frutas[1].cor)


// PARTE 3 - Condicionais, laços de repetição e Date_____________________________________________


var idade3 = prompt("Digite sua idade: ") // entrada de dados no pop-up
if (idade3 >= 18) {
    alert("Maior de idade")
} else {
    alert("Menor de idade")
}

var count = 0
while (count < 5) {
    console.log(count)
    alert(count) // pop-up até a variavel sair da condição do escopo do while
    count++ // count recebe ele mesmo mais um
}

var i
for (i=0; i<=5; i++) {
    alert(i)
}

var date = new Date() // variavel date aponta para o ojeto date
alert(date)
alert(date.getMonth()+1) // imprime o mês ( +1 porque Janeiro = 0, Fevereiro = 1, ...)
alert(date.getMinutes())


// PARTE 1 - Desenvolva páginas web_____________________________________________________________


// criação de funções/métodos onde:
function soma(n1, n2) { // os atributos n1 e n2 que vão receber valores. Podem ter qlqr nome
    return n1 + n2 // { } a lógica que manipula esses dois valores e retorna um valor
}

function setReplace(frase, nome, novoNome) {
    return frase.replace(nome, novoNome)
}

var validar = 0
function validarIdade(idade) {
    if (idade >= 18) {
        // var validar: esse "var validar" não é o mesmo que o "var validar = 0",
        // pois esse " var validar" declarado dentro da função só vai existir enquanto estiver no escopo da função
        validar = true
    } else {
        validar = false
    }
    return validar
}

alert(soma(10, 24))
alert(setReplace("Vai Argentina", "Argentina", "Brasil"))

var idade4 = prompt("Digite sua idade: ")
validarIdade(idade4)
console.log(validar) // imprime TRUE ou FALSE pois a variável "validar" trocou de valor, de 0 para true ou false


// PARTE 2 - Manipulando elementos da página_____________________________________________________


function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>" // injetar um texto 
    //console.log(document.getElementById("Agradecimento"))
    //alert("Botao clicado")
}

function redirecionar() {
    window.open("https://www.google.com") // em outra aba
    //window.location.href = "https://www.google.com" // na mesma aba
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o  mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("Trocar texto")
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load() {
    alert("Página carregada") // quando carregar o body a função executa
}

function funcaoChange(elemento) {
    alert(elemento.value)
}