import React from 'react'
import ReactDOM from 'react-dom'
import './styles/app.scss'
import 'toastr/build/toastr.css'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Layout from './layout'
import Create from './pages/newquiz'
import QuizList from './pages/QuizList'

import { Provider } from 'react-redux'

import Register from './pages/Register'

import store from './store/index'

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Layout>
                    <Route path="/" exact component={QuizList} />
                    <Route path="/quiz/:quizid" exact component={QuizList} />
                    <Route path="/create" exact component={Create} />
                    <Route path="/register" exact component={Register} />
                </Layout>
            </Switch>
        </HashRouter>
    </Provider>,
    document.querySelector('#root')
)
