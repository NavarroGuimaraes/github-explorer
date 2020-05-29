/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiChevronDown } from 'react-icons/fi';
import Loader from 'react-loader-spinner';
import RepositoryParams from '../../model/IRepositoryParams';
import api from '../../services/api';
import {
  Header,
  RepositoryInfo,
  Issues,
  LoadMoreButtons,
  DivLoader,
} from './styles';
import logoImg from '../../assets/logo.svg';
import IRepository from '../../model/IRepository';
import IssuesInterface from '../../model/IIssues';

interface RepositoryResponse extends IRepository {
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

const Repository: React.FC = () => {
  // Variables
  const { params } = useRouteMatch<RepositoryParams>();
  const are_all_repo_loaded = false;
  let is_loading_more = false;
  const are_all_loaded = false;
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

  function loadMore(): void {
    if (
      issues.length > 0 &&
      repository &&
      issues.length === repository.open_issues_count
    ) {
      return;
    }
    let current_page: number;
    if (issues.length > 0) {
      current_page = issues.length / 3;
    } else {
      current_page = 1;
    }
    console.log(current_page);
    api
      .get(`repos/${params.repository}/issues?page=${current_page}&per_page=3`)
      .then((response) => {
        setIssues(issues.concat(response.data));
      });
  }

  function loadAll(): void {
    is_loading_more = true;
    api.get(`repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data);
    });
  }

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
        <DivLoader>
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={300}
            width={300}
            visible={is_loading_more}
            timeout={0}
          />
        </DivLoader>
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
      {!is_loading_more ? (
        <LoadMoreButtons>
          {!are_all_loaded && (
            <>
              <button onClick={loadMore} type="button">
                <strong>Carregar mais 3</strong>
                <FiChevronDown size={20} />
              </button>
            </>
          )}
          <button onClick={loadAll} type="button">
            <strong>Carregar todos</strong>
            <FiChevronDown size={20} />
          </button>
        </LoadMoreButtons>
      ) : (
        <DivLoader>
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={300}
            width={300}
            visible={is_loading_more}
            timeout={0}
          />
        </DivLoader>
      )}
    </>
  );
};

export default Repository;
