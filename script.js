/* ================================================================
   Jose Aparicio — Web CV
   script.js
   ================================================================ */

/* ═══════════════════════════════════════════════════════════
   TRANSLATIONS
═══════════════════════════════════════════════════════════ */
const LANGS = {
  en: {
    'nav.about':      'About',
    'nav.whytech':    'Why Tech',
    'nav.certs':      'Certificates',
    'nav.skills':     'Skills',
    'nav.projects':   'Projects',
    'nav.exp':        'Experience',
    'nav.contact':    'Contact',
    'mast.role':      'Front-End Developer',
    'mast.avail':     'Available · Remote / Hybrid',
    'mast.tagline':   'From hospitality to code — 8 years managing teams<br>under real pressure. Now in production.',
    'mast.quote':     '"Logic is my superpower · Syntax is just the tool"',
    'mast.photo':     'Add your photo here —<br>replace this block<br>with an &lt;img&gt;',
    'about.headline': 'Front-End Developer in progress.<br>With 8 years of human architecture behind.',
    'about.body':     "I didn't start coding at 18. I started at 39, after 8+ years managing teams under pressure in hospitality — UK and Spain. What I bring isn't just code: it's <strong>judgement, consistency and the ability to solve real problems without a safety net</strong>.<br><br>In 30 days I completed 3 Meta certificates with an average of 91%. I have 17 days of documented learning — bugs included. <strong>Not inflated, not decorative. Honest.</strong>",
    'about.quote':    '"I\'ve spent 8 years solving problems that don\'t have a tutorial.<br>Now I\'m learning to write them in code."',
    'cert.done':      '✓ Completed',
    'cert.progress':  'In progress',
    'cert.course2':   'Course 2 / 10',
    'cert.english':   'English — Full Professional Level',
    'cert.certified': '✓ Certified',
    'edu.section':    'Education &amp; Certifications',
    'edu1.title':     'BEd in Physical Education',
    'edu1.org':       'University of Málaga',
    'edu1.desc':      'Pedagogical and communication skills essential for technical documentation and team collaboration. Focus on planning, objective tracking, and performance analysis.',
    'edu2.title':     'Meta Front-End Developer Certificate',
    'edu2.desc':      'React, JavaScript, HTML/CSS. 3 courses completed — 91% average in 30 days.',
    'edu3.title':     'Responsive Web Design &amp; JavaScript',
    'edu3.desc':      'Working through the Responsive Web Design and JavaScript certifications.',
    'edu4.title':     'English — Full Professional Level (B2)',
    'edu4.desc':      'Fluent in multicultural professional communication.',
    'exp.section':    'Core Experience',
    'exp1.title':     'Guest Operations &amp; Interface Management',
    'exp1.company':   'Hospitality Sector — Málaga &amp; UK',
    'exp1.desc':      'Managed high-traffic incidents ensuring 99.9% service availability and customer satisfaction. Direct context for developing EquiShift — a real operational problem translated into code.',
    'exp2.period':    '2026 — Now',
    'exp2.title':     'Front-End Developer (in training)',
    'exp2.company':   'Self-directed · Meta · freeCodeCamp',
    'exp2.desc':      '3 Meta certificates completed with 91% average in 30 days. Real projects documented daily: Campus &amp; Crema, Mangata &amp; Gallo, We Playing Cards, EquiShift. Stack: HTML5, CSS3, JavaScript, Git, GitHub.',
    'skills.section': 'Professional Skills &amp; Tech Stack',
    'skills.intro':   'Leveraging my background in hospitality while "compiling" my new career as a developer. Here is my current skill set.',
    'skills.core':    'Core Strengths',
    'skills.tech':    'Technical Stack',
    'soft.lead':      'Team Leadership:',
    'soft.lead.desc': 'Managing multidisciplinary teams in a fast-paced environment.',
    'soft.problem':   'Problem Solving:',
    'soft.problem.desc': 'Resolving on-site incidents and complex guest requirements.',
    'soft.intl':      'International Experience:',
    'soft.intl.desc': 'High-quality service delivery in Spain and the UK.',
    'soft.pressure':  'Work Under Pressure:',
    'soft.pressure.desc': 'Airport terminals and high-volume hotels.',
    'tech.html':      'Semantic structure, accessibility, document architecture.',
    'tech.css':       'Flexbox, Grid, responsive design, CSS variables.',
    'tech.js':        'DOM manipulation, OOP basics, array logic.',
    'tech.eng.label': 'English:',
    'tech.eng':       'B2 Certified — fluent in multicultural communication.',
    'skills.soft':    'Transferable soft skills',
    'soft.lead':      'Team leadership',
    'soft.lead.desc': '8 years managing multidisciplinary teams under real pressure.',
    'soft.problem':   'Problem solving',
    'soft.problem.desc': 'incidents without instruction manuals, in real time.',
    'soft.intl':      'International experience',
    'soft.intl.desc': 'UK and Spain. Multicultural teams.',
    'soft.self':      'Self-directed learning',
    'soft.self.desc': '17+ days documented, real bugs included.',
    'soft.comm':      'Communication',
    'soft.comm.desc': 'Spanish native · Full professional English.',
    'proj.flagship':  'Flagship Project',
    'proj.section':   'Featured Portfolio',
    'proj.intro':     'Technical projects developed during my <strong>Meta</strong> and <strong>freeCodeCamp</strong> specializations.',
    'proj.meta':      'Meta Front-End Specialization',
    'proj.fcc':       'freeCodeCamp: Responsive Web Design',
    'proj.survey.title': 'Hospitality Survey Form',
    'proj.survey':    'Accessible form with HTML5 validation, radio buttons, and professional inputs.',
    'proj.book':      'Book Inventory App from freeCodeCamp using HTML &amp; CSS.',
    'proj.docs.title':'Technical Documentation',
    'proj.docs':      'Multi-section technical layout with side navigation and media queries.',
    'proj.equishift': 'Intelligent shift management system for multi-contract teams. Modular rotation algorithm guaranteeing mathematical fairness between employees on 37.5h and 40h contracts. Dataset of 14 Málaga 2026 public holidays. <strong>Not a tutorial project — it solves a real operational problem from my workplace.</strong>',
    'proj.repo':      'View Repo',
    'proj.mangata':   'Jewellery landing page with semantic HTML, advanced CSS and micro-interactions. Meta Front-End course project.',
    'proj.cards':     'Flexbox layout, 3D transforms, grayscale-to-colour hover effect and JS array logic.',
    'proj.devlog':    'Daily learning journal in editorial newspaper format. Real bugs, architecture decisions, no filters.',
    'proj.readlog':   'Read diary →',
    'nav.exp':        'Experience',
    'exp1.title':     'Hospitality Operations Management',
    'exp1.company':   'Hospitality Sector — Málaga &amp; UK',
    'exp1.desc':      '8+ years managing multidisciplinary teams in high-volume environments — airports, hotels and food &amp; beverage. Real-time incident resolution, shift management and operational process optimisation. Direct context for developing EquiShift — a real problem I translated into code.',
    'exp2.ongoing':   'Ongoing',
    'exp2.title':     'Front-End Developer (in training)',
    'exp2.desc':      '3 Meta certificates completed with an average of 91% in 30 days. Real projects documented daily: Campus &amp; Crema, Mangata &amp; Gallo, We Playing Cards, EquiShift. Stack: HTML5, CSS3, JavaScript, Git, GitHub.',
    'devlog.kicker':  'My biggest differentiator',
    'devlog.headline':'365 days of learning.<br>Documented without filters.',
    'devlog.sub':     "Each entry records real bugs, architecture decisions and the process of turning theory into code that works — or doesn't work, and why. Not a portfolio of victories. An honest engineering diary.",
    'devlog.days':    'Active days',
    'devlog.bugs':    'Bugs documented',
    'devlog.proj':    'Real projects',
    'devlog.avg':     'Cert average',
    'devlog.cta':     'Read the full Dev Log',
    'devlog.all':     'View all entries →',
    'entry17':        'Arrow Functions, five failed attempts and a "click" that changes how I think about code.',
    'entry9':         'EquiShift Málaga: the day I started coding labour justice.',
    'entry7':         'Coursera exam passed. It wasn\'t enough.',
    'entry4':         'Today I stopped making a website "that works" and started making a professional one.',
    'contact.headline':'Looking for someone<br>who performs under pressure?',
    'contact.sub':    'Available for junior front-end roles — remote, hybrid or on-site. Consistency, real problem-solving and 8 years working without a safety net.',
    'checkin.section':  'Career Narrative',
    'checkin.section2': 'Why Tech · Why Now',
    'checkin.body2':    'Transitioning into technology at 39 is not a <em>"reboot"</em> — it is a calculated system <strong>upgrade</strong>. I am not discarding my years in hospitality. <strong>I am deploying Version 2.0</strong> of myself and refactoring my background into a high-performance tech profile.',
    'checkin.kicker':   'Career Transition · Version 2.0',
    'checkin.headline': 'From Check-in to Code-in',
    'checkin.body':     'From front-desk operations to front-end development — I bring a unique perspective on user needs, combined with rigorous self-taught technical foundations in HTML, CSS and JavaScript. This transition at 39 is not a <em>"reboot"</em>. It\'s a calculated system <strong>upgrade</strong>. I\'m not discarding my years in hospitality — I\'m <strong>deploying Version 2.0</strong> of myself and refactoring my background into a high-performance tech profile.',
    'why1.title':       'The mindset was already there',
    'why1.body':        '8 years resolving incidents without a manual, in real time, under pressure. That\'s <strong>debugging</strong>. I was already doing it — now I\'m doing it in code.',
    'why2.title':       'A real problem needed a real solution',
    'why2.body':        'EquiShift exists because manual shift management in my workplace was <strong>broken and unfair</strong>. I couldn\'t fix it with a spreadsheet. So I started learning to fix it with code.',
    'why3.title':       '365 days of public accountability',
    'why3.body':        'I document every bug, every decision, every mistake. Not to show off — to build the kind of <strong>consistency that can\'t be faked</strong>.',
    'why4.title':       'Why now? Because the tools exist',
    'why4.body':        'Meta, freeCodeCamp, GitHub — the barrier to entry has never been lower. The barrier to <strong>commitment</strong> hasn\'t changed. That\'s where I have the advantage.',
    'checkin.cta.es':   'Ver Progreso Diario (Español)',
    'checkin.cta.log':  'Read the Dev Log →',
    'footer.copy':    '© 2026 Jose Aparicio · Málaga, España · Built by hand, line by line.',
    'pdf.btn':        'Download CV — PDF',
  },
  es: {
    'nav.about':      'Sobre mí',
    'nav.whytech':    'Por qué Tech',
    'nav.certs':      'Certificados',
    'nav.skills':     'Skills',
    'nav.projects':   'Proyectos',
    'nav.exp':        'Experiencia',
    'nav.contact':    'Contacto',
    'mast.role':      'Front-End Developer',
    'mast.avail':     'Disponible · Remoto / Híbrido',
    'mast.tagline':   'De la hostelería al código — 8 años gestionando equipos<br>bajo presión real. Ahora en producción.',
    'mast.quote':     '"La lógica es mi superpoder · La sintaxis es solo la herramienta"',
    'mast.photo':     'Añade tu foto aquí —<br>reemplaza este bloque<br>por un &lt;img&gt;',
    'about.headline': 'Front-End Developer en construcción.<br>Con 8 años de arquitectura humana detrás.',
    'about.body':     "No empecé a programar a los 18. Empecé a los 39, después de más de 8 años gestionando equipos bajo presión en hostelería — UK y España. Lo que traigo no es solo código: es <strong>criterio, consistencia y capacidad de resolver problemas reales sin red de seguridad</strong>.<br><br>En 30 días completé 3 certificados Meta con una media del 91%. Llevo 17 días de aprendizaje documentado — errores incluidos. <strong>No inflado, no decorativo. Honesto.</strong>",
    'about.quote':    '"Llevo 8 años resolviendo problemas que no tienen tutorial.<br>Ahora aprendo a escribirlos en código."',
    'cert.done':      '✓ Completado',
    'cert.progress':  'En progreso',
    'cert.course2':   'Curso 2 / 10',
    'cert.english':   'Inglés — Nivel Profesional Completo',
    'cert.certified': '✓ Certificado',
    'edu.section':    'Formación &amp; Certificaciones',
    'edu1.title':     'Grado en Educación Física',
    'edu1.org':       'Universidad de Málaga',
    'edu1.desc':      'Habilidades pedagógicas y de comunicación esenciales para documentación técnica y trabajo en equipo. Enfoque en planificación, seguimiento de objetivos y análisis del rendimiento.',
    'edu2.title':     'Certificado Meta Front-End Developer',
    'edu2.desc':      'React, JavaScript, HTML/CSS. 3 cursos completados — media del 91% en 30 días.',
    'edu3.title':     'Diseño Web Responsive &amp; JavaScript',
    'edu3.desc':      'Avanzando en las certificaciones de Diseño Web Responsive y JavaScript.',
    'edu4.title':     'Inglés — Nivel Profesional Completo (B2)',
    'edu4.desc':      'Comunicación profesional fluida en entornos multiculturales.',
    'exp.section':    'Experiencia Principal',
    'exp1.title':     'Gestión de Operaciones e Interfaz con el Cliente',
    'exp1.company':   'Sector Hostelero — Málaga &amp; UK',
    'exp1.desc':      'Gestión de incidencias de alto tráfico garantizando 99.9% de disponibilidad y satisfacción del cliente. Contexto directo para desarrollar EquiShift — un problema operativo real traducido en código.',
    'exp2.period':    '2026 — Actualidad',
    'exp2.title':     'Desarrollador Front-End (en formación)',
    'exp2.company':   'Autodidacta · Meta · freeCodeCamp',
    'exp2.desc':      '3 certificados Meta completados con media del 91% en 30 días. Proyectos reales documentados diariamente: Campus &amp; Crema, Mangata &amp; Gallo, We Playing Cards, EquiShift. Stack: HTML5, CSS3, JavaScript, Git, GitHub.',
    'skills.section': 'Habilidades Profesionales &amp; Stack Técnico',
    'skills.intro':   'Aprovechando mi experiencia en hostelería mientras "compilo" mi nueva carrera como desarrollador. Este es mi stack actual.',
    'skills.core':    'Fortalezas Principales',
    'skills.tech':    'Stack Técnico',
    'soft.lead':      'Liderazgo de equipos:',
    'soft.lead.desc': 'Gestión de equipos multidisciplinares en entornos de alta presión.',
    'soft.problem':   'Resolución de problemas:',
    'soft.problem.desc': 'Resolución de incidencias in situ y requisitos complejos.',
    'soft.intl':      'Experiencia Internacional:',
    'soft.intl.desc': 'Servicio de alta calidad en España y el Reino Unido.',
    'soft.pressure':  'Trabajo Bajo Presión:',
    'soft.pressure.desc': 'Terminales de aeropuerto y hoteles de alto volumen.',
    'tech.html':      'Estructura semántica, accesibilidad, arquitectura de documentos.',
    'tech.css':       'Flexbox, Grid, diseño responsive, variables CSS.',
    'tech.js':        'Manipulación del DOM, bases de POO, lógica de arrays.',
    'tech.eng.label': 'Inglés:',
    'tech.eng':       'Certificado B2 — fluido en comunicación multicultural.',
    'skills.soft':    'Soft skills transferibles',
    'soft.lead':      'Liderazgo de equipos',
    'soft.lead.desc': '8 años gestionando equipos multidisciplinares bajo presión real.',
    'soft.problem':   'Resolución de problemas',
    'soft.problem.desc': 'incidencias sin manual de instrucciones, en tiempo real.',
    'soft.intl':      'Experiencia internacional',
    'soft.intl.desc': 'UK y España. Equipos multiculturales.',
    'soft.self':      'Aprendizaje autodidacta',
    'soft.self.desc': '17+ días documentados, errores reales incluidos.',
    'soft.comm':      'Comunicación',
    'soft.comm.desc': 'Español nativo · Inglés profesional completo.',
    'proj.flagship':  'Proyecto Bandera',
    'proj.section':   'Portfolio Destacado',
    'proj.intro':     'Proyectos técnicos desarrollados durante mis especializaciones de <strong>Meta</strong> y <strong>freeCodeCamp</strong>.',
    'proj.meta':      'Especialización Meta Front-End',
    'proj.fcc':       'freeCodeCamp: Diseño Web Responsive',
    'proj.survey.title': 'Formulario Hostelería',
    'proj.survey':    'Formulario accesible con validación HTML5, radio buttons e inputs profesionales.',
    'proj.book':      'App de inventario de libros de freeCodeCamp con HTML y CSS.',
    'proj.docs.title':'Documentación Técnica',
    'proj.docs':      'Layout técnico multisección con navegación lateral y media queries.',
    'proj.equishift': 'Sistema inteligente de gestión de turnos para plantillas multicontrato. Algoritmo de rotación modular que garantiza equidad matemática entre empleados con jornadas de 37.5h y 40h. Dataset de 14 festivos Málaga 2026. <strong>No es un proyecto de tutorial — resuelve un problema operativo real de mi entorno laboral.</strong>',
    'proj.repo':      'Ver Repo',
    'proj.mangata':   'Landing page de joyería con HTML semántico, CSS avanzado y micro-interacciones. Proyecto del curso Meta Front-End.',
    'proj.cards':     'Layout Flexbox, transformaciones 3D, efecto hover escala de grises a color y lógica JS de arrays.',
    'proj.devlog':    'Bitácora diaria de aprendizaje en formato periódico editorial. Errores reales, decisiones de arquitectura, sin filtros.',
    'proj.readlog':   'Ver diario →',
    'exp1.title':     'Gestión de Operaciones en Hostelería',
    'exp1.company':   'Sector Hostelero — Málaga &amp; UK',
    'exp1.desc':      '8+ años gestionando equipos multidisciplinares en entornos de alto volumen — aeropuertos, hoteles y restauración. Resolución de incidencias en tiempo real, gestión de turnos y optimización de procesos operativos. Contexto directo para el desarrollo de EquiShift — un problema real que traduje en código.',
    'exp2.ongoing':   'En curso',
    'exp2.title':     'Desarrollador Front-End (en formación)',
    'exp2.desc':      '3 certificados Meta completados con media del 91% en 30 días. Proyectos reales documentados diariamente: Campus &amp; Crema, Mangata &amp; Gallo, We Playing Cards, EquiShift. Stack: HTML5, CSS3, JavaScript, Git, GitHub.',
    'devlog.kicker':  'Mi mayor diferenciador',
    'devlog.headline':'365 días de aprendizaje.<br>Documentado sin filtros.',
    'devlog.sub':     'Cada entrada registra errores reales, decisiones de arquitectura y el proceso de convertir teoría en código que funciona — o que no funciona, y por qué. No es un portfolio de victorias. Es un diario de ingeniería honesto.',
    'devlog.days':    'Días activos',
    'devlog.bugs':    'Bugs documentados',
    'devlog.proj':    'Proyectos reales',
    'devlog.avg':     'Media certificados',
    'devlog.cta':     'Leer el Dev Log completo',
    'devlog.all':     'Ver todas las entradas →',
    'entry17':        'Arrow Functions, cinco intentos fallidos y un "clic" que cambia cómo pienso el código.',
    'entry9':         'EquiShift Málaga: el día que empecé a codificar justicia laboral.',
    'entry7':         'Examen de Coursera aprobado. No era suficiente.',
    'entry4':         'Hoy dejé de hacer una web "que funciona" para hacer una web profesional.',
    'contact.headline':'¿Buscas a alguien<br>que rinda bajo presión?',
    'contact.sub':    'Disponible para oportunidades junior en front-end — remoto, híbrido o presencial. Consistencia, resolución real de problemas y 8 años trabajando sin red de seguridad.',
    'checkin.section':  'Narrativa Profesional',
    'checkin.section2': 'Por qué Tech · Por qué Ahora',
    'checkin.body2':    'Hacer la transición a la tecnología a los 39 no es un <em>"reinicio"</em> — es un <strong>upgrade</strong> calculado del sistema. No estoy descartando mis años en hostelería. <strong>Estoy desplegando la Versión 2.0</strong> de mí mismo y refactorizando mi background en un perfil tech de alto rendimiento.',
    'checkin.kicker':   'Transición Profesional · Versión 2.0',
    'checkin.headline': 'Del Check-in al Code-in',
    'checkin.body':     'De las operaciones de recepción al desarrollo front-end — aporto una perspectiva única sobre las necesidades del usuario, combinada con una base técnica autodidacta rigurosa en HTML, CSS y JavaScript. Esta transición a los 39 no es un <em>"reinicio"</em>. Es un <strong>upgrade</strong> calculado del sistema. No estoy descartando mis años en hostelería — estoy <strong>desplegando la Versión 2.0</strong> de mí mismo y refactorizando mi background en un perfil tech de alto rendimiento.',
    'why1.title':       'La mentalidad ya estaba ahí',
    'why1.body':        '8 años resolviendo incidencias sin manual, en tiempo real, bajo presión. Eso es <strong>debugging</strong>. Ya lo hacía — ahora lo hago en código.',
    'why2.title':       'Un problema real necesitaba una solución real',
    'why2.body':        'EquiShift existe porque la gestión manual de turnos en mi entorno laboral estaba <strong>rota y era injusta</strong>. No podía arreglarlo con una hoja de cálculo. Así que empecé a aprender a arreglarlo con código.',
    'why3.title':       '365 días de responsabilidad pública',
    'why3.body':        'Documento cada bug, cada decisión, cada error. No para presumir — para construir el tipo de <strong>consistencia que no se puede fingir</strong>.',
    'why4.title':       '¿Por qué ahora? Porque las herramientas existen',
    'why4.body':        'Meta, freeCodeCamp, GitHub — la barrera de entrada nunca ha sido más baja. La barrera del <strong>compromiso</strong> no ha cambiado. Ahí es donde tengo la ventaja.',
    'checkin.cta.es':   'Ver Progreso Diario (Español)',
    'checkin.cta.log':  'Leer el Dev Log →',
    'footer.copy':    '© 2026 Jose Aparicio · Málaga, España · Construido a mano, línea a línea.',
    'pdf.btn':        'Descargar CV — PDF',
  }
};

