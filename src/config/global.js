export default {
  global: {
    componenteFormativo: 'Tránsito y seguridad vial',
    descripcionCurso:
      'Este componente aborda la importancia de los aspectos normativos y técnicos relacionados con el tránsito y la movilidad, explicando las técnicas más importantes para el desarrollo de controles de tránsito y formatos de policía judicial necesarios para la atención de accidentes de tránsito; además, el aprendiz se debe proyectar como ejemplo vial multiplicador de conocimientos que le aporte a la solución de este problema social.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Aspectos relacionados con el tránsito',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Aspectos normativos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Manual de señalización vial',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fundamentos de planes de tránsito y movilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Autoridades de tránsito',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Controles operativos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Técnicas para la movilidad y diligenciamiento de formatos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Técnicas de uso en equipos para pruebas de alcohol',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Técnicas de uso en equipos para pruebas de drogas',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Características y tipos de radares de velocidad',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'Características del Informe Policial de Accidente de Tránsito IPAT',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo:
              'Técnicas de diligenciamiento de los Formatos Policía Judicial (FPJ) en eventos de tránsito',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Aspectos Normativo',
      referencia: 'Congreso de Colombia. (2022). Ley 769 de 2002.',
      tipo: 'Página web',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0769_2002.html',
    },
    {
      tema: 'Manual de Señalización Vial',
      referencia: 'Invías. (2015). Resolución 1885 del 17 de junio de 2015.',
      tipo: 'Página web y PDF',
      link:
        'https://www.invias.gov.co/index.php/normativa/resoluciones-circulares-otros/7086-resolucion-1885-del-17-de-junio-de-2015',
    },
    {
      tema: 'Técnicas de uso en Equipos para pruebas de Alcohol',
      referencia:
        'Ministerio de Transporte de Colombia. (2012). Resolución 0011268.',
      tipo: 'Página web Y PDF',
      link:
        'https://web.mintransporte.gov.co/rnat/app/ayudas/Resolucion_0011268_2012.pdf',
    },
    {
      tema:
        'Características del Informe Policial de Accidente de Tránsito IPAT',
      referencia:
        'Ministerio de Transporte de Colombia. (2012). Resolución 0011268.',
      tipo: 'Página web Y PDF',
      link:
        'https://web.mintransporte.gov.co/rnat/app/ayudas/Resolucion_0011268_2012.pdf',
    },
    {
      tema:
        'Técnicas de Diligenciamiento de los Formatos Policía Judicial (FPJ) en Eventos de Tránsito',
      referencia:
        'Fiscalía General de la Nación. (s. f.). <em>Polijudicial.</em>',
      tipo: 'Página web',
      link: 'https://oscarbasico.wixsite.com/polijudicial/protocolos-fgn',
    },
  ],
  glosario: [
    {
      termino: 'CPP',
      significado: ' Código de Procedimiento Penal.',
    },
    {
      termino: 'FGN',
      significado: ' Fiscalía General de la Nación.',
    },
    {
      termino: 'FPJ',
      significado: ' Formato de Policía Judicial.',
    },
    {
      termino: 'IPAT',
      significado: ' Informe Policial de Accidente de Tránsito.',
    },
    {
      termino: 'LSD',
      significado:
        ' Siglas en inglés de la dietilamida de ácido lisérgico. Esta es una droga ilegal que se presenta en forma de polvo blanco o de un líquido claro.',
    },
    {
      termino: 'OMS',
      significado: ' Organización Mundial de la Salud.',
    },
    {
      termino: 'Radar',
      significado:
        'Palabra que procede de Radio Detection and Ranging - detección y rango de radio.',
    },
    {
      termino: 'RNAT',
      significado: ' Registro Nacional de Accidentes de Tránsito.',
    },
    {
      termino: 'SI',
      significado: ' Señal Informativa.',
    },
    {
      termino: 'SP',
      significado: ' Señal Preventiva.',
    },
    {
      termino: 'SPOA',
      significado: ' Sistema Penal Oral Acusatorio.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agencia Nacional de Seguridad Vial. (2022). <em>Observatorio Nacional de Seguridad Vial.</em>',
      link:
        'https://ansv.gov.co/es/observatorio/estad%C3%ADsticas/historico-victimas',
    },
    {
      referencia:
        'Congreso de la República. (2002). Ley 769 por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0769_2002.html',
    },
    {
      referencia:
        'Congreso de la República. (2004). Ley 906 por medio de la cual se expide el Código de Procedimiento Penal.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0906_2004.html',
    },
    {
      referencia:
        'Congreso de la República. (2013). Ley 1696 por medio de la cual se dictan disposiciones penales y administrativas para sancionar la conducción bajo el influjo del alcohol u otras sustancias psicoactivas.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1696_2013.html#:~:text=Leyes%20desde%201992%20%2D%20Vigencia%20expresa%20y%20control%20de%20constitucionalidad%20%5BLEY_1696_2013%5D&text=Por%20medio%20de%20la%20cual,alcohol%20u%20otras%20sustancias%2',
    },
    {
      referencia:
        'Instituto Nacional de Medicina Legal y Ciencias Forenses. (2002). Resolución 000414 por la cual se fijan los parámetros científicos y técnicos.',
      link:
        'https://www.medicinalegal.gov.co/documents/20143/69278/Resolucion+000414-2002.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Medicina Legal y Ciencias Forenses. (2015). Resolución 001844 por la cual se adopta la segunda versión de la Guía para la Medición Indirecta de la Guía para la Medición Indirecta de Alcoholemia a Través de Aire Espirado.',
      link:
        'https://www.medicinalegal.gov.co/documents/20143/69406/RESOLUCION+1844_2015_INMLCF.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Medicina Legal y Ciencias Forenses. (2016). Resolución No. 001844 por la cual se adopta la segunda versión de la Guía para la Medición Indirecta de Alcoholemia a Través de Aire Espirado.',
      link:
        'https://www.medicinalegal.gov.co/documents/20143/40473/Gu%C3%ADa+para+la+determinaci%C3%B3n+cl%C3%ADnica+forense+delestado+de+embriaguez+aguda.pdf/8de54a98-38db-f7c1-e04c-9b2505b585e9',
    },
    {
      referencia:
        'Ministerio de Transporte. (2010). Resolución 3027 por la cual se actualiza la codificación de las infracciones de tránsito, de conformidad con lo establecido en la Ley 1383 de 2010, se adopta el Manual de Infracciones y se dictan otras disposiciones.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=40067',
    },
    {
      referencia: 'Ministerio de Transporte. (2012). Resolución 11268.',
      link:
        'https://web.mintransporte.gov.co/rnat/app/ayudas/Resolucion_0011268_2012.pdf',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2022). <em>Traumatismos causados por el tránsito.</em> OMS.',
      link:
        'https://www.who.int/es/news-room/fact-sheets/detail/road-traffic-injuries',
    },
    {
      referencia: 'RAE. (2022). <em>Diccionario de la lengua española.</em>',
      link: 'https://dle.rae.es/cinem%C3%B3metro',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Lino Andrés Quiroga Amaya',
        cargo: 'Experto Temático',
        centro: 'Centro de Tecnologías del Transporte.',
      },
      {
        nombre: 'Diego E. Acevedo Guevara',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Asesor Metodológico',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Edinson Castañeda Oviedo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación Contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Ilustración',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Validación audiovisual',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
