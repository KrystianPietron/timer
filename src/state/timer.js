const CHANGE_MIN_VALUE = 'timer/CHANGE_MIN_VALUE'
const CHANGE_SEC_VALUE = 'timer/CHANGE_SEC_VALUE'
const CHANGE_MSEC_VALUE = 'timer/CHANGE_MSEC_VALUE'
const RESET_TIMER = 'timer/RESET_TIMER'
const STOP_TIMER = 'timer/STOP_TIMER'
const START_TIMER = 'timer/START_TIMER'

const INITIAL_STATE = {
    min: 0,
    sec: 0,
    msec: 0,
}

let interval = null

export const startTimer = () => (dispatch, getState) => {
    let { timer: { min, sec, msec } } = getState()
    if (min !== 0 || sec !== 0 || msec !== 0) {
        interval = setInterval(() => {
            if (msec !== 0) {
                msec--
                dispatch(startTimerAction(min, sec, msec))
            } else if (sec !== 0) {
                msec = 100
                sec--
                dispatch(startTimerAction(min, sec, msec))
            } else if (min !== 0) {
                sec = 60
                min--
            } else { clearInterval(interval) }
        }, 10)
    }
}

export const stopTimer = () => (dispatch, getState) => {
    clearInterval(interval)
    dispatch(stopTimerAction())
}

const stopTimerAction = () => ({
    type: STOP_TIMER
})

const startTimerAction = (min, sec, msec) => ({
    type: START_TIMER,
    min,
    sec,
    msec
})

export const changeMinValueAction = value => ({
    type: CHANGE_MIN_VALUE,
    value
})

export const changeSecValueAction = value => ({
    type: CHANGE_SEC_VALUE,
    value
})

export const changeMsecValueAction = value => ({
    type: CHANGE_MSEC_VALUE,
    value
})

export const resetTimer = () => ({
    type: RESET_TIMER
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_MIN_VALUE:
            return {
                ...state,
                min: Math.max(action.value, 0)
            }
        case CHANGE_SEC_VALUE:
            return {
                ...state,
                sec: Math.max(action.value, 0) && Math.min(action.value, 60)
            }
        case CHANGE_MSEC_VALUE:
            return {
                ...state,
                msec: Math.max(action.value, 0) && Math.min(action.value, 100)
            }
        case START_TIMER:
            return {
                ...state,
                min: action.min,
                sec: action.sec,
                msec: action.msec
            }
        case STOP_TIMER:
            return {
                ...state
            }
        case RESET_TIMER:
            return {
                ...state,
                min: 0,
                sec: 0,
                msec: 0,
            }
        default:
            return state
    }
}