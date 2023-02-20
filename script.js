// Footer starts

// UTC time
function displayUTCTime() {
  var utcTime = new Date().toISOString();
  document.getElementById("utc-time").textContent = utcTime;
}
setInterval(displayUTCTime, 1000);

// Visit counter
let visitCount = localStorage.getItem("visitCount") || 0;
visitCount++;
localStorage.setItem("visitCount", visitCount);
document.getElementById("visit-count").textContent = visitCount;

// Footer Ends
