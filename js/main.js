/**
 * ==============================================================================
 * SCRIPT PRINCIPAL — INICIALIZACIÓN, FILTRADO Y EXPERIENCIA DE USUARIO
 * ==============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error("No se encontró el objeto PORTFOLIO_DATA en data.js");
    return;
  }

  // 1. Inicializar Modal de Proyectos
  const modal = new window.ProjectModal(data.projects);

  // 2. Renderizar Contenido Dinámico desde data.js
  renderProfileInfo(data.profile);
  renderHero(data.hero, data.profile);
  renderCategoryFilters(data.categories, data.projects);
  renderProjectsGrid(data.projects, modal);
  renderAboutSection(data.about, data.profile);
  renderContactSection(data.profile);
  renderFooter(data.footer, data.profile);

  // 3. Inicializar Navegación y Menú Móvil
  initNavigation();

  // 4. Inicializar Animaciones de Desplazamiento (Scroll Reveal)
  initScrollAnimations();
});

/**
 * ------------------------------------------------------------------------------
 * Renderiza la información de perfil en el encabezado
 * ------------------------------------------------------------------------------
 */
function renderProfileInfo(profile) {
  if (!profile) return;

  // Actualizar Título de la pestaña del navegador
  document.title = `${profile.name} — Portafolio de Diseño Gráfico & CV`;

  // Encabezado
  const brandName = document.getElementById("header-brand-name");
  const brandRole = document.getElementById("header-brand-role");
  if (brandName) brandName.textContent = profile.name;
  if (brandRole) brandRole.textContent = profile.role;

  // Botón de Descarga de CV en Header
  const cvBtn = document.getElementById("header-cv-btn");
  if (cvBtn) {
    cvBtn.href = profile.cvPath || "assets/documents/CV_Mariana_Diseno.pdf";
    cvBtn.setAttribute("download", profile.cvFileName || "CV_Mariana_Diseno.pdf");
  }

  // Botón de CV en Menú Móvil
  const cvBtnMobile = document.getElementById("mobile-cv-btn");
  if (cvBtnMobile) {
    cvBtnMobile.href = profile.cvPath || "assets/documents/CV_Mariana_Diseno.pdf";
    cvBtnMobile.setAttribute("download", profile.cvFileName || "CV_Mariana_Diseno.pdf");
  }
}

/**
 * ------------------------------------------------------------------------------
 * Renderiza la sección Hero de presentación principal
 * ------------------------------------------------------------------------------
 */
function renderHero(hero, profile) {
  if (!hero) return;

  const heroBadge = document.getElementById("hero-badge");
  const heroHeadline = document.getElementById("hero-headline");
  const heroIntro = document.getElementById("hero-intro");
  const heroCoverImg = document.getElementById("hero-cover-img");
  const heroCtaPrimary = document.getElementById("hero-cta-primary");
  const heroCtaSecondary = document.getElementById("hero-cta-secondary");

  if (heroBadge) heroBadge.textContent = hero.badge;
  if (heroHeadline) heroHeadline.textContent = hero.headline;
  if (heroIntro) heroIntro.textContent = hero.introText;
  if (heroCoverImg) {
    heroCoverImg.src = hero.featuredCoverImage || "assets/images/hero-cover.svg";
    heroCoverImg.alt = `Obra destacada — ${profile.name}`;
  }
  if (heroCtaPrimary && hero.ctaPrimaryText) {
    heroCtaPrimary.textContent = hero.ctaPrimaryText;
  }
  if (heroCtaSecondary && hero.ctaSecondaryText) {
    heroCtaSecondary.textContent = hero.ctaSecondaryText;
  }
}

/**
 * ------------------------------------------------------------------------------
 * Renderiza los botones interactivos de filtrado por categoría
 * ------------------------------------------------------------------------------
 */
function renderCategoryFilters(categories, projects) {
  const filterContainer = document.getElementById("portfolio-filters");
  if (!filterContainer) return;

  // Botón "Todos" con el total de proyectos
  let filtersHTML = `
    <button class="filter-tab active" data-filter="all" type="button">
      <span class="tab-label">Todos</span>
      <span class="tab-count">${projects.length}</span>
    </button>
  `;

  // Botones por cada categoría con su conteo
  categories.forEach((cat) => {
    const count = projects.filter((p) => p.category === cat.id).length;
    filtersHTML += `
      <button class="filter-tab" data-filter="${cat.id}" type="button">
        <span class="tab-label">${cat.name}</span>
        <span class="tab-count">${count}</span>
      </button>
    `;
  });

  filterContainer.innerHTML = filtersHTML;

  // Eventos de clic en filtros
  const filterTabs = filterContainer.querySelectorAll(".filter-tab");
  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const filterValue = tab.getAttribute("data-filter");
      filterProjects(filterValue);
    });
  });
}

