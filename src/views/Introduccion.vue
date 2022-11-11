<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.mx-auto.mb-4.mb-md-0(src="@/assets/curso/temas/img-1.svg" data-aos="fade-right" style="width: 100%; max-width: 85px")
      .col-12.col-md.ps-md-4
        p.mb-0(data-aos="fade-left") Cada país expide normas para generar un ambiente de seguridad y normas de circulación que garanticen la movilidad de los actores viales en su calidad de peatón, conductor o pasajero, la cual es cada vez más compleja; la seguridad de las vías y los arcenes (margen de las carreteras), la circulación a velocidades permitidas y la seguridad de los vehículos y los usuarios, es una problemática que se encuentra en aumento. 
    
    p.mb-5(data-aos="fade-right") Por ello, se deben conocer los diferentes aspectos relacionados con el tránsito y la movilidad, los cuales se presentan en el siguiente video.

    figure(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/lDQDTnMguL0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
