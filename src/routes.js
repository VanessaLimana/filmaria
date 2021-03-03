import React from 'react';
import {BrowseRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';

const Routes = () => {
    return(
        <BrowseRouter>
            <Switch>
                <Route exact path ="/" component={Home} />
            </Switch>

        </BrowseRouter>
    );
}

export default Routes;