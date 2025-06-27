// Centraliza a URL base da API para facilitar deploy/local


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const win = window as any;
export const API_URL =
  import.meta.env.VITE_API_URL ||
  win.API_URL ||
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:4000'
    : '');

export async function apiFetch(path: string, options?: RequestInit) {
  const res = await fetch(`${API_URL}${path}`, options);
  return res;
}
