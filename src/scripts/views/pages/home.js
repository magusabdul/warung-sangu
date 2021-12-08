import RestoDbSource from '../../data/restodb-source';
import { restaurantItemTemplate } from '../templates/template-html';
import Spinner from '../templates/spinner-html';

const Home = {
  async render() {
    return `
      <div class="hero">
      <div tabindex="0" class="hero__inner">
        <h1 class="hero__title">Warung Sangu</h1>
        <p class="hero__tagline">
          Sebuah makanan yang baik dan lezat dibuat oleh Restoran terbaik!
        </p>
        <a href="#container" class="btn-content">Start now!</a>
      </div>
    </div>
      <div class="container" id="container">
      <div id="loading"></div>
      <div class="main">
        <h2 class="title-container">List Restaurant</h2>
        <section id="list-rest"></section>
      </div>
    </div>
      `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const main = document.querySelector('.main');
    loading.innerHTML = Spinner();
    main.style.display = 'none';
    const listContainer = document.querySelector('#list-rest');

    try {
      const data = await RestoDbSource.listResto();
      const totalRest = data.restaurants.length;
      data.restaurants.forEach((restaurant, index) => {
        listContainer.innerHTML += restaurantItemTemplate(restaurant, index, totalRest);
      });
      main.style.display = 'block';
      loading.style.display = 'none';
    } catch (err) {
      main.style.display = 'block';
      loading.style.display = 'none';
      listContainer.innerHTML = `Error: ${err}, refresh your this web!`;
    }
  },
};

export default Home;
