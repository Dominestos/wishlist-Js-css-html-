import { createElement } from './helper.js';
const nav = document.querySelector('.nav');
export const burger = createBurgerMenu(nav);
export const renderNavigation = () => {

  nav.textContent = '';

  // <button class="nav__btn btn">Зарегистрироваться</button>
  // <button class="nav__btn btn">Войти</button>

  const buttonSignUp = createElement('button', {
    className: "nav__btn btn",
    textContent: "Зарегистрироваться"
  });

  buttonSignUp.addEventListener('click', () => {
    console.log('Зарегистрироваться')
  })

  const buttonSignIn = createElement('button', {
    className: "nav__btn btn",
    textContent: "Войти"
  });

  buttonSignIn.addEventListener('click', () => {
    console.log('Войти')
  })

  nav.append(buttonSignUp, buttonSignIn);
}