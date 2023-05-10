import { Section } from 'shared/Section';
import { Title } from 'shared/Title';
import { NewsList } from 'components/NewsList/NewsList';
import { FilterNews } from 'components/FilterNews/FilterNews';

export const News = () => {
  return (
    <Section>
      <Title>News</Title>
      <FilterNews />
      <NewsList />
    </Section>
  );
};
