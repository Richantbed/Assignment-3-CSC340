function updateClock() {
    const clockElement = document.getElementById('clock');

    const now = new Date();

    const year = now.getFullYear();
    const month = now.toLocaleString('default', { month: 'short' });
    const day = String(now.getDate()).padStart(2, '0');
    const weekday = now.toLocaleString('default', { weekday: 'short' });
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedTime = `${weekday}, ${month} ${day}, ${year} ${hours}:${minutes}:${seconds}`;

    clockElement.textContent = formattedTime;
}

setInterval(updateClock, 1000);
updateClock();