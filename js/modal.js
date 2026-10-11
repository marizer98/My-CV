/**
 * ==============================================================================
 * MODAL DE DETALLE DE PROYECTOS — INTERACCIÓN Y ACCESIBILIDAD
 * ==============================================================================
 */

class ProjectModal {
  constructor(projects) {
    this.projects = projects || [];
    this.currentIndex = -1;
    this.lastFocusedElement = null;

    this.modalOverlay = document.getElementById("project-modal");
    this.modalContent = document.getElementById("modal-project-content");
    this.btnClose = document.getElementById("modal-close-btn");
    this.btnPrev = document.getElementById("modal-prev-btn");
    this.btnNext = document.getElementById("modal-next-btn");

    this.initEvents();
  }

  initEvents() {
    if (!this.modalOverlay) return;

    // Cerrar al hacer clic en botón de cerrar
    if (this.btnClose) {
      this.btnClose.addEventListener("click", () => this.close());
    }

    // Cerrar al hacer clic fuera del contenido (backdrop)
    this.modalOverlay.addEventListener("click", (e) => {
      if (e.target === this.modalOverlay) {
        this.close();
      }
    });

    // Navegar entre proyectos dentro del modal
    if (this.btnPrev) {
      this.btnPrev.addEventListener("click", () => this.navigate(-1));
    }
    if (this.btnNext) {
      this.btnNext.addEventListener("click", () => this.navigate(1));
    }

    // Atajos de teclado: ESC para cerrar, Flechas para anterior/siguiente
    document.addEventListener("keydown", (e) => {
      if (!this.isOpen()) return;

      if (e.key === "Escape") {
        this.close();
      } else if (e.key === "ArrowLeft") {
        this.navigate(-1);
      } else if (e.key === "ArrowRight") {
        this.navigate(1);
      }
    });
  }

  isOpen() {
    return this.modalOverlay && this.modalOverlay.classList.contains("active");
  }

  openById(projectId, triggerElement = null) {
    const index = this.projects.findIndex((p) => p.id === projectId);
    if (index !== -1) {
      this.openByIndex(index, triggerElement);
    }
  }

  openByIndex(index, triggerElement = null) {
    if (index < 0 || index >= this.projects.length) return;

    this.currentIndex = index;
    this.lastFocusedElement = triggerElement || document.activeElement;

    const project = this.projects[this.currentIndex];
    this.renderProject(project);

    // Mostrar modal con animación suave
    this.modalOverlay.classList.add("active");
    this.modalOverlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    // Enfocar el modal para accesibilidad
    if (this.btnClose) {
      this.btnClose.focus();
    }
  }

  close() {
    if (!this.isOpen()) return;

    this.modalOverlay.classList.remove("active");
    this.modalOverlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    // Devolver el foco al elemento que activó el modal
    if (this.lastFocusedElement && typeof this.lastFocusedElement.focus === "function") {
      this.lastFocusedElement.focus();
    }
  }

  navigate(direction) {
    if (this.projects.length <= 1) return;
    let newIndex = this.currentIndex + direction;
    if (newIndex < 0) newIndex = this.projects.length - 1;
    if (newIndex >= this.projects.length) newIndex = 0;
    this.openByIndex(newIndex);
  }

  renderProject(project) {
    if (!this.modalContent) return;

    const currentNum = String(this.currentIndex + 1).padStart(2, "0");
    const totalNum = String(this.projects.length).padStart(2, "0");

    // Generar badges de herramientas
    const toolsHTML = (project.tools || [])
      .map((tool) => `<span class="tag-pill">${tool}</span>`)
      .join("");

    // Generar imágenes de galería
    const gallery = project.gallery && project.gallery.length ? project.gallery : [project.coverImage];
    const galleryHTML = gallery
      .map(
        (imgUrl, idx) => `
        <figure class="modal-gallery-item">
          <img src="${imgUrl}" alt="${project.title} - Vista ${idx + 1}" loading="lazy" />
          <figcaption class="modal-img-caption">Vista del proyecto ${idx + 1}: ${project.title}</figcaption>
        </figure>
      `
      )
      .join("");

    this.modalContent.innerHTML = `
      <header class="modal-header">
        <div class="modal-meta-top">
          <span class="category-badge">${project.categoryLabel || project.category}</span>
          <span class="modal-counter">${currentNum} / ${totalNum}</span>
          <span class="modal-year">${project.year || ""}</span>
        </div>
        <h2 class="modal-title">${project.title}</h2>
        <p class="modal-lead">${project.shortDescription || ""}</p>
      </header>

      <!-- Cuadrícula de metadatos del proyecto -->
      <div class="modal-info-grid">
        <div class="info-item">
          <span class="info-label">Cliente / Entidad</span>
          <span class="info-value">${project.client || "Proyecto personal"}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Rol & Disciplina</span>
          <span class="info-value">${project.role || "Diseño y dirección de arte"}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Año</span>
          <span class="info-value">${project.year || "2025"}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Herramientas</span>
          <div class="info-tags">${toolsHTML}</div>
        </div>
      </div>

      <!-- Galería Principal de Imágenes -->
      <div class="modal-gallery">
        ${galleryHTML}
      </div>

      <!-- Descripción Detallada: Objetivo, Proceso y Resultado -->
      <div class="modal-details-sections">
        <article class="detail-block">
          <h3 class="detail-block-title">01. Objetivo &amp; El Reto</h3>
          <p class="detail-block-text">${project.objective || "Información del objetivo no especificada."}</p>
        </article>

        <article class="detail-block">
          <h3 class="detail-block-title">02. Proceso Creativo</h3>
          <p class="detail-block-text">${project.process || "Información del proceso creativo no especificada."}</p>
        </article>

        <article class="detail-block">
          <h3 class="detail-block-title">03. Resultado Final</h3>
          <p class="detail-block-text">${project.result || "Información del resultado no especificada."}</p>
        </article>
      </div>
    `;

    // Hacer scroll al inicio del modal al cambiar de proyecto
    const scrollContainer = this.modalOverlay.querySelector(".modal-body-scroll");
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
  }
}

window.ProjectModal = ProjectModal;
