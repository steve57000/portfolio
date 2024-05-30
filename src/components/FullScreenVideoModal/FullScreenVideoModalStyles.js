import styled from 'styled-components';
import { configTheme } from '../../utils/theme/configTheme';

const { modal, video } = configTheme
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${modal.containerBackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: ${modal.contentBackgroundColor};
  border-radius: ${modal.contentBorderRadius};
  padding: ${modal.contentPadding};
  box-shadow: ${modal.contentBoxShadow};
  text-align: center;
`;

export const VideoContainer = styled.div`
  max-width: ${video.containerMaxWidth};
  max-height: ${video.containerMaxHeight};
  overflow: hidden;
`;

export const Video = styled.video`
  max-width: ${video.containerMaxWidth};
  max-height: ${video.containerMaxHeight};
`;

export const CloseButton = styled.button`
    margin-top: ${video.closeButton.marginTop};
    padding: ${video.closeButton.padding};
    background-color: ${video.closeButton.backgroundColor};
    color: ${video.closeButton.color};
    border: ${video.closeButton.border};
    border-radius: ${video.closeButton.borderRadius};
    cursor: ${video.closeButton.cursor};
    font-size: ${video.closeButton.fontSize};
`;
