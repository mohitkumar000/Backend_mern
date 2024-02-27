function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    process.stdout.write('\x1B[2J\x1B[0f'); // Clear screen and move cursor to top-left corner
    process.stdout.write(`${hours}:${minutes}:${seconds}`);
}

setInterval(updateClock, 1000);
