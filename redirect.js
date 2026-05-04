export default {
  async fetch(request) {
    const url = new URL(request.url);
    const slug = url.pathname.split('/demo/reserva/')[1];

    if (!slug) {
      return new Response('❌ Slug não encontrado', { status: 404 });
    }

    const NUMERO_WABA = '553584229720';
    const mensagem = `RESERVA_${slug}`;
    const waUrl = `https://wa.me/${NUMERO_WABA}?text=${encodeURIComponent(mensagem)}`;

    return Response.redirect(waUrl, 302);
  },
};