import * as types from '../constants'

export function getRequest(payload) {
    return {
        type: types.GET_TINY_REQUEST,
        payload
    }
}

export function getSuccess(payload) {
    return {
        type: types.GET_TINY_SUCCESS,
        payload
    }
}

export function getFailure(payload) {
    return {
        type: types.GET_TINY_FAILURE,
        payload
    }
}

export function createRequest(payload) {
    return {
        type:types.CREATE_TINY_REQUEST,
        payload
    }
}

export function createSuccess(payload) {
    return {
        type:types.CREATE_TINY_SUCCESS,
        payload
    }
}

export function createFailure(payload) {
    return {
        type:types.CREATE_TINY_FAILURE,
        payload
    }
}

export function updateRequest(payload) {
    return {
        type:types.UPDATE_TINY_REQUEST,
        payload
    }
}

export function updateSuccess(payload) {
    return {
        type:types.UPDATE_TINY_SUCCESS,
        payload
    }
}

export function updateFailure(payload) {
    return {
        type:types.UPDATE_TINY_FAILURE,
        payload
    }
}

export function deleteRequest(payload) {
    return {
        type:types.DELETE_TINY_REQUEST,
        payload
    }
}

export function deleteSuccess(payload) {
    return {
        type:types.DELETE_TINY_SUCCESS,
        payload
    }
}

export function deleteFailure(payload) {
    return {
        type:types.DELETE_TINY_FAILURE,
        payload
    }
}