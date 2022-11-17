import Config from '@config';
import axios from 'axios';
export const client = axios.create({
  baseURL: Config.API_URL.pokemonList,
});

export const pokemonListType = axios.create({
  baseURL: Config.API_URL.pokemonListTypes,
});

export const pokemonList = axios.create({
  baseURL: Config.API_URL.pokemonList,
});
