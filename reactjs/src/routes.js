
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MonkChat from './pages/monkchat'
import Longin from './pages/login'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Longin} />
                <Route path="/chat" exact={true} component={MonkChat} />
            </Switch>
        </BrowserRouter>
    )
}
