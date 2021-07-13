export const HEADER_VALUE = 'HEADER_VALUE'
export const HEADER_HEIGHT = 'HEADER_HEIGHT'
export const SCROLL_ONOFF='SCROLL_ONOFF'
export const NAVIGATION='NAVIGATION'
export type headerAction = { type: typeof HEADER_VALUE, payload: boolean }
export type headerHeightAction = { type: typeof HEADER_HEIGHT, payload: number }
export type scrollOnOff = { type: typeof SCROLL_ONOFF, payload: boolean }
export type navigation = { type: typeof NAVIGATION, payload: {} }

