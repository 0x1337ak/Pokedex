import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { getQueryKey, pokemonList } from '../common';
type pokemon = { name: string; url: string };
type Response = pokemon[];

function getPokemonList(): Promise<Response> {
  return pokemonList({ url: '?offset=0&limit=9999', method: 'GET' }).then(
    (response) => response.data.results
  );
}

export function usePokemonList(config?: UseQueryOptions<Response, AxiosError>) {
  const queryKey = getQueryKey('pokemonList');
  return useQuery<Response, AxiosError>(queryKey, getPokemonList, config);
}
