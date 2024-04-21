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
import { selectControlInfo } from '../controls/controlsSelectors';

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
  const { page, search } = useSelector(selectControlInfo);

  useEffect(() => {
    if (search.current.length > 0) {
      if (search.current === search.previous) {
        dispatch(
          loadCharacters({
            page: (page - 1) * 20,
            search: { previous: search.previous, current: search.current },
          })
        );
      } else {
        dispatch(
          loadCharacters({
            page: (page - 1) * 20,
            search: { previous: search.previous, current: search.current },
          })
        );
      }
    } else {
      dispatch(
        loadCharacters({
          page: (page - 1) * 20,
          search: { previous: search.previous, current: search.current },
        })
      );
    }
  }, [total, dispatch, page, search]);

  return [characters, { status, error, total, page }];
};
