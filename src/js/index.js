const btnNovoConselho = document.getElementById('novoConselho')

btnNovoConselho.addEventListener('click', () => {
    async function gerarConselhoAleatorio() {
        const resposta = await fetch("https://api.adviceslip.com/advice")
        const conselhoAleatorio = await resposta.json()
        document.querySelector('.adviceId').innerHTML = `Advice #${conselhoAleatorio.slip.id}`
        document.querySelector('.adviceText').innerHTML = `"${conselhoAleatorio.slip.advice}"`
    }

    gerarConselhoAleatorio()
})