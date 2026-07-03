import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: sticky; top: 0; z-index: 50; backdrop-filter: blur(14px);
  background: rgba(243,239,231,.86); border-bottom: 1px solid #d8d1c5;
`;
export const HeaderSize = styled.div`
  width:min(1180px, calc(100% - 32px)); margin:0 auto; min-height:76px; display:flex; align-items:center; justify-content:space-between; gap:18px;
  @media(max-width:720px){ flex-direction:column; padding:12px 0; }
`;
export const Logo = styled.img`width:150px; height:auto; display:block;`;
