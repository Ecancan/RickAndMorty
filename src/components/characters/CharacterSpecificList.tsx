import { SearchBar } from '@ecancan/react-generic-search-bar';
import React, { FC, useEffect, useState } from 'react';
import { Character } from '../../api/services/characters/characterInterface';
import { useLazyGetSpecificCharactersQuery } from '../../api/services/characters/characterService';
import CharacterCard from './character-components/CharacterCard';

const CharacterSpecificList: FC<{ ids?: Array<string> }> = (props) => {
  const { ids } = props;
  const [getCharacters, { data: results }] = useLazyGetSpecificCharactersQuery();
  const [characters, setCharacters] = useState<Character[] | undefined>(undefined);

  useEffect(() => {
    ids &&
      getCharacters({ ids })
        .unwrap()
        .then((response) => setCharacters(response));
  }, [ids]);

  return (
    <div className={'flex flex-col'}>
      <SearchBar<Character>
        items={results}
        placeholderText={'Search and filter. Eg. /gender:male /species:alien ...'}
        onResult={(_items) => setCharacters(_items)}
      />
      <div className={'w-full xl:columns-3 md:columns-3 sm:columns-2 columns-1'}>
        {characters?.map((item, index) => (
          <CharacterCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CharacterSpecificList;
