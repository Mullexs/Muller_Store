function filtrarProdutos() {
    const marca = document.getElementById('marca').value;
    const tipo = document.getElementById('tipo').value;
    const produtos = document.querySelectorAll('.produto');

    produtos.forEach(produto => {
        const produtoMarca = produto.getAttribute('data-marca');
        const produtoTipo = produto.getAttribute('data-tipo');
        
        if ((marca === '' || produtoMarca === marca) && (tipo === '' || produtoTipo === tipo)) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
}

function ordenarProdutos() {
    const produtos = Array.from(document.querySelectorAll('.produto'));
    const ordenar = document.getElementById('ordenar').value;

    produtos.sort((a, b) => {
        const precoA = parseFloat(a.getAttribute('data-preco'));
        const precoB = parseFloat(b.getAttribute('data-preco'));
        return ordenar === 'crescente' ? precoA - precoB : precoB - precoA;
    });

    const container = document.getElementById('produtos');
    container.innerHTML = '';
    produtos.forEach(produto => {
        container.appendChild(produto);
    });
}
