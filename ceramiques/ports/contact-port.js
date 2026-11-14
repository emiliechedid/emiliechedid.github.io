export function sendBasketByEmail(adapter, basket, customer = {}) { return adapter.send({ basket, customer }); }
