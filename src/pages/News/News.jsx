import { useState } from 'react';
import { useGetNewsQuery } from 'services/wiseAutoApi';
import { Section } from 'components/Section/Section';
import { Title } from 'components/Title/Title';
import { NewsList } from 'components/NewsList/NewsList';
import { FilterNews } from 'components/FilterNews/FilterNews';
import { Pagination } from 'components/Pagination/Pagination';
import { scrollToTop } from 'utils/scrollToTop';
import { Loader } from 'components/Loader/Loader';
import { ErrorMsg } from 'components/ErrorMsg/ErrorMsg';

export const News = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const { data, error, isLoading } = useGetNewsQuery(page);

  const handleFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
    scrollToTop();
  };

  const filtredNews = data?.result.filter(news =>
    news.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Section>
      <Title>News</Title>
      <FilterNews onChange={handleFilterChange} value={filter} />
      {isLoading && <Loader size={60} />}
      {error && <ErrorMsg />}

      {!isLoading && !error && (
        <>
          <NewsList data={filtredNews} />
          <Pagination onChange={handleChangePage} page={page} totalHits={data?.totalHits} />
        </>
      )}
    </Section>
  );
};
