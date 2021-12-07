import FavoriteRestoIdb from '../data/favorite-resto-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-html';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, data }) {
    this.initiator_likeButtonContainer = likeButtonContainer;
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
    const resto = await FavoriteRestoIdb.getResto(id);
    return !!resto;
  },

  initiator_renderLike() {
    this.initiator_likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButtonContainer');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this.initiator_resto);
      this.initiator_renderButton();
    });
  },

  initiator_renderLiked() {
    this.initiator_likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButtonContainer');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this.initiator_resto.id);
      this.initiator_renderButton();
    });
  },
};

export default LikeButtonInitiator;
