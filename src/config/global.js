export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Jurisdicción y competencia',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Jurisdicción y función jurisdiccional del Estado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Concepto de jurisdicción y función jurisdiccional del Estado',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características de la jurisdicción',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Órganos jurisdiccionales y sus competencias funcionales según la Ley colombiana',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Competencia y distribución de asuntos judiciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto y factores para determinar la competencia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'El reparto como mecanismo de asignación equitativa de procesos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Conflictos de competencia: concepto, tipos y procedimiento para su resolución',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Impedimentos y recusaciones: causales, trámite y efectos procesales',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'Sarmiento, J. P. (2012). <i>Surgimiento de la dualidad de jurisdicciones en Colombia: entre la regeneración, la dictadura y la unión republicana</i>. Universidad del Norte. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/69868?page=89',
    },
    {
      referencia:
        'Cifuentes Muñoz, E. (2006). <i>Jurisdicción constitucional en Colombia</i>. Red Ius et Praxis. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/10963?page=13',
    },
    {
      referencia:
        'Garzón Vallejo, I. (2007). Hart y la configuración del Estado jurisdiccional. <i>Dikaion</i>, (17), 11-28. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/5675?page=7',
    },
    {
      referencia:
        'Chavarro Cadena, J. E. (2018). <i>Código general del proceso (3a ed.)</i>. Grupo Editorial Nueva Legislación SAS. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/71128',
    },
    {
      referencia:
        'Ron Cadena, J. C. (2017).<i> El Procedimiento Ordinario en el Código Orgánico General de Procesos</i>. Corporación de Estudios y Publicaciones. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/118652?page=8',
    },
    {
      referencia:
        'Escobar Alzate, J. (2014). <i>Nociones básicas del Derecho Procesal Civil en el Código General del Proceso</i>. Universidad de Ibagué. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/70164?page=91',
    },
  ],
  glosario: [
    {
      termino: 'Competencia',
      significado:
        'Medida del poder jurisdiccional que corresponde a cada juez, para conocer de un caso específico.',
    },
    {
      termino: 'Conexidad',
      significado:
        'Criterio que permite acumular procesos por su relación fáctica o jurídica en un mismo despacho.',
    },
    {
      termino: 'Cuantía',
      significado:
        'Valor económico del litigio, utilizado para asignar competencia entre jueces, según su jerarquía.',
    },
    {
      termino: 'Función jurisdiccional',
      significado:
        'Potestad del Estado ejercida por jueces para resolver conflictos mediante decisiones con fuerza legal.',
    },
    {
      termino: 'Grado',
      significado:
        'Nivel jerárquico del juez dentro de la estructura judicial, que determina la competencia.',
    },
    {
      termino: 'Impedimento',
      significado:
        'Circunstancia legal que obliga al juez a apartarse del proceso por conflicto de interés o parcialidad.',
    },
    {
      termino: 'Imparcialidad',
      significado:
        'Principio que exige del juez neutralidad frente a las partes y los hechos del proceso.',
    },
    {
      termino: 'Juez natural',
      significado:
        'Derecho de ser juzgado por autoridad judicial previamente determinada por Ley, sin interferencias.',
    },
    {
      termino: 'Jurisdicción',
      significado:
        'Potestad exclusiva del Estado para administrar justicia, mediante decisiones vinculantes.',
    },
    {
      termino: 'Materia',
      significado:
        'Tipo de asunto jurídico (civil, penal, laboral) que define la competencia del juez.',
    },
    {
      termino: 'Motivación judicial',
      significado:
        'Obligación del juez de explicar jurídicamente sus decisiones para garantizar transparencia y legalidad.',
    },
    {
      termino: 'Nulidad procesal',
      significado:
        'Sanción por irregularidades graves en el proceso que afectan derechos fundamentales o legales.',
    },
    {
      termino: 'Parcialidad',
      significado:
        'Actitud del juez contraria a la imparcialidad, que favorece injustamente a una de las partes.',
    },
    {
      termino: 'Reparto judicial',
      significado:
        'Mecanismo para distribuir equitativamente los casos entre jueces del mismo nivel o jurisdicción.',
    },
    {
      termino: 'Recusación',
      significado:
        'Solicitud de una parte para que un juez sea separado por razones que afectan su imparcialidad.',
    },
    {
      termino: 'Territorio',
      significado:
        'Ámbito geográfico que delimita la competencia del juez sobre determinados hechos o personas.',
    },
  ],
}
