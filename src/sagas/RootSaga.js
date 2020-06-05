import { all } from 'redux-saga/effects';
import appSaga from '../features/app/sagas/AppSaga';

function* rootSaga() {
  yield all([appSaga()])
}

export default rootSaga;