// Cookie consent and deferred analytics for atyszka.org
// GA4 measurement ID: G-7D7W40Q8XE
// Consent preference is stored in localStorage under 'cookie-consent'.

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}

(function () {
  const consent = localStorage.getItem("cookie-consent");
  if (consent === "granted") {
    loadAnalytics();
  } else if (!consent) {
    document.addEventListener("DOMContentLoaded", showCookieBanner);
  }
})();

function loadAnalytics() {
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=G-7D7W40Q8XE";
  document.head.appendChild(s);
  gtag("js", new Date());
  gtag("config", "G-7D7W40Q8XE");
}

function showCookieBanner() {
  document.getElementById("cookie-banner").removeAttribute("hidden");
}

function acceptCookies() {
  localStorage.setItem("cookie-consent", "granted");
  document.getElementById("cookie-banner").setAttribute("hidden", "");
  loadAnalytics();
}

function declineCookies() {
  localStorage.setItem("cookie-consent", "declined");
  document.getElementById("cookie-banner").setAttribute("hidden", "");
}

function resetCookieConsent() {
  localStorage.removeItem("cookie-consent");
  showCookieBanner();
}
