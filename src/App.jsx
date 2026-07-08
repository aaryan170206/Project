import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Log from "./Login"
import Nav from"./Navbar"
function App() {


  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <Switch>

            <Route exact path="/">
              <Log />
            </Route>

            

          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
