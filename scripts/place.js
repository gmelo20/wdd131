const temperatureC = 10;
const windSpeedKmh = 20;

const tempEl = document.getElementById("temperature");
const windSpeedEl = document.getElementById("windSpeed");
const windChillEl = document.getElementById("windChill");
const currentYearEl = document.getElementById("currentYear");
const lastModifiedEl = document.getElementById("lastModified");

function calculateWindChill(temp, windSpeed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

function displayWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        const chill = calculateWindChill(temp, windSpeed).toFixed(1);
        windChillEl.textContent = chill + "°C";
    } else {
        windChillEl.textContent = "N/A";
    }
}

function updateFooterInfo() {
    const date = new Date();
    currentYearEl.textContent = date.getFullYear();
    lastModifiedEl.textContent = document.lastModified;
}

window.addEventListener("DOMContentLoaded", () => {
    displayWindChill(temperatureC, windSpeedKmh);
    updateFooterInfo();
});
