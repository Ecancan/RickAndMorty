import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../../../api/services/characters/characterInterface';

type CharacterCardProps = Character;

const EpisodeCard: FC<CharacterCardProps> = (props) => {
  const { id, name, image } = props;

  return (
    <Link to={`/characters/${id}`}>
      <div
        className={
          'w-full bg-slate-800 rounded-md mb-3 p-6 hover:drop-shadow-xl hover:duration-200 break-inside-avoid '
        }
      >
        <img className={'w-full rounded-md mb-3'} src={image} alt={name} />
        <h2 className={'text-2xl text-gray-200 font-medium'}>{name}</h2>
      </div>
    </Link>
  );
};

export default EpisodeCard;
