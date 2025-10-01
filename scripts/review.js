let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);
document.getElementById("counter").textContent = `Total reviews submitted: ${reviewCount}`;
