let imoveis = [];

function alternarTema() {
  document.body.classList.toggle("dark");
}

function filtrar(tipo) {
  const container = document.getElementById('lista-imoveis');
  container.innerHTML = '';

  const filtrados = tipo === 'todos' ? imoveis : imoveis.filter(imovel => imovel.tipo === tipo);

  filtrados.forEach(imovel => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <img src="${imovel.imagem}" alt="${imovel.titulo}" style="width: 100%; border-radius: 8px;">
      <h3>${imovel.titulo}</h3>
      <p><strong>R$</strong> ${imovel.preco}</p>
      <small>${imovel.tipo}</small>
    `;
    container.appendChild(div);
  });
}

function adicionarImovel() {
  const titulo = document.getElementById('titulo').value;
  const imagem = document.getElementById('imagem').value;
  const preco = document.getElementById('preco').value;
  const tipo = document.getElementById('tipo').value;

  if (!titulo || !imagem || !preco) {
    alert("Preencha todos os campos.");
    return;
  }

  novoImovel = { titulo, imagem, preco, tipo };
  document.getElementById("modal-confirmacao").style.display = "flex";
}

function confirmarAdicao() {
  imoveis.push(novoImovel);
  filtrar('todos');
  document.getElementById("modal-confirmacao").style.display = "none";
}

function cancelarAdicao() {
  novoImovel = null;
  document.getElementById("modal-confirmacao").style.display = "none";
}
