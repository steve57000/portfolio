import React, { useEffect, useCallback } from 'react';
import { ModalContent, Modal, Button, ContainerButtonHandleLink } from './FullPageModalStyle.js';

const FullPageModal = ({ open, onClose, onLinkClick }) => {
    // Gérer la fermeture de la modal avec la touche Échap
    const handleKeyDown = useCallback((event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (open) {
            // Ajouter la classe no-scroll au body
            document.body.classList.add('no-scroll');
            window.addEventListener('keydown', handleKeyDown);
        } else {
            // Retirer la classe no-scroll du body
            document.body.classList.remove('no-scroll');
            window.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            // Nettoyer l'écouteur d'événements et retirer la classe si la modal est fermée
            document.body.classList.remove('no-scroll');
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [open, handleKeyDown]);

    if (!open) return null; // Ne rien afficher si la modal est fermée

    return (
        <Modal>
            <ModalContent>
                <p>Comment voulez-vous ouvrir le lien?</p>
                <ContainerButtonHandleLink>
                    <Button onClick={() => onLinkClick(true)}>Dans un nouvel onglet</Button>
                    <Button onClick={() => onLinkClick(false)}>Dans la page actuelle</Button>
                </ContainerButtonHandleLink>
                <Button onClick={onClose}>Annuler</Button>
            </ModalContent>
        </Modal>
    );
};

export default FullPageModal;
