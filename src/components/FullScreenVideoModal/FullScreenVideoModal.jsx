import {CloseButton, ModalContainer, VideoContainer, ModalContent, Video} from "./FullScreenVideoModalStyles";
import {useEffect} from "react";
import PropTypes from "prop-types";

const FullScreenVideoModal = ({ videoSrc, onClose }) => {
    useEffect(() => {
        // Disable body scroll when the modal is open
        document.body.style.overflow = 'hidden';
        return () => {
            // Re-enable body scroll when the modal is closed
            document.body.style.overflow = 'auto';
        };
    }, []);
    return (
        <ModalContainer>
            <ModalContent>
                <VideoContainer>
                    <Video controls autoPlay  >
                        <source src={process.env.PUBLIC_URL + `/assets/videos/${videoSrc}`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </Video>
                </VideoContainer>
                <CloseButton
                    role="button"
                    tabIndex={0}
                    aria-label={`Fermez la vidéo}`}
                    onClick={onClose}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            onClose()
                        }
                    }}
                >
                    Fermer la vidéo
                </CloseButton>
            </ModalContent>
        </ModalContainer>
    );
};

FullScreenVideoModal.propTypes = {
    videoSrc: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default FullScreenVideoModal;
