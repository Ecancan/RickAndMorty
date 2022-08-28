export interface CharacterGetRequest {
  query?: {
    page?: string;
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: 'female' | 'male' | 'genderless' | 'unknown';
  };
}

export interface CharacterSpecificGetRequest {
  ids?: string[];
}

export interface CharacterDetailGetRequest {
  id?: string;
}

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode?: Array<string>;
  url: string;
  created: string;
}

export interface Characters {
  info: Info;
  results: Array<Character>;
}
