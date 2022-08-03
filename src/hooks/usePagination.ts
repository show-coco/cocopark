import { useState } from "react";

type Props = {
  maxPage: number;
};

export const PAGE_RANGE = 10;

export const usePagination = ({ maxPage }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const initialMaxDisplaedPage = maxPage > PAGE_RANGE ? PAGE_RANGE : maxPage;
  const [displayedPages, setDisplayedPages] = useState<number[]>(
    rangeArray(1, initialMaxDisplaedPage)
  );

  const next = () => {
    if (currentPage < maxPage) {
      const page = currentPage + 1;
      setCurrentPage(page);
      setDisplayedPage(page);
    }
  };

  const back = () => {
    if (currentPage > 1) {
      const page = currentPage - 1;
      setCurrentPage(page);
      setDisplayedPage(page);
    }
  };

  const setPage = (page: number) => {
    if (page <= maxPage && page >= 1) {
      setCurrentPage(page);
      setDisplayedPage(page);
    }
  };

  const setDisplayedPage = (page: number) => {
    let min = 1;
    let max = PAGE_RANGE;

    const rangeIsOdd = PAGE_RANGE % 2 === 1;
    const range = rangeIsOdd ? PAGE_RANGE - 1 : PAGE_RANGE;

    const isOverHalf = page > range / 2;
    if (isOverHalf) {
      min = page - range / 2;
      max = page + range / 2;
    }

    const isOverMaxPage = max > maxPage;
    if (isOverMaxPage) {
      max = maxPage;
    }

    setDisplayedPages(rangeArray(min, max));
  };

  return {
    currentPage,
    next,
    back,
    setPage,
    displayedPages,
  };
};

const rangeArray = (start: number, stop: number, step = 1) =>
  Array(Math.ceil((stop + 1 - start) / step))
    .fill(start)
    .map((x, y) => x + y * step);
