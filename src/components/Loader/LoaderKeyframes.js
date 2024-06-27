// Animation pour le loader
import {keyframes} from "styled-components";

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Animation pour les points de suspension
export const dots = keyframes`
  0%, 20% {
    color: rgba(0, 0, 0, 0);
    text-shadow:
      .25em 0 0 rgba(0, 0, 0, 0),
      .5em 0 0 rgba(0, 0, 0, 0);
  }
  40% {
    color: #ffc300;
    text-shadow:
      .25em 0 0 rgba(0, 0, 0, 0),
      .5em 0 0 rgba(0, 0, 0, 0);
  }
  60% {
    text-shadow:
      .25em 0 0 #c70039,
      .5em 0 0 rgba(0, 0, 0, 0);
  }
  80%, 100% {
    text-shadow:
      .25em 0 0 #c70039,
      .5em 0 0 #c70039;
  }
`;

// Animation pour changer les couleurs des lettres
export const colorChange = keyframes`
  0% {
    color: #571845;
  }
  25% {
    color: #900c3e;
  }
  50% {
    color: #c70039;
  }
  75% {
    color: #ff7e5f;
  }
  100% {
    color: #571845;
  }
`;