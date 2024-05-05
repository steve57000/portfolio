import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

export const VideoContainer = styled.div`
    max-width: 100%;
    max-height: 80vh;
    overflow: hidden;
`;

export const Video = styled.video`
    max-width: 100%;
    max-height: 80vh;
`;

export const CloseButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #ff7e5f;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
`;