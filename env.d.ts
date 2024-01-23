/// <reference types="vite/client" />

declare var particlesJS: {
  load: (className: string, configLink: string, callback?: () => void) => void;
};

declare module 'particles.js' {
  [propName];
}
