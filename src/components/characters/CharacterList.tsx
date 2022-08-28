import React, { FC, useEffect } from 'react';
import { useLazyGetCharactersQuery } from '../../api/services/characters/characterService';
import usePagination from '../../hooks/usePagination';
import Button from '../common/Button';
import CharacterCard from './character-components/CharacterCard';

const CharacterList: FC<{ page?: string }> = (props) => {
  const { page } = props;
  const [getCharacters, { data: characters }] = useLazyGetCharactersQuery();
  const results = characters?.results;
  const { pageNumber, pagination } = usePagination({
    defaultPageNumber: Number(page) || 1,
    maxPageNumber: Number(characters?.info?.pages || 1)
  });

  useEffect(() => {
    pageNumber && getCharacters({ query: { page: pageNumber.toString() } });
  }, [pageNumber]);

  return (
    <div className={'flex flex-col w-full'}>
      <div className={'w-full xl:columns-3 md:columns-3 sm:columns-2 columns-1'}>
        {results?.map((item, index) => (
          <CharacterCard key={index} {...item} />
        ))}
      </div>
      <div className={'flex flex-row justify-between py-6'}>
        <Button label={'Prev'} onClick={() => pagination({ direction: 'prev' })} />
        <Button label={'Next'} onClick={() => pagination({ direction: 'next' })} />
      </div>
    </div>
  );
};

export default CharacterList;
