/* ================================================================
   Jose Aparicio — Web CV
   script.js — actualizado 23/03/2026
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
    'cert.done':      '✓ Completed',
    'cert.progress':  'In progress',
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
    'exp2.period':    '2026 — Now',
    'exp2.title':     'Front-End Developer (in training)',
    'exp2.company':   'Self-directed · Meta · freeCodeCamp',
    'exp2.desc':      '3 Meta certificates completed with 91% average in 30 days. Real projects documented daily: Campus &amp; Crema, MiniShop JS, We Playing Cards, EquiShift, Technical Documentation Page. Stack: HTML5, CSS3, JavaScript, Git, GitHub.<br><br>27 documented study sessions published as an engineering journal — every bug, every decision, every mistake on record.',
    'exp2.ongoing':   'Ongoing',
    'skills.section': 'Professional Skills &amp; Tech Stack',
    'skills.intro':   'Leveraging my background in hospitality while "compiling" my new career as a developer. Here is my current skill set.',
    'skills.core':    'Core Strengths',
    'skills.tech':    'Technical Stack',
    'soft.lead':      'Team Leadership:',
    'soft.lead.desc': '8 years managing multidisciplinary teams under real pressure.',
    'soft.problem':   'Problem Solving:',
    'soft.problem.desc': 'Incidents without instruction manuals, in real time.',
    'soft.intl':      'International Experience:',
    'soft.intl.desc': 'UK and Spain. Multicultural teams.',
    'soft.pressure':  'Work Under Pressure:',
    'soft.pressure.desc': 'Airport terminals and high-volume hotels.',
    'soft.self':      'Self-directed learning',
    'soft.self.desc': '27+ days documented, real bugs included.',
    'soft.comm':      'Communication',
    'soft.comm.desc': 'Spanish native · Full professional English.',
    'tech.html':      'Semantic structure, accessibility, document architecture.',
    'tech.css':       'Flexbox, Grid, responsive design, CSS variables.',
    'tech.js':        'DOM manipulation, OOP basics, array logic.',
    'tech.eng.label': 'English:',
    'tech.eng':       'B2 Certified — fluent in multicultural communication.',
    'proj.section':   'Featured Portfolio',
    'proj.intro':     'Technical projects developed during my learning journey — real problems, real code, documented every day.',
    'proj.personal':  'Personal Projects',
    'proj.meta':      'Meta Front-End Specialization',
    'proj.fcc':       'freeCodeCamp: Responsive Web Design',
    'proj.equishift': 'Intelligent shift rotation algorithm for multi-contract hospitality teams. Guarantees mathematical fairness across weekends, nights and holidays. 104 weekends validated. <strong>Not a tutorial — built from 8 years of direct operational experience.</strong>',
    'proj.campus':    'Specialty café website with responsive design, reservation form and vanilla JS hamburger menu. IntersectionObserver animations. 3 CSS+HTML+Flexbox bugs debugged and documented.',
    'proj.minishop':  'Shopping cart system built from scratch with OOP. <code>Product</code> and <code>Cart</code> classes, <code>getTotal()</code> with <code>reduce()</code>, <code>removeProduct()</code> with <code>filter()</code>. 6 bugs documented.',
    'proj.mangata':   'Jewelry landing page with semantic HTML and advanced CSS. Typography hierarchy, micro-interactions and UI polish.',
    'proj.cards':     'Interactive card layout using Flexbox, CSS 3D Transforms and advanced Filter effects. Level-up system with circular state logic.',
    'proj.docs.title':'Technical Documentation Page',
    'proj.docs.desc': 'Fixed lateral navbar, smooth scroll and CSS variable system consistent with the Dev Log. Instead of the standard freeCodeCamp example, I documented my own learning process.',
    'proj.landing.title': 'Product Landing Page',
    'proj.landing.desc':  'Responsive landing page with Flexbox, sticky nav and modern UX. freeCodeCamp Responsive Web Design certification.',
    'proj.repo':      'View Repo',
    'proj.readlog':   'Read diary →',
    'checkin.section':  'Career Narrative',
    'checkin.section2': 'Why Tech · Why Now',
    'checkin.kicker':   'Career Transition · Version 2.0',
    'checkin.headline': 'From Check-in to Code-in',
    'checkin.body':     'From front-desk operations to front-end development — I bring a unique perspective on user needs, combined with rigorous self-taught technical foundations in HTML, CSS and JavaScript. This transition at 39 is not a <em>"reboot"</em>. It\'s a calculated system <strong>upgrade</strong>. I\'m not discarding my years in hospitality — I\'m <strong>deploying Version 2.0</strong> of myself and refactoring my background into a high-performance tech profile.',
    'checkin.body2':    'Transitioning into technology at 39 is not a <em>"reboot"</em> — it is a calculated system <strong>upgrade</strong>. I am not discarding my years in hospitality. <strong>I am deploying Version 2.0</strong> of myself and refactoring my background into a high-performance tech profile.',
    'checkin.cta.es':   'Ver Progreso Diario (Español)',
    'checkin.cta.log':  'Read the Dev Log →',
    'why1.title':       'The mindset was already there',
    'why1.body':        '8 years resolving incidents without a manual, in real time, under pressure. That\'s <strong>debugging</strong>. I was already doing it — now I\'m doing it in code.',
    'why2.title':       'A real problem needed a real solution',
    'why2.body':        'EquiShift exists because manual shift management in my workplace was <strong>broken and unfair</strong>. I couldn\'t fix it with a spreadsheet. So I started learning to fix it with code.',
    'why3.title':       '365 days of public accountability',
    'why3.body':        'I document every bug, every decision, every mistake. Not to show off — to build the kind of <strong>consistency that can\'t be faked</strong>.',
    'why4.title':       'Why now? Because the tools exist',
    'why4.body':        'Meta, freeCodeCamp, GitHub — the barrier to entry has never been lower. The barrier to <strong>commitment</strong> hasn\'t changed. That\'s where I have the advantage.',
    'devlog.kicker':  'My biggest differentiator',
    'devlog.headline':'365 days of learning.<br>Documented without filters.',
    'devlog.sub':     "Each entry records real bugs, architecture decisions and the process of turning theory into code that works — or doesn't work, and why. Not a portfolio of victories. An honest engineering diary.",
    'devlog.days':    'Active days',
    'devlog.bugs':    'Bugs documented',
    'devlog.proj':    'Projects live',
    'devlog.avg':     'Cert average',
    'devlog.cta':     'Read the full Dev Log',
    'devlog.all':     'View all entries →',
    'entry17':        'Arrow Functions, five failed attempts and a "click" that changes how I think about code.',
    'entry9':         'EquiShift Málaga: the day I started coding labour justice.',
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
    'cert.done':      '✓ Completado',
    'cert.progress':  'En progreso',
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
    'exp2.period':    '2026 — Actualidad',
    'exp2.title':     'Desarrollador Front-End (en formación)',
    'exp2.company':   'Autodidacta · Meta · freeCodeCamp',
    'exp2.desc':      '3 certificados Meta completados con media del 91% en 30 días. Proyectos reales documentados diariamente: Campus &amp; Crema, MiniShop JS, We Playing Cards, EquiShift, Página de Documentación Técnica. Stack: HTML5, CSS3, JavaScript, Git, GitHub.<br><br>27 sesiones de estudio documentadas publicadas como diario de ingeniería — cada bug, cada decisión, cada error, en el registro.',
    'exp2.ongoing':   'En curso',
    'skills.section': 'Habilidades Profesionales &amp; Stack Técnico',
    'skills.intro':   'Aprovechando mi experiencia en hostelería mientras "compilo" mi nueva carrera como desarrollador. Este es mi stack actual.',
    'skills.core':    'Fortalezas Principales',
    'skills.tech':    'Stack Técnico',
    'soft.lead':      'Liderazgo de equipos:',
    'soft.lead.desc': '8 años gestionando equipos multidisciplinares bajo presión real.',
    'soft.problem':   'Resolución de problemas:',
    'soft.problem.desc': 'Incidencias sin manual de instrucciones, en tiempo real.',
    'soft.intl':      'Experiencia Internacional:',
    'soft.intl.desc': 'UK y España. Equipos multiculturales.',
    'soft.pressure':  'Trabajo Bajo Presión:',
    'soft.pressure.desc': 'Terminales de aeropuerto y hoteles de alto volumen.',
    'soft.self':      'Aprendizaje autodidacta',
    'soft.self.desc': '27+ días documentados, errores reales incluidos.',
    'soft.comm':      'Comunicación',
    'soft.comm.desc': 'Español nativo · Inglés profesional completo.',
    'tech.html':      'Estructura semántica, accesibilidad, arquitectura de documentos.',
    'tech.css':       'Flexbox, Grid, diseño responsive, variables CSS.',
    'tech.js':        'Manipulación del DOM, bases de POO, lógica de arrays.',
    'tech.eng.label': 'Inglés:',
    'tech.eng':       'Certificado B2 — fluido en comunicación multicultural.',
    'proj.section':   'Portfolio Destacado',
    'proj.intro':     'Proyectos técnicos desarrollados durante mi proceso de aprendizaje — problemas reales, código real, documentado cada día.',
    'proj.personal':  'Proyectos Personales',
    'proj.meta':      'Especialización Meta Front-End',
    'proj.fcc':       'freeCodeCamp: Diseño Web Responsive',
    'proj.equishift': 'Sistema inteligente de gestión de turnos para plantillas multicontrato. Algoritmo de rotación modular que garantiza equidad matemática entre empleados con jornadas de 37.5h y 40h. Dataset de 14 festivos Málaga 2026. <strong>No es un proyecto de tutorial — resuelve un problema operativo real de mi entorno laboral.</strong>',
    'proj.campus':    'Web de cafetería universitaria con diseño responsive, formulario de reservas y menú hamburguesa en JS vanilla. Animaciones con IntersectionObserver. 3 bugs documentados.',
    'proj.minishop':  'Sistema de carrito de compra construido desde cero con POO. Clases <code>Product</code> y <code>Cart</code>, <code>getTotal()</code> con <code>reduce()</code>, <code>removeProduct()</code> con <code>filter()</code>. 6 bugs documentados.',
    'proj.mangata':   'Landing page de joyería con HTML semántico, CSS avanzado y micro-interacciones. Proyecto del curso Meta Front-End.',
    'proj.cards':     'Maquetación interactiva con Flexbox, CSS 3D Transforms y efectos Filter. Sistema de niveles con lógica de estado circular.',
    'proj.docs.title':'Página de Documentación Técnica',
    'proj.docs.desc': 'Navbar fija lateral, scroll suave y variables CSS coherentes con el Dev Log. En lugar del ejemplo de freeCodeCamp, documenté mi propio proceso de aprendizaje.',
    'proj.landing.title': 'Product Landing Page',
    'proj.landing.desc':  'Landing page responsive con Flexbox, nav sticky y UX moderna. Certificación Responsive Web Design de freeCodeCamp.',
    'proj.repo':      'Ver Repo',
    'proj.readlog':   'Ver diario →',
    'checkin.section':  'Narrativa Profesional',
    'checkin.section2': 'Por qué Tech · Por qué Ahora',
    'checkin.kicker':   'Transición Profesional · Versión 2.0',
    'checkin.headline': 'Del Check-in al Code-in',
    'checkin.body':     'De las operaciones de recepción al desarrollo front-end — aporto una perspectiva única sobre las necesidades del usuario, combinada con una base técnica autodidacta rigurosa en HTML, CSS y JavaScript. Esta transición a los 39 no es un <em>"reinicio"</em>. Es un <strong>upgrade</strong> calculado del sistema. No estoy descartando mis años en hostelería — estoy <strong>desplegando la Versión 2.0</strong> de mí mismo y refactorizando mi background en un perfil tech de alto rendimiento.',
    'checkin.body2':    'Hacer la transición a la tecnología a los 39 no es un <em>"reinicio"</em> — es un <strong>upgrade</strong> calculado del sistema. No estoy descartando mis años en hostelería. <strong>Estoy desplegando la Versión 2.0</strong> de mí mismo y refactorizando mi background en un perfil tech de alto rendimiento.',
    'checkin.cta.es':   'Ver Progreso Diario (Español)',
    'checkin.cta.log':  'Leer el Dev Log →',
    'why1.title':       'La mentalidad ya estaba ahí',
    'why1.body':        '8 años resolviendo incidencias sin manual, en tiempo real, bajo presión. Eso es <strong>debugging</strong>. Ya lo hacía — ahora lo hago en código.',
    'why2.title':       'Un problema real necesitaba una solución real',
    'why2.body':        'EquiShift existe porque la gestión manual de turnos en mi entorno laboral estaba <strong>rota y era injusta</strong>. No podía arreglarlo con una hoja de cálculo. Así que empecé a aprender a arreglarlo con código.',
    'why3.title':       '365 días de responsabilidad pública',
    'why3.body':        'Documento cada bug, cada decisión, cada error. No para presumir — para construir el tipo de <strong>consistencia que no se puede fingir</strong>.',
    'why4.title':       '¿Por qué ahora? Porque las herramientas existen',
    'why4.body':        'Meta, freeCodeCamp, GitHub — la barrera de entrada nunca ha sido más baja. La barrera del <strong>compromiso</strong> no ha cambiado. Ahí es donde tengo la ventaja.',
    'devlog.kicker':  'Mi mayor diferenciador',
    'devlog.headline':'365 días de aprendizaje.<br>Documentado sin filtros.',
    'devlog.sub':     'Cada entrada registra errores reales, decisiones de arquitectura y el proceso de convertir teoría en código que funciona — o que no funciona, y por qué. No es un portfolio de victorias. Es un diario de ingeniería honesto.',
    'devlog.days':    'Días activos',
    'devlog.bugs':    'Bugs documentados',
    'devlog.proj':    'Proyectos publicados',
    'devlog.avg':     'Media certificados',
    'devlog.cta':     'Leer el Dev Log completo',
    'devlog.all':     'Ver todas las entradas →',
    'entry17':        'Arrow Functions, cinco intentos fallidos y un "clic" que cambia cómo pienso el código.',
    'entry9':         'EquiShift Málaga: el día que empecé a codificar justicia laboral.',
    'footer.copy':    '© 2026 Jose Aparicio · Málaga, España · Construido a mano, línea a línea.',
    'pdf.btn':        'Descargar CV — PDF',
  }
};

/* ═══════════════════════════════════════════════════════════
   I18N ENGINE
═══════════════════════════════════════════════════════════ */
let currentLang = 'en';

function applyLang(lang) {
  currentLang = lang;
  const translations = LANGS[lang];
  const elements = document.querySelectorAll('[data-i18n]');

  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    const key = el.getAttribute('data-i18n');
    if (translations[key] !== undefined) {
      el.innerHTML = translations[key];
    }
  }
}

const langBtn = document.getElementById('btn-lang');
langBtn.addEventListener('click', function() {
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