import CONFIG from '../../globals/config';

const restaurantItemTemplate = (restaurant, index, lastIndex) => {
  const firstBox = (numbIndex) => numbIndex === 0 && lastIndex % 2 !== 0;

  return `
  <div class="card ${firstBox(index) ? 'box-ganjil' : ''}">
    <a href="#/detail/${restaurant.id}">
      <div class="img-container">
        <img class="img-resto-home" alt="image ${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" crossorigin="anonymous"/>
        <span class="card-title"><p>${restaurant.name} - ${restaurant.city}</p></span>
        <span class="card-rating">
          <i title="ratings" class="fa fa-star"></i>
          <span>${restaurant.rating}</span>
        </span>
      </div>
      <div class="card-content">
          <p class="card-content-title">Description :</p>
          <p class="truncate${firstBox(index) ? '2' : ''}">${restaurant.description}</p>
      </div>
    </a>
  </div>
  `;
};

const restaurantDetailTemplate = (detail) => `
  <div class="detail">
    <div>
      <div>
        <img class="img-res-detail" alt="image ${detail.name}" src="${
  CONFIG.BASE_IMAGE_URL + detail.pictureId
}" crossorigin="anonymous"/>
      </div>
    </div>
    <ul class="detail-info">
      <li><span><b>Nama</b> : &emsp;${detail.name}</span></li>
      <li><span><b>Alamat</b> : &emsp;${detail.address}, ${
  detail.city
}</span></li>
      <li><span>Rating : &emsp;<i title="ratings" class="fa fa-star"></i>${detail.rating}</span></li>
      <li><p class="truncate2"><b>Description</b> : ${detail.description}</p></li>
      <li><b>Kategori Makanan</b> : &emsp; ${detail.categories
    .map(
      (category) => `
             <span class="category">${category.name}</span>
          `,
    )
    .join('')}
      </li>
    </ul>
    <h3>Menu</h3>
    <div class="detail-menu grid-2">
      <div class="detail-food">
        <h4>Food</h4>
        <ul>
          ${detail.menus.foods
    .map(
      (food) => `
                <li>${food.name}</li>
              `,
    )
    .join('')}
        </ul>
      </div>
      <div class="detail-drink">
        <h4>Drink</h4>
        <ul>
          ${detail.menus.drinks
    .map(
      (drink) => `
                <li>${drink.name}</li>
              `,
    )
    .join('')}
        </ul>
      </div>
    </div>
    <h3 class="title-review">Reviews</h3>
    <div class="detail-review grid-3">
    ${detail.customerReviews
    .map(
      (review) => `
          <div class="detail-review-item">
            <div class="review-header">
              <p class="review-name"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em;"></i>&nbsp;${review.name}</p>
              <p class="review-date">${review.date}</p>
            </div>
            <div class="review-body">
              ${review.review}
            </div>
          </div>
        `,
    )
    .join('')}
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  restaurantItemTemplate, restaurantDetailTemplate, createLikeButtonTemplate,
  createLikedButtonTemplate,
};
