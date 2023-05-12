import { useState } from 'react';
import { useGetNewsQuery } from 'services/wiseAutoApi';
import { Section } from 'shared/Section';
import { Title } from 'shared/Title';
import { NewsList } from 'components/NewsList/NewsList';
import { FilterNews } from 'components/FilterNews/FilterNews';
import { Pagination } from 'components/Pagination/Pagination';

export const News = () => {
  const { data, error, isLoading } = useGetNewsQuery();
  const [filter, setFilter] = useState('');

  const handleFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const filtredNews = data?.result.filter(news =>
    news.title.toLowerCase().includes(filter.toLowerCase())
  );

  console.log(error);
  console.log(isLoading);

  return (
    <Section>
      <Title>News</Title>
      <FilterNews onChange={handleFilterChange} value={filter} />
      <NewsList data={filtredNews} />

      <Pagination />
    </Section>
  );
};
