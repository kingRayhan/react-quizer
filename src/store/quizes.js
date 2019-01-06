/**
 * Action Types
 */

export const LOAD_QUIZES = 'LOAD_QUIZES'
export const SAVE_QUIZ = 'SAVE_QUIZ'
export const DETELE_QUIZ = 'DETELE_QUIZ'
export const MODIFY_QUIZ = 'MODIFY_QUIZ'

/**
 * Reducer
 */

const reducer = (state = [], { type, payload }) => {
    switch (type) {
        case LOAD_QUIZES: {
            return payload
        }
        case SAVE_QUIZ: {
            return [payload, ...state]
        }
        case DETELE_QUIZ: {
            return payload
        }
        default:
            return state
    }
}
export default reducer

/**
 * Action creators
 */

// export const loadQuizes = dispatch => {
//     Axios.get(`///`).then(({ data: payload }) =>
//         dispatch({ type: LOAD_QUIZES, payload })
//     )
//     // .ca
// }
