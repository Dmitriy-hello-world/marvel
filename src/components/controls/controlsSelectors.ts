import { RootState } from '../../app/store';

export const selectControlInfo = (state: RootState) => ({
  page: state.controls.page,
  search: state.controls.search,
});
