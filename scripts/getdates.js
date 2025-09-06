document.getElementById("currentyear").textContent = new Date().getFullYear();

const lm = document.getElementById("lastModified");
if (lm) {
  const last = document.lastModified ? new Date(document.lastModified) : new Date();
  const formatted = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(last);
  lm.textContent = `Last Modified: ${formatted}`;
}
