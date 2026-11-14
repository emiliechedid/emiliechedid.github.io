// Port sortant : l'UI ne connaît que ce contrat de lecture.
export async function loadCatalogue(fetcher = fetch) {
  const response = await fetcher('./catalogue.json', { cache: 'no-store' });
  if (!response.ok) throw new Error('Catalogue public indisponible.');
  return response.json();
}
