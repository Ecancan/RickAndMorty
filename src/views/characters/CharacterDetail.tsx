import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useGetCharacterQuery } from '../../api/services/characters/characterService';
import Table from '../../components/common/Table';
import PageLayout from '../layouts/PageLayout';

const CharacterDetail: FC<RouteComponentProps<{ id?: string | undefined }>> = (props) => {
  const { match } = props;
  const { id } = match.params;
  const { data: character } = useGetCharacterQuery({ id });

  const characterProperties = [
    {
      name: 'Full Name',
      value: character?.name
    },
    {
      name: 'Status',
      value: character?.status
    },
    {
      name: 'Species',
      value: character?.species
    },
    {
      name: 'Gender',
      value: character?.gender
    },
    {
      name: 'Origin',
      value: character?.origin.name
    },
    {
      name: 'Location',
      value: character?.location.name
    }
  ];

  return (
    <PageLayout title={character?.name} subTitle={character?.status}>
      <div className={'flex xl:flex-row md:flex-row sm:flex-col flex-col w-full'}>
        <div className={'xl:w-1/4 xl:mr-2 xl:mb-0 md:w-1/2 md:mr-2 md:mb-0 sm:w-full sm:mr-0 w-full mr-0 mb-5'}>
          <img src={character?.image} className={'h-full w-full rounded-md'} alt={character?.name} />
        </div>
        <Table title={'Character Information'} items={characterProperties} />
      </div>
    </PageLayout>
  );
};

export default CharacterDetail;
