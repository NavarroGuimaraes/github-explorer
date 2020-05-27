import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';
import api from '../../services/api';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>
      <Form>
        <input placeholder="Digite o repositório aqui" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/29528381?s=460&u=4afc1ff18c897786e2a4fd76787b1770ace98345&v=4"
            alt="Navarro Silva"
          />
          <div>
            <strong>TEste repositório</strong>
            <p> Testeeee uhuuuu!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
