import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import RepositoryParams from '../../model/IRepositoryParams';
import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github EXplorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/29528381?s=460&u=4afc1ff18c897786e2a4fd76787b1770ace98345&v=4"
            alt="Navas"
          />
          <div>
            <strong>Navas teste</strong>
            <p>Navas teste</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues Abertos</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="aSDASDASD">
          <div>
            <strong>asdaksjdfsidjfsd</strong>
            <p>asndiajsdiajsd</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
