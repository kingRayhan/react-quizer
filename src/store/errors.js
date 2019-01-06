export const CATCH_ERROR = 'CATCH_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'

const reducer = (state = {}, { type, payload }) => {
    switch (type) {
        case CATCH_ERROR: {
            return {
                ...state,
                ...payload,
            }
        }
        case CLEAR_ERROR: {
            return {}
        }
        default:
            return state
    }
}
export default reducer

export const catchError = payload => ({ type: CATCH_ERROR, payload })
export const clearError = () => ({ type: CLEAR_ERROR })
