import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../pages/home";
import Screen from "../pages/screen";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route key="s1" exact path="/screen1" component={Screen} />
        <Route key="s2" exact path="/screen2" component={Screen} />
        <Route key="s3" exact path="/screen3" component={Screen} />
        <Route key="s4" exact path="/screen4" component={Screen} />
        <Route key="s5" exact path="/screen5" component={Screen} />
        <Route key="s6" exact path="/screen6" component={Screen} />
      </Switch>
    </Router>
  );
};

export default Routes;
