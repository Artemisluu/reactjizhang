import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Tags from './icons/Views/Tags';
import Money from './icons/Views/Money';
import Statistics from './icons/Views/Statistics';
import NoMatch from './icons/Views/Nomatch';




function App() {
    return (
        <Router>
                    <Switch>
                        <Route path="/tags">
                            <Tags/>
                        </Route>
                        <Route path="/money">
                            <Money/>
                        </Route>
                        <Route path="/statistics">
                            <Statistics/>
                        </Route>
                        <Redirect exact from="/" to="/money"/>
                        <Route path="*">
                            <NoMatch/>
                        </Route>
                    </Switch>
        </Router>
    );
}

export default App;
