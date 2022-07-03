const pageModalAuthorization = document.querySelector('.page__authorization-modal')
const loginSubmitAuthorization = document.querySelector('.login__submit_authorization');
const closePageModalAuthorization = document.querySelector('.modal__svg_close');
const emailInput = document.querySelector('.login__email');
const passwordInput = document.querySelector('.login__password');


loginSubmitAuthorization.addEventListener('click', function(event) {
  event.preventDefault();
  if (emailInput.value === '' || passwordInput.value === '') {
    pageModalAuthorization.classList.add('modal__authorization_opened');
  } else {
    let userLogin = [];
    userLogin.push(emailInput.value);
    userLogin.push(passwordInput.value);
    localStorage.setItem('userLogin', JSON.stringify(userLogin));
    window.location.assign('./home.html');
  }
});

closePageModalAuthorization.addEventListener('click', function() {
  pageModalAuthorization.classList.remove('modal__authorization_opened');
});
