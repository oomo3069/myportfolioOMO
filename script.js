document.addEventListener('DOMContentLoaded', function() {
  const scrollBtn = document.querySelector('.scroll-down');
  const portfolioSection = document.querySelector('.portfolio-section');
  if (scrollBtn && portfolioSection) {
    scrollBtn.addEventListener('click', function() {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

    if (!localStorage.getItem('portfolioAlertShown')) {
    alert("Hello, welcome to my portfolio!🤓,This web have not responsive for mobile yet,💻 for experience you can use desktop or laptop to view this web,Thank you for your visit.👍");
    localStorage.setItem('portfolioAlertShown', 'true');
  }
}); 