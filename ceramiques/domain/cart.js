export function addItem(cart, work, variant = null, quantity = 1) {
  const variantKey = variant ? `${work.id}::${variant.name}` : work.id;
  const existing = cart.find(item => item.id === variantKey);
  if (existing) return cart.map(item => item.id === variantKey ? { ...item, quantity: item.quantity + quantity } : item);
  return [...cart, { id: variantKey, workId: work.id, reference: work.reference, title: work.title, collection: work.collection, format: variant?.name || '', price: variant?.onlinePrice ?? variant?.price ?? work.onlinePrice, quantity }];
}
export function removeItem(cart, id) { return cart.filter(item => item.id !== id); }
export function setQuantity(cart, id, quantity) { return quantity > 0 ? cart.map(item => item.id === id ? { ...item, quantity } : item) : removeItem(cart, id); }
export function cartCount(cart) { return cart.reduce((total, item) => total + item.quantity, 0); }
