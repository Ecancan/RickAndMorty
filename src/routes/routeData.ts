import { LoadableComponent } from '@loadable/component';
import { RouteComponentProps } from 'react-router-dom';
import loadableUtil from '../utils/loadableUtil';

export const Episodes = loadableUtil(() => import(/* webpackChunkName: 'episodes' */ '../views/episodes/Episodes'));
export const EpisodeDetail = loadableUtil(
  () => import(/* webpackChunkName: 'episode-detail' */ '../views/episodes/EpisodeDetail')
);
export const Characters = loadableUtil(
  () => import(/* webpackChunkName: 'characters' */ '../views/characters/Characters')
);
export const CharacterDetail = loadableUtil(
  () => import(/* webpackChunkName: 'character-detail' */ '../views/characters/CharacterDetail')
);

export interface RouteProps {
  path: string;
  exact?: boolean;
  name: string;
  component: LoadableComponent<RouteComponentProps>;
}

export const routes: RouteProps[] = [
  {
    path: '/episodes/:id',
    name: 'EpisodeDetail',
    component: EpisodeDetail
  },
  {
    path: '/characters/:id',
    name: 'CharacterDetail',
    component: CharacterDetail
  },
  {
    path: '/episodes',
    exact: true,
    name: 'Episodes',
    component: Episodes
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters
  }
];
export default routes;
