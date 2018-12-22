import React from 'react'
import ReactDOM from 'react-dom'
import './styles/app.scss'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './layout'
import Create from './pages/newquiz'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Layout>
                <Route path="/" exact component={() => <h1>Home</h1>} />
                <Route path="/create" exact component={Create} />
            </Layout>
        </Switch>
    </BrowserRouter>,
    document.querySelector('#root')
)
