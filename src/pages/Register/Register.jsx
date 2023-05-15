import { Section } from 'shared/Section';
import { Title } from 'shared/Title';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export const Register = () => {
  return (
    <Section>
      <Title>Sign up to continue</Title>

      <RegisterForm />
    </Section>
  );
};
