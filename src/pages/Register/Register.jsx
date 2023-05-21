import { Section } from 'components/Section/Section';
import { Title } from 'components/Title/Title';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export const Register = () => {
  return (
    <Section>
      <Title>Sign up to continue</Title>

      <RegisterForm />
    </Section>
  );
};
