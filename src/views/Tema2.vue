<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fundamentos de planes de tránsito y movilidad

    .d-flex.flex-wrap.mb-5
      img.col-lg-4.mb-4.mb-lg-0.mx-auto(src='@/assets/curso/temas/tema2/img-1.png' style="max-width: 400px;")
      .col-lg-8
        p.mb-0.ps-lg-4 Las autoridades de tránsito para el desarrollo de sus funciones realizan planes de tránsito, controles y actividades pedagógicas en vía para realizar acciones de prevención o de aplicación de la norma, según sea el caso, donde la movilidad de cualquiera de los actores viales (conductor, pasajero, peatón) requiera algún tipo de intervención. 
          br
          br
          |Por lo anterior, la base fundamental para el desarrollo de este tipo de actividades es la normatividad vigente en materia de tránsito y transporte, donde resalta de manera especial la Ley 769 de 2002 Código Nacional de Tránsito, el cual establece las normas de comportamiento vial y los parámetros para el ejercicio del derecho a la libre locomoción tipificado en el artículo 24 de la constitución política de Colombia.
          br
          br
          |Son autoridades de tránsito en su orden, las siguientes:
    Separador

    .titulo-segundo.color-secundario
      h2#t_2_1 2.1 Autoridades de tránsito
    
    .bg-texto-right.mb-5
      img.mb-3.mb-md-0.mx-auto(src='@/assets/curso/temas/tema1/img-9.svg' style="max-width: 85px")
      p.col-md.mb-0.ps-md-4 Las autoridades de tránsito son servidores públicos de diferentes entidades y funciones, a cargo de velar por la seguridad vial de las personas y las cosas que se encuentran o utilizan las vías públicas y privadas abiertas al público para su movilización. Sus funciones serán de carácter regulatorio y sancionatorio y sus acciones deben ser orientadas a la prevención y la asistencia técnica y humana a los usuarios de las vías. 
    
    p.mb-5 Se puede establecer que las autoridades de tránsito se encuentran tipificadas en el artículo 3° de la Ley 769 de 2002, la cual establece un orden jerárquico de ocho entidades establecido de la siguiente manera:

    img.mb-5.d-none.d-lg-flex(src='@/assets/curso/temas/tema2/img-2.svg')
    img.mb-5.d-flex.d-lg-none(src='@/assets/curso/temas/tema2/img-2-movil.svg')

    p.mb-5 Cada una de las entidades que hace parte de la definición de autoridad de tránsito tiene funciones específicas dentro de sus competencias, por lo cual las autoridades de tránsito se clasifican en tres categorías, de acuerdo con lo establecido en el manual de infracciones de tránsito reglamentado mediante la Resolución 3027 del 2010 así:

    img.mb-5(src='@/assets/curso/temas/tema2/img-3.svg')

    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Pirámide de Hans Kelsen - jerarquía de las normas
    
    .bg-texto-left-img.mb-1
      img.mb-3.mb-md-0.mx-auto(src='@/assets/curso/temas/tema2/img-4.png' style="max-width: 364px")
      p.col-md.mb-0.ps-md-4 Por lo anterior es importante ahondar en las autoridades de control operativo del tránsito aclarando que estas, se deben identificar visualmente a la población a través del uso de sus uniformes reglamentarios, y deberán ser nombrados mediante acto administrativo por el alcalde de cada jurisdicción, definiendo el cargo de agente de tránsito como #[b “todo funcionario o persona civil identificada, que está investida de autoridad para regular la circulación vehicular y peatonal y vigilar, controlar e intervenir en el cumplimiento de las normas de tránsito y transporte en cada uno de los entes territoriales”] artículo 2° de la Ley 769 de 2002; en algunas jurisdicciones deben apoyar la función de la autoridad de tránsito con guías de movilidad, promotores de seguridad vial o algún tipo de personal de apoyo para garantizar una correcta movilidad de la jurisdicción.
        br
        br
        |Por otra parte, la Policía Nacional de Colombia tiene a cargo la seguridad de carreteras nacionales y por esto destinó un promedio del 4% de su personal de policías, para desempeñar funciones de autoridad de tránsito, los cuales son asignados a la Dirección de Tránsito y Transporte para desempeñar funciones en algunas jurisdicciones del país principalmente en las carreteras nacionales.
    p.mb-5.py-1.px-3(style="background-color: #E8E8E8") #[b Nota.] Tomada de www.movilidadbogota.gov.co

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/tema1/icon-titulo.svg' style="max-width: 32px; margin-left: -16px;")
        h4.col.ps-3.py-1.mb-0.text-white Señales corporales de la autoridad de tránsito de control operativo.
    
    p.mb-5 Se encuentran enmarcadas jurídicamente en el artículo 116 del Código Nacional de Tránsito (Ley 769 de 2002), el cual establece que las autoridades encargadas de controlar el tránsito deben hacer las señales de la siguiente manera:

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
    background-color: #E8E8E8
  @media (max-width: 768px)
    &::after
      width: 100%
.bg-texto-left-img
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
    width: 505px
    background-color: #FFF5C5
  @media (max-width: 768px)
    &::after
      width: 100%
</style>
