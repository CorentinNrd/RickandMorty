import { defineStore } from 'pinia';
import axios from 'axios';

export interface Result {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  episode: [];
  origin: [];
  location: [];
}

export interface Details {
  result: Result;
}

export const useCharacterStore = defineStore({
  id: 'character',
  state: () =>
  ({
    result: {
      id: '',
      name: '',
      status: '',
      species: '',
      type: '',
      gender: '',
      image: '',
      episode: [],
      origin: [],
      location: [],
      },
    } as Details),
  actions: {
    async fetchCharacter(id: string) {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      console.log(response.data);
      this.result = response.data;
    },
  },
});
