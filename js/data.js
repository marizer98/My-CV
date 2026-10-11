/**
 * ==============================================================================
 * PORTAFOLIO PROFESIONAL — ARCHIVO CENTRAL DE DATOS
 * ==============================================================================
 * ¡Bienvenida! Aquí puedes personalizar absolutamente TODO el contenido
 * de tu portafolio sin necesidad de tocar el código HTML.
 *
 * Simplemente cambia los textos, enlaces o rutas de imágenes entre comillas.
 * ==============================================================================
 */

window.PORTFOLIO_DATA = {
  // ----------------------------------------------------------------------------
  // 1. INFORMACIÓN PERSONAL Y DE CONTACTO
  // ----------------------------------------------------------------------------
  profile: {
    name: "Mariana Rdz", // Tu nombre profesional
    role: "Diseñadora Gráfica & Directora de Arte",
    location: "MTY / Disponible para proyectos remotos",
    email: "hola@tudominio.com", // Tu correo real
    emailSubject: "Consulta sobre proyecto de diseño", // Asunto predeterminado al hacer clic en escribir correo
    cvPath: "assets/documents/CV_Mariana_Diseno.pdf", // Ruta a tu archivo PDF de CV
    cvFileName: "CV_Mariana_Silva_Diseno.pdf", // Nombre con el que se descargará el archivo
    avatarImage: "assets/images/profile-avatar.svg", // Tu foto (ej: "assets/images/tu-foto.jpg")

    // Enlaces de redes profesionales (Reemplaza con tus URLs reales)
    socialLinks: {
      linkedin: "https://linkedin.com/in/tu-usuario",
      behance: "https://behance.net/tu-usuario",
      instagram: "https://instagram.com/tu-usuario"
    }
  },

  // ----------------------------------------------------------------------------
  // 2. PRESENTACIÓN PRINCIPAL (HERO)
  // ----------------------------------------------------------------------------
  hero: {
    badge: "ESTUDIO DE DISEÑO GRÁFICO & IDENTIDAD VISUAL",
    headline: "Diseño ideas, construyo identidades y transformo conceptos en experiencias visuales.",
    introText: "[ESPACIO EDITABLE: Soy diseñadora gráfica enfocada en identidades visuales memorables, diseño editorial con rigor tipográfico y experiencias digitales limpias y funcionales. Mi trabajo busca el equilibrio entre síntesis formal, sensibilidad estética y propósito estratégico.]",
    featuredCoverImage: "assets/images/hero-cover.svg",
    ctaPrimaryText: "Explorar proyectos",
    ctaSecondaryText: "Contactar"
  },

  // ----------------------------------------------------------------------------
  // 3. CATEGORÍAS DEL PORTAFOLIO
  // ----------------------------------------------------------------------------
  // El filtro "todos" siempre estará disponible automáticamente.
  categories: [
    {
      id: "editorial",
      name: "Editorial",
      description: "Revistas, libros, carteles, publicaciones, composición tipográfica y diseño editorial."
    },
    {
      id: "diseno-web",
      name: "Diseño web",
      description: "Sitios web, landing pages, diseño de interfaces y experiencias digitales."
    },
    {
      id: "branding",
      name: "Branding",
      description: "Logotipos, identidad visual, sistemas gráficos, papelería y aplicaciones de marca."
    },
    {
      id: "packaging",
      name: "Packaging",
      description: "Empaques, etiquetas, cajas y diseño de presentación de productos."
    },
    {
      id: "otros",
      name: "Otros proyectos",
      description: "Ilustración, experimentación gráfica y proyectos personales."
    }
  ],

  // ----------------------------------------------------------------------------
  // 4. PROYECTOS DEL PORTAFOLIO
  // ----------------------------------------------------------------------------
  // Cada proyecto se muestra en la cuadrícula y al hacer clic abre un modal detallado.
  // Puedes agregar, duplicar o eliminar proyectos copiando un bloque {...}.
  projects: [
    {
      id: "materia-forma",
      title: "Materia & Forma — Revista de Arquitectura",
      category: "editorial",
      categoryLabel: "Editorial",
      year: "2025",
      client: "[Cliente de muestra: Editorial Arquitectura Viva]",
      role: "Dirección de arte, diseño de retícula y maquetación",
      shortDescription: "Diseño editorial y sistema tipográfico para una publicación bianual dedicada a la arquitectura y el diseño contemporáneo.",
      coverImage: "assets/images/editorial-1.svg",
      gallery: [
        "assets/images/editorial-1.svg",
        "assets/images/editorial-2.svg"
      ],
      objective: "[OBJETIVO DE MUESTRA: Diseñar una publicación de 160 páginas con una retícula flexible que permita respirar a la fotografía arquitectónica a la vez que mantiene una jerarquía tipográfica rigurosa y legible.]",
      process: "[PROCESO CREATIVO DE MUESTRA: Se definió una cuadrícula de 12 columnas inspirada en el diseño editorial suizo moderno, complementada con contrastes de escala tipográfica y papeles de textura táctil.]",
      result: "[RESULTADO DE MUESTRA: Una pieza editorial que sirve tanto como catálogo de consulta como objeto de colección estética, destacando por su balance y elegancia visual.]",
      tools: ["Adobe InDesign", "Adobe Photoshop", "Composición Tipográfica", "Impresión Offset"]
    },
    {
      id: "anatomia-tipo",
      title: "Anatomía del Tipo — Monografía & Carteles",
      category: "editorial",
      categoryLabel: "Editorial",
      year: "2024",
      client: "[Cliente de muestra: Proyecto para Escuela de Artes Visuales]",
      role: "Investigación visual, composición tipográfica y cartelería",
      shortDescription: "Serie de publicaciones y carteles de gran formato que exploran la microtipografía y la morfología del alfabeto latino.",
      coverImage: "assets/images/editorial-2.svg",
      gallery: [
        "assets/images/editorial-2.svg",
        "assets/images/editorial-1.svg"
      ],
      objective: "[OBJETIVO DE MUESTRA: Visualizar los principios constructivos de las fuentes tipográficas clásicas mediante contrastes de escala, contraformas y análisis formal.]",
      process: "[PROCESO CREATIVO DE MUESTRA: Estudio pormenorizado de trazos serif y sans-serif, explorando superposiciones geométricas, encuadernación artesanal y serigrafía a dos tintas.]",
      result: "[RESULTADO DE MUESTRA: Publicación monográfica de tiraje limitado (500 ejemplares) galardonada en muestra académica de diseño.]",
      tools: ["Adobe InDesign", "Adobe Illustrator", "Serigrafía", "Encuadernación Suiza"]
    },
    {
      id: "estudio-vanguardia",
      title: "Estudio Vanguardia — Web & Experiencia Digital",
      category: "diseno-web",
      categoryLabel: "Diseño web",
      year: "2025",
      client: "[Cliente de muestra: Estudio Vanguardia Arquitectos]",
      role: "Diseño UI/UX, arquitectura de información y prototipado",
      shortDescription: "Diseño de interfaz y experiencia de usuario minimalista para una firma de arquitectura y urbanismo sostenible.",
      coverImage: "assets/images/web-1.svg",
      gallery: [
        "assets/images/web-1.svg",
        "assets/images/web-2.svg"
      ],
      objective: "[OBJETIVO DE MUESTRA: Crear una presencia digital sofisticada, donde cada obra arquitectónica se presente a pantalla completa con navegación intuitiva y tiempos de carga óptimos.]",
      process: "[PROCESO CREATIVO DE MUESTRA: Wireframing de baja fidelidad para definir flujos de navegación, seguido de un sistema de diseño con paleta monocromática cálida, tipografías editoriales y micro-interacciones suaves.]",
      result: "[RESULTADO DE MUESTRA: Un sitio web con un incremento del 45% en consultas de clientes potenciales y reconocimiento en plataformas de diseño web.]",
      tools: ["Figma", "Diseño UI/UX", "Design Systems", "Prototipado Interactivo"]
    },
    {
      id: "objetos-galeria",
      title: "Objetos / Edición 03 — Plataforma E-commerce",
      category: "diseno-web",
      categoryLabel: "Diseño web",
      year: "2024",
      client: "[Cliente de muestra: Galería de Diseño de Autor]",
      role: "Dirección de arte digital y diseño de interfaces",
      shortDescription: "Plataforma de comercio electrónico con enfoque editorial para piezas de diseño cerámico, vidrio y mobiliario de colección.",
      coverImage: "assets/images/web-2.svg",
      gallery: [
        "assets/images/web-2.svg",
        "assets/images/web-1.svg"
      ],
      objective: "[OBJETIVO DE MUESTRA: Romper el esquema del e-commerce tradicional saturado, ofreciendo una experiencia de compra similar a recorrer una galería de arte.]",
      process: "[PROCESO CREATIVO DE MUESTRA: Composición asimétrica en retícula ordenada, fichas de producto con fotografía de gran escala y tipografía serif que eleva el valor percibido de los objetos.]",
      result: "[RESULTADO DE MUESTRA: Lanzamiento exitoso con tasa de conversión superior a la media del sector de diseño independiente.]",
      tools: ["Figma", "UI/UX", "Dirección de Arte Digital", "Mobile-First Design"]
    },
    {
      id: "kroma-coffee",
      title: "Kroma — Specialty Coffee Lab",
      category: "branding",
      categoryLabel: "Branding",
      year: "2025",
      client: "[Cliente de muestra: Kroma Roastery]",
      role: "Identidad visual, sistema gráfico y papelería corporativa",
      shortDescription: "Sistema de identidad visual completo para una tostaduría de café de especialidad y laboratorio sensorial.",
      coverImage: "assets/images/branding-1.svg",
      gallery: [
        "assets/images/branding-1.svg",
        "assets/images/branding-2.svg"
      ],
      objective: "[OBJETIVO DE MUESTRA: Desarrollar una identidad que transmita el rigor científico del tostado de café sin perder la calidez y el ritual artesanal de la experiencia.]",
      process: "[PROCESO CREATIVO DE MUESTRA: Creación de un imagotipo geométrico sintético, definición de paleta cromática basada en tonos tostados y terracota, y diseño de papelería en papeles reciclados de alto gramaje.]",
      result: "[RESULTADO DE MUESTRA: Sistema integral de marca aplicado con éxito en locales físicos, papelería, uniformes y empaques.]",
      tools: ["Adobe Illustrator", "Manual de Identidad", "Tipografía", "Sistemas Gráficos"]
    },
    {
      id: "museo-arte-actual",
      title: "Museo de Arte Actual — Identidad Institucional",
      category: "branding",
      categoryLabel: "Branding",
      year: "2024",
      client: "[Cliente de muestra: Fundación Cultural / Museo M·A]",
      role: "Diseño de marca, señalética y catálogo institucional",
      shortDescription: "Rediseño de identidad visual flexible y sistema de señalética para un centro de arte contemporáneo.",
      coverImage: "assets/images/branding-2.svg",
      gallery: [
        "assets/images/branding-2.svg",
        "assets/images/branding-1.svg"
      ],
      objective: "[OBJETIVO DE MUESTRA: Diseñar un sistema visual abierto y mutable capaz de convivir armoniosamente con las identidades propias de artistas de diferentes disciplinas.]",
      process: "[PROCESO CREATIVO DE MUESTRA: Desarrollo de una retícula dinámica donde el logotipo 'M·A' funciona como marco contenedor o firma según el formato y el medio.]",
      result: "[RESULTADO DE MUESTRA: Identidad limpia, atemporal y versátil implementada en más de 20 puntos de contacto entre soportes impresos y digitales.]",
      tools: ["Adobe Illustrator", "Adobe InDesign", "Señalética", "Manual de Marca"]
    },
    {
      id: "botanica-skincare",
      title: "Botánica — Cosmética Orgánica & Cuidado Facial",
      category: "packaging",
      categoryLabel: "Packaging",
      year: "2025",
      client: "[Cliente de muestra: Laboratorio Botánica Natural]",
      role: "Diseño de empaques, etiquetas y selección de materiales",
      shortDescription: "Gama de empaques sostenibles y etiquetas botánicas para línea de cosmética facial orgánica con tintas ecológicas.",
      coverImage: "assets/images/packaging-1.svg",
      gallery: [
        "assets/images/packaging-1.svg",
        "assets/images/packaging-2.svg"
      ],
      objective: "[OBJETIVO DE MUESTRA: Crear empaques que reflejen pureza, sustentabilidad y sofisticación en el punto de venta.]",
      process: "[PROCESO CREATIVO DE MUESTRA: Selección de frascos de vidrio ámbar reciclable, diseño de etiquetas troqueladas con tipografía de alto contraste y cajas en cartón kraft certificado FSC.]",
      result: "[RESULTADO DE MUESTRA: Presentación de producto premiada por su enfoque ecológico y estética minimalista.]",
      tools: ["Adobe Illustrator", "Adobe Dimension", "Troqueles & Acabados", "Packaging Sustentable"]
    },
    {
      id: "olivo-noble",
      title: "Olivo Noble — Aceite de Oliva Extra Virgen",
      category: "packaging",
      categoryLabel: "Packaging",
      year: "2024",
      client: "[Cliente de muestra: Finca Los Olivos]",
      role: "Diseño de botella, etiqueta conmemorativa y estuche de madera",
      shortDescription: "Diseño de botella y etiqueta con estampación en caliente y papel verjurado para edición limitada de cosecha familiar.",
      coverImage: "assets/images/packaging-2.svg",
      gallery: [
        "assets/images/packaging-2.svg",
        "assets/images/packaging-1.svg"
      ],
      objective: "[OBJETIVO DE MUESTRA: Destacar el carácter premium y tradicional de un aceite de oliva monovarietal de producción limitada.]",
      process: "[PROCESO CREATIVO DE MUESTRA: Trabajo con papel texturizado resistente a la grasa, sello de cera natural en el cuello y tipografía caligráfica clásica.]",
      result: "[RESULTADO DE MUESTRA: Toda la producción se vendió en preventa a tiendas gourmet y restaurantes de autor.]",
      tools: ["Adobe Illustrator", "Acabados Hot Stamping", "Diseño Estructural"]
    },
    {
      id: "estudio-cinetico",
      title: "Estudio Cinético — Cartel & Risografía",
      category: "otros",
      categoryLabel: "Otros proyectos",
      year: "2025",
      client: "[Proyecto personal de experimentación gráfica]",
      role: "Exploración tipográfica, ilustración y serigrafía",
      shortDescription: "Serie de carteles impresos en risografía explorando el movimiento visual, la superposición de tramas y la vibración cromática.",
      coverImage: "assets/images/otros-1.svg",
      gallery: [
        "assets/images/otros-1.svg",
        "assets/images/otros-2.svg"
      ],
      objective: "[OBJETIVO DE MUESTRA: Explorar los límites plásticos de la impresión en risografía y el comportamiento de las tintas fluorescentes sobre papel poroso.]",
      process: "[PROCESO CREATIVO DE MUESTRA: Generación de patrones cinéticos mediante algoritmos vectoriales y posterior separación de canales para impresión manual.]",
      result: "[RESULTADO DE MUESTRA: Serie seleccionada y exhibida en la Bienal Internacional de Cartel.]",
      tools: ["Adobe Illustrator", "Risografía", "Experimentación Gráfica"]
    },
    {
      id: "arquitecturas-silenciosas",
      title: "Arquitecturas Silenciosas — Ilustración Vectorial",
      category: "otros",
      categoryLabel: "Otros proyectos",
      year: "2024",
      client: "[Proyecto personal / Serie de arte gráfico]",
      role: "Concepto visual, ilustración digital y paleta cromática",
      shortDescription: "Estudio de formas geométricas, sombras proyectadas y arquitectura metafísica a través de ilustración minimalista.",
      coverImage: "assets/images/otros-2.svg",
      gallery: [
        "assets/images/otros-2.svg",
        "assets/images/otros-1.svg"
      ],
      objective: "[OBJETIVO DE MUESTRA: Despojar la arquitectura de cualquier elemento decorativo para concentrarse en la luz, la sombra y el volumen puro.]",
      process: "[PROCESO CREATIVO DE MUESTRA: Bocetado analógico en libreta de dibujo y vectorización precisa con especial atención a las tangencias y relaciones áureas.]",
      result: "[RESULTADO DE MUESTRA: Impresión de prints fine art comercializados de forma independiente.]",
      tools: ["Adobe Illustrator", "Ilustración Vectorial", "Teoría del Color"]
    }
  ],

  // ----------------------------------------------------------------------------
  // 5. SECCIÓN SOBRE MÍ
  // ----------------------------------------------------------------------------
  about: {
    title: "Sobre mí",
    subtitle: "Diseño con propósito, rigor editorial y sensibilidad visual",

    // Biografía editable (Claramente identificada como texto de ejemplo para que lo reemplaces)
    bio: [
      "[ESPACIO EDITABLE — TU BIOGRAFÍA]: Soy diseñadora gráfica graduada con especial interés en la dirección de arte, el diseño editorial y la construcción de identidades visuales que trascienden modas pasajeras.",
      "[ESPACIO EDITABLE — CONTINUACIÓN]: Creo firmemente en la síntesis visual: encontrar la esencia de un concepto y expresarla con el mínimo artificio necesario. Mi metodología combina investigación conceptual profunda, precisión tipográfica y un cuidado meticuloso por los detalles, los materiales y la experiencia de interacción."
    ],

    // Filosofía de diseño y enfoque creativo
    philosophy: {
      title: "Filosofía y enfoque creativo",
      quote: "“Menos artificio, mayor significado. El diseño debe clarificar ideas complejas y otorgarles una presencia estética atemporal.”",
      description: "Entiendo el diseño gráfico como un puente entre la estrategia y la emoción. No busco simplemente embellecer una superficie, sino construir sistemas coherentes donde cada decisión tipográfica, cromática y compositiva responda a un propósito claro."
    },

    // Habilidades y herramientas profesionales
    skillsDisciplines: [
      "Identidad Visual & Branding",
      "Diseño Editorial & Tipografía",
      "Diseño de Interfaces (UI/UX)",
      "Packaging & Diseño Estructural",
      "Dirección de Arte",
      "Sistemas de Retícula",
      "Preparación para Imprenta (Pre-prensa)",
      "Ilustración & Experimentación Visual"
    ],

    skillsTools: [
      "Adobe InDesign",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Figma",
      "Adobe Lightroom",
      "Adobe After Effects"
    ],

    // Experiencia profesional (Texto de muestra para reemplazar con tu trayectoria real)
    experience: [
      {
        period: "2024 — Presente",
        role: "Diseñadora Gráfica Senior",
        company: "[NOMBRE DE ESTUDIO O AGENCIA DE EJEMPLO]",
        description: "[Descripción de muestra: Liderazgo en proyectos de identidad visual, supervisión de diseño editorial y desarrollo de sistemas de diseño digital.]"
      },
      {
        period: "2022 — 2024",
        role: "Diseñadora Visual & Branding",
        company: "[NOMBRE DE EMPRESA O ESTUDIO DE EJEMPLO]",
        description: "[Descripción de muestra: Creación de manuales de marca, empaques para productos de consumo y piezas de comunicación institucional.]"
      },
      {
        period: "2020 — 2022",
        role: "Diseñadora Junior / Prácticas Profesionales",
        company: "[NOMBRE DE ESTUDIO EDITORIAL DE EJEMPLO]",
        description: "[Descripción de muestra: Maquetación de publicaciones impresas, retoque digital y preparación de artes finales para imprenta.]"
      }
    ],

    // Formación académica (Texto de muestra)
    education: [
      {
        period: "2018 — 2022",
        degree: "Licenciatura en Diseño Gráfico",
        institution: "[UNIVERSIDAD O FACULTAD DE EJEMPLO]",
        note: "[Mención honorífica / Especialidad en Diseño Editorial y Tipografía]"
      },
      {
        period: "2023",
        degree: "Diplomado en Diseño de Interfaces y Experiencia de Usuario (UI/UX)",
        institution: "[INSTITUCIÓN O PLATAFORMA EDUCATIVA DE EJEMPLO]",
        note: "[Especialización en sistemas de diseño y prototipado interactivo]"
      }
    ],

    // Cursos, reconocimientos y colaboraciones
    recognitions: [
      {
        year: "2025",
        title: "[Reconocimiento o Premio de muestra]",
        entity: "[Entidad u organización convocante de ejemplo]"
      },
      {
        year: "2024",
        title: "[Selección en Exposición o Bienal de Cartel de muestra]",
        entity: "[Galería o Festival de Diseño de ejemplo]"
      },
      {
        year: "2023",
        title: "[Curso o Taller especializado en Tipografía Avanzada de muestra]",
        entity: "[Tipógrafo o institución invitada de ejemplo]"
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 6. PIE DE PÁGINA (FOOTER)
  // ----------------------------------------------------------------------------
  footer: {
    quote: "“El buen diseño es discreto, honesto, comprensible y tan poco diseño como sea posible.”",
    author: "Dieter Rams",
    copyrightText: "Todos los derechos reservados. Diseñado con rigor y estética editorial."
  }
};
