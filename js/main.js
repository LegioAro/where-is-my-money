isResize('.header__img', '.header__wrapper', '.header__mob', 768);
isResize('.about__img', '.about__wrapper', '.about__mob', 850);

window.addEventListener('resize', () => {
  isResize('.header__img', '.header__wrapper', '.header__mob', 768);
  isResize('.about__img', '.about__wrapper', '.about__mob', 850);
});

//smooth

const scrollSmoothLinck = document.querySelectorAll('*[data-scroll-smooth]');

for (let elem of scrollSmoothLinck) {
  elem.addEventListener('click', function (e) {
    e.preventDefault();

    let blockID = elem.getAttribute('data-scroll-smooth');
    let top = document.getElementById(blockID).getBoundingClientRect().top;

    document.querySelector('html,body').scrollTo({
      top: top + window.pageYOffset - 100,
      behavior: 'smooth',
    });
  });
}

//modal

function isModal() {
  let modalBtns = document.querySelectorAll('.modal__btn');

  if (modalBtns.length > 0) {
    for (let modalBtn of modalBtns) {
      modalBtn.addEventListener('click', function () {
        let modalBtnData = modalBtn.getAttribute('data-modal-src');
        let modalWindow = document.querySelector(`*[data-modal-window="${modalBtnData}"]`);
        let body = document.querySelector('body');

        if (modalWindow) {
          modalWindow.classList.add('active');
          body.classList.add('lock');
        }
      });
    }
  }
}

function isModalClose() {
  let modalCloseBtns = document.querySelectorAll('.modal__btn-close');
  if (modalCloseBtns.length > 0) {
    for (let modalCloseBtn of modalCloseBtns) {
      modalCloseBtn.addEventListener('click', function () {
        let modalWindow = modalCloseBtn.closest('*[data-modal-window]');
        let body = document.querySelector('body');

        modalWindow.classList.remove('active');
        body.classList.remove('lock');
      });
    }
  }
}

isModal();
isModalClose();
