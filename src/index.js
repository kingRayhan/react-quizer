import React from 'react'
import ReactDOM from 'react-dom'
import './styles/app.scss'
import 'nprogress/nprogress.css'
import 'toastr/build/toastr.css'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Layout from './layout'
import Create from './pages/newquiz'
import QuizList from './pages/QuizList'

import { Provider } from 'react-redux'

import Register from './pages/Register'
import Login from './pages/Login'

import store from './store/index'
import { SET_USER } from './store/auth'
import PrivateRoute from './components/PrivateRoute'

if (localStorage.getItem('token'))
    store.dispatch({ type: SET_USER, payload: localStorage.getItem('token') })

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Layout>
                    <PrivateRoute path="/" exact component={QuizList} />
                    <PrivateRoute
                        path="/quiz/:quizid"
                        exact
                        component={QuizList}
                    />
                    <PrivateRoute path="/create" exact component={Create} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/login" exact component={Login} />
                </Layout>
            </Switch>
        </HashRouter>
    </Provider>,
    document.querySelector('#root')
)
