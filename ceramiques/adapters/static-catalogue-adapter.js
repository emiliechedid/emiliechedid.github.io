import { loadCatalogue } from '../ports/catalogue-port.js';
export const staticCatalogueAdapter = { load: () => loadCatalogue() };
