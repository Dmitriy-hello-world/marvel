import { Axios } from 'axios';
import * as API from '../consts/config';

export type Status = 'idle' | 'received' | 'rejected' | 'loading';

export interface Extra {
  client: Axios;
  api: typeof API;
}
