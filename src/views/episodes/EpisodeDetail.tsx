import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useGetEpisodeQuery } from '../../api/services/episodes/episodeService';
import CharacterSpecificList from '../../components/characters/CharacterSpecificList';
import PageLayout from '../layouts/PageLayout';

const EpisodeDetail: FC<RouteComponentProps<{ id?: string | undefined }>> = (props) => {
  const { match } = props;
  const { id } = match.params;
  const { data: episode } = useGetEpisodeQuery({ id });

  const getCharacterIds = (characters?: string[]) =>
    characters?.map((item: string) => {
      const itemSplit = item?.split('/');

      return itemSplit[itemSplit.length - 1];
    });

  return (
    <PageLayout title={episode?.name} subTitle={episode?.episode}>
      <CharacterSpecificList ids={getCharacterIds(episode?.characters)} />
    </PageLayout>
  );
};

export default EpisodeDetail;
