import React, { FC } from 'react';

interface Item {
  name: string;
  value?: string;
}

interface TableProps {
  title: string;
  items: Array<Item>;
}

const Table: FC<TableProps> = (props) => {
  const { title, items } = props;

  return (
    <div
      className={
        'w-full bg-slate-800 shadow overflow-hidden sm:rounded-lg flex flex-1 flex-col xl:ml-2 md:ml-2 sm:ml-0 ml-0'
      }
    >
      <div className={'px-4 py-5 sm:px-6'}>
        <h3 className={'text-lg leading-6 font-medium text-slate-100'}>{title}</h3>
      </div>
      <div className={'border-slate-200'}>
        <dl>
          {items.map((item, index) => (
            <div key={index} className={'bg-slate-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'}>
              <dt className={'text-sm font-medium text-slate-300'}>{item.name}</dt>
              <dd className={'mt-1 text-sm text-slate-100 sm:mt-0 sm:col-span-2'}>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Table;
