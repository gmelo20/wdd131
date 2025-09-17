// Variáveis estáticas
const temperatureC = 10; // °C
const windSpeedKmh = 20; // km/h

// Seletores
const tempEl = document.getElementById("temperature");
const windSpeedEl = document.getElementById("windSpeed");
const windChillEl = document.getElementById("windChill");
const currentYearEl = document.getElementById("currentYear");
const lastModifiedEl = document.getElementById("lastModified");

// Função para calcular Wind Chill
function calculateWindChill(temp, windSpeed) {
    // Fórmula do fator de sensação térmica em Celsius
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

// Função para exibir Wind Chill baseado nas condições
function displayWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        const chill = calculateWindChill(temp, windSpeed).toFixed(1);
        windChillEl.textContent = chill + "°C";
    } else {
        windChillEl.textContent = "N/A";
    }
}

// Atualiza ano e última modificação
function updateFooterInfo() {
    const date = new Date();
    currentYearEl.textContent = date.getFullYear();
    lastModifiedEl.textContent = document.lastModified;
}

// Inicialização
window.addEventListener("DOMContentLoaded", () => {
    displayWindChill(temperatureC, windSpeedKmh);
    updateFooterInfo();
});

