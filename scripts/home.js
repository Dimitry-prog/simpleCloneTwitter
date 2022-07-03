const darkModeButton = document.querySelector('.dark-mode__button');
const darkModeWrapper = document.querySelector('.dark-mode__wrapper');
const pageElement = document.querySelector('.page');
const headerHome = document.querySelector('.page__home');
const mainHome = document.querySelector('.main__home');
const mainContent = document.querySelector('.main__content');
const sidebarContent = document.querySelector('.sidebar__content');
const sidebarInfo = document.querySelector('.sidebar-info');

const headerAccount = document.querySelector('.header__account');
const accountInfo = document.querySelector('.account-info');
const closeAccountInfoSidebar = document.querySelector('.account-info__svg_close');

const addPost = document.querySelector('.button__post');

const pageHomePopUpPost = document.querySelector('.page__home-pop-up');
const pageHomePopUpPostWrapper = document.querySelector('.pop-up__wrapper');
const closePageHomePopUpPost = document.querySelector('.pop-up__svg_close');

const logOut = document.querySelector('.log-out');

darkModeWrapper.addEventListener('click', function() {
  darkModeWrapper.classList.toggle('dark-mode__wrapper_active');
  darkModeButton.classList.toggle('dark-mode__button_active');
  pageElement.classList.toggle('dark-theme__background');
  mainHome.classList.toggle('dark-theme__background');
  headerHome.classList.toggle('dark-theme');
  mainContent.classList.toggle('dark-theme');
  sidebarContent.classList.toggle('dark-theme');
  accountInfo.classList.toggle('dark-theme');
  pageHomePopUpPostWrapper.classList.toggle('dark-theme');
});


function blockSidebarInfo() {
  sidebarInfo.classList.toggle('sidebar-info_opened');
  accountInfo.classList.toggle('account-info_opened');
}

headerAccount.addEventListener('click', blockSidebarInfo);

sidebarInfo.addEventListener('click', function(event) {
  if (event.target === sidebarInfo) {
    blockSidebarInfo();
  }
});

closeAccountInfoSidebar.addEventListener('click', blockSidebarInfo);

addPost.addEventListener('click', function() {
  blockPopUpPost();
});

function blockPopUpPost() {
  pageHomePopUpPost.classList.toggle('pop-up_opened');
  pageHomePopUpPostWrapper.classList.toggle('pop-up__wrapper_opened');
}
pageHomePopUpPost.addEventListener('click', function(event) {
  if (event.target === pageHomePopUpPost) {
    blockPopUpPost();
  }
});
closePageHomePopUpPost.addEventListener('click', blockPopUpPost);

logOut.addEventListener('click', function() {
  localStorage.removeItem('userLogin');
  window.location.assign('./authorization.html');
});
