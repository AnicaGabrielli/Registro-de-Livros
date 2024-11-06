let nomes = [];
let autores = [];
let editoras = [];
let anosPublicacao = [];



class Livro{
    constructor(nomeLivro, autorLivro, editoraLivro, anoLivro ){
        this.nomeLivro = nomeLivro;
        this.autorLivro = autorLivro;
        this.editoraLivro = editoraLivro;
        this.anoLivro = anoLivro;

    }

    salvar(){
        const livro = this.lerDados();

        if(livro){
            nomes.push(livro.nomeLivro);
            console.log(nomes);
            autores.push(livro.autorLivro);
            editoras.push(livro.editoraLivro);
            anosPublicacao.push(livro.anoLivro);
            this.listar();
        }
        limparCampos();
    }
    listar(){
        const lista = document.getElementById('lista');
        lista.innerHTML ='';
        for(let i = 0; i < nomes.length; i++){
        const listaLivro = document.createElement('ul');
        listaLivro.classList.add('listaLivro');

        const nomeElemento = document.createElement('li');
        nomeElemento.innerHTML = `<strong>NOME: </strong>${nomes[i]}`;

        listaLivro.append(nomeElemento);
        
        const autorElemento = document.createElement('li');
        autorElemento.innerHTML = `<strong>AUTOR: </strong>${autores[i]}`

        listaLivro.append(autorElemento);

        const editoraElemento = document.createElement('li');
        editoraElemento.innerHTML = `<strong>EDITORA: </strong>${editoras[i]}`

        listaLivro.append(editoraElemento);

        const anoElemento = document.createElement('li');
        anoElemento.innerHTML = `<strong>ANO: </strong> ${anosPublicacao[i]}`
        
        listaLivro.append(anoElemento);

        const editar = document.createElement('button');
        editar.classList.add('editar');
        editar.textContent = 'Editar';
        editar.addEventListener('click', ()=> this.editar(i));
        listaLivro.append(editar);

        const deletar = document.createElement('button');
        deletar.classList.add('deletar');
        deletar.textContent = 'Deletar';
        deletar.addEventListener('click', ()=> this.deletar(i));
        listaLivro.append(deletar);

        lista.append(listaLivro);
        }


    }

    deletar(index){
        if(index >= 0 && index < nomes.length){
            nomes.splice(index,1);
            autores.splice(index, 1);
            editoras.splice(index,1);
            anosPublicacao.splice(index,1);
            this.listar();
        }
        

    }

    editar(i){
       document.getElementById('nome').value = nomes[i];
       document.getElementById('autor').value = autores[i];
       document.getElementById('editora').value = editoras[i];
       document.getElementById('anoPublicacao').value = anosPublicacao[i];
       document.getElementById('salvo').style.display = 'none';

       let salvarEdicaoBtn = document.getElementById('salvarEdicao');
       if(!salvarEdicaoBtn){
        salvarEdicaoBtn = document.createElement('button');
        salvarEdicaoBtn.id = 'salvarEdicao';
        salvarEdicaoBtn.textContent = 'Salvar edição';
        salvarEdicaoBtn.addEventListener('click', ()=>this.salvarEdicao(i));
        document.querySelector('section').append(salvarEdicaoBtn);
       }else[
        salvarEdicaoBtn.style.display = 'inline-block'
       ]


    }

    salvarEdicao(i){
        nomes[i] = document.getElementById('nome').value;
        autores[i] = document.getElementById('autor').value;
        editoras[i] = document.getElementById('editora').value;
        anosPublicacao[i] = document.getElementById('anoPublicacao').value;
    
        this.listar();
        limparCampos();
        document.getElementById('salvo').style.display = 'inline-block';
        document.getElementById('salvarEdicao').style.display = 'none';
    }
    lerDados(){
        const nome = document.getElementById('nome').value;
        const autor = document.getElementById('autor').value;
        const editora = document.getElementById('editora').value;
        const anoPublicacao = document.getElementById('anoPublicacao').value;
        if(nome && autor && editora && anoPublicacao){
            const dataPublicacao = new Date(anoPublicacao);
            const anoLivro =  dataPublicacao.getFullYear();
            return new Livro(nome, autor, editora, anoLivro);
        }else{
            alert('Por favor, preencha todos os campos.');
            return null;
        }

    }
}
const livro = new Livro();

function limparCampos (){
    document.getElementById('nome').value = '';
    document.getElementById('autor').value = '';
    document.getElementById('editora').value = '';
    document.getElementById('anoPublicacao').value = '';
}