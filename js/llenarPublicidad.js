let direccionURLL = 'https://diarionuevonorte.herokuapp.com';
// let direccionURLL = 'http://localhost:3000';

(async function cargarPublicidades(){
    async function getPublicidades(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    const $listaPublicidades= await getPublicidades(`${direccionURLL}/api/obtenerPublicidades`);
    // const $listaPublicidades= await getPublicidades(`http://localhost:3000/api/obtenerPublicidades`);
    // debugger
    function PortadaItemTemplate(publicidad){
        // debugger
        return `<div class="carousel-item">
                    <img class="imagenesCarousel" src="${publicidad.foto}" class="d-block w-100" alt="...">
                </div>`;
    }
    function createTemplate(HTMLString){
        const $html = document.implementation.createHTMLDocument();
        $html.body.innerHTML = HTMLString;
        return $html.body.children[0];
    }
    
    function renderNotaList(listnota, $container){
        // $container.children[0].remove();
        listnota.data.forEach(nota => {
            
            const HTMLString = PortadaItemTemplate(nota);
            const notaElement = createTemplate(HTMLString);
            
            
            $container.append(notaElement);
        }); 
        // debugger
        $container.children[0].remove();   
        $container.children[0].classList.add('active');   
    }
    const $containerCarrousel = document.getElementById('containerCarrousel')
    renderNotaList($listaPublicidades, $containerCarrousel)
})();