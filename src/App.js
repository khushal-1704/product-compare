import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./components/layout/Main";
import CompareProducts from "./pages/CompareProducts";

import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Main>
          <Route exact path="/" component={Home} />
          <Route exact path="/product-compare" component={CompareProducts} />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
