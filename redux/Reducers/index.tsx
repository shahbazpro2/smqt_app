import * as types from '../Actions/types'
export interface headerTypes {
    header: boolean,
    headerHeight: number,
    scrollOnOff:boolean
}
const initialHeaderState = {
    header: true,
    headerHeight: 0,
    scrollOnOff: true
}

export const headerReducer = (state: headerTypes = initialHeaderState, action: types.headerAction | types.headerHeightAction | types.scrollOnOff) => {
    switch (action.type) {
        case types.HEADER_VALUE:
            return { ...state, header: action.payload }
        case types.HEADER_HEIGHT:
            return { ...state, headerHeight: action.payload }
        case types.SCROLL_ONOFF:
            return { ...state, scrollOnOff: action.payload }
        default:
            return state;
    }
}



