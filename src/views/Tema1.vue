<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Aspectos relacionados con el tránsito
    p.mb-5 Para facilitar la movilidad de la población, es necesaria la adecuación de una infraestructura vial que permita el desplazamiento seguro a las personas.
      |La Ley de Tránsito en Colombia detalla cada una de las normas que deben cumplir los conductores (de carros particulares, servicio público, motos y otros) y peatones.
      br
      br
      |A continuación, se presentan algunos aspectos relacionados.
    
    .tarjeta.tarjeta--azul.p-4.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-1.svg')})`}"
      style="background-repeat: no-repeat; background-size: cover;"
    )
      SlyderA(tipo="b")
        .d-flex.flex-wrap.p-xl-4
          .col-lg-5.mb-4.mb-md-0.order-2.order-lg-1
            h4.fw-bold Generalidades del reglamento
            p El Ministerio de Transporte, como máxima autoridad de tránsito y transporte en Colombia, delega en cada una de las autoridades locales de los municipios y ciudades del país el desarrollo de su infraestructura vial urbana de acuerdo con la planeación del municipio, siguiendo los estándares establecidos en los reglamentos avalados por el Ministerio como el Manual de diseño de vías o el Manual de señalización vial.
        
          .col-lg-6.ms-xl-4.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema1/sl-1.png')

        .d-flex.flex-wrap.p-xl-4
          .col-lg-5.mb-4.mb-md-0.order-2.order-lg-1
            h4.fw-bold Regulación
            p En Colombia la Red Nacional de Carreteras se encuentra regulada por el Ministerio de Transporte colombiano mediante el Instituto Nacional de Vías (Invías) y sus direcciones territoriales (Decreto 1735 de agosto de 2001).
        
          .col-lg-6.ms-xl-4.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema1/sl-2.png')
        
        .d-flex.flex-wrap.p-xl-4
          .col-lg-5.mb-4.mb-md-0.order-2.order-lg-1
            h4.fw-bold Normas de comportamiento y parámetros técnico- mecánicos
            p Otro aspecto importante relacionado con el tránsito, se refiere a que los vehículos deben circular cumpliendo las normas de comportamiento vial y los parámetros técnico- mecánicos mínimos exigidos por la normatividad.
        
          .col-lg-6.ms-xl-4.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema1/sl-3.png')
        
        .d-flex.flex-wrap.p-xl-4
          .col-lg-5.mb-4.mb-md-0.order-2.order-lg-1
            h4.fw-bold Accidentes de tránsito
            p Otro punto notable es el “factor humano”, el cual se identifica como el principal generador de accidentes de tránsito, ya sea por imprudencia, impericia o por negligencia al circular por las vías en cualquiera de sus condiciones como actor vial (conductor, pasajero o peatón).
        
          .col-lg-6.ms-xl-4.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema1/sl-4.png')
        
        .d-flex.flex-wrap.p-xl-4
          .col-lg-5.mb-4.mb-md-0.order-2.order-lg-1
            h4.fw-bold Documentos obligatorios para los conductores
            p Es fundamental conocer los documentos obligatorios como conductor de vehículo particular, público o motocicleta, tiene que presentar sí o sí ante un policía o un agente:
            ul.lista-ul.mb-3
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                  <g id="Grupo_80150" data-name="Grupo 80150" transform="translate(6671.2 9353.2)">
                    <g id="Elipse_4711" data-name="Elipse 4711" transform="translate(-6671.2 -9353.2)" fill="none" stroke="#f88f05" stroke-width="1">
                      <circle cx="7" cy="7" r="7" stroke="none"/>
                      <circle cx="7" cy="7" r="6.5" fill="none"/>
                    </g>
                    <circle id="Elipse_4712" data-name="Elipse 4712" cx="4" cy="4" r="4" transform="translate(-6668.2 -9350.2)" fill="#f88f05"/>
                  </g>
                </svg>
                | La tarjeta de propiedad del vehículo.
              
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                  <g id="Grupo_80150" data-name="Grupo 80150" transform="translate(6671.2 9353.2)">
                    <g id="Elipse_4711" data-name="Elipse 4711" transform="translate(-6671.2 -9353.2)" fill="none" stroke="#f88f05" stroke-width="1">
                      <circle cx="7" cy="7" r="7" stroke="none"/>
                      <circle cx="7" cy="7" r="6.5" fill="none"/>
                    </g>
                    <circle id="Elipse_4712" data-name="Elipse 4712" cx="4" cy="4" r="4" transform="translate(-6668.2 -9350.2)" fill="#f88f05"/>
                  </g>
                </svg>
                |El Seguro Obligatorio de Accidentes de Tránsito - (SOAT), (obligatoriamente cada año).
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                  <g id="Grupo_80150" data-name="Grupo 80150" transform="translate(6671.2 9353.2)">
                    <g id="Elipse_4711" data-name="Elipse 4711" transform="translate(-6671.2 -9353.2)" fill="none" stroke="#f88f05" stroke-width="1">
                      <circle cx="7" cy="7" r="7" stroke="none"/>
                      <circle cx="7" cy="7" r="6.5" fill="none"/>
                    </g>
                    <circle id="Elipse_4712" data-name="Elipse 4712" cx="4" cy="4" r="4" transform="translate(-6668.2 -9350.2)" fill="#f88f05"/>
                  </g>
                </svg>
                |La licencia de conducción.

        
          .col-lg-6.ms-xl-4.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema1/sl-5.png')
        
        .d-flex.flex-wrap.p-xl-4
          .col-lg-5.mb-4.mb-md-0.order-2.order-lg-1
            h4.fw-bold Las señales de tránsito
            p El Hacen más ágil, segura, eficiente y cómoda la circulación de automotores en el territorio nacional. La señalización vial indica las limitaciones y precauciones en carretera. Para que la señalización cumpla plenamente el objetivo propuesto, es necesario conocerlas.
        
          .col-lg-6.ms-xl-4.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema1/sl-6.png')
    Separador

    .titulo-segundo.color-secundario
      h2#t_1_1 1.1 Aspectos normativos
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.mx-auto.mb-4.mb-lg-0(src="@/assets/curso/temas/tema1/img-2.png" style="width: 100%; max-width: 400px")
      .col-12.col-lg.ps-md-4
        p.mb-0 La movilidad de los actores viales (conductor, pasajero, peatón) requiere un conjunto de reglas de circulación, claras y específicas, las cuales se encuentran establecidas en un orden jerárquico como lo establece la teoría pura del derecho, que para nuestro caso se encuentra en cabeza de la Constitución Política de Colombia (1991) que, como norma de normas, establece en el artículo 24 la libre locomoción que está regulada a través de la Ley 769 de 2002 (Código Nacional de Tránsito), con todas sus actualizaciones, el cual determina las normas de comportamiento vial de cada uno de los actores viales. En la siguiente figura, se presenta la jerarquía de normas establecidas.
      
    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Pirámide de Hans Kelsen - jerarquía de las normas
    
    .tarjeta.p-3.p-lg-0.mb-5(style="background-color: #E8E8E8;")
      .col-lg-11.mx-lg-auto.d-flex.flex-wrap.pt-lg-4
        img.col-lg-6.mx-auto.order-2.order-lg-1(src="@/assets/curso/temas/tema1/img-3.svg")
        img.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(src="@/assets/curso/temas/tema1/img-4.svg")
    
    p.mb-5 Con base en la Figura 1, es necesario entender que en Colombia existe un ordenamiento jurídico que reglamenta el comportamiento de todos y cada uno de los actores viales al igual que normas de transporte de personas o cosas de un punto a otro, por lo que se puede simplificar este apartado normativo como se muestra en la siguiente figura.

    .titulo-sexto.color-acento-contenido
      h5 Figura 2.
      span Aspectos normativos del tránsito y el transporte en Colombia

    .d-flex.flex-wrap.mb-4
      h4.px-4.py-2(style="background-color: #FFD817") CONSTITUCIÓN POLÍTICA DE COLOMBIA 

    .d-flex.flex-wrap.mb-5
      .col-lg-7.d-flex.flex-wrap.mt-auto.order-2.order-lg-1.bg-edit-1
        .d-flex.flex-wrap.mb-4(style="margin-top: -20px; max-height: 40px")
          h3.px-3.py-2(style="background-color: black; color: white;") Tránsito
        .px-4.mb-auto
          p.mb-4 #[b ARTÍCULO 24.] Todo colombiano, con las limitaciones que establezca la ley, tiene derecho a circular libremente por el territorio nacional.
          ul.lista-ul.mb-3
            li.mb-3
              <svg style="max-width: 33px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="33" height="33" viewBox="0 0 33 33">
                <defs>
                  <clipPath id="clip-path">
                    <rect id="Rectángulo_34143" data-name="Rectángulo 34143" width="33" height="33" transform="translate(219 2414)" fill="#f88f05" stroke="#707070" stroke-width="1"/>
                  </clipPath>
                </defs>
                <g id="Enmascarar_grupo_101" data-name="Enmascarar grupo 101" transform="translate(-219 -2414)" clip-path="url(#clip-path)">
                  <g id="ley" transform="translate(219 2414)">
                    <g id="Grupo_81151" data-name="Grupo 81151">
                      <g id="Grupo_81150" data-name="Grupo 81150">
                        <g id="Grupo_81149" data-name="Grupo 81149">
                          <g id="Grupo_81148" data-name="Grupo 81148">
                            <path id="Trazado_114672" data-name="Trazado 114672" d="M31.447,29.1h-.36a5,5,0,0,1-.416-.794.483.483,0,0,0-.893.37c.06.144.127.285.2.424H11.012a1.547,1.547,0,0,0-.421.059,5.619,5.619,0,0,1-.71-2.878c0-.211.009-.419.028-.622h9.262a.483.483,0,0,0,0-.967H10.315l1.136-1.23H29.972a6.034,6.034,0,0,0-.465,1.23H23.153a.483.483,0,0,0,0,.967h6.185c-.019.2-.03.395-.031.595a.483.483,0,0,0,.481.485h0a.483.483,0,0,0,.483-.481,5.173,5.173,0,0,1,.813-2.8h.361a1.553,1.553,0,0,0,0-3.106H25.4l5.536-5.537a1.664,1.664,0,0,0,0-2.353l-.122-.122a1.663,1.663,0,0,0-2.268-.079l-.856-.856.291-.291a1.366,1.366,0,0,0,.3-1.486l-.394-.963a1.071,1.071,0,0,0-.778-.645l-.672-.672a.483.483,0,0,0-.684.684l.331.331-7.618,7.618-2.24-2.24,7.618-7.618.3.3a.483.483,0,1,0,.684-.684L24.191,5.1a1.072,1.072,0,0,0-.645-.778h0l-.963-.394a1.366,1.366,0,0,0-1.486.3l-.291.291-.856-.856A1.663,1.663,0,0,0,19.87,1.4l-.122-.122a1.664,1.664,0,0,0-2.354,0L11.379,7.289a1.664,1.664,0,0,0,0,2.354l.122.122a1.663,1.663,0,0,0,2.268.079l.856.856-.291.291a1.366,1.366,0,0,0-.3,1.486l.394.963a1.071,1.071,0,0,0,.767.643L12.77,16.974a1.651,1.651,0,0,0-2.182,2.094l-1.1,1.015a.483.483,0,0,0,.656.71l1.016-.938,1.2,1.2-9,9.751A1.378,1.378,0,1,1,1.41,28.857l7.061-6.518a.483.483,0,1,0-.656-.71L.754,28.146a2.345,2.345,0,0,0,1.589,4.067h.048a2.325,2.325,0,0,0,1.676-.754l2.9-3.138a5.571,5.571,0,0,0,.777,1.657,1.126,1.126,0,0,0,.917.471h.814a1.55,1.55,0,0,0,1.539,1.757H31.447a1.553,1.553,0,0,0,0-3.106Zm.586-7.192a.587.587,0,0,1-.586.586h-19.1l.8-.87a1.652,1.652,0,0,0,1.649-.3H31.447a.587.587,0,0,1,.586.586ZM17.45,16.33l-2.8,2.347-1.113-1.113,2.347-2.8Zm-2.109,4.026a1.66,1.66,0,0,0-.1-.912l2.891-2.424a1.071,1.071,0,0,0,.643.767l.963.394a1.366,1.366,0,0,0,1.486-.3l.291-.291.856.856a1.667,1.667,0,0,0-.192,1.91H15.341Zm14.3-7.532a.693.693,0,0,1,.493.2l.122.122a.7.7,0,0,1,0,.986l-6.016,6.016a.7.7,0,0,1-.986,0l-.122-.122a.7.7,0,0,1,0-.986l6.016-6.016a.692.692,0,0,1,.493-.2Zm-1.778.122-4.813,4.813-.853-.852,4.813-4.813ZM19.1,16.717,26.822,9a.1.1,0,0,1,.074-.032l.023,0A.1.1,0,0,1,27,9.034l.394.963a.4.4,0,0,1-.088.437L20.54,17.2a.4.4,0,0,1-.437.088l-.963-.394a.107.107,0,0,1-.035-.175ZM12.677,9.285a.693.693,0,0,1-.493-.2l-.122-.122a.7.7,0,0,1,0-.986l6.016-6.016a.7.7,0,0,1,.986,0l.122.122a.7.7,0,0,1,0,.986L13.17,9.081a.693.693,0,0,1-.493.2Zm1.778-.122L19.269,4.35l.853.853-4.813,4.813Zm.561,2.511L21.78,4.911a.4.4,0,0,1,.437-.088l.963.394a.107.107,0,0,1,.035.175L15.5,13.109a.107.107,0,0,1-.175-.035l-.394-.963a.4.4,0,0,1,.088-.437ZM11.455,18.5a.684.684,0,0,1,1.167-.483L14.2,19.592a.684.684,0,1,1-.967.967l-1.577-1.577a.679.679,0,0,1-.2-.484ZM8.53,29.418a4.877,4.877,0,0,1-.774-1.954l1.159-1.255c0,.024,0,.048,0,.072a6.707,6.707,0,0,0,.75,3.2h-1A.157.157,0,0,1,8.53,29.418ZM31.447,31.24H11.012a.586.586,0,1,1,0-1.172H31.447a.586.586,0,1,1,0,1.172Z" fill="#f88f05"/>
                            <path id="Trazado_114673" data-name="Trazado 114673" d="M13.524,26.888a.483.483,0,1,0,0,.967H24.786a.483.483,0,0,0,0-.967Z" fill="#f88f05"/>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              p.mb-0.ps-3 #[b Ley 1503 de 2011] por la cual se promueven hábitos, comportamientos y conductas seguras en la vía.
            
            li.mb-3
              <svg style="max-width: 33px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="33" height="33" viewBox="0 0 33 33">
                <defs>
                  <clipPath id="clip-path">
                    <rect id="Rectángulo_34143" data-name="Rectángulo 34143" width="33" height="33" transform="translate(219 2414)" fill="#f88f05" stroke="#707070" stroke-width="1"/>
                  </clipPath>
                </defs>
                <g id="Enmascarar_grupo_101" data-name="Enmascarar grupo 101" transform="translate(-219 -2414)" clip-path="url(#clip-path)">
                  <g id="ley" transform="translate(219 2414)">
                    <g id="Grupo_81151" data-name="Grupo 81151">
                      <g id="Grupo_81150" data-name="Grupo 81150">
                        <g id="Grupo_81149" data-name="Grupo 81149">
                          <g id="Grupo_81148" data-name="Grupo 81148">
                            <path id="Trazado_114672" data-name="Trazado 114672" d="M31.447,29.1h-.36a5,5,0,0,1-.416-.794.483.483,0,0,0-.893.37c.06.144.127.285.2.424H11.012a1.547,1.547,0,0,0-.421.059,5.619,5.619,0,0,1-.71-2.878c0-.211.009-.419.028-.622h9.262a.483.483,0,0,0,0-.967H10.315l1.136-1.23H29.972a6.034,6.034,0,0,0-.465,1.23H23.153a.483.483,0,0,0,0,.967h6.185c-.019.2-.03.395-.031.595a.483.483,0,0,0,.481.485h0a.483.483,0,0,0,.483-.481,5.173,5.173,0,0,1,.813-2.8h.361a1.553,1.553,0,0,0,0-3.106H25.4l5.536-5.537a1.664,1.664,0,0,0,0-2.353l-.122-.122a1.663,1.663,0,0,0-2.268-.079l-.856-.856.291-.291a1.366,1.366,0,0,0,.3-1.486l-.394-.963a1.071,1.071,0,0,0-.778-.645l-.672-.672a.483.483,0,0,0-.684.684l.331.331-7.618,7.618-2.24-2.24,7.618-7.618.3.3a.483.483,0,1,0,.684-.684L24.191,5.1a1.072,1.072,0,0,0-.645-.778h0l-.963-.394a1.366,1.366,0,0,0-1.486.3l-.291.291-.856-.856A1.663,1.663,0,0,0,19.87,1.4l-.122-.122a1.664,1.664,0,0,0-2.354,0L11.379,7.289a1.664,1.664,0,0,0,0,2.354l.122.122a1.663,1.663,0,0,0,2.268.079l.856.856-.291.291a1.366,1.366,0,0,0-.3,1.486l.394.963a1.071,1.071,0,0,0,.767.643L12.77,16.974a1.651,1.651,0,0,0-2.182,2.094l-1.1,1.015a.483.483,0,0,0,.656.71l1.016-.938,1.2,1.2-9,9.751A1.378,1.378,0,1,1,1.41,28.857l7.061-6.518a.483.483,0,1,0-.656-.71L.754,28.146a2.345,2.345,0,0,0,1.589,4.067h.048a2.325,2.325,0,0,0,1.676-.754l2.9-3.138a5.571,5.571,0,0,0,.777,1.657,1.126,1.126,0,0,0,.917.471h.814a1.55,1.55,0,0,0,1.539,1.757H31.447a1.553,1.553,0,0,0,0-3.106Zm.586-7.192a.587.587,0,0,1-.586.586h-19.1l.8-.87a1.652,1.652,0,0,0,1.649-.3H31.447a.587.587,0,0,1,.586.586ZM17.45,16.33l-2.8,2.347-1.113-1.113,2.347-2.8Zm-2.109,4.026a1.66,1.66,0,0,0-.1-.912l2.891-2.424a1.071,1.071,0,0,0,.643.767l.963.394a1.366,1.366,0,0,0,1.486-.3l.291-.291.856.856a1.667,1.667,0,0,0-.192,1.91H15.341Zm14.3-7.532a.693.693,0,0,1,.493.2l.122.122a.7.7,0,0,1,0,.986l-6.016,6.016a.7.7,0,0,1-.986,0l-.122-.122a.7.7,0,0,1,0-.986l6.016-6.016a.692.692,0,0,1,.493-.2Zm-1.778.122-4.813,4.813-.853-.852,4.813-4.813ZM19.1,16.717,26.822,9a.1.1,0,0,1,.074-.032l.023,0A.1.1,0,0,1,27,9.034l.394.963a.4.4,0,0,1-.088.437L20.54,17.2a.4.4,0,0,1-.437.088l-.963-.394a.107.107,0,0,1-.035-.175ZM12.677,9.285a.693.693,0,0,1-.493-.2l-.122-.122a.7.7,0,0,1,0-.986l6.016-6.016a.7.7,0,0,1,.986,0l.122.122a.7.7,0,0,1,0,.986L13.17,9.081a.693.693,0,0,1-.493.2Zm1.778-.122L19.269,4.35l.853.853-4.813,4.813Zm.561,2.511L21.78,4.911a.4.4,0,0,1,.437-.088l.963.394a.107.107,0,0,1,.035.175L15.5,13.109a.107.107,0,0,1-.175-.035l-.394-.963a.4.4,0,0,1,.088-.437ZM11.455,18.5a.684.684,0,0,1,1.167-.483L14.2,19.592a.684.684,0,1,1-.967.967l-1.577-1.577a.679.679,0,0,1-.2-.484ZM8.53,29.418a4.877,4.877,0,0,1-.774-1.954l1.159-1.255c0,.024,0,.048,0,.072a6.707,6.707,0,0,0,.75,3.2h-1A.157.157,0,0,1,8.53,29.418ZM31.447,31.24H11.012a.586.586,0,1,1,0-1.172H31.447a.586.586,0,1,1,0,1.172Z" fill="#f88f05"/>
                            <path id="Trazado_114673" data-name="Trazado 114673" d="M13.524,26.888a.483.483,0,1,0,0,.967H24.786a.483.483,0,0,0,0-.967Z" fill="#f88f05"/>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              p.mb-0.ps-3 #[b Ley 769 del 2002] Código Nacional de Tránsito Terrestre.
            
            li.mb-3
              <svg style="max-width: 33px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="33" height="33" viewBox="0 0 33 33">
                <defs>
                  <clipPath id="clip-path">
                    <rect id="Rectángulo_34143" data-name="Rectángulo 34143" width="33" height="33" transform="translate(219 2414)" fill="#f88f05" stroke="#707070" stroke-width="1"/>
                  </clipPath>
                </defs>
                <g id="Enmascarar_grupo_101" data-name="Enmascarar grupo 101" transform="translate(-219 -2414)" clip-path="url(#clip-path)">
                  <g id="ley" transform="translate(219 2414)">
                    <g id="Grupo_81151" data-name="Grupo 81151">
                      <g id="Grupo_81150" data-name="Grupo 81150">
                        <g id="Grupo_81149" data-name="Grupo 81149">
                          <g id="Grupo_81148" data-name="Grupo 81148">
                            <path id="Trazado_114672" data-name="Trazado 114672" d="M31.447,29.1h-.36a5,5,0,0,1-.416-.794.483.483,0,0,0-.893.37c.06.144.127.285.2.424H11.012a1.547,1.547,0,0,0-.421.059,5.619,5.619,0,0,1-.71-2.878c0-.211.009-.419.028-.622h9.262a.483.483,0,0,0,0-.967H10.315l1.136-1.23H29.972a6.034,6.034,0,0,0-.465,1.23H23.153a.483.483,0,0,0,0,.967h6.185c-.019.2-.03.395-.031.595a.483.483,0,0,0,.481.485h0a.483.483,0,0,0,.483-.481,5.173,5.173,0,0,1,.813-2.8h.361a1.553,1.553,0,0,0,0-3.106H25.4l5.536-5.537a1.664,1.664,0,0,0,0-2.353l-.122-.122a1.663,1.663,0,0,0-2.268-.079l-.856-.856.291-.291a1.366,1.366,0,0,0,.3-1.486l-.394-.963a1.071,1.071,0,0,0-.778-.645l-.672-.672a.483.483,0,0,0-.684.684l.331.331-7.618,7.618-2.24-2.24,7.618-7.618.3.3a.483.483,0,1,0,.684-.684L24.191,5.1a1.072,1.072,0,0,0-.645-.778h0l-.963-.394a1.366,1.366,0,0,0-1.486.3l-.291.291-.856-.856A1.663,1.663,0,0,0,19.87,1.4l-.122-.122a1.664,1.664,0,0,0-2.354,0L11.379,7.289a1.664,1.664,0,0,0,0,2.354l.122.122a1.663,1.663,0,0,0,2.268.079l.856.856-.291.291a1.366,1.366,0,0,0-.3,1.486l.394.963a1.071,1.071,0,0,0,.767.643L12.77,16.974a1.651,1.651,0,0,0-2.182,2.094l-1.1,1.015a.483.483,0,0,0,.656.71l1.016-.938,1.2,1.2-9,9.751A1.378,1.378,0,1,1,1.41,28.857l7.061-6.518a.483.483,0,1,0-.656-.71L.754,28.146a2.345,2.345,0,0,0,1.589,4.067h.048a2.325,2.325,0,0,0,1.676-.754l2.9-3.138a5.571,5.571,0,0,0,.777,1.657,1.126,1.126,0,0,0,.917.471h.814a1.55,1.55,0,0,0,1.539,1.757H31.447a1.553,1.553,0,0,0,0-3.106Zm.586-7.192a.587.587,0,0,1-.586.586h-19.1l.8-.87a1.652,1.652,0,0,0,1.649-.3H31.447a.587.587,0,0,1,.586.586ZM17.45,16.33l-2.8,2.347-1.113-1.113,2.347-2.8Zm-2.109,4.026a1.66,1.66,0,0,0-.1-.912l2.891-2.424a1.071,1.071,0,0,0,.643.767l.963.394a1.366,1.366,0,0,0,1.486-.3l.291-.291.856.856a1.667,1.667,0,0,0-.192,1.91H15.341Zm14.3-7.532a.693.693,0,0,1,.493.2l.122.122a.7.7,0,0,1,0,.986l-6.016,6.016a.7.7,0,0,1-.986,0l-.122-.122a.7.7,0,0,1,0-.986l6.016-6.016a.692.692,0,0,1,.493-.2Zm-1.778.122-4.813,4.813-.853-.852,4.813-4.813ZM19.1,16.717,26.822,9a.1.1,0,0,1,.074-.032l.023,0A.1.1,0,0,1,27,9.034l.394.963a.4.4,0,0,1-.088.437L20.54,17.2a.4.4,0,0,1-.437.088l-.963-.394a.107.107,0,0,1-.035-.175ZM12.677,9.285a.693.693,0,0,1-.493-.2l-.122-.122a.7.7,0,0,1,0-.986l6.016-6.016a.7.7,0,0,1,.986,0l.122.122a.7.7,0,0,1,0,.986L13.17,9.081a.693.693,0,0,1-.493.2Zm1.778-.122L19.269,4.35l.853.853-4.813,4.813Zm.561,2.511L21.78,4.911a.4.4,0,0,1,.437-.088l.963.394a.107.107,0,0,1,.035.175L15.5,13.109a.107.107,0,0,1-.175-.035l-.394-.963a.4.4,0,0,1,.088-.437ZM11.455,18.5a.684.684,0,0,1,1.167-.483L14.2,19.592a.684.684,0,1,1-.967.967l-1.577-1.577a.679.679,0,0,1-.2-.484ZM8.53,29.418a4.877,4.877,0,0,1-.774-1.954l1.159-1.255c0,.024,0,.048,0,.072a6.707,6.707,0,0,0,.75,3.2h-1A.157.157,0,0,1,8.53,29.418ZM31.447,31.24H11.012a.586.586,0,1,1,0-1.172H31.447a.586.586,0,1,1,0,1.172Z" fill="#f88f05"/>
                            <path id="Trazado_114673" data-name="Trazado 114673" d="M13.524,26.888a.483.483,0,1,0,0,.967H24.786a.483.483,0,0,0,0-.967Z" fill="#f88f05"/>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              p.mb-0.ps-3 #[b Ley 1383 de 2010] Modificación de 24 artículos de la Ley 769 de 2002. 
            
            li.mb-3
              <svg style="max-width: 33px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="33" height="33" viewBox="0 0 33 33">
                <defs>
                  <clipPath id="clip-path">
                    <rect id="Rectángulo_34143" data-name="Rectángulo 34143" width="33" height="33" transform="translate(219 2414)" fill="#f88f05" stroke="#707070" stroke-width="1"/>
                  </clipPath>
                </defs>
                <g id="Enmascarar_grupo_101" data-name="Enmascarar grupo 101" transform="translate(-219 -2414)" clip-path="url(#clip-path)">
                  <g id="ley" transform="translate(219 2414)">
                    <g id="Grupo_81151" data-name="Grupo 81151">
                      <g id="Grupo_81150" data-name="Grupo 81150">
                        <g id="Grupo_81149" data-name="Grupo 81149">
                          <g id="Grupo_81148" data-name="Grupo 81148">
                            <path id="Trazado_114672" data-name="Trazado 114672" d="M31.447,29.1h-.36a5,5,0,0,1-.416-.794.483.483,0,0,0-.893.37c.06.144.127.285.2.424H11.012a1.547,1.547,0,0,0-.421.059,5.619,5.619,0,0,1-.71-2.878c0-.211.009-.419.028-.622h9.262a.483.483,0,0,0,0-.967H10.315l1.136-1.23H29.972a6.034,6.034,0,0,0-.465,1.23H23.153a.483.483,0,0,0,0,.967h6.185c-.019.2-.03.395-.031.595a.483.483,0,0,0,.481.485h0a.483.483,0,0,0,.483-.481,5.173,5.173,0,0,1,.813-2.8h.361a1.553,1.553,0,0,0,0-3.106H25.4l5.536-5.537a1.664,1.664,0,0,0,0-2.353l-.122-.122a1.663,1.663,0,0,0-2.268-.079l-.856-.856.291-.291a1.366,1.366,0,0,0,.3-1.486l-.394-.963a1.071,1.071,0,0,0-.778-.645l-.672-.672a.483.483,0,0,0-.684.684l.331.331-7.618,7.618-2.24-2.24,7.618-7.618.3.3a.483.483,0,1,0,.684-.684L24.191,5.1a1.072,1.072,0,0,0-.645-.778h0l-.963-.394a1.366,1.366,0,0,0-1.486.3l-.291.291-.856-.856A1.663,1.663,0,0,0,19.87,1.4l-.122-.122a1.664,1.664,0,0,0-2.354,0L11.379,7.289a1.664,1.664,0,0,0,0,2.354l.122.122a1.663,1.663,0,0,0,2.268.079l.856.856-.291.291a1.366,1.366,0,0,0-.3,1.486l.394.963a1.071,1.071,0,0,0,.767.643L12.77,16.974a1.651,1.651,0,0,0-2.182,2.094l-1.1,1.015a.483.483,0,0,0,.656.71l1.016-.938,1.2,1.2-9,9.751A1.378,1.378,0,1,1,1.41,28.857l7.061-6.518a.483.483,0,1,0-.656-.71L.754,28.146a2.345,2.345,0,0,0,1.589,4.067h.048a2.325,2.325,0,0,0,1.676-.754l2.9-3.138a5.571,5.571,0,0,0,.777,1.657,1.126,1.126,0,0,0,.917.471h.814a1.55,1.55,0,0,0,1.539,1.757H31.447a1.553,1.553,0,0,0,0-3.106Zm.586-7.192a.587.587,0,0,1-.586.586h-19.1l.8-.87a1.652,1.652,0,0,0,1.649-.3H31.447a.587.587,0,0,1,.586.586ZM17.45,16.33l-2.8,2.347-1.113-1.113,2.347-2.8Zm-2.109,4.026a1.66,1.66,0,0,0-.1-.912l2.891-2.424a1.071,1.071,0,0,0,.643.767l.963.394a1.366,1.366,0,0,0,1.486-.3l.291-.291.856.856a1.667,1.667,0,0,0-.192,1.91H15.341Zm14.3-7.532a.693.693,0,0,1,.493.2l.122.122a.7.7,0,0,1,0,.986l-6.016,6.016a.7.7,0,0,1-.986,0l-.122-.122a.7.7,0,0,1,0-.986l6.016-6.016a.692.692,0,0,1,.493-.2Zm-1.778.122-4.813,4.813-.853-.852,4.813-4.813ZM19.1,16.717,26.822,9a.1.1,0,0,1,.074-.032l.023,0A.1.1,0,0,1,27,9.034l.394.963a.4.4,0,0,1-.088.437L20.54,17.2a.4.4,0,0,1-.437.088l-.963-.394a.107.107,0,0,1-.035-.175ZM12.677,9.285a.693.693,0,0,1-.493-.2l-.122-.122a.7.7,0,0,1,0-.986l6.016-6.016a.7.7,0,0,1,.986,0l.122.122a.7.7,0,0,1,0,.986L13.17,9.081a.693.693,0,0,1-.493.2Zm1.778-.122L19.269,4.35l.853.853-4.813,4.813Zm.561,2.511L21.78,4.911a.4.4,0,0,1,.437-.088l.963.394a.107.107,0,0,1,.035.175L15.5,13.109a.107.107,0,0,1-.175-.035l-.394-.963a.4.4,0,0,1,.088-.437ZM11.455,18.5a.684.684,0,0,1,1.167-.483L14.2,19.592a.684.684,0,1,1-.967.967l-1.577-1.577a.679.679,0,0,1-.2-.484ZM8.53,29.418a4.877,4.877,0,0,1-.774-1.954l1.159-1.255c0,.024,0,.048,0,.072a6.707,6.707,0,0,0,.75,3.2h-1A.157.157,0,0,1,8.53,29.418ZM31.447,31.24H11.012a.586.586,0,1,1,0-1.172H31.447a.586.586,0,1,1,0,1.172Z" fill="#f88f05"/>
                            <path id="Trazado_114673" data-name="Trazado 114673" d="M13.524,26.888a.483.483,0,1,0,0,.967H24.786a.483.483,0,0,0,0-.967Z" fill="#f88f05"/>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              p.mb-0.ps-3 #[b Ley 1696 de 2013] establece sanciones penales y administrativas para la sanción de la embriaguez y otras sustancias.

      .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0.px-lg-3.mx-auto
        img(src="@/assets/curso/temas/tema1/img-5.svg" style="z-index: 2; position: relative;")
  
    .d-flex.flex-wrap.mb-4(style="margin-top: -20px; max-height: 40px")
      h3.px-3.py-2(style="background-color: black; color: white;") Transporte
    
    SlyderF.mb-5(columnas="col-md-6 col-lg-4 col-xl-3")
      .tarjeta.w-100.color-acento-botones.p-4(style="background-color: #FCC781")
        img.mb-3.mx-auto(src='@/assets/curso/temas/tema1/img-6.svg' style="max-width: 54px")
        p.text-center(style="color: black") #[b(style="color: black") Ley 105 de 1993] por la cual se dictan disposiciones básicas sobre el transporte. 
      
      .tarjeta.w-100.color-acento-botones.p-4(style="background-color: #FCC781")
        img.mb-3.mx-auto(src='@/assets/curso/temas/tema1/img-6.svg' style="max-width: 54px")
        p.text-center(style="color: black") #[b(style="color: black") Ley 336 de 1996] por la cual se adopta el Estatuto Nacional de Transporte.

      .tarjeta.w-100.color-acento-botones.p-4(style="background-color: #FCC781")
        img.mb-3.mx-auto(src='@/assets/curso/temas/tema1/img-7.svg' style="max-width: 54px")
        p.text-center(style="color: black") #[b(style="color: black") Decreto 1079 de 2015] por medio del cual se expide el Decreto Único Reglamentario del Sector. 

      .tarjeta.w-100.color-acento-botones.p-4(style="background-color: #FCC781")
        img.mb-3.mx-auto(src='@/assets/curso/temas/tema1/img-7.svg' style="max-width: 54px")
        p.text-center(style="color: black") #[b(style="color: black") Decreto 3366 de 2003] por el cual se establece el régimen de sanciones por infracciones a las normas de Transporte Público Terrestre Automotor.
      
      .tarjeta.w-100.color-acento-botones.p-4(style="background-color: #FCC781")
        img.mb-3.mx-auto(src='@/assets/curso/temas/tema1/img-7.svg' style="max-width: 54px")
        p.text-center(style="color: black") #[b(style="color: black") Decreto 172 de 2001] por el cual se reglamenta el Servicio Público de Transporte Terrestre Automotor Individual de Pasajeros en Vehículos Taxi.

      .tarjeta.w-100.color-acento-botones.p-4(style="background-color: #FCC781")
        img.mb-3.mx-auto(src='@/assets/curso/temas/tema1/img-7.svg' style="max-width: 54px")
        p.text-center(style="color: black") #[b(style="color: black") Decreto 170 de 2001] Por el cual se reglamenta el Servicio Público de Transporte Terrestre Automotor Colectivo Metropolitano, Distrital y Municipal de Pasajeros.

      .tarjeta.w-100.color-acento-botones.p-4(style="background-color: #FCC781")
        img.mb-3.mx-auto(src='@/assets/curso/temas/tema1/img-7.svg' style="max-width: 54px")
        p.text-center(style="color: black") #[b(style="color: black") Decreto 171 de 2001] por el cual se reglamenta el Servicio Público de Transporte Terrestre Automotor de Pasajeros por Carretera.

      .tarjeta.w-100.color-acento-botones.p-4(style="background-color: #FCC781")
        img.mb-3.mx-auto(src='@/assets/curso/temas/tema1/img-7.svg' style="max-width: 54px")
        p.text-center(style="color: black") #[b(style="color: black") Decreto 173 de 2001] por el cual se reglamenta el Servicio Público de Transporte Terrestre Automotor de Carga. 
      
      .tarjeta.w-100.color-acento-botones.p-4(style="background-color: #FCC781")
        img.mb-3.mx-auto(src='@/assets/curso/temas/tema1/img-7.svg' style="max-width: 54px")
        p.text-center(style="color: black") #[b(style="color: black") Decreto 174 de 2001] por el cual se reglamenta el Servicio Público de Transporte Terrestre Automotor Especial.

      .tarjeta.w-100.color-acento-botones.p-4(style="background-color: #FCC781")
        img.mb-3.mx-auto(src='@/assets/curso/temas/tema1/img-7.svg' style="max-width: 54px")
        p.text-center(style="color: black") #[b(style="color: black") Decreto 175 de 2001] por el cual se reglamenta el Servicio Público de Transporte Terrestre Automotor Mixto.

      .tarjeta.w-100.color-acento-botones.p-4(style="background-color: #FCC781")
        img.mb-3.mx-auto(src='@/assets/curso/temas/tema1/img-8.svg' style="max-width: 54px")
        p.text-center(style="color: black") #[b(style="color: black") Resolución 3027 de 2010] por la cual se adopta el Manual de infracciones y se dictan otras disposiciones.
      
      .tarjeta.w-100.color-acento-botones.p-4(style="background-color: #FCC781")
        img.mb-3.mx-auto(src='@/assets/curso/temas/tema1/img-8.svg' style="max-width: 54px")
        p.text-center(style="color: black") #[b(style="color: black") Resolución 1885 de 2015] por la cual se adopta el Manual de Señalización Vial.

      .tarjeta.w-100.color-acento-botones.p-4(style="background-color: #FCC781")
        img.mb-3.mx-auto(src='@/assets/curso/temas/tema1/img-8.svg' style="max-width: 54px")
        p.text-center(style="color: black") #[b(style="color: black") Resolución 4247 de 2019] por la cual se adopta el formato para el Informe Único de Infracciones al Transporte.
    p.fw-bold Fuentes de información Normatividad y Legislación Colombiana. Elaborado por Lino Quiroga 
    Separador

    .titulo-segundo.color-secundario
      h2#t_1_2 1.2  Manual de señalización vial
    
    .bg-texto-left.mb-5
      img.mb-3.mb-md-0.mx-auto(src='@/assets/curso/temas/tema1/img-9.svg' style="max-width: 85px")
      p.col-md.mb-0.ps-md-4 El Ministerio de Transporte, como autoridad suprema de tránsito en Colombia, ha reglamentado mediante la Resolución 1885 de 2015 el #[b “Manual de Señalización Vial, Dispositivos Uniformes para la Regulación del Tránsito en Calles, Carreteras y Ciclorrutas de Colombia”], el cual es un libro técnico que cuenta con 888 páginas de las cuales se puede extractar la siguiente información sobre las señales de tránsito.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/tema1/icon-titulo.svg' style="max-width: 32px; margin-left: -16px;")
        h4.col.ps-3.mb-0.text-white Señales verticales

    .d-flex.flex-wrap.mb-5
      .col-xl-6.order-2.order-xl-1
        p.mb-0.pe-xl-4 Estas reglamentan las limitaciones, prohibiciones, restricciones, advierten de peligros, informan acerca de rutas, direcciones, destinos y sitios de interés se clasifican de acuerdo a la función que desempeñan y pueden ser reglamentarias, preventivas, informativas y transitorias. 
      img.col-xl-6.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto(src='@/assets/curso/temas/tema1/img-10.png' style="max-width: 610px;")

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/tema1/icon-titulo.svg' style="max-width: 32px; margin-left: -16px;")
        h4.col.ps-3.mb-0.text-white Señales reglamentarias

    .d-flex.flex-wrap.mb-5
      .col-xl-6.order-2.order-xl-1
        p.mb-0.pe-xl-4 Son 58 y su finalidad es notificar las prioridades en el uso de las vías, prohibiciones, restricciones, obligaciones y autorizaciones existentes, donde su transgresión constituye una infracción de tránsito, presentando su clasificación. En el numeral 2.2 Señales reglamentarias del Manual de señalización vial, dentro de los anexos, se pueden encontrar más información y significados de cada sigla
      img.col-xl-6.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto(src='@/assets/curso/temas/tema1/img-11.png' style="max-width: 610px;")
    
    .tabla-a.color-acento-botones.mb-5 
      table
        thead
          tr
            th.ps-5.col-4.text-start Clasificación de las Señales reglamentarias 
            th.ps-4.text-start.col Señal Reglamentaria (SR) 
        tbody
          tr
            td.ps-5 De prioridad
            td.ps-4 SR 01, SR 02.
          tr
            td.ps-5 Prohibición
            td.ps-4 SR-04, SR-06, SR-08, SR-10, SR-14, SR-14A, SR-26, SR-50.
          tr
            td.ps-5 Paso por Clase de Vehículos
            td.ps-4 SR-16,SR-18,SR-21,SR-22,SR-23,SR-24,SR-25,SR-51,SR-52,SR-53,SR-54.
          tr
            td.ps-5 Otras prohibiciones
            td.ps-4 SR-20, SR-28, SR-28A, SR-29, SR-41, SR-43, SR-47.
          tr
            td.ps-5 De restricción
            td.ps-4 SR-11, SR-12, SR-13, SR-30, SR-30A, SR-30B, SR-31, SR-32, SR-33, SR-48.
          tr
            td.ps-5 De obligación
            td.ps-4 SR-03, SR-05, SR-07, SR-09, SR-17, SR-19, SR-35, SR-36, SR-38, SR-39, SR-44, SR-45, SR-46, SR-49.
          tr
            td.ps-5 De autorización
            td.ps-4 SR-34, SR40,SR42.
    p.mb-5 A continuación se exponen en el siguiente recurso los ejemplos de cada una de las señales reglamentarias de prohibición:

    SlyderF.mb-5(columnas="col-md-6 col-lg-4")
      .tarjeta.w-100.d-flex.flex-wrap.justify-content-center.color-acento-botones.p-4(style="background-color: #FEF0DE")
        img.mb-4.mx-auto(src='@/assets/curso/temas/tema1/sl2-1.svg' style="max-width: 190px")
        h4.text-center(style="color: black") Señales de prohibición primer grupo
        p.mb-4.text-center(style="color: black") Prohibición de maniobras y giros
        .d-flex.mt-auto.mb-0
          a.boton.boton-modal-sl.indicador__container(@click="modal1 = true; mostrarIndicador = false;")
            span Ver señales
            .indicador--click(v-if="mostrarIndicador")
      
      .tarjeta.w-100.d-flex.flex-wrap.justify-content-center.color-acento-botones.p-4(style="background-color: #FEF0DE")
        img.mb-4.mx-auto(src='@/assets/curso/temas/tema1/sl2-2.svg' style="max-width: 190px")
        h4.text-center(style="color: black") Señales preventivas segundo grupo
        p.mb-4.text-center(style="color: black") Prohibición de maniobras y giros
        .d-flex.mt-auto.mb-0
          a.boton.boton-modal-sl(@click="modal2 = true;")
            span Ver señales
      
      .tarjeta.w-100.d-flex.flex-wrap.justify-content-center.color-acento-botones.p-4(style="background-color: #FEF0DE")
        img.mb-4.mx-auto(src='@/assets/curso/temas/tema1/sl2-3.svg' style="max-width: 190px")
        h4.text-center(style="color: black") Señales de prohibición tercer grupo
        p.mb-4.text-center(style="color: black") Otras prohibiciones relacionadas a velocidad, luces, tipo de vehículo, etc.
        .d-flex.mt-auto.mb-0
          a.boton.boton-modal-sl(@click="modal3 = true;")
            span Ver señales
      
      .tarjeta.w-100.d-flex.flex-wrap.justify-content-center.color-acento-botones.p-4(style="background-color: #FEF0DE")
        img.mb-4.mx-auto(src='@/assets/curso/temas/tema1/sl2-4.svg' style="max-width: 190px")
        h4.text-center(style="color: black") Señales de prohibición cuarto grupo
        p.mb-4.text-center(style="color: black") Prohibición de maniobras y circulación.
        .d-flex.mt-auto.mb-0
          a.boton.boton-modal-sl(@click="modal4 = true;")
            span Ver señales
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/tema1/icon-titulo.svg' style="max-width: 32px; margin-left: -16px;")
        h4.col.ps-3.mb-0.text-white Señales preventivas
    
    .d-flex.flex-wrap.mb-5
      .col-xl-6.order-2.order-xl-1
        p.mb-0.pe-xl-4 También denominadas señales de advertencia de peligro están diseñadas para indicar previamente al conductor la existencia de riesgos o situaciones imprevistas de forma permanente o temporal presentadas en la vía o zonas adyacentes.
      img.col-xl-6.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto(src='@/assets/curso/temas/tema1/img-12.png' style="max-width: 610px;")
    
    p.mb-5 De acuerdo con el origen de los riesgos que previenen, las señales preventivas se clasifican en:

    .tabla-a.color-acento-botones.mb-5 
      table
        thead
          tr
            th.ps-4.col-4.text-start Clasificación de las Señales preventivas 
            th.ps-4.text-start.col Señal Preventiva (SP)
        tbody
          tr
            td.ps-4(rowspan="2") Preventivas sobre características geométricas de la vía.
            td.ps-4 #[b De curvatura horizontal:] SP-01, SP-02, SP-03, SP-04, SP-05, SP-06, SP-07, SP-08, SP-09, SP-10, SP-69, SP-70, SP-75.
          tr
            td.ps-4 #[b Pendientes longitudinales:] SP-27, SP-27A.
          tr
            td.ps-4 Preventivas relacionadas con la superficie de rodadura.
            td.ps-4 SP-24, SP-25, SP-25A, SP-26, SP-57.
          tr
            td.ps-4 Preventivas sobre restricciones físicas de la vía.
            td.ps-4 SP-28, SP-30, SP-31, SP-32, SP-34, SP-35, SP-36, SP-38, SP-50, SP-51.
          tr
            td.ps-4 Preventivas de intersecciones con otras vías.
            td.ps-4 SP-11, SP-12, SP-13, SP-14, SP-15, SP-16, SP-17, SP-18, SP-19, SP-20, SP-21, SP-22, SP-52, SP-52a, SP-53, SP-54.
          tr
            td.ps-4 Preventivas sobre características operativas de la vía. 
            td.ps-4 SP-23, SP-29, SP-33, SP-39, SP-41, SP-43, SP-45, SP-46, SP-46ª, SP-46b, SP-47, SP-47ª, SP-47b, SP-48, SP-49, SP-55, SP-55ª, SP-56, SP-56ª, SP-59, SP-59ª, SP-59b, SP-68.
          tr
            td.ps-4 Preventivas sobre situaciones especiales. 
            td.ps-4
              p.mb-0(style="line-height: 1.5rem") #[b Preventivas sobre situaciones especiales:] SP-37, SP-42.
                br
                | #[b Superficie deslizante:] SP-44.
                br
                | #[b Riesgo de accidente:] SP-67.
                br
                | #[b Proyección de gravilla:] SP-71.
                br
                | #[b Salida de vehículos de bomberos:] SP-72.
                br
                | #[b Ráfagas de viento lateral:] SP-73.
                br
                | #[b Desnivel severo:] SP-74.
    p.mb-5 A continuación puede observar la representación visual de cada una de las señales preventivas sobre características geométricas de la vía y su clasificación mencionadas en la tabla anterior.

    SlyderF.mb-5(columnas="col-md-6 col-lg-4")
      .tarjeta.w-100.d-flex.flex-wrap.justify-content-center.color-acento-botones.p-4(style="background-color: #FFF5C5")
        img.mb-4.mx-auto.mt-0.mb-auto(src='@/assets/curso/temas/tema1/sl3-1.svg' style="max-width: 190px")
        h4.mt-4.text-center(style="color: black") Señales preventivas primer grupo
        p.mb-4.text-center(style="color: black") De curvatura horizontal
        .d-flex.mt-auto.mb-0
          a.boton.boton-modal-sl.indicador__container(@click="modal5 = true; mostrarIndicador = false;")
            span Ver señales
            .indicador--click(v-if="mostrarIndicador")
      
      .tarjeta.w-100.d-flex.flex-wrap.justify-content-center.color-acento-botones.p-4(style="background-color: #FFF5C5")
        img.mb-4.mx-auto.mt-0.mb-auto(src='@/assets/curso/temas/tema1/sl3-2.svg' style="max-width: 190px")
        h4.mt-4.text-center(style="color: black") Señales preventivas segundo grupo
        ul.lista-ul.mb-3.w-100
          li.d-flex
            <svg style="max-width: 14px; margin-top: .4rem" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
              <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
            </svg>
            p.mb-0.ps-2.col(style="color: black") Pendientes longitudinales.
          li.d-flex
            <svg style="max-width: 14px; margin-top: .4rem" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
              <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
            </svg>
            p.mb-0.ps-2.col(style="color: black") Preventivas relacionadas con la superficie de rodadura.
          li.d-flex
            <svg style="max-width: 14px; margin-top: .4rem" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
              <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
            </svg>
            p.mb-0.ps-2.col(style="color: black") Preventivas sobre restricciones  físicas de la vía.
        .d-flex.mt-auto.mb-0
          a.boton.boton-modal-sl(@click="modal6 = true;")
            span Ver señales
      
      .tarjeta.w-100.d-flex.flex-wrap.justify-content-center.color-acento-botones.p-4(style="background-color: #FFF5C5")
        img.mb-4.mx-auto.mt-0.mb-auto(src='@/assets/curso/temas/tema1/sl3-3.svg' style="max-width: 190px")
        h4.mt-4.text-center(style="color: black") Señales preventivas tercer grupo
        p.mb-4.text-center(style="color: black") De curvatura horizontal
        .d-flex.mt-auto.mb-0
          a.boton.boton-modal-sl(@click="modal7 = true;")
            span Ver señales
      
      .tarjeta.w-100.d-flex.flex-wrap.justify-content-center.color-acento-botones.p-4(style="background-color: #FFF5C5")
        img.mb-4.mx-auto.mt-0.mb-auto(src='@/assets/curso/temas/tema1/sl3-4.svg' style="max-width: 190px")
        h4.mt-4.text-center(style="color: black") Señales preventivas cuarto grupo
        ul.lista-ul.mb-3.w-100
          li.d-flex
            <svg style="max-width: 14px; margin-top: .4rem" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
              <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
            </svg>
            p.mb-0.ps-2.col(style="color: black") Preventivas sobre características operativas de la vía.
          li.d-flex
            <svg style="max-width: 14px; margin-top: .4rem" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
              <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
            </svg>
            p.mb-0.ps-2.col(style="color: black") Preventivas sobre situaciones especiales.
        .d-flex.mt-auto.mb-0
          a.boton.boton-modal-sl(@click="modal8 = true;")
            span Ver señales

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/tema1/icon-titulo.svg' style="max-width: 32px; margin-left: -16px;")
        h4.col.ps-3.mb-0.text-white Señales informativas
    
    .d-flex.flex-wrap.mb-5
      .col-xl-6.order-2.order-xl-1
        p.mb-0.pe-xl-4 Dan información acerca de distancias a ciudades y localidades, kilómetros de rutas, nombres de calles, lugares de interés turístico, servicios al usuario, entre otros para llegar de manera segura, simple y directa a nuestros destinos.
      img.col-xl-6.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto(src='@/assets/curso/temas/tema1/img-13.png' style="max-width: 610px;")
    
    p.mb-5 A continuación se verá la representación visual de cada una de las señales informativas de distancias a ciudades y localidades.
    
    .d-flex.flex-wrap.align-items-stretch.mb-5
      .d-flex.col-xl-4.px-2.mb-4
        .tarjeta.w-100.d-flex.flex-wrap.justify-content-center.color-acento-botones.p-4(style="background-color: #FEE3C0")
          img.mx-auto.mt-0.mb-auto(src='@/assets/curso/temas/tema1/tj-1.svg' style="max-width: 190px")
          .w-100.mt-4.mb-auto
            h4.text-center(style="color: black") Señales informativas primer grupo
            ul.lista-ul.mb-3.w-100
              li.d-flex
                <svg style="max-width: 14px; margin-top: .4rem" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                p.mb-0.ps-2.col(style="color: black") Direcciones hacia destinos, calles o rutas.
              li.d-flex
                <svg style="max-width: 14px; margin-top: .4rem" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                p.mb-0.ps-2.col(style="color: black") Hacia dónde conduce la vía.
              li.d-flex
                <svg style="max-width: 14px; margin-top: .4rem" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                p.mb-0.ps-2.col(style="color: black") Enlaces o empalmes con otras vías.
              li.d-flex
                <svg style="max-width: 14px; margin-top: .4rem" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                p.mb-0.ps-2.col(style="color: black") Carriles apropiados para cada destino.
              li.d-flex
                <svg style="max-width: 14px; margin-top: .4rem" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                p.mb-0.ps-2.col(style="color: black") Inicio de la salida a otras vías.
              li.d-flex
                <svg style="max-width: 14px; margin-top: .4rem" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                p.mb-0.ps-2.col(style="color: black") Distancias a que se encuentran los destinos.
              li.d-flex
                <svg style="max-width: 14px; margin-top: .4rem" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                p.mb-0.ps-2.col(style="color: black") Hito kilométrico a lo largo de la vía.
              li.d-flex
                <svg style="max-width: 14px; margin-top: .4rem" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                p.mb-0.ps-2.col(style="color: black") Identificación de rutas y calles.
          .d-flex.mt-auto.mb-0
            a.boton.boton-modal-sl(@click="modal9 = true;")
              span Ver señales

      .d-flex.col-xl-4.px-2.mb-4
        .tarjeta.w-100.d-flex.flex-wrap.justify-content-center.color-acento-botones.p-4(style="background-color: #FEE3C0")
          img.mx-auto.mt-0.mb-auto(src='@/assets/curso/temas/tema1/tj-2.svg' style="max-width: 190px")
          .w-100.mt-4.mb-auto
            h4.text-center(style="color: black") Señales Informativas segundo grupo
            p.mb-4.text-center(style="color: black") Servicios generales.
          .d-flex.mt-auto.mb-0
            a.boton.boton-modal-sl(@click="modal10 = true;")
              span Ver señales
      
      .d-flex.col-xl-4.px-2.mb-4
        .tarjeta.w-100.d-flex.flex-wrap.justify-content-center.color-acento-botones.p-4(style="background-color: #FEE3C0")
          img.mx-auto.mt-0.mb-auto(src='@/assets/curso/temas/tema1/tj-3.svg' style="max-width: 190px")
          .w-100.mt-4.mb-auto
            h4.text-center(style="color: black") Señales informativas tercer grupo
            ul.lista-ul.mb-3.w-100
              li.d-flex
                <svg style="max-width: 14px; margin-top: .4rem" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                p.mb-0.ps-2.col(style="color: black") Lugares de atractivo turístico existentes en las inmediaciones de la vía.
              li.d-flex
                <svg style="max-width: 14px; margin-top: .4rem" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                p.mb-0.ps-2.col(style="color: black") Nombres de ciudades, ríos, puentes, calles, parques, lugares históricos y otros.
              li.d-flex
                <svg style="max-width: 14px; margin-top: .4rem" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                p.mb-0.ps-2.col(style="color: black") Cualquier otra información de importancia para los conductores.
          .d-flex.mt-auto.mb-0
            a.boton.boton-modal-sl(@click="modal11 = true;")
              span Ver señales
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/tema1/icon-titulo.svg' style="max-width: 32px; margin-left: -16px;")
        h4.col.ps-3.mb-0.text-white Demarcaciones
    
    .d-flex.flex-wrap.mb-5
      img.col-lg-4.mb-4.mb-lg-0.mx-auto(src='@/assets/curso/temas/tema1/img-14.png' style="max-width: 400px;")
      .col-lg-8
        p.mb-0.ps-lg-4 Se conocen como demarcaciones la aplicación de marcas viales conformadas por líneas, flechas, símbolos y letras que se adhieren sobre el pavimento, bordillos o sardineles y estructuras de las vías de circulación o adyacentes a ellas, así como a los dispositivos que se colocan sobre la superficie de rodadura para regular, canalizar el tránsito o indicar la presencia de obstáculos.
          br
          br
          |A continuación, se expone la aplicación de marcas viales por líneas, flechas, símbolos, letras y su clasificación, así:
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    ModalA.modal-t1(:abrir-modal.sync="modal1" style="background-color: #FEF0DE")
      .row.align-items-center
        h3.text-center Señales de prohibición primer grupo
        p.text-center Prohibición de maniobras y giros
        img.mx-auto(src='@/assets/curso/temas/tema1/modal1.svg' style="max-width: 600px")
    
    ModalA.modal-t1(:abrir-modal.sync="modal2" style="background-color: #FEF0DE")
      .row.align-items-center
        h3.text-center Señales de prohibición segundo grupo
        p.text-center Prohibición de maniobras y giros
        img.mx-auto(src='@/assets/curso/temas/tema1/modal2.svg' style="max-width: 600px")
    
    ModalA.modal-t1(:abrir-modal.sync="modal3" style="background-color: #FEF0DE")
      .row.align-items-center
        h3.text-center Señales de prohibición tercer grupo
        p.text-center Otras prohibiciones relacionadas a velocidad, luces, tipo de vehículo, etc.
        img.mx-auto(src='@/assets/curso/temas/tema1/modal3.svg' style="max-width: 600px")
    ModalA.modal-t1(:abrir-modal.sync="modal4" style="background-color: #FEF0DE")
      .row.align-items-center
        h3.text-center Señales de prohibición cuarto grupo
        p.text-center Prohibición de maniobras y circulación.
        img.mx-auto(src='@/assets/curso/temas/tema1/modal4.svg' style="max-width: 600px")

    ModalA.modal-t2(:abrir-modal.sync="modal5" style="background-color: #FEF0DE")
      .row.align-items-center
        h3.text-center Señales preventivas primer grupo
        p.text-center De curvatura horizontal
        img.mx-auto(src='@/assets/curso/temas/tema1/modal5.svg' style="max-width: 600px")
    ModalA.modal-t2(:abrir-modal.sync="modal6" style="background-color: #FEF0DE")
      .row.align-items-center
        h3.text-center Señales preventivas segundo grupo
        p.text-center Pendientes longitudinales. 
        img.mx-auto(src='@/assets/curso/temas/tema1/modal6.svg' style="max-width: 600px")
    ModalA.modal-t2(:abrir-modal.sync="modal7" style="background-color: #FEF0DE")
      .row.align-items-center
        h3.text-center Señales preventivas tercer grupo
        p.text-center De curvatura horizontal
        img.mx-auto(src='@/assets/curso/temas/tema1/modal7.svg' style="max-width: 600px")
    ModalA.modal-t2(:abrir-modal.sync="modal8" style="background-color: #FEF0DE")
      .row.align-items-center
        h3.text-center Señales preventivas cuarto grupo
        p.text-center Preventivas sobre características operativas de la vía.
        img.mx-auto(src='@/assets/curso/temas/tema1/modal8.svg' style="max-width: 600px")
    
    ModalA.modal-t1(:abrir-modal.sync="modal9" style="background-color: #FEF0DE")
      .row.align-items-center
        h3.text-center Señales informativas primer grupo
        p.text-center Direcciones hacia destinos, calles o rutas.
        img.mx-auto(src='@/assets/curso/temas/tema1/modal9.svg' style="max-width: 600px")
    
    ModalA.modal-t1(:abrir-modal.sync="modal10" style="background-color: #FEF0DE")
      .row.align-items-center
        h3.text-center Señales Informativas segundo grupo
        p.text-center Servicios generales.
        img.mx-auto(src='@/assets/curso/temas/tema1/modal10.svg' style="max-width: 600px")
    
    ModalA.modal-t1(:abrir-modal.sync="modal11" style="background-color: #FEF0DE")
      .row.align-items-center
        h3.text-center Señales informativas tercer grupo
        p.text-center Lugares de atractivo turístico existentes en las inmediaciones de la vía.
        img.mx-auto(src='@/assets/curso/temas/tema1/modal11.svg' style="max-width: 600px")
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
    modal10: false,
    modal11: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.bg-edit-1
  background-color: #FFF5C5
  position: relative
  &::after
    position: absolute
    content: ''
    background-color: #FFF5C5
    width: 300px
    height: 100%
    right: -300px
    top: 0
  @media (max-width: 1200px)
    &::after
      width: 0px
.bg-texto-left
  position: relative
  padding: 1rem 2rem
  width: 100%
  display: flex
  flex-wrap: wrap
  align-items: center
  p, img
    position: relative
    z-index: 1
  &::after
    content: ''
    position: absolute
    left: 0
    top: 0
    height: 100%
    width: 400px
    background-color: #FFEDC5
  @media (max-width: 768px)
    &::after
      width: 100%
.boton-modal-sl
  background-color: #535353
  color: white
  margin-right: auto
  margin-left: auto
  border-radius: 100px
  padding: .7rem 2rem
  &:hover
    background-color: #FFD817
    span
      color: black
      font-weight: bold
.modal-t1
  .modal-a__content
    background-color: #FEF0DE
.modal-t2
  .modal-a__content
    background-color: #FFF5C5
</style>
