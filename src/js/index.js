// pega os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
const botoes = document.querySelectorAll(".botao");

// pega os personagens no JS pra poder mostrar ou esconder ele
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    // verifica se já existe um botão selecionado, se sim, devemos remover a seleção dele
    desselecionaBotao();

    // adiciona a classe "selecionado" no botão que o usuário clicou
    botao.classList.add("selecionado");

    // verifica se já exista um personagem selecionado, se sim, devemos remover
    desselecionaPersonagem();

    // adiciona a classe "selecionado" no personagem que o usuário selecionou
    personagens[index].classList.add("selecionado");
  });
});
function desselecionaPersonagem() {
  const personagemSelecionado = document.querySelector(
    ".personagem.selecionado"
  );
  personagemSelecionado.classList.remove("selecionado");
}

function desselecionaBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");
}

