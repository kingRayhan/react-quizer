import Axios from 'axios'

import { loadingStart, loadingStop } from './meta'
import { catchError } from './errors'

export const AUTH_REGISTER = 'AUTH_REGISTER'
export const AUTH_LOGIN = 'AUTH_LOGIN'

const reducer = (
    state = { isLoggedin: false, user: null },
    { type, payload }
) => {
    switch (type) {
        case AUTH_REGISTER: {
            return {
                ...state,
            }
        }
    }
}

export default reducer

// export const auth_register = user => dispatch => {
//     dispatch(loadingStart())
//     Axios.post(
//         'https://quiz-app-api-demo.herokuapp.com/api/user/register',
//         user
//     )
//         .then(res => {
//             dispatch(loadingStop())
//         })
//         .catch(e => {
//             dispatch(loadingStop())
//             dispatch(catchError(e.response.data))
//         })
// }
