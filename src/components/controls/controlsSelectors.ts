import { RootState } from '../../app/store';

export const selectCurrentPage = (state: RootState) => ({
  page: state.controls.page,
});
