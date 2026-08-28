(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".menu-toggle");
  var panel = document.querySelector(".mobile-panel");

  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 12);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      var open = panel.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        panel.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  document.querySelectorAll("form[data-groundjet-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var lines = [];
      data.forEach(function (value, key) {
        if (key === "bot-field") return;
        lines.push(key + ": " + value);
      });
      var subject = encodeURIComponent("GROUNDJET journey request");
      var body = encodeURIComponent(lines.join("\n"));
      window.location.href = "mailto:hello@groundjets.com?subject=" + subject + "&body=" + body;

      var success = form.parentElement.querySelector(".form-success");
      form.classList.add("is-hidden");
      if (success) success.classList.add("is-visible");
    });
  });
})();
