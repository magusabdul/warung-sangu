import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-html';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurant, data }) {
    this.initiator_likeButtonContainer = likeButtonContainer;
    this.idb_favoriteRestaurant = favoriteRestaurant;
    this.initiator_resto = data.restaurant;

    await this.initiator_renderButton();
  },

  async initiator_renderButton() {
    const { id } = this.initiator_resto;

    if (await this.initiator_isRestoExist(id)) {
      this.initiator_renderLiked();
    } else {
      this.initiator_renderLike();
    }
  },

  async initiator_isRestoExist(id) {
    const resto = await this.idb_favoriteRestaurant.getResto(id);
    return !!resto;
  },

  initiator_renderLike() {
    this.initiator_likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this.idb_favoriteRestaurant.putResto(this.initiator_resto);
      this.initiator_renderButton();
    });
  },

  initiator_renderLiked() {
    this.initiator_likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this.idb_favoriteRestaurant.deleteResto(this.initiator_resto.id);
      this.initiator_renderButton();
    });
  },
};

export default LikeButtonPresenter;
