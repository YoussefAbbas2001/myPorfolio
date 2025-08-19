function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Enable dark mode by default
document.body.classList.add('dark-mode');
document.getElementById('dark-mode-toggle').textContent = '☀️';
if (document.getElementById('dark-mode-toggle-mobile')) {
    document.getElementById('dark-mode-toggle-mobile').textContent = '☀️';
}

// Toggle dark mode and icon
document.getElementById('dark-mode-toggle').onclick = function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    if (document.getElementById('dark-mode-toggle-mobile')) {
        document.getElementById('dark-mode-toggle-mobile').textContent = this.textContent;
    }
};

const mobileToggle = document.getElementById('dark-mode-toggle-mobile');
if (mobileToggle) {
    mobileToggle.onclick = function() {
        document.body.classList.toggle('dark-mode');
        this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
        document.getElementById('dark-mode-toggle').textContent = this.textContent;
    };
}