const startGameButton = document.querySelector('.start-game')
const title = document.querySelector('h1')
const questionContainer = document.querySelector('.question-container')
const questionText = document.querySelector('.question')
const answersContainer = document.querySelector('.answers-container')
const nextQuestionButton = document.querySelector('.next-question')

startGameButton.addEventListener('click', startGame)
nextQuestionButton.addEventListener('click', displayNextQuestion)

let currentQuestionIndex = 0 // contador das questões
let totalCorrect = 0

function startGame() {
    startGameButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    title.classList.add('hide')
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if (questions_page_15.length === currentQuestionIndex) {
        return finishGame()
    }

    questionText.textContent = questions_page_15[currentQuestionIndex].question
    questions_page_15[currentQuestionIndex].answer.forEach(answer => {
        const newAnswer = document.createElement('button')

        newAnswer.classList.add('button', 'answer')
        newAnswer.textContent = answer.text

        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }

        answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener('click', selectAnswer)
    })
}

function resetState() {
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild)
    }

    document.body.removeAttribute('class')
    nextQuestionButton.classList.add('hide')
}

function selectAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body.classList.add('correct')
        document.body.classList.remove('incorrect')
        totalCorrect++
    } else {
        document.body.classList.add('incorrect')
        document.body.classList.remove('correct')
    }

    document.querySelectorAll('.answer').forEach(button => {
        if (button.dataset.correct) {
            button.classList.add('correct')
        } else {
            button.classList.add('incorrect')
        }
        button.disabled = true
    })

    nextQuestionButton.classList.remove('hide')
    currentQuestionIndex++
}

function finishGame() {
    const totalQuestion = questions_page_15.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestion)

    let message = ''

    switch (true) {
        case (performance >= 90):
            message = 'Execelente :D'
            break
        case (performance >= 70):
            message = 'Muito Bom :)'
            break
        case (performance >= 50):
            message = 'Bom :|'
            break
        case (performance >= 30):
            message = 'Precisa Melhorar :('
            break
        default:
            message = 'Precisa Melhorar MUITO D:'
    }

    questionContainer.innerHTML =
        `
            <p class="final-message">
                Você acertou ${totalCorrect} de ${totalQuestion} questôes!
                <span>Resultado: ${message}</span>
            </p>
        
            <button onclick="window.location.reload()" class="button">Refazer teste</button>

        `
}

