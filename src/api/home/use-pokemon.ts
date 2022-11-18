import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { getQueryKey, pokemonList } from '../common';
import type { PokemonRootType } from './types';

type Response = PokemonRootType;

function getPokemon(pokemonName: string): Promise<Response> {
  return pokemonList({ url: `/${pokemonName}`, method: 'GET' }).then(
    (response) => response.data
  );
}
export function usePokemon(
  pokemonName: string,
  config?: UseQueryOptions<Response, AxiosError>
) {
  const queryKey = getQueryKey(pokemonName);
  return useQuery<Response, AxiosError>(
    queryKey,
    () => getPokemon(pokemonName),
    config
  );
}
