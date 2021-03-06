import Axios from 'axios'

class TriviaService {
  constructor() {
    this.client = new Axios.create({
      baseURL: 'http://jservice.io/api'
    })
  }

  getRandomTrivias(triviaCategoryId) {
    return this.client.get('/random', {
      params: { count: 30, category: triviaCategoryId }
    })
  }

  getTriviaCategories(numberOfCategories = 10) {
    return this.client.get('/categories', {
      params: {
        count: numberOfCategories
      }
    })
  }
}

export const triviaService = new TriviaService() 