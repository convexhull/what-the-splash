import {
    take,
    fork,
    select,
    call,
    put,
    all,
    takeEvery,
} from 'redux-saga/effects';

import { IMAGES } from '../constants';

export default function* watchStatsRequest() {
    while (true) {
        const DATA = yield take(IMAGES.LOAD);
        debugger;
    }
}
