import React from 'react'
import ReactDOM from 'react-dom'
import './styles/app.scss'

import { HashRouter, Switch, Route } from 'react-router-dom'
import Layout from './layout'
import Create from './pages/newquiz'
import QuizList from './pages/QuizList'

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Layout>
                <Route path="/" exact component={QuizList} />
                <Route path="/create" exact component={Create} />
            </Layout>
        </Switch>
    </HashRouter>,
    document.querySelector('#root')
)
