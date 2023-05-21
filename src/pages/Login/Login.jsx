import { Section } from 'components/Section/Section';
import { Title } from 'components/Title/Title';
import { LoginForm } from 'components/LoginForm/LoginForm';

export const Login = () => {
  return (
    <Section>
      <Title>Sign in to continue</Title>

      <LoginForm />
    </Section>
  );
};
