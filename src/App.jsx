import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Log from "./Login"
import Nav from"./Navbar"
import Sign from "./Signup";
import Pass from "./Password";
import Home from "./Home";
import NewPass from "./NewPass";
import NewAcc from "./NewAccount";
import Confirm from "./Confirm"
import Services from "./Services";
import Health from "./Ai_Health";
import Finance from "./Ai_Finance";
import Cyber from "./Ai_Cyber";
import Defence from "./Ai_Defence";
import Transport from "./Ai_Transport";
import Ecom from "./Ai_Ecom";
import Agriculture from "./Ai_Agri";
import Education from "./Ai_Edu";
import About from "./About";
import Learn from "./Learn";
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
              <Home />
            </Route>

            <Route exact path="/Learn">
              <Learn />
            </Route>

            <Route exact path="/Services">
              <Nav />
              <Services />
            </Route>

            {/*Service Contents*/}
            <Route exact path="/Health">
              <Health />
            </Route>

            <Route exact path="/Finance">
              <Finance />
            </Route>

            <Route exact path="/Security">
              <Cyber />
            </Route>
            
            <Route exact path="/Defence">
              <Defence />
            </Route>

            <Route exact path="/Transport">
              <Transport />
            </Route>

            <Route exact path="/Ecom">
              <Ecom />
            </Route>

            <Route exact path="/Agriculture">
              <Agriculture />
            </Route>

             <Route exact path="/Education">
              <Education />
            </Route>

            {/*Service End*/}

            <Route exact path="/About">
              <About />
            </Route>

            <Route exact path="/Contact">
              <Nav />
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
