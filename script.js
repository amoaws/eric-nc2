function switchTab(event, tabId) {
  // Hide all tab contents
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  // Remove active state from all buttons
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Show target tab and mark button as active
  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}
