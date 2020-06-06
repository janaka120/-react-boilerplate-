import {takeEvery, put, call} from 'redux-saga/effects';
import Api from "../../../services/API";

import {AppConstant} from '../AppConstant';
import {saveUserDetailsSuccess, saveUserDetailsFail} from '../actions/AppAction';

function* saveUserDetailsSaga({payload}) {
	try {
		const {fullName} = payload;
		// sample get request
		const res = yield call(() => Api.get("/api/users?page=2"));
		// sample post request
		const createRes = yield call(() => Api.post("/api/users", {
			"name": "morpheus",
			"job": "leader"
		}));
		yield put(saveUserDetailsSuccess({fullName: `${fullName} ...`}));
	} catch (error) {
		console.log('error >>>', error);
		yield put(saveUserDetailsFail());
	}
}

// watcher
function* appSaga() {
	yield takeEvery(AppConstant.SAVE_USER_DETAILS_REQUEST, saveUserDetailsSaga);
}

export default appSaga;
