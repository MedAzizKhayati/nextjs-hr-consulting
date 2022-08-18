export default function getInnerText(el) {
  if (!el || typeof window == 'undefined') return '';
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = el;
  const text = tempDiv.innerText || tempDiv.textContent;
  return text.replace(/\s+/g, ' ').trim();
}
