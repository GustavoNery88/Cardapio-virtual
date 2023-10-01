function desenvolvedores() {
    let mostrar = document.getElementById("lerMais")
    if (mostrar.style.display === "inline") {
        mostrar.style.display = "none"
    } else {
        mostrar.style.display = "inline"
    }
}



let cardapio = [
    {
        id: "1",
        diaDaSemana: "Segunda Feira",
        pratoDoDia: "Arroz com feijão",
        informacoes: "O feijão é uma das melhores fontes vegetais de ferro, cuja ausência é uma das principais causas da anemia ferropriva. A maior parte dos feijões contém cerca de 5 mg de ferro a cada 100 g, mas o rajado, por exemplo, pode chegar a 18 mg do mineral na mesma porção. Além disso, eles são opções para aumentar os níveis de hemoglobina, pois possuem ácido fólico e vitamina C na composição."
    },
    {
        id: "2",
        diaDaSemana: "Terça Feira",
        pratoDoDia: "Arroz com frango",
        informacoes: "O frango é rico em niacina (vitamina B3), essencial para a proteção contra o câncer. Uma pequena porção de carne de frango podem atender as necessidades de niacina para o dia inteiro. O selênio presente na carne de frango também ajuda na proteção contra a doença."
    },
    {
        id: "3",
        diaDaSemana: "Quarta Feira",
        pratoDoDia: "Bolacha com suco",
        informacoes: "Rico em vitaminas A, E e do complexo B. A primeira não só auxilia o crescimento como também é boa para a vitalidade do cabelo e da pele. Já a vitamina E é conhecida por ser um potente antioxidante. Sucos naturais de frutas, por exemplo, são fontes de diversos nutrientes importantes para o nosso corpo."
    },
    {
        id: "4",
        diaDaSemana: "Quinta Feira",
        pratoDoDia: "Arroz com ovo",
        informacoes: "O ovo é rico em proteínas, que fornecem energia para o organismo, além de ter boas quantidades de ferro e vitaminas do complexo B, que melhoram a oxigenação e o transporte de nutrientes no organismo, promovendo o ganho de massa muscular."
    },
    {
        id: "5",
        diaDaSemana: "Sexta Feira",
        pratoDoDia: "Mingau de arroz",
        informacoes: "O arroz é bastante nutritivo. Mingau feito a partir deste cereal contém muitos nutrientes úteis. Assim, 100 gramas deste prato, fervidos em água, contém 1,4 g de proteínas, 0,1 g de gordura, 17,5 g de carboidratos e 79 kcal. Uma porção moderada desse prato nutritivo contribui para uma boa saturação, mas não leva a um conjunto de quilos extras."
    },
]
let botaoCard = document.getElementById("botaoModal")
let divPrincipal = document.getElementById("principal")
let divModal = document.getElementById("modal")

function remover() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}


function renderizarCatalogo() {
    for (const cardapios of cardapio) {
        let cartaoCardapio = `
            <div class="principal-secao-itemDoDia">
                <div class="principal-secao-itemDoDia-cabecalho">
                    <h3>${cardapios.diaDaSemana}</h3>
                </div>
                <div class="principal-secao-itemDoDia-comida">
                    <img src="imagens/prato-logo.png" alt="Logo de um prato de comida">
                    <h4>${cardapios.pratoDoDia}</h4>
                    <button class="botao" data-prato-id="${cardapios.id}">Informações nutricionais</button>
                </div>
            </div>`;
  
        divPrincipal.innerHTML += cartaoCardapio;
    }

    // Adicione um ouvinte de evento de clique aos botões
    const botoesInformacoes = document.querySelectorAll('.botao');
    botoesInformacoes.forEach(botao => {
        botao.addEventListener("click", function () {
            const pratoId = this.getAttribute("data-prato-id");
            chamarModal(pratoId);
        });
    });
}



function chamarModal(pratoId) {
    const modal = document.getElementById("modal-conteudo");

    const prato = cardapio.find(item => item.id === pratoId);

    if (prato) {
        modal.innerHTML = `
            <div class="modal">
                <button id="botaoFecharModal" class="botao-fechar">x</button>
                <h1>${prato.pratoDoDia}</h1>
                <img src="imagens/prato-${prato.id}.jpg" alt="Imagem de um prato com arros feijão">
                <p>${prato.informacoes}</p>
            </div>`;

            const botaoFecharModal = document.getElementById("botaoFecharModal");
            botaoFecharModal.addEventListener("click", remover);
    }
    let modalContainer = document.getElementById("modal");
    modalContainer.style.display = "block";
}



renderizarCatalogo()






