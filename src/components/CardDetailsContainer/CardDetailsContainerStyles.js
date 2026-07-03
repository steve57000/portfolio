import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`body { overflow: hidden; }`;
export const CardDetailsStyles = styled.aside`
  position: fixed; inset: 50% auto auto 50%; transform: translate(-50%, -50%); z-index: 1000;
  width: min(940px, calc(100% - 28px)); max-height: 88vh; overflow: auto;
  background: #fffaf0; border: 1px solid #d8d1c5; border-radius: 28px; padding: 28px; box-shadow: 0 30px 100px rgba(0,0,0,.28);
  h2 { margin: 0 0 8px; font-size: clamp(1.8rem, 4vw, 3rem); color: #11191d; letter-spacing: -.04em; }
`;
export const ModalBackdrop = styled.div`position: fixed; inset: 0; background: rgba(17,25,29,.72); z-index: 999;`;
export const DetailMeta = styled.p`color: #b66b33; font-weight: 900; text-transform: uppercase; letter-spacing: .08em;`;
export const ContainerDescription = styled.div`p { color: #4d5a61; line-height: 1.7; font-size: 1.03rem; }`;
export const DetailHero = styled.figure`margin: 20px 0; border-radius: 24px; overflow: hidden; border: 1px solid #d8d1c5; background: #f3efe7;`;
export const DetailImage = styled.img`width: 100%; max-height: 360px; object-fit: cover; display: block;`;
export const DetailGrid = styled.div`display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px; margin: 18px 0;`;
export const DetailBlock = styled.div`background:#f3efe7; border-radius:18px; padding:16px; strong{display:block;color:#11191d;margin-bottom:8px;} p{margin:0;color:#536168;line-height:1.6;}`;
export const ListBlock = styled(DetailBlock)`ul{margin:0;padding-left:18px;color:#536168;line-height:1.6;} li + li{margin-top:6px;}`;
export const TagWrap = styled.div`display:flex;flex-wrap:wrap;gap:8px;margin:18px 0;`;
export const Tag = styled.span`border:1px solid #cdd3d4;border-radius:999px;padding:7px 10px;color:#243238;background:#fff;`;
export const ButtonRow = styled.div`display:flex;flex-wrap:wrap;gap:10px;margin-top:22px;`;
export const ButtonStyles = styled.button`border:1px solid #11191d;background:#11191d;color:#fffaf0;border-radius:999px;padding:11px 15px;font-weight:800;cursor:pointer;`;
export const LinkButton = styled.a`border:1px solid #bac5c7;background:#fff;color:#11191d;border-radius:999px;padding:11px 15px;font-weight:800;text-decoration:none;`;
