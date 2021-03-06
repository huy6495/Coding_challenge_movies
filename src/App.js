import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import DetailPage from "./Pages/Detail/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/detail/:id" exact component={DetailPage} />

        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