/**
 * ------------------------------------------------------------------------------
 * Aplica el filtro en la cuadrícula de proyectos con animaciones suaves
 * ------------------------------------------------------------------------------
 */
function filterProjects(categoryId) {
  const cards = document.querySelectorAll(".project-card");
  let visibleCount = 0;

  cards.forEach((card) => {
    const cardCategory = card.getAttribute("data-category");

    if (categoryId === "all" || cardCategory === categoryId) {
      card.classList.remove("hidden");
      // Efecto suave de aparición
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0) scale(1)";
      }, 50);
      visibleCount++;
    } else {
      card.style.opacity = "0";
      card.style.transform = "translateY(16px) scale(0.98)";
      setTimeout(() => {
        card.classList.add("hidden");
      }, 250);
    }
  });

  // Mostrar mensaje si no hay proyectos en la categoría
  const emptyState = document.getElementById("portfolio-empty-state");
  if (emptyState) {
    emptyState.style.display = visibleCount === 0 ? "block" : "none";
  }
}

/**
 * ------------------------------------------------------------------------------
 * Renderiza la cuadrícula de tarjetas de proyectos
 * ------------------------------------------------------------------------------
 */
function renderProjectsGrid(projects, modal) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = projects
    .map((project, index) => {
      const num = String(index + 1).padStart(2, "0");
      return `
      <article class="project-card" data-category="${project.category}" data-id="${project.id}" tabindex="0" role="button" aria-label="Ver detalles de ${project.title}">
        <div class="card-image-wrapper">
          <img src="${project.coverImage}" alt="${project.title}" class="card-image" loading="lazy" />
          <div class="card-overlay">
            <span class="card-overlay-btn">Ver proyecto <span class="arrow">→</span></span>
          </div>
        </div>

        <div class="card-content">
          <div class="card-meta">
            <span class="card-number">${num}</span>
            <span class="card-category">${project.categoryLabel || project.category}</span>
            <span class="card-year">${project.year || ""}</span>
          </div>
          <h3 class="card-title">${project.title}</h3>
          <p class="card-desc">${project.shortDescription}</p>
          <div class="card-footer">
            <span class="card-link-text">Explorar proyecto <span class="arrow">→</span></span>
          </div>
        </div>
      </article>
    `;
    })
    .join("");

  // Añadir interactividad de clic y teclado a cada tarjeta
  const cardElements = grid.querySelectorAll(".project-card");
  cardElements.forEach((card) => {
    const projectId = card.getAttribute("data-id");

    card.addEventListener("click", () => {
      modal.openById(projectId, card);
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        modal.openById(projectId, card);
      }
    });
  });
}

/**
 * ------------------------------------------------------------------------------
 * Renderiza la sección Sobre Mí (Perfil, Filosofía, Habilidades, Experiencia)
 * ------------------------------------------------------------------------------
 */
function renderAboutSection(about, profile) {
  if (!about) return;

  // Foto de perfil
  const avatarImg = document.getElementById("about-avatar-img");
  if (avatarImg) {
    avatarImg.src = profile.avatarImage || "assets/images/profile-avatar.svg";
    avatarImg.alt = `Fotografía de ${profile.name}`;
  }

  // Título y Subtítulo
  const aboutSubtitle = document.getElementById("about-subtitle");
  if (aboutSubtitle) aboutSubtitle.textContent = about.subtitle;

  // Párrafos de Biografía
  const bioContainer = document.getElementById("about-bio-container");
  if (bioContainer && about.bio) {
    bioContainer.innerHTML = about.bio.map((p) => `<p class="bio-paragraph">${p}</p>`).join("");
  }

  // Filosofía y Enfoque Creativo
  const philQuote = document.getElementById("philosophy-quote");
  const philDesc = document.getElementById("philosophy-desc");
  if (philQuote && about.philosophy) philQuote.textContent = about.philosophy.quote;
  if (philDesc && about.philosophy) philDesc.textContent = about.philosophy.description;

  // Habilidades — Disciplinas
  const disciplinesContainer = document.getElementById("skills-disciplines-list");
  if (disciplinesContainer && about.skillsDisciplines) {
    disciplinesContainer.innerHTML = about.skillsDisciplines
      .map((skill) => `<li class="skill-pill">${skill}</li>`)
      .join("");
  }

  // Habilidades — Herramientas
  const toolsContainer = document.getElementById("skills-tools-list");
  if (toolsContainer && about.skillsTools) {
    toolsContainer.innerHTML = about.skillsTools
      .map((tool) => `<li class="tool-pill">${tool}</li>`)
      .join("");
  }

  // Experiencia Profesional
  const expContainer = document.getElementById("experience-timeline");
  if (expContainer && about.experience) {
    expContainer.innerHTML = about.experience
      .map(
        (item) => `
        <div class="timeline-item">
          <div class="timeline-period">${item.period}</div>
          <div class="timeline-body">
            <h4 class="timeline-role">${item.role}</h4>
            <div class="timeline-company">${item.company}</div>
            <p class="timeline-desc">${item.description}</p>
          </div>
        </div>
      `
      )
      .join("");
  }

  // Formación Académica
  const eduContainer = document.getElementById("education-list");
  if (eduContainer && about.education) {
    eduContainer.innerHTML = about.education
      .map(
        (item) => `
        <div class="timeline-item">
          <div class="timeline-period">${item.period}</div>
          <div class="timeline-body">
            <h4 class="timeline-role">${item.degree}</h4>
            <div class="timeline-company">${item.institution}</div>
            <p class="timeline-desc">${item.note}</p>
          </div>
        </div>
      `
      )
      .join("");
  }

  // Reconocimientos y Cursos
  const recContainer = document.getElementById("recognitions-list");
  if (recContainer && about.recognitions) {
    recContainer.innerHTML = about.recognitions
      .map(
        (item) => `
        <div class="recognition-row">
          <span class="rec-year">${item.year}</span>
          <span class="rec-title">${item.title}</span>
          <span class="rec-entity">${item.entity}</span>
        </div>
      `
      )
      .join("");
  }
}

