import { API_SERVICE_METHOD } from '../../../common/constants/apiServiceMethods';
import { ENDPOINTS } from '../../endpoints';
import { baseApi } from '../apiService';
import {
  Episode,
  EpisodeDetailGetRequest,
  EpisodeGetRequest,
  Episodes,
  EpisodeSpecificGetRequest
} from './episodeInterface';

export const episodeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEpisodes: builder.query<Episodes, EpisodeGetRequest>({
      query: ({ query }) => ({ url: `${ENDPOINTS.EPISODE}`, method: API_SERVICE_METHOD.GET, data: { params: query } })
    }),
    getSpecificEpisodes: builder.query<Episode[], EpisodeSpecificGetRequest>({
      query: ({ ids }) => ({
        url: `${ENDPOINTS.EPISODE}${ids ? '/' + ids.join(',') : '/'}`,
        method: API_SERVICE_METHOD.GET
      })
    }),
    getEpisode: builder.query<Episode, EpisodeDetailGetRequest>({
      query: ({ id }) => ({ url: `${ENDPOINTS.EPISODE}/${id}`, method: API_SERVICE_METHOD.GET })
    })
  })
});

export const {
  useGetEpisodesQuery,
  useLazyGetEpisodesQuery,
  useLazyGetSpecificEpisodesQuery,
  useGetSpecificEpisodesQuery,
  useGetEpisodeQuery
} = episodeApi;
