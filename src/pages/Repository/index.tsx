/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import RepositoryParams from '../../model/IRepositoryParams';
import api from '../../services/api';
import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';
import IRepository from '../../model/IRepository';
import IssuesInterface from '../../model/IIssues';

interface RepositoryResponse extends IRepository {
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  const [repository, setRepository] = useState<RepositoryResponse | null>(null);
  const [issues, setIssues] = useState<IssuesInterface[]>([]);

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    });

    api
      .get(`repos/${params.repository}/issues?page=1&per_page=3`)
      .then((response) => {
        setIssues(response.data);
      });

    // async function loadData(): Promise<void> {
    //   const [repositoryResposne, issuesResponse] = await Promise.all([
    //     api.get(`repos/${params.repository}`),
    //     api.get(`repos/${params.repository}/issues`),
    //   ]);
    // }
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github EXplorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      {repository ? (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues Abertos</span>
            </li>
          </ul>
        </RepositoryInfo>
      ) : (
        <p>carregando...</p>
      )}
      <Issues>
        {issues.map((issue) => (
          <a
            key={issue.id}
            href={issue.html_url}
            target="_blank"
            rel="nofollow noreferrer noopener external"
          >
            <div>
              <strong>{issue.title}</strong>
              <p>{`Criado por: ${issue.user.login}`}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
