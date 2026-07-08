import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Log from "./Login"
import Nav from"./Navbar"
import Sign from "./Signup";
import Pass from "./Password";
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

          <Route exact path="/Sign">
              <Sign />
          </Route>

          <Route exact path="/Sign/Next">
            <Pass />
          </Route> 

          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
