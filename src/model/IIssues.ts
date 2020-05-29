/* eslint-disable camelcase */
export default interface IIssues {
  title: string;
  id: number;
  html_url: string;
  user: {
    login: string;
  };
}