/* ═══════════════════════════════════════════════════════════
   I18N ENGINE
═══════════════════════════════════════════════════════════ */
// Guardamos el idioma actual
let currentLang = 'en';

// Función que usare para cambiar idioma
function applyLang(lang) {
  currentLang = lang; // guardo el idioma
  const translations = LANGS[lang]; // obtenemos las traducciones
  const elements = document.querySelectorAll('[data-i18n]'); // elementos con traducción

  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    const key = el.getAttribute('data-i18n');
    if (translations[key] !== undefined) {
      el.innerHTML = translations[key];
    }
  }
}

// Buscamos el botón y le añadimos evento para cambiar idioma
const langBtn = document.getElementById('btn-lang');
langBtn.addEventListener('click', function() {
  // Si el idioma actual es inglés, cambiamos a español, si no, a inglés
  const newLang = currentLang === 'en' ? 'es' : 'en';
  applyLang(newLang);
 
  langBtn.textContent = newLang === 'en' ? 'ES' : 'EN';
});
/* ═══════════════════════════════════════════════════════════
   DARK MODE
═══════════════════════════════════════════════════════════ */
const btnDark = document.getElementById('theme-toggle');
btnDark.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const icon = document.getElementById('theme-icon');
  if (icon) {
    icon.className = document.body.classList.contains('dark-mode')
      ? 'fas fa-sun'
      : 'fas fa-moon';
  }
});

/* ═══════════════════════════════════════════════════════════
   ANIMATE BARS ON SCROLL
═══════════════════════════════════════════════════════════ */
const animateOnScroll = () => {
  document.querySelectorAll('.skill-bar-fill, .cert-progress-fill').forEach(bar => {
    const rect = (bar.closest('[role="progressbar"]') ?? bar.parentElement).getBoundingClientRect();
    if (rect.top < window.innerHeight - 60 && bar.style.width === '') {
      bar.style.width = bar.dataset.width + '%';
    }
  });
};
window.addEventListener('scroll', animateOnScroll, { passive: true });
animateOnScroll();

/* ═══════════════════════════════════════════════════════════
   ACTIVE NAV ON SCROLL
═══════════════════════════════════════════════════════════ */
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll', () => {
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('here', a.getAttribute('href') === '#' + current);
  });
}, { passive: true });

/* ═══════════════════════════════════════════════════════════
   PDF DOWNLOAD SOON
═══════════════════════════════════════════════════════════ */
