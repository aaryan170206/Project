import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Log from "./Login"
import Nav from"./Navbar"
import Sign from "./Signup";
import Pass from "./Password";
import Home from "./Home";
import NewPass from "./NewPass";
import NewAcc from "./NewAccount";
import Confirm from "./Confirm"
function App() {


  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>

            <Route exact path="/">
              <Log />
            </Route>

            <Route exact path="/Home">
              <Nav />
              <Home />
            </Route>

            <Route exact path="/Forgot">
              <Pass />
            </Route>

            <Route exact path="/NewAcc">
              <NewAcc />
            </Route>

            <Route exact path="/Confirm">
              <Confirm />
            </Route>

            <Route exact path="/Confirm/NewPass">
              <NewPass />
            </Route> 

            <Route exact path="/Sign">
              <Sign />
            </Route>

            <Route exact path="/Sign/Log">
              <Log />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
