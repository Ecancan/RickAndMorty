import React, { FC } from 'react';

const MyComponent: FC<{ title: string; subTitle?: string }> = (props) => {
  const { title, subTitle } = props;

  return (
    <div className={'mb-5'}>
      <h1 className={'text-gray-200 font-bold text-5xl'}>{title}</h1>
      {subTitle && <p className={'font-normal text-xl text-slate-600 font-medium'}>{subTitle}</p>}
    </div>
  );
};

export default MyComponent;
