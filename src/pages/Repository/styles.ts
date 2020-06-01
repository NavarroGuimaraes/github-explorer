import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.25s;

    &:hover {
      color: ${shade(0.5, '#a8a8b3')};
    }
    svg {
      margin-right: 4px;
    }
  }
`;

export const LoadMoreButtons = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  height: 60px;

  button {
    border-color: #3d3d4d;
    background-color: #fff;
    text-decoration: none;
    display: inline-block;
    border: 0;
    border-radius: 10px;
    text-align: center;
    height: 100%;
    flex: 1;
    width: 100%;
    margin-right: 25px;
    transition: transform 0.5s;
    svg {
      margin-top: 5px;
      display: block;
      margin-left: 50%;
    }

    & + button {
      margin-right: 0px;
      margin-left: 25px;
    }

    &:hover {
      transform: translateY(5px);
    }
  }
`;

export const NoMoreIssues = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: 20px;
  strong {
    color: #3d3d4d;
    font-size: 20px;
  }
`;

export const DivLoader = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const Issues = styled.div`
  margin-top: 60px;
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.3s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin: 0 16px;
      flex: 1px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;
  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 20px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        font-size: 24px;
        color: #6c6c80;
      }

      & + li {
        margin-left: 80px;
      }
    }
  }
`;
