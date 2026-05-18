/*!
 * MatiasUI v1.1.0
 * Tiny framework-agnostic interactions.
 */
(function () {
  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function closeDropdowns(except) {
    qsa(".mui-dropdown.is-open, .mui-menu.is-open").forEach((node) => {
      if (node !== except) node.classList.remove("is-open");
    });
  }

  function initNavs() {
    qsa("[data-mui-nav]").forEach((nav) => {
      const toggle = qs("[data-mui-nav-toggle]", nav);
      if (!toggle) return;
      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(open));
      });
    });
  }

  function initDropdowns() {
    qsa("[data-mui-dropdown]").forEach((dropdown) => {
      const trigger = qs("[data-mui-dropdown-trigger]", dropdown);
      if (!trigger) return;
      trigger.addEventListener("click", (event) => {
        event.stopPropagation();
        const open = !dropdown.classList.contains("is-open");
        closeDropdowns(dropdown);
        dropdown.classList.toggle("is-open", open);
        trigger.setAttribute("aria-expanded", String(open));
      });
    });
    document.addEventListener("click", () => closeDropdowns());
  }

  function initModals() {
    qsa("[data-mui-open-modal]").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const modal = qs(trigger.getAttribute("data-mui-open-modal"));
        if (!modal) return;
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        const focusable = qs("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])", modal);
        if (focusable) focusable.focus();
      });
    });

    qsa("[data-mui-close-modal]").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const modal = trigger.closest(".mui-modal-backdrop");
        if (!modal) return;
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
      });
    });

    qsa(".mui-modal-backdrop").forEach((backdrop) => {
      backdrop.addEventListener("click", (event) => {
        if (event.target === backdrop) {
          backdrop.classList.remove("is-open");
          backdrop.setAttribute("aria-hidden", "true");
        }
      });
    });
  }

  function initTabs() {
    qsa("[data-mui-tabs]").forEach((tabs) => {
      const triggers = qsa("[role='tab']", tabs);
      const panels = qsa("[role='tabpanel']", tabs);
      triggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
          const target = qs(trigger.getAttribute("data-mui-tab"), tabs);
          triggers.forEach((item) => item.setAttribute("aria-selected", "false"));
          panels.forEach((panel) => panel.hidden = true);
          trigger.setAttribute("aria-selected", "true");
          if (target) target.hidden = false;
        });
      });
    });
  }

  function initAccordions() {
    qsa("[data-mui-accordion]").forEach((accordion) => {
      qsa("[data-mui-accordion-trigger]", accordion).forEach((trigger) => {
        trigger.addEventListener("click", () => {
          const item = trigger.closest(".mui-accordion-item");
          const open = item.classList.toggle("is-open");
          trigger.setAttribute("aria-expanded", String(open));
        });
      });
    });
  }

  function toast(message, options = {}) {
    let zone = qs(".mui-toast-zone");
    if (!zone) {
      zone = document.createElement("div");
      zone.className = "mui-toast-zone";
      document.body.append(zone);
    }
    const node = document.createElement("div");
    node.className = "mui-toast";
    node.textContent = message;
    if (options.tone) node.dataset.tone = options.tone;
    zone.append(node);
    window.setTimeout(() => node.remove(), options.duration || 3600);
    return node;
  }

  function initToasts() {
    qsa("[data-mui-toast]").forEach((trigger) => {
      trigger.addEventListener("click", () => toast(trigger.getAttribute("data-mui-toast") || "Listo"));
    });
  }

  function initDismiss() {
    qsa("[data-mui-dismiss]").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const target = trigger.closest(trigger.getAttribute("data-mui-dismiss") || ".mui-alert");
        if (target) target.remove();
      });
    });
  }

  function initDrawers() {
    qsa("[data-mui-open-drawer]").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const drawer = qs(trigger.getAttribute("data-mui-open-drawer"));
        if (drawer) drawer.classList.add("is-open");
      });
    });

    qsa("[data-mui-close-drawer]").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const drawer = trigger.closest(".mui-drawer-backdrop");
        if (drawer) drawer.classList.remove("is-open");
      });
    });

    qsa(".mui-drawer-backdrop").forEach((backdrop) => {
      backdrop.addEventListener("click", (event) => {
        if (event.target === backdrop) backdrop.classList.remove("is-open");
      });
    });
  }

  function initCopy() {
    qsa("[data-mui-copy]").forEach((trigger) => {
      trigger.addEventListener("click", async () => {
        const target = qs(trigger.getAttribute("data-mui-copy"));
        const value = target ? target.textContent : "";
        try {
          await navigator.clipboard.writeText(value.trim());
          toast("Snippet copiado");
        } catch (error) {
          toast("No se pudo copiar");
        }
      });
    });
  }

  function initLivePreview() {
    qsa("[data-mui-live]").forEach((root) => {
      const editor = qs("[data-mui-live-editor]", root);
      const preview = qs("[data-mui-live-preview]", root);
      if (!editor || !preview) return;
      const render = () => {
        preview.srcdoc = [
          "<!doctype html><html><head>",
          "<link rel='stylesheet' href='../dist/matias-ui.css'>",
          "</head><body class='mui-body'><div class='mui-section'><div class='mui-container'>",
          editor.value,
          "</div></div><script src='../dist/matias-ui.js'><\/script></body></html>"
        ].join("");
      };
      editor.addEventListener("input", render);
      render();
    });
  }

  function initCounters() {
    qsa("[data-mui-count-to]").forEach((node) => {
      const target = Number(node.getAttribute("data-mui-count-to") || 0);
      const duration = Number(node.getAttribute("data-mui-count-duration") || 900);
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        node.textContent = String(Math.round(target * progress));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }

  function initKeyboardSearch() {
    document.addEventListener("keydown", (event) => {
      if (event.key !== "/" || event.target.matches("input, textarea, select")) return;
      const search = qs("[data-mui-search-focus]");
      if (!search) return;
      event.preventDefault();
      search.focus();
    });
  }

  function initBlockFilters() {
    qsa("[data-mui-block-filter]").forEach((input) => {
      const target = qs(input.getAttribute("data-mui-block-filter"));
      if (!target) return;
      const items = qsa("[data-mui-block-item]", target);
      input.addEventListener("input", () => {
        const query = input.value.trim().toLowerCase();
        items.forEach((item) => {
          const haystack = item.textContent.toLowerCase() + " " + (item.getAttribute("data-mui-block-item") || "");
          item.hidden = query && !haystack.includes(query);
        });
      });
    });
  }

  function initThemeToggle() {
    qsa("[data-mui-theme-toggle]").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const next = document.documentElement.getAttribute("data-mui-theme") === "dark" ? "crimson" : "dark";
        document.documentElement.setAttribute("data-mui-theme", next);
        try {
          localStorage.setItem("mui-theme", next);
        } catch (error) {
          // Storage can be blocked in embedded previews.
        }
      });
    });

    try {
      const saved = localStorage.getItem("mui-theme");
      if (saved) document.documentElement.setAttribute("data-mui-theme", saved);
    } catch (error) {
      // Storage can be blocked in embedded previews.
    }
  }

  function init() {
    initThemeToggle();
    initNavs();
    initDropdowns();
    initModals();
    initTabs();
    initAccordions();
    initToasts();
    initDismiss();
    initDrawers();
    initCopy();
    initLivePreview();
    initCounters();
    initKeyboardSearch();
    initBlockFilters();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.MatiasUI = {
    init,
    toast
  };
})();
