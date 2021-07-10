import * as types from './types'


export const setHeaderValue = (value: boolean): types.headerAction => {
    return {
        type: types.HEADER_VALUE,
        payload: value
    }
}

export const setHeaderHeight = (value: number): types.headerHeightAction => {
    return {
        type: types.HEADER_HEIGHT,
        payload: value
    }
}

export const ScrollOnOff = (value: boolean): types.scrollOnOff => {
    return {
        type: types.SCROLL_ONOFF,
        payload: value
    }
}