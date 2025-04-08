// js/app.js

const imoveis = JSON.parse(localStorage.getItem('imoveis')) || [];

function renderizarImoveis(lista = imoveis) {
  const container = document.getElementById('lista-imoveis');
  if (!container) return;
  container.innerHTML = '';
  lista.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.imagem}" alt="Imagem do imóvel">
      <h3>${item.titulo}</h3>
      <p>${item.descricao}</p>
      <span class="tag">${item.tipo}</span>
    `;
    container.appendChild(card);
  });
}

function filtrar(tipo) {
  if (tipo === 'todos') {
    renderizarImoveis(imoveis);
  } else {
    const filtrados = imoveis.filter(i => i.tipo === tipo);
    renderizarImoveis(filtrados);
  }
}

function alternarTema() {
  document.body.classList.toggle('dark');
}

// Formulário da página admin.html
const form = document.getElementById('formulario');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const imagem = document.getElementById('imagem').value;
    const tipo = document.getElementById('tipo').value;

    imoveis.push({ titulo, descricao, imagem, tipo });
    localStorage.setItem('imoveis', JSON.stringify(imoveis));
    alert('Imóvel adicionado com sucesso!');
    form.reset();
  });
}

// Inicialização
renderizarImoveis();
