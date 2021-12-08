import RestoDbSource from '../../data/restodb-source';
import { restaurantItemTemplate } from '../templates/template-html';
import Spinner from '../templates/spinner-html';

const Home = {
  async render() {
    return `
      <hero-app></hero-app>                  
      <div class="container" id="container" tabindex="0">        
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
      listContainer.innerHTML = `Error: ${err}, refresh this web!`;
    }
  },
};

export default Home;