/**
 * ------------------------------------------------------------------------------
 * Renderiza la sección de Contacto
 * ------------------------------------------------------------------------------
 */
function renderContactSection(profile) {
  if (!profile) return;

  const emailLink = document.getElementById("contact-email-link");
  const emailBtn = document.getElementById("contact-mail-btn");
  const subject = encodeURIComponent(profile.emailSubject || "Consulta de proyecto");

  if (emailLink) {
    emailLink.textContent = profile.email;
    emailLink.href = `mailto:${profile.email}?subject=${subject}`;
  }

  if (emailBtn) {
    emailBtn.href = `mailto:${profile.email}?subject=${subject}`;
  }

  // Redes Sociales
  if (profile.socialLinks) {
    const linkedinLink = document.getElementById("social-linkedin");
    const behanceLink = document.getElementById("social-behance");
    const instagramLink = document.getElementById("social-instagram");

    if (linkedinLink && profile.socialLinks.linkedin) {
      linkedinLink.href = profile.socialLinks.linkedin;
    }
    if (behanceLink && profile.socialLinks.behance) {
      behanceLink.href = profile.socialLinks.behance;
    }
    if (instagramLink && profile.socialLinks.instagram) {
      instagramLink.href = profile.socialLinks.instagram;
    }
  }
}

/**
 * ------------------------------------------------------------------------------
 * Renderiza el Pie de Página
 * ------------------------------------------------------------------------------
 */
function renderFooter(footer, profile) {
  const yearElement = document.getElementById("footer-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const nameElement = document.getElementById("footer-name");
  if (nameElement && profile) {
    nameElement.textContent = profile.name;
  }

  const quoteElement = document.getElementById("footer-quote");
  if (quoteElement && footer && footer.quote) {
    quoteElement.textContent = footer.quote;
  }

  const authorElement = document.getElementById("footer-author");
  if (authorElement && footer && footer.author) {
    authorElement.textContent = footer.author;
  }
}

/**
 * ------------------------------------------------------------------------------
 * Navegación, Menú Hamburguesa Móvil y Desplazamiento Suave
 * ------------------------------------------------------------------------------
 */
function initNavigation() {
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-nav-menu");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
      mobileToggle.setAttribute("aria-expanded", !isExpanded);
      mobileMenu.classList.toggle("open");
      document.body.classList.toggle("menu-open");
    });
  }

  // Cerrar menú móvil al hacer clic en un enlace de navegación
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileMenu && mobileMenu.classList.contains("open")) {
        mobileMenu.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      }
    });
  });

  // Botón "Volver arriba"
  const backToTop = document.getElementById("back-to-top-btn");
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Resaltado de navegación según la sección visible
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll(`.nav-link[href*="${sectionId}"]`).forEach((a) => {
          document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
          a.classList.add("active");
        });
      }
    });
  });
}

/**
 * ------------------------------------------------------------------------------
 * Animaciones de Revelación al Hacer Scroll (Editorial Fade-in)
 * ------------------------------------------------------------------------------
 */
function initScrollAnimations() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  if (!elements.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    elements.forEach((el) => observer.observe(el));
  } else {
    // Respaldo para navegadores antiguos
    elements.forEach((el) => el.classList.add("is-visible"));
  }
}
