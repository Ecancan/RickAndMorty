export interface EpisodeGetRequest {
  query?: {
    page?: string | number;
    name?: string;
    episode?: string;
  };
}

export interface EpisodeSpecificGetRequest {
  ids?: string[];
}

export interface EpisodeDetailGetRequest {
  id?: string;
}

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<string>;
  url: string;
  created: string;
}

export interface Episodes {
  info: Info;
  results: Array<Episode>;
}
