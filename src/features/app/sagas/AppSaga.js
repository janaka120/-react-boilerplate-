// @flow
import {takeEvery, put} from 'redux-saga/effects';

import {AppConstant} from '../AppConstant';
import {saveUserDetailsSuccess, saveUserDetailsFail} from '../actions/AppAction';

function* saveUserDetailsSaga({payload}) {
	try {
		const {fullName} = payload;
		yield put(saveUserDetailsSuccess({fullName: `${fullName} ...`}));
	} catch (error) {
		yield put(saveUserDetailsFail());
	}
}

// watcher
function* appSaga() {
	yield takeEvery(AppConstant.SAVE_USER_DETAILS_REQUEST, saveUserDetailsSaga);
}

export default appSaga;
