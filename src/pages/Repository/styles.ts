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

export const RepositoryInfo = styled.section``;
