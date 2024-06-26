// For form modal
const modal = document.querySelector('.form-modal');
const overlay = document.querySelector('.contact-us-form-overlay');
const body = document.getElementById('body');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  body.classList.add('modal-settings');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  body.classList.remove('modal-settings');
};

overlay.addEventListener('click', closeModal);

// For Project card
document.addEventListener('DOMContentLoaded', () => {
  const articles = document.querySelectorAll(
    '.project-card-container > article'
  );
  const projectImage = document.getElementById('project-image');

  articles.forEach((article) => {
    article.addEventListener('click', () => {
      // Remove active class from all articles
      articles.forEach((a) => a.classList.remove('active'));

      // Add active class to the clicked article
      article.classList.add('active');

      // Change the image
      const newImgSrc = article.getAttribute('data-img');
      projectImage.src = newImgSrc;
    });
  });
});

// For carousel
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.services-carousel');
  const buttons = document.querySelectorAll('.carousel-btn');

  let currentIndex = 0;

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      carousel.style.transform = `translateX(-${index * 400}px)`;

      buttons[currentIndex].classList.remove('active');
      button.classList.add('active');

      currentIndex = index;
    });
  });
});
