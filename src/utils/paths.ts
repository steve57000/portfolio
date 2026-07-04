export const basePath = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export function withBase(path = ''): string {
  if (path.startsWith('#')) {
    return `${basePath}${path}`;
  }

  return `${basePath}${path.replace(/^\/+/, '')}`;
}
