import { Section } from 'shared/Section';
import { Title } from 'shared/Title';
import { LoginForm } from 'components/LoginForm/LoginForm';

export const Login = () => {
  return (
    <Section>
      <Title>Sign in to continue</Title>

      <LoginForm />
    </Section>
  );
};
