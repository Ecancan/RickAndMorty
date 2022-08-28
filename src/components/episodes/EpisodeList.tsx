import React, { FC, useEffect } from 'react';
import { useLazyGetEpisodesQuery } from '../../api/services/episodes/episodeService';
import usePagination from '../../hooks/usePagination';
import Button from '../common/Button';
import EpisodeCard from './episode-components/EpisodeCard';

const EpisodeList: FC<{ page?: string }> = (props) => {
  const { page } = props;
  const [getEpisodes, { data: episodes }] = useLazyGetEpisodesQuery();
  const results = episodes?.results;
  const { pageNumber, pagination } = usePagination({
    defaultPageNumber: Number(page) || 1,
    maxPageNumber: Number(episodes?.info?.pages || 1)
  });

  useEffect(() => {
    pageNumber && getEpisodes({ query: { page: pageNumber.toString() } });
  }, [pageNumber]);

  return (
    <div className={'flex flex-col w-full'}>
      <div className={'w-full xl:columns-3 md:columns-3 sm:columns-2 columns-1'}>
        {results?.map((item, index) => (
          <EpisodeCard key={index} {...item} airDate={item.air_date} />
        ))}
      </div>
      <div className={'flex flex-row justify-between py-6'}>
        <Button label={'Prev'} onClick={() => pagination({ direction: 'prev' })} />
        <Button label={'Next'} onClick={() => pagination({ direction: 'next' })} />
      </div>
    </div>
  );
};

export default EpisodeList;
