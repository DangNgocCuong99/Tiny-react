import { all } from 'redux-saga/effects';
import {tinySaga} from './tinySaga'
export default function* rootSaga() {
  yield all([
    ...tinySaga
  ]);
}