const encode = value => encodeURIComponent(String(value ?? ''));
export function createMailtoAdapter(recipient) {
  return { send({ basket, customer }) {
    const lines = ['Bonjour Émilie,', '', 'Je souhaite connaître la disponibilité des pièces suivantes :', ...basket.map(item => `- ${item.title} (${item.reference}) · quantité : ${item.quantity}`), '', `Nom : ${customer.name || ''}`, `Email : ${customer.email || ''}`, '', customer.message || '', '', 'Merci.'];
    const subject = `Demande de disponibilité · ${basket.map(item => item.title).join(', ')}`;
    window.location.href = `mailto:${recipient}?subject=${encode(subject)}&body=${encode(lines.join('\n'))}`;
  } };
}
