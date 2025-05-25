// Custom JavaScript functionality

// Example: handling the animated map click on the homepage
document.addEventListener('DOMContentLoaded', function() {
  const animMap = document.getElementById('animMap');
  if (animMap) {
    animMap.addEventListener('click', function() {
      window.location.href = 'map.html';
    });
  }
});