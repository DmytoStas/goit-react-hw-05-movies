export default class MoviesAPIService {
  BASE_URL = 'https://api.themoviedb.org/3/';

  ACCESS_TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTNmNDQ0YzhjOTIzYjEwNGFiMzkzZDlmZmY0NzM3NSIsInN1YiI6IjY0NzUyYTBiYzI4MjNhMDBjNDIxNDA3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wJ9yqsOyNyT3w7GuPXqWWQIZSuAsjemKs2vv1aIwq24';

  REQUEST_OPTIONS = {
    headers: {
      Authorization: `Bearer ${this.ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
  };

  async getTrends() {
    const resp = await fetch(
      `${this.BASE_URL}trending/all/day`,
      this.REQUEST_OPTIONS
    );

    if (!resp.ok) {
      throw new Error();
    }

    return resp.json();
  }

  async getQuery(query) {
    const resp = await fetch(
      `${this.BASE_URL}search/movie?query=${query.trim()}`,
      this.REQUEST_OPTIONS
    );

    if (!resp.ok) {
      throw new Error();
    }

    return resp.json();
  }

  async getMovieDetails(movieID) {
    const resp = await fetch(
      `${this.BASE_URL}movie/${movieID}`,
      this.REQUEST_OPTIONS
    );

    if (!resp.ok) {
      throw new Error();
    }

    return resp.json();
  }

  async getMovieCredits(movieID) {
    const resp = await fetch(
      `${this.BASE_URL}movie/${movieID}/credits`,
      this.REQUEST_OPTIONS
    );

    if (!resp.ok) {
      throw new Error();
    }

    return resp.json();
  }

  async getMovieReviews(movieID) {
    const resp = await fetch(
      `${this.BASE_URL}movie/${movieID}/reviews`,
      this.REQUEST_OPTIONS
    );

    if (!resp.ok) {
      throw new Error();
    }

    return resp.json();
  }
}
