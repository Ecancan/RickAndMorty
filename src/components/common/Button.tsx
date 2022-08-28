import React, { FC } from 'react';

const Button: FC<{ label: string; onClick: () => void }> = (props) => {
  const { label, onClick } = props;

  return (
    <button className={'bg-slate-700 px-5 py-2 rounded-md'} onClick={onClick}>
      <span className={'text-xl text-slate-200'}>{label}</span>
    </button>
  );
};

export default Button;
