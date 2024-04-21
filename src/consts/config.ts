export const apiKey = '837efd0885dae195561a87e428be7fc5';

export const BASE_URL = 'https://gateway.marvel.com:443/v1/';

export const generateUrl = (path: string, offset: number) => {
  return `${BASE_URL}${path}?offset=${offset}&apikey=${apiKey}`;
};

export const GET_CHARACTERS = 'public/characters';
