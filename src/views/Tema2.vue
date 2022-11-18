<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fundamentos de planes de tránsito y movilidad

    .d-flex.flex-wrap.mb-5
      img.col-lg-4.mb-4.mb-lg-0.mx-auto(src='@/assets/curso/temas/tema2/img-1.png' data-aos="fade-right" style="max-width: 400px;")
      .col-lg-8
        p.mb-0.ps-lg-4(data-aos="fade-left") Las autoridades de tránsito para el desarrollo de sus funciones realizan planes de tránsito, controles y actividades pedagógicas en vía para realizar acciones de prevención o de aplicación de la norma, según sea el caso, donde la movilidad de cualquiera de los actores viales (conductor, pasajero, peatón) requiera algún tipo de intervención. 
          br
          br
          |Por lo anterior, la base fundamental para el desarrollo de este tipo de actividades es la normatividad vigente en materia de tránsito y transporte, donde resalta de manera especial la Ley 769 de 2002 Código Nacional de Tránsito, el cual establece las normas de comportamiento vial y los parámetros para el ejercicio del derecho a la libre locomoción tipificado en el artículo 24 de la constitución política de Colombia.
          br
          br
          |Son autoridades de tránsito en su orden, las siguientes:
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Autoridades de tránsito
    
    .bg-texto-right.mb-5.ps-md-0
      p.order-2.order-md-1.col-md.mb-0.pe-md-4(data-aos="fade-right") Las autoridades de tránsito son servidores públicos de diferentes entidades y funciones, a cargo de velar por la seguridad vial de las personas y las cosas que se encuentran o utilizan las vías públicas y privadas abiertas al público para su movilización. Sus funciones serán de carácter regulatorio y sancionatorio y sus acciones deben ser orientadas a la prevención y la asistencia técnica y humana a los usuarios de las vías. 
      img.mb-3.order-1.order-md-2.mb-md-0.mx-auto(src='@/assets/curso/temas/tema2/decorador-1.svg' data-aos="fade-left" style="max-width: 85px")
    
    p.mb-5(data-aos="fade-right") Se puede establecer que las autoridades de tránsito se encuentran tipificadas en el artículo 3° de la Ley 769 de 2002, la cual establece un orden jerárquico de ocho entidades establecido de la siguiente manera:

    img.mb-5.d-none.d-lg-flex(src='@/assets/curso/temas/tema2/img-2.svg' data-aos="fade-right")
    img.mb-5.d-flex.d-lg-none(src='@/assets/curso/temas/tema2/img-2-movil.svg' data-aos="fade-right")

    p.mb-5(data-aos="fade-right") Cada una de las entidades que hace parte de la definición de autoridad de tránsito tiene funciones específicas dentro de sus competencias, por lo cual las autoridades de tránsito se clasifican en tres categorías, de acuerdo con lo establecido en el manual de infracciones de tránsito reglamentado mediante la Resolución 3027 del 2010 así:

    img.mb-5(src='@/assets/curso/temas/tema2/img-3.svg' data-aos="fade-right")

    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Pirámide de Hans Kelsen - jerarquía de las normas
    
    .bg-texto-left-img.mb-1
      img.mx-auto.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img-4.png' data-aos="fade-right" style="max-width: 364px")
      p.col-lg.mb-0.ps-md-4(data-aos="fade-left") Por lo anterior es importante ahondar en las autoridades de control operativo del tránsito aclarando que estas, se deben identificar visualmente a la población a través del uso de sus uniformes reglamentarios, y deberán ser nombrados mediante acto administrativo por el alcalde de cada jurisdicción, definiendo el cargo de agente de tránsito como #[b “todo funcionario o persona civil identificada, que está investida de autoridad para regular la circulación vehicular y peatonal y vigilar, controlar e intervenir en el cumplimiento de las normas de tránsito y transporte en cada uno de los entes territoriales”] artículo 2° de la Ley 769 de 2002; en algunas jurisdicciones deben apoyar la función de la autoridad de tránsito con guías de movilidad, promotores de seguridad vial o algún tipo de personal de apoyo para garantizar una correcta movilidad de la jurisdicción.
        br
        br
        |Por otra parte, la Policía Nacional de Colombia tiene a cargo la seguridad de carreteras nacionales y por esto destinó un promedio del 4% de su personal de policías, para desempeñar funciones de autoridad de tránsito, los cuales son asignados a la Dirección de Tránsito y Transporte para desempeñar funciones en algunas jurisdicciones del país principalmente en las carreteras nacionales.
    p.mb-5.py-1.px-3(style="background-color: #E8E8E8") #[b Nota.] Tomada de www.movilidadbogota.gov.co

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/tema1/icon-titulo.svg' data-aos="fade-right" style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.py-1.mb-0.text-white(data-aos="fade-right") Señales corporales de la autoridad de tránsito de control operativo.
    
    p.mb-5(data-aos="fade-right") Se encuentran enmarcadas jurídicamente en el artículo 116 del Código Nacional de Tránsito (Ley 769 de 2002), el cual establece que las autoridades encargadas de controlar el tránsito deben hacer las señales de la siguiente manera:

    .row.mb-5
      .col-12.col-lg-6.col-xl-4.mb-4.mx-auto(style="max-width: 416px; min-height: 466px" data-aos="fade-right")
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-5.svg')})`}"
            style="background-position: right;"
            )
            .tarjeta-flip__contenido.p-4(style="background-color: #FFD817")
              img.mb-4(src='@/assets/curso/temas/tema2/decorador-tj.svg' style="max-width: 60px;")
              ul.lista-ul
                li
                  <svg style="width: 8px; min-width: 8px; margin-top: .4rem" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="8.621" height="14.674" viewBox="0 0 8.621 14.674">
                    <g id="Grupo_423" data-name="Grupo 423">
                      <path id="Trazado_635" data-name="Trazado 635" d="M8.385,6.763,1.856.234A.8.8,0,0,0,.725.23l0,0L.24.715a.8.8,0,0,0,0,1.131l0,0L5.722,7.332.234,12.82a.8.8,0,0,0,0,1.131l0,0,.481.481a.8.8,0,0,0,1.131,0l0,0L8.385,7.9a.81.81,0,0,0,0-1.139Z" transform="translate(0.002 0.002)" fill="#00223d"/>
                    </g>
                  </svg>
                  p.mb-0.ps-3 La espalda o el frente indican que está cerrada la circulación y el conductor deberá detenerse.
                
                li
                  <svg style="width: 8px; min-width: 8px; margin-top: .4rem" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="8.621" height="14.674" viewBox="0 0 8.621 14.674">
                    <g id="Grupo_423" data-name="Grupo 423">
                      <path id="Trazado_635" data-name="Trazado 635" d="M8.385,6.763,1.856.234A.8.8,0,0,0,.725.23l0,0L.24.715a.8.8,0,0,0,0,1.131l0,0L5.722,7.332.234,12.82a.8.8,0,0,0,0,1.131l0,0,.481.481a.8.8,0,0,0,1.131,0l0,0L8.385,7.9a.81.81,0,0,0,0-1.139Z" transform="translate(0.002 0.002)" fill="#00223d"/>
                    </g>
                  </svg>
                  p.mb-0.ps-3 Los flancos indican que la vía está libre.

                li
                  <svg style="width: 8px; min-width: 8px; margin-top: .4rem" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="8.621" height="14.674" viewBox="0 0 8.621 14.674">
                    <g id="Grupo_423" data-name="Grupo 423">
                      <path id="Trazado_635" data-name="Trazado 635" d="M8.385,6.763,1.856.234A.8.8,0,0,0,.725.23l0,0L.24.715a.8.8,0,0,0,0,1.131l0,0L5.722,7.332.234,12.82a.8.8,0,0,0,0,1.131l0,0,.481.481a.8.8,0,0,0,1.131,0l0,0L8.385,7.9a.81.81,0,0,0,0-1.139Z" transform="translate(0.002 0.002)" fill="#00223d"/>
                    </g>
                  </svg>
                  p.mb-0.ps-3 Los flancos con los brazos extendidos en ángulo de noventa (90) grados con respecto al cuerpo y con las manos en posición horizontal, indican que está previniendo el cambio de vía libre a cerrada o viceversa.
                
                li
                  <svg style="width: 8px; min-width: 8px; margin-top: .4rem" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="8.621" height="14.674" viewBox="0 0 8.621 14.674">
                    <g id="Grupo_423" data-name="Grupo 423">
                      <path id="Trazado_635" data-name="Trazado 635" d="M8.385,6.763,1.856.234A.8.8,0,0,0,.725.23l0,0L.24.715a.8.8,0,0,0,0,1.131l0,0L5.722,7.332.234,12.82a.8.8,0,0,0,0,1.131l0,0,.481.481a.8.8,0,0,0,1.131,0l0,0L8.385,7.9a.81.81,0,0,0,0-1.139Z" transform="translate(0.002 0.002)" fill="#00223d"/>
                    </g>
                  </svg>
                  p.mb-0.ps-3 Para dirigir el tránsito durante la noche, los agentes de tránsito se proveerán de bastones luminosos y de prendas reflectivas.

      .col-12.col-lg-6.col-xl-4.mb-4.mx-auto(style="max-width: 416px; min-height: 466px" data-aos="fade-right")
        .tarjeta.tarjeta-flip
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-6.svg')})`}"
            style="background-position: center;"
            )
            .tarjeta-flip__contenido.p-4(style="background-color: #FFD817")
              img.mb-4(src='@/assets/curso/temas/tema2/decorador-tj.svg' style="max-width: 60px;")
              ul.lista-ul
                li
                  <svg style="width: 8px; min-width: 8px; margin-top: .4rem" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="8.621" height="14.674" viewBox="0 0 8.621 14.674">
                    <g id="Grupo_423" data-name="Grupo 423">
                      <path id="Trazado_635" data-name="Trazado 635" d="M8.385,6.763,1.856.234A.8.8,0,0,0,.725.23l0,0L.24.715a.8.8,0,0,0,0,1.131l0,0L5.722,7.332.234,12.82a.8.8,0,0,0,0,1.131l0,0,.481.481a.8.8,0,0,0,1.131,0l0,0L8.385,7.9a.81.81,0,0,0,0-1.139Z" transform="translate(0.002 0.002)" fill="#00223d"/>
                    </g>
                  </svg>
                  p.mb-0.ps-3 #[b Regular:] hace referencia a la acción de establecer orden frente a una situación o acción que afecte la movilidad, la autoridad de tránsito se desplaza desde el frente de una calle al de la otra, cada vez que autoriza el paso, ubicándose en la prolongación de la línea del andén, dejando libre la circulación de la otra vía.

      .col-12.col-lg-6.col-xl-4.mb-4.mx-auto(style="max-width: 416px; min-height: 466px" data-aos="fade-right")
        .tarjeta.tarjeta-flip
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-7.svg')})`}"
            style="background-position: center;"
            )
            .tarjeta-flip__contenido.p-4(style="background-color: #FFD817")
              img.mb-4(src='@/assets/curso/temas/tema2/decorador-tj.svg' style="max-width: 60px;")
              ul.lista-ul
                li
                  <svg style="width: 8px; min-width: 8px; margin-top: .4rem" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="8.621" height="14.674" viewBox="0 0 8.621 14.674">
                    <g id="Grupo_423" data-name="Grupo 423">
                      <path id="Trazado_635" data-name="Trazado 635" d="M8.385,6.763,1.856.234A.8.8,0,0,0,.725.23l0,0L.24.715a.8.8,0,0,0,0,1.131l0,0L5.722,7.332.234,12.82a.8.8,0,0,0,0,1.131l0,0,.481.481a.8.8,0,0,0,1.131,0l0,0L8.385,7.9a.81.81,0,0,0,0-1.139Z" transform="translate(0.002 0.002)" fill="#00223d"/>
                    </g>
                  </svg>
                  p.mb-0.ps-3 #[b Dirigir:] acción de encauzar, enfocar o agilizar la movilidad hacia un determinado espacio de la vía, se realiza en forma eventual, como solución temporal al represamiento o congestión vehicular.
                ul.lista-ul.mb-3
                li
                  <svg style="width: 8px; min-width: 8px; margin-top: .4rem" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="8.621" height="14.674" viewBox="0 0 8.621 14.674">
                    <g id="Grupo_423" data-name="Grupo 423">
                      <path id="Trazado_635" data-name="Trazado 635" d="M8.385,6.763,1.856.234A.8.8,0,0,0,.725.23l0,0L.24.715a.8.8,0,0,0,0,1.131l0,0L5.722,7.332.234,12.82a.8.8,0,0,0,0,1.131l0,0,.481.481a.8.8,0,0,0,1.131,0l0,0L8.385,7.9a.81.81,0,0,0,0-1.139Z" transform="translate(0.002 0.002)" fill="#00223d"/>
                    </g>
                  </svg>
                  p.mb-0.ps-3 El cambio de vía libre a cerrada o viceversa será la señal ejecutiva, la cual consiste en pasar desde la posición preventiva flexionando el codo derecho u izquierdo según el sentido hacia donde quiera dirigir el tránsito, hacia el pecho de forma que la palma de la mano se acerque hacia el pecho.
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2  Controles operativos
    
    p.mb-5(data-aos="fade-right") Las autoridades de tránsito de Colombia realizan controles operativos del tránsito en cada una de las jurisdicciones donde sean nombrados mediante acto administrativo o jurisdicción que le permita la ley, desarrollando procedimientos tipificados a la luz de la norma, para exigir el cumplimiento de la normatividad de tránsito, transporte y policía judicial en eventos de accidentes de tránsito.
      br
      br
      |En el siguiente video se expone cómo realizar actividades de control operativo en las vías de Colombia.
    
    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/0KAgObYvSe4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-5(data-aos="fade-right") Adicionalmente, el capítulo 8 del Manual de señalización vial establece la señalización de calles y carreteras afectadas por eventos especiales de tránsito diferentes a obras en la vía, los cuales se clasifican como se muestra a continuación:

    .tabla-a.color-acento-botones.mb-5.col-xl-10.mx-auto
      table(data-aos="fade-right")
        thead
          tr
            th.ps-5.col-4.text-start Eventos Especiales No Programables (EENP)
            th.ps-4.text-start.col(style="background-color: white; font-weight: normal;") Accidentes de tránsito.
              br
              |Incendios.
              br
              |Desastres naturales.
        tbody
          tr
            td.ps-5.fw-bold(style="background-color: #FFF5C5;") Eventos Especiales Programables (EEP)
            td.ps-4
              p Eventos debidamente autorizados por la autoridad competente como:
              ul.lista-ul
                li
                  <svg style="width: 16px; min-width: 16px; margin-top: .4rem;" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                    <circle id="Elipse_4725" data-name="Elipse 4725" cx="5" cy="5" r="5" fill="#f88f05"/>
                  </svg>
                  p.mb-0.ps-3 Desplazamiento de personajes de la vida nacional (autoridades, dirigentes, etc.).
                li
                  <svg style="width: 16px; min-width: 16px; margin-top: .4rem;" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                    <circle id="Elipse_4725" data-name="Elipse 4725" cx="5" cy="5" r="5" fill="#f88f05"/>
                  </svg>
                  p.mb-0.ps-3 Operativos de control de tránsito.
                li
                  <svg style="width: 16px; min-width: 16px; margin-top: .4rem;" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                    <circle id="Elipse_4725" data-name="Elipse 4725" cx="5" cy="5" r="5" fill="#f88f05"/>
                  </svg>
                  p.mb-0.ps-3 Marchas, caminatas, cabalgatas.
                li
                  <svg style="width: 16px; min-width: 16px; margin-top: .4rem;" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                    <circle id="Elipse_4725" data-name="Elipse 4725" cx="5" cy="5" r="5" fill="#f88f05"/>
                  </svg>
                  p.mb-0.ps-3 Eventos que ameritan medidas de seguridad especiales que requieren: cierre de vías, como cumbres o convenciones.
                li
                  <svg style="width: 16px; min-width: 16px; margin-top: .4rem;" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                    <circle id="Elipse_4725" data-name="Elipse 4725" cx="5" cy="5" r="5" fill="#f88f05"/>
                  </svg>
                  p.mb-0.ps-3 Paradas militares.
                li
                  <svg style="width: 16px; min-width: 16px; margin-top: .4rem;" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                    <circle id="Elipse_4725" data-name="Elipse 4725" cx="5" cy="5" r="5" fill="#f88f05"/>
                  </svg>
                  p.mb-0.ps-3 Eventos deportivos.
                li
                  <svg style="width: 16px; min-width: 16px; margin-top: .4rem;" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                    <circle id="Elipse_4725" data-name="Elipse 4725" cx="5" cy="5" r="5" fill="#f88f05"/>
                  </svg>
                  p.mb-0.ps-3 Ciclovías dominicales o nocturnas.
                li
                  <svg style="width: 16px; min-width: 16px; margin-top: .4rem;" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                    <circle id="Elipse_4725" data-name="Elipse 4725" cx="5" cy="5" r="5" fill="#f88f05"/>
                  </svg>
                  p.mb-0.ps-3 Eventos religiosos, culturales o de expresión social.
                li
                  <svg style="width: 16px; min-width: 16px; margin-top: .4rem;" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                    <circle id="Elipse_4725" data-name="Elipse 4725" cx="5" cy="5" r="5" fill="#f88f05"/>
                  </svg>
                  p.mb-0.ps-3 Retenes de la Policía Nacional o del Ejército Nacional.
                li
                  <svg style="width: 16px; min-width: 16px; margin-top: .4rem;" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                    <circle id="Elipse_4725" data-name="Elipse 4725" cx="5" cy="5" r="5" fill="#f88f05"/>
                  </svg>
                  p.mb-0.ps-3 Para la señalización.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    indicadorTarjetaFlip: true,
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
.bg-texto-right
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
    right: 0
    top: 0
    height: 100%
    width: 400px
    background-color: #E8E8E8 !important
  @media (max-width: 768px)
    &::after
      width: 100%
</style>
