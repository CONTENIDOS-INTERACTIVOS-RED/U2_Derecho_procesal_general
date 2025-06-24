<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Competencia y distribución de asuntos judiciales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    p(data-aos="fade-down") Para comprender adecuadamente el funcionamiento de la justicia en Colombia, es indispensable distinguir entre dos conceptos fundamentales: 
    .bg-full-width.bg-color-info.mb-5(data-aos="fade-right")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/33.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="3.1%" y="39.8%" numero="+")
                  h5 Jurisdicción
                  p La jurisdicción representa el poder del Estado para administrar justicia, mientras que la competencia delimita el ámbito específico dentro del cual ese poder debe ser ejercido. Es decir, todos los jueces ejercen jurisdicción, pero no todos tienen competencia para conocer todos los asuntos.   
                .bg-color-white.box-shadow.p-3(x="96.8%" y="41.4%" numero="+")
                  h5 Competencia
                  p La competencia es, por tanto, el marco legal que define qué juez o tribunal debe encargarse de un proceso particular, según una serie de criterios establecidos por la Ley a modo de acróstico, se puede afirmar que la jurisdicción es el género y la competencia la especie.  

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/34.png", data-aos="zoom-in")       
      .col-lg-8
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/35.svg")
            .col-lg
              p.mb-0  El objetivo principal de la competencia es garantizar el principio del juez natural, consagrado en la Constitución Política de Colombia. Este principio establece que ninguna persona podrá ser juzgada por tribunales especiales o ad hoc, sino únicamente por jueces previamente establecidos por la Ley. De esta manera, se evita que los procesos sean asignados de manera arbitraria o manipulada, lo cual asegura la imparcialidad, independencia y transparencia del sistema judicial. La competencia también contribuye a descongestionar los despachos judiciales, pues permite distribuir de forma equitativa la carga de trabajo entre los jueces, respetando la especialidad, el nivel jerárquico y la ubicación geográfica de cada uno.                 
        p(data-aos="fade-down") En este tema se estudia:

    .bg-full-width.bg-fondo-slider(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              p Cómo se determina la competencia y qué mecanismos se utilizan para asignar los casos a los jueces correspondientes. Existen factores para determinarla como la materia del litigio civil, penal, laboral, administrativo, el valor económico en disputa cuantía, el territorio donde ocurrió el hecho o se encuentra el demandado, y el grado del proceso primera o segunda instancia. Por ejemplo, una demanda por alimentos entre padres e hijos debe ser conocida por un juez de familia en la ciudad donde reside el menor, mientras que un recurso de apelación por un contrato incumplido lo resolverá el tribunal correspondiente al circuito donde se tramitó la primera instancia.          
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/36.png") 
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              p También aprenderá sobre el reparto judicial, mecanismo que permite distribuir los procesos entre los distintos jueces competentes dentro de un mismo distrito judicial. Este reparto se realiza de manera aleatoria y automatizada en la mayoría de los despachos, garantizando así la equidad en la asignación de procesos. A través de este sistema, se evita que las partes puedan elegir al juez que resolverá su caso, lo cual fortalece la transparencia y confianza en la justicia.          
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/37.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              p Además, se estudia cómo deben resolverse los conflictos de competencia, que surgen cuando dos jueces se disputan o rechazan la competencia para conocer un asunto. También conocer las figuras de los impedimentos y recusaciones, mecanismos procesales que permiten apartar a un juez de un caso cuando existen motivos legales que pueden afectar su imparcialidad, como vínculos familiares, intereses personales o participación previa en el proceso. Estos controles refuerzan la legitimidad de las decisiones judiciales y aseguran que el juez actúe con independencia e imparcialidad, como lo exige la Constitución y los tratados internacionales sobre derechos humanos (Chavarro Cadena, 2018).          
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/38.png")                                       


    .bg-full-width.bg-color-3.p-4.mb-5(data-aos="fade-left")
      .px-4
        p.mb-0 En resumen, el estudio de la competencia judicial permitirá comprender cómo se organiza la justicia en Colombia, cómo se garantiza que los casos sean asignados a jueces previamente establecidos por la Ley, y qué recursos existen para corregir o prevenir decisiones contrarias al derecho.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Concepto y factores para determinar la competencia 

    p(data-aos="fade-down") La competencia judicial es una institución fundamental del Derecho Procesal que permite organizar y distribuir el ejercicio de la jurisdicción entre los distintos órganos que conforman la administración de justicia. Si bien la jurisdicción es una potestad única del Estado atribuida al poder judicial para resolver conflictos mediante decisiones con fuerza de cosa juzgada, la competencia delimita cuál autoridad judicial específica debe conocer un determinado asunto. En otras palabras, es la medida del poder jurisdiccional que corresponde a cada juez o tribunal dentro del sistema judicial, de acuerdo con los parámetros establecidos por la Ley.

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0 
        .bg-color-6.p-4.j1.h-100(data-aos="fade-left")
          p Esta distribución no solo responde a una necesidad organizativa del sistema de justicia, sino que #[b cumple un rol esencial en la garantía del debido proceso], en particular en lo que se refiere al principio del juez natural, es decir, el derecho que tienen todas las personas a ser juzgadas por el juez previamente determinado por la Ley, sin que existan alteraciones arbitrarias o manipulaciones en la asignación de casos.

          p.mb-0 #[b Este principio protege la imparcialidad, la independencia judicial y la igualdad procesal de las partes] (Chavarro Cadena, 2018).
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/39.png", data-aos="zoom-in")   

    .bg-full-width.bg-color-7.p-4.mb-5(data-aos="fade-left")
      .px-4
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/40.svg")
          .col-lg
            p.mb-0 En Colombia, el Código General del Proceso Ley 1564 del 2012, establece que la competencia se define por varios factores, los cuales deben ser analizados de forma conjunta para identificar correctamente al juez competente en un caso concreto. Estos factores son: el objetivo, subjetivo, funcional, territorial y por conexión. A continuación, se desarrollan de manera detallada.

    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-4.mb-3.mb-lg-0  
        figure
          img.img-a.img-t(src="@/assets/curso/temas/41.png", alt="")    
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Factor objetivo")
            p Alude a la naturaleza de la controversia jurídica, es decir, a la materia y a la cuantía del proceso. La materia se refiere al contenido sustancial del litigio. Si es de carácter civil, laboral, penal, de familia, administrativo, entre otros. Por ejemplo, si se trata de un proceso ejecutivo para el cobro de una obligación dineraria, este asunto cae dentro de la jurisdicción civil. La cuantía, por su parte, se determina por el valor económico de la pretensión principal y permite distinguir si el caso debe ser conocido por un juez municipal o por uno del circuito. Por ejemplo, en un proceso de menor cuantía inferior a 40 salarios mínimos legales mensuales vigentes, el competente es el juez municipal; en uno de mayor cuantía, lo sería el juez civil del circuito.

          .div(titulo="Factor subjetivo")
            p Se relaciona con las condiciones personales de los sujetos procesales, en particular con su investidura o fuero. En colombia, ciertos funcionarios públicos, como los congresistas, magistrados, ministros, entre otros, gozan de un fuero especial, lo que implica que deben ser juzgados por autoridades judiciales específicas, usualmente superiores jerárquicos como la corte suprema de justicia en materia penal o el consejo de estado en asuntos contenciosos administrativos. Este factor garantiza que el juzgamiento de estas personas se dé con mayores garantías de independencia y control institucional.

          .div(titulo="Factor funcional")
            p Tiene en cuenta la distribución de funciones jurisdiccionales, según la etapa procesal o el tipo de actuación judicial. Esto implica que un juez de primera instancia conoce el proceso desde su inicio, pero si se interpone una apelación, este recurso debe ser resuelto por un juez de segunda instancia. A su vez, en los casos en que procede el recurso extraordinario de casación, este debe ser conocido por la corte suprema de justicia en lo civil. El factor funcional, entonces, organiza jerárquicamente las competencias y permite la revisión de las decisiones por un superior, como garantía del derecho de defensa y del principio de doble instancia.

    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-8.mb-3.mb-lg-0  
        AcordionA(tipo="b")
          .div(titulo="Factor territorial")
            p Establece el lugar en el que debe tramitarse el proceso judicial, con base en el domicilio del demandado, el lugar donde se generó la obligación o el sitio donde ocurrió el hecho que dio origen al litigio. Por ejemplo, si una persona incumple un contrato de compraventa en bucaramanga, el proceso se deberá iniciar ante el juez civil de esa ciudad. El código general del proceso establece reglas generales para determinar la competencia territorial, pero también prevé la posibilidad de que las partes acuerden, mediante cláusulas contractuales, someter las controversias a la jurisdicción de determinada ciudad, salvo que existan normas de competencia territorial de carácter imperativo (chavarro cadena, 2018).

          .div(titulo="Factor por conexión")
            p Busca evitar la dispersión de procesos relacionados y la emisión de decisiones contradictorias. Se configura cuando existen dos o más procesos que comparten identidad de personas, hechos o pretensiones, y que están siendo tramitados ante jueces distintos. En estos casos, el juez que conoce uno de los procesos puede solicitar la acumulación ante su despacho, siempre que se cumplan los requisitos legales. Por ejemplo, si se están tramitando en diferentes ciudades dos demandas por accidentes de tránsito derivados del mismo hecho, lo más eficiente y justo sería acumular ambos procesos ante un mismo juez (escobar alzate, 2014).                                           
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/42.png", alt="")                 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/45.png", data-aos="zoom-in")       
      .col-lg-8
        p(data-aos="fade-down") La correcta identificación de estos factores permite establecer con precisión, la competencia judicial y evita nulidades, dilaciones o decisiones carentes de validez. Si un juez conoce un proceso sin tener competencia, su actuación puede ser anulada y las partes se verán obligadas a reiniciar el proceso ante el juez que realmente tenía competencia. Por ello, este análisis es esencial al momento de interponer una demanda o responderla, y constituye una de las primeras decisiones que debe adoptar el juez, incluso de manera oficiosa, conforme al Artículo 28 del Código General del Proceso.

        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/43.svg")
            .col-lg
              p.mb-0 En conclusión, la competencia judicial es una pieza determinante del proceso y del Estado de Derecho, dado que garantiza que cada juez actúe dentro de los límites que la Ley le impone, asegurando el respeto por los derechos fundamentales y la legalidad de las actuaciones judiciales. El dominio de sus factores y la capacidad para aplicarlos correctamente, son habilidades indispensables para cualquier profesional del Derecho.               

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] El reparto como mecanismo de asignación equitativa de procesos 

    p(data-aos="fade-down") La asignación justa y transparente de procesos judiciales es fundamental para el correcto funcionamiento del sistema de justicia.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") El reparto como mecanismo de asignación equitativa de procesos 
            p.mb-4(data-aos="fade-right") En el PDF El reparto como mecanismo de asignación equitativa de procesos, se explica detalladamente cómo opera este procedimiento técnico y administrativo en Colombia, resaltando sus principios de aleatoriedad, equidad y legalidad. A través del estudio de su marco normativo, su implementación tecnológica y sus implicaciones procesales, se comprende su importancia en la garantía del debido proceso y del principio del juez natural.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> El reparto como mecanismo de asignación equitativa de procesos 
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/44.png', alt='')  

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Conflictos de competencia: concepto, tipos y procedimiento para su resolución

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/46.png", data-aos="zoom-in")       
      .col-lg-8
        .bg-color-3.p-4.h-100.j1(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/47.png")
            .col-lg
              p.mb-0 Dentro del Derecho Procesal colombiano, la correcta asignación del conocimiento de los procesos judiciales a los jueces competentes, constituye una garantía esencial del debido proceso y del principio del juez natural. Sin embargo, en la práctica judicial pueden surgir discrepancias entre distintas autoridades jurisdiccionales sobre quién debe asumir el conocimiento de un determinado proceso, generando lo que se conoce como conflicto de competencia. Este conflicto no debe entenderse como un error administrativo, sino como una situación jurídicamente regulada que exige intervención del ordenamiento procesal, para su resolución, conforme a principios de legalidad, seguridad jurídica y economía procesal.

    p(data-aos="fade-down") Los conflictos de competencia se presentan cuando dos o más autoridades judiciales se enfrentan a un desacuerdo respecto a cuál de ellas debe conocer un determinado proceso. Esta situación puede generar graves consecuencias si no se resuelve adecuadamente, como la paralización del proceso, el riesgo de decisiones contradictorias o incluso la nulidad de las actuaciones judiciales. Por ello, la Ley ha diseñado un procedimiento específico para abordar estos conflictos y garantizar que los asuntos sean resueltos por el juez verdaderamente competente (Escobar Alzate, 2014).

    p(data-aos="fade-down") Existen dos clases fundamentales de conflictos de competencia. El conflicto positivo y el conflicto negativo. 

    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-8.mb-3.mb-lg-0  
        AcordionA(tipo="b")
          .div(titulo="Conflicto positivo")
            p Se configura, cuando dos jueces, de manera simultánea o sucesiva, se declaran competentes para conocer de un mismo asunto. Este tipo de conflicto puede generar duplicidad de actuaciones, como ocurre cuando ambos despachos admiten la misma demanda, decretan pruebas y adelantan audiencias. Por ejemplo, que una demanda de responsabilidad civil extracontractual es presentada ante dos jueces civiles del circuito en diferentes ciudades, y ambos consideran tener competencia territorial para tramitarla. En ese escenario, el proceso debe detenerse hasta que se determine cuál de los dos debe conocer el caso.

          .div(titulo="Conflicto negativo")
            p De competencia, surge cuando ninguno de los jueces quiere asumir el conocimiento del proceso, pues ambos se declaran incompetentes. Esto puede deberse a diferentes interpretaciones sobre la materia del litigio, la cuantía, la jurisdicción aplicable o el factor territorial. Un ejemplo práctico sería el de una demanda de nulidad de acto administrativo presentada en un juzgado contencioso administrativo y este, alegando que se trata de un acto disciplinario, remite el expediente a la Procuraduría o a otra jurisdicción que, a su vez, se declara incompetente por considerar que el asunto es de naturaleza judicial y no administrativa. Esta situación puede dejar a las partes en un limbo jurídico, afectando su derecho al acceso efectivo a la justicia.                                           
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/48.png", alt="")         

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/49.png", data-aos="zoom-in")      
      .col-lg-8
        .bg-color-6.p-4.j1.h-100(data-aos="fade-left")
          p.mb-0 Ambos tipos de conflictos requieren ser resueltos con celeridad y de manera definitiva por un órgano superior jerárquico común a los jueces enfrentados. En el caso de jueces de la jurisdicción ordinaria, como los civiles municipales y del circuito, el Tribunal Superior del Distrito Judicial, actúa como superior jerárquico. Si el conflicto involucra autoridades de distinta jurisdicción, como un juez penal y un juez administrativo, la competencia para dirimirlo corresponde al Consejo Superior de la Judicatura, conforme a lo dispuesto en el Código General del Proceso y en las normas que regulan la organización judicial.

    .bg-color-5(data-aos="fade-left")
      .row.justify-content-end.mx-0
        .col-lg-8.j1
          .p-4
            p.mb-0 El procedimiento para resolver un conflicto de competencia implica que uno de los jueces involucrados lo promueva mediante un auto motivado, señalando las razones jurídicas por las cuales considera que no debe conocer el proceso o por qué otro juez es el competente.      
        .col-lg-auto.p-0
          img.img-a.img-t(src="@/assets/curso/temas/50.png")
    .bg-color-7.mb-4(data-aos="fade-right")
      .row.justify-content-start.mx-0
        .col-lg-auto.p-0
          img.img-a.img-t(src="@/assets/curso/temas/51.png")      
        .col-lg-8.j1
          .p-4
            p.mb-0 Ese auto se remite al juez en conflicto, quien puede aceptar la competencia o, por el contrario, reiterar su posición de incompetencia. En este último caso, el conflicto queda formalizado y el expediente debe remitirse al superior común para que decida mediante auto, sin posibilidad de apelación. 

    p(data-aos="fade-down") El debido proceso implica el respeto de múltiples garantías:

    .row.justify-content-center.mb-5           
      .col-lg-4
        .bg-color-1.p-3.h-100.brounded.j1
          p(data-aos="fade-down").mb-0 Durante el tiempo que se resuelve el conflicto, el proceso principal debe ser suspendido. Esta suspensión no impide que se adelanten actuaciones urgentes que no admiten demora, como medidas cautelares para proteger bienes, personas o pruebas. Estas actuaciones excepcionales se fundamentan en la necesidad de preservar la eficacia de la tutela judicial y evitar un perjuicio irremediable a las partes.
      .col-lg-4.my-4.my-lg-0
        figure
          img.img-a.img-t(src='@/assets/curso/temas/52.png', alt='', data-aos="zoom-in")          
      .col-lg-4
        .bg-color-2.p-3.h-100.brounded.j1
          p(data-aos="fade-down").mb-0 La resolución de conflictos de competencia es fundamental no solo para asegurar el trámite adecuado del proceso, sino también para garantizar la imparcialidad y la legalidad. Si un juez no tiene competencia, sus decisiones pueden ser anuladas por vicios procesales. Además, el conocimiento del caso por el juez incorrecto puede violar el derecho al juez natural, consagrado en la Constitución como parte del debido proceso.

    .bg-full-width.bg-color-3.mb-4(data-aos="fade-left")
      .px-4 
        .row.justify-content-center
          .col-lg-auto.p-0
            img.img-a.img-t(src="@/assets/curso/temas/53.png")      
          .col-lg-8.j1
            .p-4
              p.mb-0 Por último, es importante diferenciar los conflictos de competencia de otras figuras afines. No deben confundirse con los impedimentos o recusaciones, que se refieren a la posible parcialidad del juez por razones subjetivas. Tampoco deben confundirse con errores en el reparto judicial, los cuales se solucionan dentro de la misma oficina judicial y no implican controversia formal entre jueces. Los conflictos de competencia, en cambio, suponen un desacuerdo directo y procesalmente relevante sobre la asignación legítima del conocimiento de un asunto.

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") En conclusión, el conflicto de competencia es una institución procesal indispensable para preservar la estructura lógica y funcional del sistema judicial colombiano. Permite corregir, de forma legítima y controlada, disputas entre jueces que podrían afectar la garantía del debido proceso. 

        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/54.svg")
            .col-lg
              p.mb-0 Como futuro profesional del Derecho, entender la naturaleza de estos conflictos, sus clases, su procedimiento y sus implicaciones prácticas, permitirá actuar con mayor seguridad jurídica y contribuir a una administración de justicia más eficaz, transparente y respetuosa de los derechos fundamentales de las partes procesales.    
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/55.png", data-aos="zoom-in")       

    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Impedimentos y recusaciones: causales, trámite y efectos procesales

    p(data-aos="fade-down") La imparcialidad judicial es un principio estructural del Derecho Procesal que garantiza a las partes la seguridad de que el funcionario que resolverá su caso no tiene intereses personales, familiares, ideológicos ni profesionales que comprometan su objetividad. Para asegurar este principio, el ordenamiento jurídico colombiano contempla dos mecanismos esenciales: los impedimentos y las recusaciones, ambos consagrados en los Artículos 140 a 147 del Código General del Proceso. Aunque suelen ser tratados conjuntamente, tienen orígenes distintos. El impedimento parte de la autorregulación del juez o funcionario judicial, mientras que la recusación nace de la desconfianza fundada de una de las partes frente a la objetividad del juez.

    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-4.mb-3.mb-lg-0  
        figure
          img.img-a.img-t(src="@/assets/curso/temas/56.png", alt="")    
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Impedimento")
            p Se configura cuando el juez, de forma espontánea y honesta, reconoce que existe una circunstancia legal que afecta o podría afectar su imparcialidad para decidir un asunto. Este reconocimiento tiene carácter obligatorio y debe ser expresado inmediatamente después de asumir el conocimiento del proceso, sin necesidad de que lo advierta una de las partes. Por ejemplo, si un juez se da cuenta de que una de las partes procesales es su cuñado, está obligado a declararse impedido, pues existe una causal objetiva parentesco por afinidad en segundo grado que compromete su neutralidad. La omisión en declarar un impedimento puede derivar en la nulidad de las actuaciones posteriores y en una eventual responsabilidad disciplinaria para el juez, según el código disciplinario único.

          .div(titulo="Trámite")
            p El juez deberá presentar un escrito detallando la causal que da lugar al impedimento y enviarlo de inmediato al superior jerárquico. Este último decidirá si lo acepta o no. Si lo acepta, asignará el proceso a otro juez competente; si lo rechaza, el juez impedido continúa conociendo del caso. Durante ese tiempo, se suspenden las actuaciones procesales, salvo las que no admitan demora, como las medidas cautelares urgentes.

          .div(titulo="Recusación")
            p Es una herramienta que permite a las partes del proceso solicitar la separación del juez cuando estiman que existen motivos fundados para dudar de su imparcialidad. A diferencia del impedimento, que se presenta por iniciativa del propio juez, la recusación parte de una de las partes o de su apoderado. El objetivo es proteger el derecho fundamental al juez natural e imparcial, consagrado en el artículo 29 de la constitución política de Colombia. Para que una recusación proceda, debe cumplir tres requisitos trascendentales debe estar motivada, presentarse de manera oportuna y acompañarse de los elementos probatorios que respalden la causal alegada.


    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/57.png", data-aos="zoom-in")            
      .col-lg-9.j1
        p(data-aos="fade-down") Las causales de impedimento y recusación son coincidentes, y están descritas de forma taxativa en el Artículo 141 del Código General del Proceso. Algunas de las más relevantes incluyen. Tener interés directo o indirecto en el resultado del proceso; haber emitido opinión sobre el caso antes de asumirlo; tener parentesco hasta el cuarto grado de consanguinidad, segundo de afinidad o primero civil con alguna de las partes, apoderados o testigos; haber sido sancionado por una de las partes; o haber intervenido como testigo, perito, apoderado o funcionario en otra etapa del mismo proceso o en otro conexo.

        .bg-color-9.dot-2.p-4(data-aos="fade-left")
          p.mb-0 Por ejemplo, si una jueza, en una reunión académica previa, expresó públicamente que en Colombia todos los procesos de responsabilidad médica deben fallarse a favor del paciente y luego es asignada para resolver un caso de mala praxis, la parte demandada podría recusar su participación por haberse pronunciado anticipadamente, lo cual puede considerarse un prejuzgamiento indebido que afecta la apariencia de imparcialidad. 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/58.png", data-aos="zoom-in")      
      .col-lg-8
        .bg-color-5.p-4.j1.h-100(data-aos="fade-left")
          p.mb-0 El procedimiento para tramitar una recusación también está regulado. La parte que recusa debe presentar su solicitud antes de la audiencia inicial o dentro del término legal que tenga para contestar la demanda, según el tipo de proceso. La recusación debe formularse por escrito, señalando expresamente la causal, los hechos que la sustentan y anexando las pruebas pertinentes. Si no se cumplen estos requisitos, la recusación será rechazada de plano por el superior jerárquico del juez recusado. Si la recusación es admitida, se suspende el curso del proceso y se traslada al juez cuestionado para que rinda su informe en un término de tres días. Luego, el superior jerárquico decide si la acepta o no. En caso de aceptación, se reemplaza al juez; si no, este continuará conociendo el caso. 

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-down") En cuanto a los efectos procesales, tanto la aceptación de un impedimento como de una recusación, implica el retiro del juez del conocimiento del proceso y la designación de uno nuevo. Durante este lapso, se suspende el trámite, lo cual puede afectar los términos procesales y retrasar el acceso a la justicia. Sin embargo, dicha suspensión es necesaria para preservar el equilibrio procesal y evitar decisiones que puedan ser anuladas por vicios de forma. 
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/59.png', alt='')  


    .bg-color-1.dot-1.p-3.mb-4(data-aos="fade-left")
      .row.align-items-center
        .col-lg-auto
          img.img-a.img-t(src="@/assets/curso/temas/60.png")
        .col-lg
          h5 Si se omite resolver un impedimento o se tramita de forma irregular una recusación, las decisiones del juez podrían ser objeto de nulidad y eventualmente revertidas por vía de tutela.

          p.mb-0 Un caso emblemático que ilustra la importancia de estos mecanismos ocurrió en la Sala Penal de la Corte Suprema de Justicia, donde una recusación fue admitida por haber existido una relación personal estrecha entre un magistrado y el abogado defensor de una de las partes. Aunque no existía una relación profesional directa, la Corte consideró que la cercanía personal generaba una sospecha razonable de parcialidad, lo cual bastaba para apartar al magistrado del caso y preservar la transparencia del fallo. 


    .bg-full-width.bg-color-6.p-4.mb-5(data-aos="fade-left")
      .px-4
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/61.svg")
          .col-lg
            p.mb-0 En conclusión, los impedimentos y recusaciones no solo son mecanismos técnicos del proceso, sino verdaderas garantías constitucionales que protegen el derecho fundamental a un juez imparcial, aseguran la legalidad de las decisiones judiciales y fortalecen la confianza de los ciudadanos en la administración de justicia. Su correcta aplicación exige rigor jurídico, honestidad ética y un conocimiento profundo del procedimiento. 

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://books.scielo.org/id/6rj47/pdf/torres-9789587845617.pdf " target="_blank" rel="noopener noreferrer") Torres-Villarreal, M. L. & Iregui-Parra, P. M. (2020). Diálogos interdisciplinarios sobre los problemas de la justicia en Colombia. Editorial Universidad del Rosario, Fundación Hanns Seidel. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="www.redalyc.org/pdf/197/19725565009.pdf" target="_blank" rel="noopener noreferrer") de la Oliva Santos, A. (2012). Prudencia versus ideología: De nuevo sobre el papel del juez en el proceso civil. Ius et Praxis, 18(2), 243-294. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.17533/udea.esde.v77n169a02" target="_blank" rel="noopener noreferrer") Vargas-Ossa, N., (2019). La institución del Conjuez en Colombia: Una mirada desde la jurisdicción contencioso administrativa. Estudios De Derecho, 77(169), 35-60.               

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=M0FavZVgEm0" target="_blank" rel="noopener noreferrer") videoconferencias. (2013). UTPL COMPETENCIA [(ABOGACÍA)(DERECHO PROCESAL CIVIL I)] 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=zLc-5AlTVgU" target="_blank" rel="noopener noreferrer") Academia Colombiana de Ciencias Económicas -ACCE-. (2019). Regulación de la competencia. Homenaje a Manuel Ramírez Gómez (2/5).              

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Derecho Procesal General',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Qué elemento determina si un proceso es de mínima, menor o mayor cuantía según el Código General del Proceso?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'El tipo de juez asignado',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'El valor económico de la pretensión',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'La cantidad de pruebas aportadas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La duración estimada del juicio',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál es el límite máximo de la cuantía para que un proceso sea considerado de mínima cuantía?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: '25 salarios mínimos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: '40 salarios mínimos',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: '50 salarios mínimos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: '150 salarios mínimos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿A qué clase de proceso corresponde una demanda con una cuantía de 120 salarios mínimos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Mínima cuantía',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Menor cuantía',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Proceso ejecutivo',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Mayor cuantía',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cómo se clasifica un proceso con una cuantía superior a 150 salarios mínimos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'De única instancia',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'De mayor cuantía',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'De mínima cuantía',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'De menor cuantía',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué ocurre con los recursos procesales en los procesos de mínima cuantía?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Solo se admite recurso de reposición',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'No hay recursos ni segunda instancia',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Se permite apelación si lo autoriza el juez',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Hay derecho a revisión automática',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
