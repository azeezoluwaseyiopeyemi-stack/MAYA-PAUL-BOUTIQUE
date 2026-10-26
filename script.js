// Maya Paul Boutique concept demo.
// Replace the placeholder number below with the owner's approved WhatsApp number before publishing.
const WHATSAPP_NUMBER = ""; // International digits only, e.g. 2348012345678

const toast = document.getElementById("toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}
function openWhatsApp(message) {
  if (!WHATSAPP_NUMBER) {
    showToast("Demo mode: add the boutique's approved WhatsApp number in assets/script.js to enable enquiries.");
    return;
  }
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
document.querySelectorAll("[data-product]").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.dataset.product || "a product";
    const price = button.dataset.price ? ` (${button.dataset.price})` : "";
    if (button.classList.contains("quick-view")) {
      showToast(`${product}${price} — sample concept product. Use the enquiry button for details.`);
    } else {
      openWhatsApp(`Hello, I'd like to enquire about ${product}${price} from the Maya Paul Boutique website concept. Please confirm availability and current pricing.`);
    }
  });
});
document.getElementById("generalEnquiry").addEventListener("click", () => {
  openWhatsApp("Hello, I'd like to enquire about the collection shown on the Maya Paul Boutique website concept. Please share current products and prices.");
});
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));
document.getElementById("year").textContent = new Date().getFullYear();
