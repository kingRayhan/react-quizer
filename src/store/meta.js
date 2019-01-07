import toastr from 'toastr'

export const LOADING_START = 'LOADING_START'
export const LOADING_STOP = 'LOADING_STOP'

export const CATCH_MSG = 'CATCH_MSG'
export const CLEAR_MSG = 'CLEAR_MSG'

export const SUCCESS_STATE = 'SUCCESS_STATE'

// Initial state
const init = {
    loading: false,
    success: false,
}

// Meta Reducer
const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case LOADING_START: {
            return {
                ...state,
                loading: true,
            }
        }
        case LOADING_STOP: {
            return {
                ...state,
                loading: false,
            }
        }
        case CATCH_MSG: {
            const msg = payload
            return { ...state, msg }
        }
        case CLEAR_MSG: {
            const state = { ...state }
            delete state.msg
            return { ...state }
        }

        case SUCCESS_STATE: {
            return {
                ...state,
                success: payload,
            }
        }

        default:
            return state
    }
}
export default reducer

export const loadingStart = () => ({ type: LOADING_START })
export const loadingStop = () => ({ type: LOADING_STOP })
export const catchMsg = payload => ({ type: CATCH_MSG, payload })
export const clearhMsg = () => ({ type: CLEAR_MSG })

export const flashMsg = (msg, type = 'success') => msg && toastr[type](msg)
