import { put, call, take, takeEvery, select } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImages } from '../api';
import { setImages, setError } from '../actions';
const getPage = state => state.nextPage;

function* handleImagesLoad() {
    const page = yield select(getPage);
    try {
        const data = yield call(fetchImages, page);
        yield put(setImages(data));
    } catch (error) {
        yield put(setError(error.toString()));
        debugger;
    }
    console.log('page', page);
}

function* watchImagesLoad() {
    while (true) {
        yield take(IMAGES.LOAD);
        yield call(handleImagesLoad);
    }
    // yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default watchImagesLoad;
