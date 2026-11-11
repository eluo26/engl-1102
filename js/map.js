/* =========================================================
   Interactive campus map — draws a clickable shape for every
   building in BUILDINGS (js/buildings.js), handles hover glow,
   tooltips, keyboard access, and links into each page.
   ========================================================= */

(function () {
  const svg = document.getElementById("campus-map");
  const layer = document.getElementById("building-layer");
  const tip = document.getElementById("map-tip");
  const frame = document.querySelector(".map-frame");
  const grid = document.getElementById("card-grid");
  const NS = "http://www.w3.org/2000/svg";

  if (!svg || !layer || typeof BUILDINGS === "undefined") return;

  function pageFor(b) { return "buildings/" + b.id + ".html"; }

  BUILDINGS.forEach(function (b) {
    // ---- map shape ----
    const a = document.createElementNS(NS, "a");
    a.setAttribute("href", pageFor(b));
    a.setAttribute("class", "bldg");
    a.setAttribute("data-id", b.id);
    a.setAttribute("aria-label", b.name);
    a.setAttribute("tabindex", "0");

    b.shapes.forEach(function (s) {
      const pulse = document.createElementNS(NS, "rect");
      pulse.setAttribute("class", "pulse");
      const r = document.createElementNS(NS, "rect");
      r.setAttribute("class", "shape");
      [pulse, r].forEach(function (el) {
        el.setAttribute("x", s[0]);
        el.setAttribute("y", s[1]);
        el.setAttribute("width", s[2]);
        el.setAttribute("height", s[3]);
        el.setAttribute("rx", 3);
      });
      a.appendChild(pulse);
      a.appendChild(r);
    });

    if (b.label) {
      const t = document.createElementNS(NS, "text");
      t.setAttribute("class", "tag");
      t.setAttribute("x", b.label[0]);
      t.setAttribute("y", b.label[1]);
      t.setAttribute("text-anchor", "middle");
      t.textContent = b.short || b.name;
      a.appendChild(t);
    }

    a.addEventListener("mouseenter", function () { show(b, a); });
    a.addEventListener("focus", function () { show(b, a); });
    a.addEventListener("mousemove", move);
    a.addEventListener("mouseleave", hide);
    a.addEventListener("blur", hide);

    layer.appendChild(a);

    // ---- index card ----
    if (grid) {
      const c = document.createElement("a");
      c.className = "card";
      c.href = pageFor(b);
      c.dataset.id = b.id;
      c.innerHTML =
        "<h3>" + b.name + "</h3><p>" + b.teaser + "</p>" +
        '<span class="who">Page by ' + b.who + "</span>";
      // hovering a card lights up its building on the map
      c.addEventListener("mouseenter", function () { setActive(b.id, true); });
      c.addEventListener("mouseleave", function () { setActive(b.id, false); });
      grid.appendChild(c);
    }
  });

  function setActive(id, on) {
    document.querySelectorAll('[data-id="' + id + '"]').forEach(function (el) {
      el.classList.toggle("active", on);
    });
  }

  function show(b, el) {
    tip.innerHTML = "<strong>" + b.name + "</strong>" + b.teaser +
      '<span class="cta">Click to explore &rarr;</span>';
    tip.classList.add("show");
    setActive(b.id, true);
    // position at the shape's center (for keyboard focus)
    const box = el.getBoundingClientRect();
    const f = frame.getBoundingClientRect();
    place(box.left + box.width / 2 - f.left, box.top - f.top);
  }

  function move(e) {
    const f = frame.getBoundingClientRect();
    place(e.clientX - f.left, e.clientY - f.top);
  }

  function place(x, y) {
    const f = frame.getBoundingClientRect();
    const half = 125;
    x = Math.max(half, Math.min(f.width - half, x));
    tip.style.left = x + "px";
    tip.style.top = Math.max(110, y) + "px";
  }

  function hide() {
    tip.classList.remove("show");
    document.querySelectorAll(".active").forEach(function (el) { el.classList.remove("active"); });
  }
})();
