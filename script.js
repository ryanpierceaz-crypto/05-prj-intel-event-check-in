// Get all needed DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const attendeeCount = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");
const greeting = document.getElementById("greeting");

// Track attendance
let count = 0;
const maxCount = 50;

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const team = teamSelect.value;

  if (!name || !team) {
    return;
  }

  const teamName = teamSelect.selectedOptions[0].text;

  count = count + 1;

  attendeeCount.textContent = String(count);

  const percentage = Math.min(Math.round((count / maxCount) * 100), 100);
  progressBar.style.width = percentage + "%";

  const teamCounter = document.getElementById(team + "Count");

  if (teamCounter !== null) {
    const current = parseInt(teamCounter.textContent, 10) || 0;
    const newTotal = current + 1;
    teamCounter.textContent = String(newTotal);
  }

  const message = `Welcome, ${name} from ${teamName}!`;
  greeting.textContent = message;
  greeting.classList.add("success-message");
  greeting.style.display = "block";

  form.reset();
});
