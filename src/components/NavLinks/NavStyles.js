import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    color: #243238;
    text-decoration: none;
    font-weight: 800;
    border: 1px solid #d8d1c5;
    border-radius: 999px;
    padding: 10px 14px;
    background: rgba(255,250,240,.74);
    line-height: 1.1;
  }

  a:hover,
  a.active {
    border-color: #2d7f82;
    color: #11191d;
  }

  a:focus-visible {
    outline: 3px solid #2d7f82;
    outline-offset: 3px;
  }

  @media(max-width: 520px) {
    ul {
      gap: 8px;
    }

    a {
      padding: 10px 12px;
      font-size: .95rem;
    }
  }
`;
