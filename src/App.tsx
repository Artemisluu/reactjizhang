import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Tags from './Views/Tags';
import Money from './Views/Money';
import Statistics from './Views/Statistics';
import NoMatch from './Views/Nomatch';
import {useTags} from './useTags';
import {TagContext} from './context'
import {TagEdit} from './Views/TagEdit'

function App() {
    const {tags, setTags} = useTags();
    return (
        <TagContext.Provider value={{tags,setTags}}>
            <Router>
                <Switch>
                    <Route exact path="/tags">
                        <Tags/>
                    </Route>
                    <Route exact path="/tags/:id">
                        <TagEdit/>
                    </Route>
                    <Route exact path="/money">
                        <Money/>
                    </Route>
                    <Route exact path="/statistics">
                        <Statistics/>
                    </Route>
                    <Redirect exact from="/" to="/money"/>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
            </Router>
        </TagContext.Provider>
    );
}

export default App;
