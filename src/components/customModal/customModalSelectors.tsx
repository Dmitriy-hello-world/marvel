import { RootState } from '../../app/store';

export const selectModalInfo = (state: RootState) => ({
  open: state.modal.open,
  character: state.modal.currentCharacter,
});
