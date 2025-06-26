document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll("[include-html]");

  includes.forEach(async el => {
    const file = el.getAttribute("include-html");
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`Erro ao carregar ${file}`);
      const content = await response.text();
      el.innerHTML = content;
      el.removeAttribute("include-html");
    } catch (err) {
      console.error(err);
      el.innerHTML = "<p>Erro ao carregar componente.</p>";
    }
  });
});
