export function addItem(cart, work, quantity = 1) {
  const existing = cart.find(item => item.id === work.id);
  if (existing) return cart.map(item => item.id === work.id ? { ...item, quantity: item.quantity + quantity } : item);
  return [...cart, { id: work.id, reference: work.reference, title: work.title, collection: work.collection, price: work.onlinePrice, quantity }];
}
export function removeItem(cart, id) { return cart.filter(item => item.id !== id); }
export function setQuantity(cart, id, quantity) { return quantity > 0 ? cart.map(item => item.id === id ? { ...item, quantity } : item) : removeItem(cart, id); }
export function cartCount(cart) { return cart.reduce((total, item) => total + item.quantity, 0); }
