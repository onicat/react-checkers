import produce from 'immer'

import { STAGES } from 'js/constants';

const initialState = STAGES.OFFLINE;

const stage = produce((state, action) => {

}, initialState);

export default stage;