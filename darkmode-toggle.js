// Dark mode toggle
document.addEventListener('DOMContentLoaded', function() {
  const darkToggle = document.querySelector('.toggle-switch .checkbox');
  if (darkToggle) {
    // Init state from localStorage
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
      darkToggle.checked = true;
    } else {
      document.body.classList.remove('dark-mode');
      darkToggle.checked = false;
    }
    darkToggle.addEventListener('change', function() {
      if (this.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
      }
    });
  }
});
