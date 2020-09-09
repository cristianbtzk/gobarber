import React from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="text" placeholder="Email" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="a">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
