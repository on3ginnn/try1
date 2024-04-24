const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

const swiperReview = new Swiper('.swiper_review', {
    speed: 400,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    slidesPerView: 3,

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});


document.addEventListener('click', clickEvent);


function clickEvent(event){
  if (event.target.closest('.filters__item')){
    let filterItem = event.target.closest('.filters__item');
    if (filterItem.className.includes("_active")){
      filterItem.classList.remove('_active');
      document.querySelectorAll(".cards__item").forEach(cardItem => cardItem.style.display = "block");

    } else {
      document.querySelectorAll(".filters__item").forEach(filterItem => filterItem.classList.remove('_active'));
      filterItem.classList.add('_active');
      document.querySelectorAll(".cards__item").forEach(cardItem => cardItem.style.display = cardItem.id === filterItem.id ? "block" : "none");

    }
  }
  if (event.target.closest('.modal_btn')) {
    let modalBtn = event.target.closest('.modal_btn');
    let modals = document.querySelector('.modals');
    document.querySelectorAll(".modal").forEach(modal => modal.classList.remove('_active'));

    let activateModal = modals.querySelector(`.modal#${modalBtn.id}`);
    modals.classList.add('_active');
    activateModal.classList.add('_active');
  }
  if (event.target.closest('.modal__quit')){
    let modals = document.querySelector('.modals');
    modals.classList.remove('_active');

    document.querySelectorAll(".modal").forEach(modal => modal.classList.remove('_active'));

  }
  if (event.target.closest('.theme-btn')){
    document.body.classList.toggle('dark_theme');
  }
  if (event.target.closest('.menu')){
    const menuBtn = event.target.closest('.menu');
    const navbar = document.querySelector('.navbar');
    menuBtn.classList.toggle('_active');
    navbar.classList.toggle('_active');
  }
}