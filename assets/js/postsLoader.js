const params = new URLSearchParams(window.location.search);
const idParam = params.get('id');

const filtered = posts.filter(p => {
  if (idParam) return p.id === idParam;
  return (page === 'index' && (!p.pagina || p.pagina === 'index')) || p.pagina === page;
});
