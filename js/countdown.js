const eventDate = new Date("September 23, 2023 10:00:00").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const timeRemaining = eventDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
};

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display the correct countdown immediately
updateCountdown();
