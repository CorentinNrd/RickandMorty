import { defineStore } from 'pinia';
import axios from 'axios';

export interface Result {
  id: string;
  name: string;
  image: string;
}

export interface Characters {
  result: Result[];
  count: number;
  pages: number;
}

export const useCharactersStore = defineStore({
  id: 'characters',
  state: () =>
    ({
      result: [],
      count: 0,
      pages: 1,
    } as Characters),
  actions: {
    async fetchCharacters(currentPage: number) {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${currentPage}`
      );
      this.result = response.data.results;
      this.count = response.data.info.count;
      this.pages = response.data.info.pages;
    },
    async searchCharacters(search: string) {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${search}`
      );
      this.result = response.data.results;
      this.count = response.data.info.count;
      this.pages = response.data.info.pages;
    },
  },
});
