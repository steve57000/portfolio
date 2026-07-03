import styled from 'styled-components';

export const Nav = styled.nav`
  ul { display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px; list-style:none; margin:0; padding:0; }
  a { display:block; color:#243238; text-decoration:none; font-weight:800; border:1px solid #d8d1c5; border-radius:999px; padding:10px 13px; background:rgba(255,250,240,.74); }
  a:hover, a.active { border-color:#2d7f82; color:#11191d; }
`;
