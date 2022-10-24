<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 Contar con personal capacitado en el control de la movilidad, transporte y seguridad vial permite la optimización de recursos de cualquier entidad pública o privada, ya que su principal acción es reducir los índices y riesgos de accidentalidad vial, lo que tiene un costo muy alto en vidas y salud pública de la sociedad.
      br
      br
      |Para ello, los profesionales deben conocer muy bien el aspecto normativo que regula el comportamiento de los actores viales y el aspecto técnico del Manual de señalización vial como pilares de la movilidad, para conocer los planes de tránsito y movilidad, así como las diferentes técnicas para realizar controles operativos del tránsito y lo concerniente a actuaciones judiciales en caso de accidentes de tránsito. 
      br
      br
      |A continuación, se puede visualizar la representación esquemática de los temas tratados relacionados al tránsito y seguridad vial.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
