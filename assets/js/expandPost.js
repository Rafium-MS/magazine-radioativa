export function expandPost(button) {
  const post = button.closest('.post');
  const isExpanded = post.classList.contains('expanded');

  if (!isExpanded) {
    button.innerHTML = '<span class="loading"></span> CARREGANDO...';
    button.disabled = true;

    setTimeout(() => {
      const extraContent = document.createElement('div');
      extraContent.className = 'post-expanded';
      extraContent.innerHTML = `
        <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 2px solid var(--light-gray);">
          <h4 style="color: var(--radioactive-green); margin-bottom: 1rem;">🔬 Análise Completa</h4>
          <p>Este é um conteúdo expandido que seria carregado dinamicamente. Aqui você encontraria a análise completa, mais detalhes sobre a produção, curiosidades dos bastidores e nossa avaliação técnica detalhada.</p>
          <p>O sistema de avaliação radioativa considera: roteiro, direção, atuações, efeitos visuais, trilha sonora e impacto cultural. Cada elemento é analisado em profundidade para dar nossa classificação final.</p>
          <div style="margin-top: 1rem;">
            <strong style="color: var(--shock-yellow);">Nota Final: 9.2/10 ☢️</strong>
          </div>
        </div>`;
      post.appendChild(extraContent);
      post.classList.add('expanded');
      button.innerHTML = 'RECOLHER RADIAÇÃO';
      button.disabled = false;
    }, 1500);
  } else {
    const expanded = post.querySelector('.post-expanded');
    if (expanded) expanded.remove();
    post.classList.remove('expanded');
    button.innerHTML = 'CONTAMINAR-SE MAIS';
  }
}
