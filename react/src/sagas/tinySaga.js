import { takeEvery,put } from "redux-saga/effects";
import * as types from '../constants'
import * as actions from '../actions'
import * as Api from '../fetchAPIs/callAPI'

function* getTiny(action) {
    try {
        const res = yield Api.getApi(action.payload)
        yield put (actions.getSuccess({
            listData: res.listData
        }))
    } catch (error) {
        yield put (actions.getFailure({
            errorMessage: error.message
        }))
    }
}
function* createTiny(action) {
    try {
        yield Api.createApi(action.payload)
        yield put(actions.createSuccess())
        yield put(actions.getRequest())
    } catch (error) {
        yield put (actions.createFailure({
            errorMessage: error.message
        }))
    }
}
function* updateTiny(action) {
    try {
        yield Api.updateApi(action.payload)
        yield put(actions.updateSuccess())
        yield put(actions.getRequest())
    } catch (error) {
        yield put (actions.updateFailure({
            errorMessage: error.message
        }))
    }
}
function* deleteTiny(action) {
    try {
        yield Api.deleteApi(action.payload)
        yield put(actions.deleteSuccess())
        yield put(actions.getRequest())
    } catch (error) {
        yield put (actions.deleteFailure({
            errorMessage: error.message
        }))
    }
}

export const tinySaga =[
    takeEvery(types.GET_TINY_REQUEST,getTiny),
    takeEvery(types.CREATE_TINY_REQUEST,createTiny),
    takeEvery(types.DELETE_TINY_REQUEST,deleteTiny),
    takeEvery(types.UPDATE_TINY_REQUEST,updateTiny)
]