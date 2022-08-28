import { useState } from 'react';
import { DIRECTION } from '../common/constants/constant';

const usePagination = ({ defaultPageNumber, maxPageNumber }: { defaultPageNumber: number; maxPageNumber: number }) => {
  const [pageNumber, setPageNumBer] = useState(defaultPageNumber || 1);

  const pagination = ({ direction }: { direction: 'next' | 'prev' }) => {
    if (maxPageNumber > pageNumber && direction === DIRECTION.NEXT) {
      setPageNumBer(pageNumber + 1);
    } else if (pageNumber !== 1 && direction === DIRECTION.PREV) {
      setPageNumBer(pageNumber - 1);
    }
  };

  return {
    pageNumber,
    pagination
  };
};

export default usePagination;
