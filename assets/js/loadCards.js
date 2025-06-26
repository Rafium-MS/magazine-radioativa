fetch('data/posts.json')
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById('featuredCards');
    if (!container) return;

    // Selecionar os primeiros 4 posts para destaque
    const featured = posts.slice(0, 4);

    featured.forEach(post => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-category">${post.categoria}</div>
        <h3 class="card-title">${post.titulo}</h3>
        <p class="card-snippet">${post.conteudo.slice(0, 80)}...</p>
        <a class="card-link" href="pages/${post.pagina}.html?id=${post.id}">Ver mais ☢️</a>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error('Erro ao carregar cards:', err));
