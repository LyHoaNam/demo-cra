
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import Top from "pages/top";
import Example from "pages/example";
function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <Top />
                </div>
              );
            }}
          />
          <Route
            exact
            path="/example"
            render={() => {
              return (
                <>
                  <Example />
                </>
              );
            }}
          />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
