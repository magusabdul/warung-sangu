import API_ENDPOINT from '../globals/api-endpoint';

class RestoDbSource {
  static async listResto() {
    const response = await fetch(API_ENDPOINT.LIST);
    return response.json();
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async postRestaurant(data) {
    const rawResponse = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return rawResponse;
  }
}

export default RestoDbSource;
