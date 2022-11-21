import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import restaurantsData from '../DATA.json';

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');
const posts = document.querySelector('.posts');

menu.addEventListener('click', function (event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', function () {
  drawer.classList.remove('open');
});

main.addEventListener('click', function () {
  drawer.classList.remove('open');
});

restaurantsData.restaurants.forEach(item => {
  posts.innerHTML += `
    <article class="post-item" id="${item.id}">
      <div class="post-item__thumbnail">
        <p class="post-item__city">Kota ${item.city}</p>
        <img class="post-item__image" src="${item.pictureId}" alt="${item.name} Restaurant">
      </div>
      <div class="post-item__content">
        <p class="post-item__rating">Rating: ${item.rating}</p>
        <h1 class="post-item__title"><a href="#">${item.name}</a></h1>
        <p class="post-item__description">${item.description}</p>
      </div>
    </article>
  `;
});