import { API_SERVICE_METHOD } from '../../../common/constants/apiServiceMethods';
import { ENDPOINTS } from '../../endpoints';
import { baseApi } from '../apiService';
import {
  Character,
  CharacterDetailGetRequest,
  CharacterGetRequest,
  Characters,
  CharacterSpecificGetRequest
} from './characterInterface';

export const characterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCharacters: builder.query<Characters, CharacterGetRequest>({
      query: ({ query }) => ({
        url: `${ENDPOINTS.CHARACTER}`,
        method: API_SERVICE_METHOD.GET,
        data: { params: query }
      })
    }),
    getSpecificCharacters: builder.query<Character[], CharacterSpecificGetRequest>({
      query: ({ ids }) => ({
        url: `${ENDPOINTS.CHARACTER}${ids ? '/' + ids.join(',') : '/'}`,
        method: API_SERVICE_METHOD.GET
      })
    }),
    getCharacter: builder.query<Character, CharacterDetailGetRequest>({
      query: ({ id }) => ({ url: `${ENDPOINTS.CHARACTER}/${id}`, method: API_SERVICE_METHOD.GET })
    })
  })
});

export const {
  useGetCharactersQuery,
  useLazyGetSpecificCharactersQuery,
  useGetCharacterQuery,
  useLazyGetCharactersQuery
} = characterApi;
