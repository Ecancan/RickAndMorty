import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface EpisodeCardProps {
  id: number;
  name: string;
  airDate?: string;
  episode: string;
  characters: Array<string>;
  url?: string;
  created?: string;
}

const EpisodeCard: FC<EpisodeCardProps> = (props) => {
  const { id, name, airDate, episode, characters } = props;

  return (
    <Link to={`/episodes/${id}`}>
      <div
        className={
          'w-full bg-slate-800 rounded-md mb-3 p-6 hover:drop-shadow-xl hover:duration-200 break-inside-avoid '
        }
      >
        <h2 className={'text-2xl text-gray-200 font-medium'}>{name}</h2>
        <h4 className={'text-xl text-slate-400 font-medium'}>{episode}</h4>
        <div className={'w-full flex flex-row justify-between'}>
          <span className={'text-sm text-slate-600 font-normal'}>{airDate}</span>
          <span className={'text-sm text-slate-600 font-normal'}>Character Count: {characters?.length}</span>
        </div>
      </div>
    </Link>
  );
};

export default EpisodeCard;
