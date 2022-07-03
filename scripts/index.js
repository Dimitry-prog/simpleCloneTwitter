const loginButton = document.querySelector('.greetings__button_login');
const signUpButton = document.querySelector('.greetings__button_signup');
const emailInput = document.querySelector('.login__email');
const passwordInput = document.querySelector('.login__password');
const loginSubmitGreetings = document.querySelector('.login__submit_greetings');

const pageIndexModal = document.querySelector('.page__index-modal');

const modalTimer = document.querySelector('.modal__timer');
const closePageModalIndex = document.querySelector('.modal__svg_close');

loginButton.addEventListener('click', function() {
  emailInput.focus();
});

loginSubmitGreetings.addEventListener('click', function(event) {
  event.preventDefault();
  if (emailInput.value === '' || passwordInput.value === '') {
    console.log('wrong');
    pageIndexModal.classList.add('modal__index_opened');

    function timer() {
      let timerId = setTimeout(timer, 1000);
      modalTimer.textContent--;
      if (modalTimer.textContent < 1) {
        window.location.assign('./pages/authorization.html');
        clearTimeout(timerId);
      }
      closePageModalIndex.addEventListener('click', function() {
        pageIndexModal.classList.remove('modal__index_opened');
        clearTimeout(timerId);
        modalTimer.textContent = 11;
      });
    }
    timer();
  } else {
    let userLogin = [];
    userLogin.push(emailInput.value);
    userLogin.push(passwordInput.value);
    localStorage.setItem('userLogin', JSON.stringify(userLogin));
    window.location.assign('./pages/home.html');
  }
});

signUpButton.addEventListener('click', function() {
  window.location.assign('./pages/authorization.html');
})
