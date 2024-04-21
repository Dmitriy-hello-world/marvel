import { useEffect } from 'react';

import { useAppDispatch } from '../../app/store';
import { useSelector } from 'react-redux';
import { Character } from '../../types/charactersTypes';
import { Status } from '../../types/reduxPropsTypes';
import { loadCharacters } from './charactersSlice';
import {
  selectAllCharacters,
  selectCharactersInfo,
} from './charactersSelectors';
import { selectCurrentPage } from '../controls/controlsSelectors';

export const useCharacters = (): [
  Character[] | undefined,
  {
    status: Status;
    error: string | null;
    total: number | undefined;
    page: number;
  },
] => {
  const dispatch = useAppDispatch();
  const characters = useSelector(selectAllCharacters);

  const { status, error, total } = useSelector(selectCharactersInfo);
  const { page } = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(loadCharacters((page - 1) * 20));
  }, [total, dispatch, page]);

  return [characters, { status, error, total, page }];
};
