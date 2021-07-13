import * as types from '../Actions/types'
export interface headerTypes {
    header: boolean,
    headerHeight: number,
    scrollOnOff: boolean,
    navigation: {}
}
const initialHeaderState = {
    header: true,
    headerHeight: 0,
    scrollOnOff: true,
    navigation: {}
}

export const headerReducer = (state: headerTypes = initialHeaderState, action: types.headerAction | types.headerHeightAction | types.scrollOnOff | types.navigation) => {
    switch (action.type) {
        case types.HEADER_VALUE:
            return { ...state, header: action.payload }
        case types.HEADER_HEIGHT:
            return { ...state, headerHeight: action.payload }
        case types.SCROLL_ONOFF:
            return { ...state, scrollOnOff: action.payload }
        case types.NAVIGATION:
            return { ...state, navigation: action.payload }
        default:
            return state;
    }
}



