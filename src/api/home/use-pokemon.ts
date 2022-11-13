import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { getQueryKey, pokemonListType } from '../common';
type pokemonType = { name: string; url: string };
type Response = pokemonType[];

export function getPokemonListTypes(): Promise<Response> {
  return pokemonListType({ url: '?offset=0&limit=20', method: 'GET' }).then(
    (response) => response.data.results
  );
}

export function usePokemonListType(
  config?: UseQueryOptions<Response, AxiosError>
) {
  const queryKey = getQueryKey('pokemonListTypes');
  return useQuery<Response, AxiosError>(queryKey, getPokemonListTypes, config);
}
