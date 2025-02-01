//DOM= Document object model, modelo de de objeto de documento representação de uma arvore do documento html que vao ter todos os elementos que compusemos aqui//
const searchInput = document.getElementById('search-input'); //ele vai pegar aquele elemento que tiver o id (search-input)// //posso usar o document.query selector todavia ele so pegara o primeiro elemento com o id selecionado// 
const resultArtist = document.getElementById("result-artist") // vai pegar a parte que esta mostrando os cards//
const resultPlaylist = document.getElementById('result-playlists')// vai pegar a parte que mostra as playlist//
function requestApi(searchTerm){
    const url= `http://localhost:3000/artists?name_like=${searchTerm}`//pegara apenas o que for escrito, nao fara busca de todos os items//
    fetch(url)// consumirá a api//
        .then((response) => response.json()) //serve para trabalhar com leitura de arquivo, requisição de api e promises, programas assincronos//
        .then((result) => displayResults(result))
}
function displayResults(result){
    resultPlaylist.classList.add("hidden");
    const artistName=document.getElementById('artist-name');///pegara o nome do artista//
    const artistImage=document.getElementById('artist-img');//pegara a imagem do artista//

    result.forEach(element => {  
        artistName.innerText= element.name;
        artistImage.src= element.urlImg;
    });
    resultArtist.classList.remove('hidden');
}
document.addEventListener('input', function() {
    const searchTerm=searchInput.value.toLowerCase(); //pegara o que foi escrito e colocara em minusculo salvando em searchTerm!///
    if(searchTerm===''){ // obs: 3 iguais(verifica se são iguais e do mesmo tipo, novidade que nao sabia!)
        resultPlaylist.classList.add ('hidden'); //adcionando classe no elemento//
        resultArtist.classList.remove('hidden');//renoverá a classe hidden do resultsArtist//-
        return
    }
    requestApi(searchTerm);
}) //quando o evento acontecer, ele executara uma logica//