const questions_page_15 = [
    {
        question: 'Por que é importante manter a área da chapa sempre limpa?',
        answer: [
            { text: 'Porque uma chapa limpa é mais fácil de limpar depois de usar.', correct: false },
            { text: 'Uma chapa limpa significa hambúrgueres mais gostosos e dentro do Padrão Ouro de Qualidade, contribui com a segurança alimentar, os nossos clientes ficam mais felizes com o produto recebido e contribui com a manutenção do equipamento.', correct: true },
            { text: 'Porque uma chapa limpa deixa o ambiente mais agradável para os funcionários.', correct: false },
            { text: 'Porque uma chapa limpa é mais bonita, mas não impacta na qualidade do alimento.', correct: false },
        ]
    },
    {
        question: 'Quais os 3 comportamentos principais do pilar "Cumprimos o que prometemos"?',
        answer: [
            { text: 'Fazer bem, Fazer especial e Fazer rápido.', correct: true },
            { text: 'Fazer bem, Fazer especial e Fazer com perfeição.', correct: false },
            { text: 'Fazer rápido, Fazer bem e Fazer com entusiasmo.', correct: false },
            { text: 'Fazer bem, Fazer simples e Fazer com qualidade.', correct: false },
        ]
    },
    {
        question: 'Por que é importante ter um cuidado especial nos pedidos para viagem?',
        answer: [
            { text: 'Devemos ter todo o cuidado com os produtos embalados para garantir a exatidão dos pedidos e a satisfação do cliente.', correct: true },
            { text: 'Porque os pedidos para viagem não precisam de tanto cuidado como os pedidos feitos no restaurante.', correct: false },
            { text: 'Porque é mais fácil esquecer o pedido para viagem e não há problemas nisso.', correct: false },
            { text: 'Porque os pedidos para viagem são sempre mais baratos e não precisam ser preparados com tanto capricho.', correct: false },
        ]
    },
    {
        question: 'O que é Economia Circular?',
        answer: [
            { text: 'Economia Circular é um conceito que prioriza a produção de mais produtos, sem se preocupar com o desperdício ou reciclagem.', correct: false },
            { text: 'Economia Circular é a troca de produtos de forma que todos ganham, sem gastar muito.', correct: false },
            { text: 'Economia Circular é um conceito que associa o desenvolvimento econômico a um melhor aproveitamento dos recursos naturais, por meio de novos modelos de negócios e otimização nos processos de fabricação com menos dependência de matéria-prima virgem, priorizando insumos mais duráveis, recicláveis e renováveis.', correct: true },
            { text: 'Economia Circular significa a produção de produtos baratos e descartáveis.', correct: false },
        ]
    },
    {
        question: 'Como podemos honrar o compromisso de cumprir as expectativas do cliente?',
        answer: [
            { text: 'Apenas cumprindo o pedido do cliente sem adicionar qualquer valor extra.', correct: false },
            { text: 'Garantindo que o cliente saia do restaurante o mais rápido possível.', correct: false },
            { text: 'Criando o máximo de momentos deliciosos e de bem-estar que conseguirmos.', correct: true },
            { text: 'Mantendo o foco na rapidez e não no atendimento ao cliente.', correct: false },
        ]
    },
    {
        question: 'Qual é o conceito de "Fazer Especial"?',
        answer: [
            { text: 'Fazer tudo o que está ao nosso alcance para agregar valor à experiência dos nossos clientes e superar suas expectativas.', correct: false },
            { text: 'Fazer algo que seja único, mas apenas em ocasiões especiais.', correct: false },
            { text: 'Fazer o atendimento de forma rápida e sem muita interação com o cliente.', correct: false },
            { text: 'Fazer tudo diferente para cada cliente para que ele se sinta especial.', correct: true },
        ]
    },
    {
        question: 'Por que usar EPIs na operação das chapas e fritadeiras?',
        answer: [
            { text: 'Os EPIs são apenas uma recomendação, não sendo obrigatórios.', correct: false },
            { text: 'Os equipamentos como chapas e fritadeiras são quentes e podem causar queimaduras graves se os EPIs não forem usados.', correct: true },
            { text: 'Os EPIs servem apenas para proteger os produtos de contaminação, não os funcionários.', correct: false },
            { text: 'Os EPIs são usados apenas para atender aos regulamentos, mas não são necessários se a operação for cuidadosa.', correct: false },
        ]
    },
    {
        question: 'Quais são os equipamentos que você deve conhecer na sua área?',
        answer: [
            { text: 'Apenas a caixa (POS) e o menu físico.', correct: false },
            { text: 'Menu digital e físico, caixa (POS), scanner, leitor de cartões, impressora de cupom fiscal e localizadores de mesa.', correct: true },
            { text: 'Somente os equipamentos de preparo de alimentos, como chapa e fritadeira.', correct: false },
            { text: 'Apenas a impressora de cupom fiscal e o scanner.', correct: false },
        ]
    },
    {
        question: 'Por que o reuso de água de ar condicionado e chuva nos ajudam nos pilares da receita do futuro?',
        answer: [
            { text: 'Ajuda a reduzir o consumo de água e contribui para a sustentabilidade da operação.', correct: false },
            { text: 'Não tem impacto significativo nos pilares da receita do futuro.', correct: false },
            { text: 'É uma prática apenas de marketing, sem um benefício real para a empresa.', correct: false },
            { text: 'Ajuda na comunicação das práticas socioambientais da empresa.', correct: true },
        ]
    },
    {
        question: 'Quantos itens usamos no saco B?',
        answer: [
            { text: 'Saco B - 3 a 5 itens.', correct: false },
            { text: 'Saco B - 5 a 7 itens.', correct: false },
            { text: 'Saco B - 4 a 6 itens.', correct: true },
            { text: 'Saco B - 6 a 8 itens.', correct: false },
        ]
    },
];
