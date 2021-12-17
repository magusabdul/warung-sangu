import { itActsAsFavoriteRestaurantModel } from './contract/favRestaurantContract';
import FavRestaurantIdb from '../src/scripts/data/favorite-resto-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavRestaurantIdb.getAllResto()).forEach(async (restaurant) => {
      await FavRestaurantIdb.deleteResto(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavRestaurantIdb);
});