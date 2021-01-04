import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Bonus from '../pages/Bonus'
import Minimo from '../pages/Minimo'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Minimo/>
            </Route>
            <Route path='/bonus'>
                <Bonus/>
            </Route>
        </Switch>
    )
}

export default Routes
