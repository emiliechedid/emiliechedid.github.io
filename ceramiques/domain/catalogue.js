// Domaine pur : aucune dépendance à React, au navigateur ou au serveur.
export function publicWork(work, imagePaths = []) {
  return {
    id: work.id, reference: work.reference, title: work.title, collection: work.collection,
    status: work.status, description: work.description || '', technique: work.technique || '',
    material: work.material || '', year: work.year ?? '', diameter: work.diameter ?? '',
    width: work.width ?? '', height: work.height ?? '', depth: work.depth ?? '',
    thicknessMm: work.thicknessMm ?? '', dimensionsEstimated: Boolean(work.dimensionsEstimated),
    onlinePrice: work.onlinePrice ?? '', wix: work.status === 'disponible' ? (work.wix || '') : '',
    variants: (work.variants || []).map(v => ({ name: v.name, price: v.price ?? '' })),
    photos: imagePaths, photoLabels: (work.photoLabels || []).slice(0, imagePaths.length)
  };
}
export function publicCatalogue(state, imagePathByWork = {}) {
  return { schema: 1, generatedAt: new Date().toISOString(), brand: 'Céramiques EMIL', artist: 'Émilie Chedid', collections: state.collections || [], works: (state.works || []).map(work => publicWork(work, imagePathByWork[work.id] || [])) };
}
