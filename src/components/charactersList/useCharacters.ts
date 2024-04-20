import { useEffect } from 'react';

import { useAppDispatch } from '../../app/store';
import { useSelector } from 'react-redux';
import { Character } from '../../types/charactersTypes';
import { Status } from '../../types/reduxPropsTypes';
import { loadCharacters } from './charactersSlice';
import {
  selectAllCountries,
  selectCharactersInfo,
} from './charactersSelectors';

export const useCharacters = (): [
  Character | undefined,
  {
    status: Status;
    error: string | null;
    total: number | undefined;
    count: number | undefined;
  },
] => {
  const dispatch = useAppDispatch();
  const characters = useSelector(selectAllCountries);

  const { status, error, total, count } = useSelector(selectCharactersInfo);

  useEffect(() => {
    if (!total) {
      dispatch(loadCharacters());
    }
  }, [total, dispatch]);

  return [characters, { status, error, total, count }];
};
