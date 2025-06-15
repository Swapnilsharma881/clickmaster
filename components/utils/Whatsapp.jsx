export function getWhatsAppLink(phoneNumber, text = "") {
  const encodedText = encodeURIComponent(text);
  return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;
}
