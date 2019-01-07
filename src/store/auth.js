import Axios from 'axios'
import jwtDecode from 'jwt-decode'
import nprogress from 'nprogress/nprogress'
import { loadingStart, loadingStop, SUCCESS_STATE, flashMsg } from './meta'
import { catchError, clearError } from './errors'

export const SET_USER = 'SET_USER'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'
const init = {
    isAuthenticated: false,
    user: null,
}
const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case SET_USER: {
            return {
                // payload ->> access_token
                isAuthenticated: Object.keys(payload).length ? true : false,
                user: payload,
            }
        }
        case AUTH_LOGOUT: {
            return payload
        }

        default:
            return state
    }
}
export default reducer

export const auth_register = (user, clearState) => dispatch => {
    dispatch(loadingStart())
    dispatch(clearError())

    nprogress.start()

    Axios.post(
        `https://quiz-app-api-demo.herokuapp.com/api/user/register`,
        user
    )
        .then(res => {
            nprogress.done()
            flashMsg(res.data.message, 'success')
            dispatch(clearError())
            dispatch(loadingStop())
            clearState() // clear my state after register
        })
        .catch(({ response: { data: errors } }) => {
            nprogress.done()
            dispatch(catchError(errors))
            dispatch(loadingStop())

            errors.message && flashMsg(errors.message, 'error')
        })
}

export const auth_login = (credential, history) => dispatch => {
    dispatch(loadingStart())
    dispatch(clearError())

    nprogress.start()
    Axios.post(
        `https://quiz-app-api-demo.herokuapp.com/api/user/login`,
        credential
    )
        .then(({ data }) => {
            nprogress.done()
            dispatch(clearError())
            dispatch(loadingStop())
            dispatch({ type: SET_USER, payload: jwtDecode(data.token) })
            history.push('/')

            localStorage.setItem('token', data.token)
            data.message && flashMsg(data.message, 'success')
        })
        .catch(({ response: { data: errors } }) => {
            dispatch(catchError(errors))
            dispatch(loadingStop())
            nprogress.done()
            errors.message && flashMsg(errors.message, 'error')
        })
}

export const auth_logout = () => dispatch => {
    localStorage.removeItem('token')
    dispatch({ type: AUTH_LOGOUT, payload: init })
}
