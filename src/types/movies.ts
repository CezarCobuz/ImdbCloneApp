export type Movie = {
  id: number;
  title: string;
  year: string;
  duration: string;
  genres: string[];
  director: string;
  /** All actors are in one description string */
  actors: string;
  plot: string;
  posterUrl: string;
};

export type MovieCarousel = {
  title: string;
  items: Movie[];
};

/**
 * Aligned with API format
 * https://raw.githubusercontent.com/24i/smartapps-test/main/data.json
 */
export type MovieCarouselData = {
  carousels: MovieCarousel[];
};
