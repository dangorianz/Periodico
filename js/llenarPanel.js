(async function cargarPanel(){
    async function getPanel(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    // const $listaNoticias= await getPanel(`https://diarionuevonorte.herokuapp.com/api/obtenerPublicidades`);
    const $listaPanel= await getPanel(`http://localhost:3000/api/obtenerPublicidades`);
    // debugger
    function PanelItemTemplateA(publicidad){
        return `<div class="publicidad">
                    <div class="nombreEmpresa"><h5>${publicidad.nombreempresa}</h5></div>
                    <div class="CategoriaPublicidad"><h5>${publicidad.nombrecategoria}</h5></div>
                    <div class="estadoPublicidad"><img src="../img/habilitado.png" alt=""></div>
                    <div class="AccionesPublicidad">
                        <button class="habilitar">Habilitar</button>
                        <button class="deshabilitar">Deshabilitar</button>
                    </div>
                </div>`;
    }
    function PanelItemTemplateB(publicidad){
        return `<div class="publicidad">
                    <div class="nombreEmpresa"><h5>${publicidad.nombreempresa}</h5></div>
                    <div class="CategoriaPublicidad"><h5>${publicidad.nombrecategoria}</h5></div>
                    <div class="estadoPublicidad"><img src="../img//deshabilitado.png" alt=""></div>
                    <div class="AccionesPublicidad">
                        <button class="habilitar">Habilitar</button>
                        <button class="deshabilitar">Deshabilitar</button>
                    </div>
                </div>`;
    }
    function createTemplate(HTMLString){
        const $html = document.implementation.createHTMLDocument();
        $html.body.innerHTML = HTMLString;
        return $html.body.children[0];
    }
   
    function renderEmpresasList(listPublicidad, $containerP ,$containerC){
        listPublicidad.data.forEach(publicidad => {
            debugger
            
            if(publicidad.tipo == 'Portada'){
                if(publicidad.estado == 'V'){

                    const HTMLString = PanelItemTemplateA(publicidad);
                    const publicidadElement = createTemplate(HTMLString);
                    $containerP.append(publicidadElement);
                }else{
                    const HTMLString = PanelItemTemplateB(publicidad);
                    const publicidadElement = createTemplate(HTMLString);
                    $containerP.append(publicidadElement);

                }
                
            }else{
                if(publicidad.estado == 'V'){

                    const HTMLString = PanelItemTemplateA(publicidad);
                    const publicidadElement = createTemplate(HTMLString);
                    $containerC.append(publicidadElement);
                }else{
                    const HTMLString = PanelItemTemplateB(publicidad);
                    const publicidadElement = createTemplate(HTMLString);
                    $containerC.append(publicidadElement);

                }
            }
          
        });    
    }
    const $containerPortada = document.getElementById('panelPortada')
    const $containerCentral = document.getElementById('panelCentral')
    renderEmpresasList($listaPanel, $containerPortada, $containerCentral)
})();